// Dev-only visual inspection harness. Not part of the site.
import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';

const OUT = process.env.OUT || 'shots';
mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--no-sandbox', '--force-color-profile=srgb', '--font-render-hinting=none'],
});

const viewports = [
  { name: 'desktop', width: 1512, height: 950 },
  { name: 'laptop', width: 1280, height: 800 },
  { name: 'tablet', width: 834, height: 1000 },
  { name: 'mobile', width: 390, height: 844 },
];

const problems = [];

for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });

  page.on('console', (m) => {
    if (m.type() === 'error' || m.type() === 'warning')
      problems.push(`[${vp.name}] console.${m.type()}: ${m.text()}`);
  });
  page.on('pageerror', (e) => problems.push(`[${vp.name}] pageerror: ${e.message}`));
  page.on('requestfailed', (r) =>
    problems.push(`[${vp.name}] failed: ${r.url()} ${r.failure()?.errorText}`),
  );

  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 45000 });
  await new Promise((r) => setTimeout(r, 1400));

  await page.screenshot({ path: `${OUT}/${vp.name}-hero.png` });

  // Scroll through the page so every IntersectionObserver reveal fires.
  const height = await page.evaluate(() => document.body.scrollHeight);
  const step = Math.round(vp.height * 0.8);
  for (let y = 0; y < height; y += step) {
    await page.evaluate((v) => window.scrollTo(0, v), y);
    await new Promise((r) => setTimeout(r, 260));
  }
  await new Promise((r) => setTimeout(r, 900));

  // Horizontal overflow check — the page body must never scroll sideways.
  const overflow = await page.evaluate(() => ({
    scrollW: document.documentElement.scrollWidth,
    clientW: document.documentElement.clientWidth,
    offenders: [...document.querySelectorAll('*')]
      .filter((el) => el.getBoundingClientRect().right > document.documentElement.clientWidth + 2)
      .slice(0, 6)
      .map((el) => `${el.tagName}.${el.className?.toString?.().slice(0, 40)}`),
  }));
  if (overflow.scrollW > overflow.clientW + 1)
    problems.push(
      `[${vp.name}] H-OVERFLOW ${overflow.scrollW} > ${overflow.clientW} :: ${overflow.offenders.join(' | ')}`,
    );

  await page.screenshot({ path: `${OUT}/${vp.name}-full.png`, fullPage: true });

  // Section-by-section captures at the two key widths.
  if (vp.name === 'desktop' || vp.name === 'mobile') {
    for (const id of ['work', 'about', 'experience', 'toolkit', 'contact']) {
      await page.evaluate((sel) => {
        document.getElementById(sel)?.scrollIntoView({ behavior: 'instant', block: 'start' });
        window.scrollBy(0, -70);
      }, id);
      await new Promise((r) => setTimeout(r, 700));
      await page.screenshot({ path: `${OUT}/${vp.name}-${id}.png` });
    }
  }

  await page.close();
}

// Case study overlay + mobile drawer
{
  const page = await browser.newPage();
  await page.setViewport({ width: 1512, height: 950 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 1200));
  await page.evaluate(() => document.getElementById('work')?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 600));
  await page.evaluate(() => {
    const btns = [...document.querySelectorAll('.row')];
    btns[0]?.click();
  });
  await new Promise((r) => setTimeout(r, 900));
  await page.screenshot({ path: `${OUT}/overlay.png` });
  await page.evaluate(() => window.scrollTo(0, 900));
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${OUT}/overlay-2.png` });
  await page.close();
}
{
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 1200));
  await page.click('.nav__burger');
  await new Promise((r) => setTimeout(r, 900));
  await page.screenshot({ path: `${OUT}/mobile-menu.png` });
  await page.close();
}

await browser.close();
console.log(problems.length ? problems.join('\n') : 'NO CONSOLE/NETWORK/OVERFLOW PROBLEMS');
