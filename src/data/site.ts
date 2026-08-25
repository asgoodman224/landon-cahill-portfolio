/**
 * ============================================================================
 *  LANDON CAHILL — SITE CONTENT
 * ============================================================================
 *  Everything on the website is edited from THIS FILE ONLY.
 *  You should never need to open the component files.
 *
 *  HOW TO READ THIS FILE
 *  ---------------------------------------------------------------------------
 *  Anything wrapped in [ SQUARE BRACKETS ] is PLACEHOLDER text we could not
 *  verify. Replace it, or delete the field to hide it from the site.
 *  Search this file for "[" to find every placeholder at once.
 *
 *  Everything NOT in brackets was taken from Landon's real resume, LinkedIn
 *  profile and existing portfolio site. Nothing here was invented.
 * ============================================================================
 */

/* ---------------------------------------------------------------------------
 * 1. IDENTITY
 * ------------------------------------------------------------------------ */
export const identity = {
  firstName: 'Landon',
  lastName: 'Cahill',
  fullName: 'Landon Cahill',
  monogram: 'LC',

  /** The hero positioning line. Keep it short — it works like a logo. */
  positioning: 'Ideas worth noticing.',

  /** Supporting sentence under the hero headline. */
  intro:
    'Marketing and media student at Quinnipiac, working where brand strategy, content and consumer behaviour meet — building campaigns people actually stop for.',

  disciplines: ['Brand Strategy', 'Content', 'Campaigns', 'Storytelling'],

  location: 'Litchfield / Hamden, Connecticut',
  availability: 'Open to internships',
} as const;

/* ---------------------------------------------------------------------------
 * 2. CONTACT  (verified — Landon's resume + LinkedIn)
 * ------------------------------------------------------------------------ */
export const contact = {
  /** Shown in the contact section. Phone is kept for reference only. */
  email: 'landoncahill@gmail.com',
  phone: '(203) 430-1554',
  phoneHref: 'tel:+12034301554',

  linkedin: 'https://www.linkedin.com/in/landon-cahill-0b0b0225b',
  linkedinLabel: 'in/landon-cahill',

  /** [PLACEHOLDER] Delete any line that is not real. */
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/landon-cahill-0b0b0225b' },
    { label: 'Instagram', href: '' }, // [ADD URL OR LEAVE EMPTY TO HIDE]
  ],
};

/* ---------------------------------------------------------------------------
 * 3. SELECTED WORK
 * ------------------------------------------------------------------------ */
export type CaseStudy = {
  challenge: string;
  insight: string;
  strategy: string;
  execution: string;
  results: string;
};

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  blurb: string;
  skills: string[];
  featured?: boolean;
  /** Image path in /public/work/. Leave empty for the typographic panel. */
  image?: string;
  imageAlt?: string;
  /**
   * How the image fills its frame. 'cover' (the default) crops a photo to fit.
   * 'contain' centres a logo or mark at its own size without cropping it.
   */
  imageFit?: 'cover' | 'contain';
  /** Extra pieces shown inside the case study, under The Execution. */
  gallery?: { src: string; alt: string; caption: string }[];
  /** Documents behind the work. Rendered as buttons at the foot of the case study. */
  links?: { href: string; label: string }[];
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    id: 'samuel-adams',
    index: '01',
    title: 'Rebranding Samuel Adams',
    category: 'Brand Strategy',
    year: '2025',
    featured: true,
    blurb:
      'A social rebrand and campaign for a heritage beer brand losing its grip on a younger audience.',
    skills: ['Brand Positioning', 'Social Strategy', 'Content Calendar', 'Competitive Analysis'],
    image: '/work/samuel-adams-logo.png',
    imageAlt: 'The Samuel Adams logo',
    imageFit: 'contain',
    links: [
      {
        href: 'https://docs.google.com/document/d/1sOhGFSXUGRMYTnLzCxexWBpTiZw5Sb3nC5Z5wktA2bk/edit',
        label: 'Read the brand audit',
      },
      {
        href: 'https://docs.google.com/document/d/1e0ufd5ByiZPVzTLlJTjcas3QKBF6AnF5Ks0LObTvA_I/edit',
        label: 'Read the campaign',
      },
      {
        href: 'https://docs.google.com/document/d/1pSA6Lg__tbTm1yInSpP8ukavJ3HxA1o_RPGl98nYWh8/edit',
        label: 'See the post calendar',
      },
    ],
    caseStudy: {
      challenge:
        'Samuel Adams built its name on craft credibility, but its social presence was still speaking to the generation that discovered it in 1995 — not the one deciding what to drink now.',
      insight:
        'The audit showed a brand talking about itself: process, heritage, awards. The brands winning the same shelf were talking about the moment the drink belongs to. Heritage was the asset. Nostalgia was the wrong way to spend it.',
      strategy:
        'Reposition the heritage as craft obsession rather than history. Keep the founder story, move it from a museum plaque to a point of view, and rebuild the content mix around occasions instead of product beauty shots.',
      execution:
        'Delivered a brand presence audit, a repositioning platform, a campaign concept, and a full post calendar mapping message pillars to formats, cadence and platform.',
      results:
        '[PLACEHOLDER — academic project, so there are no live performance numbers. Replace with the grade, professor feedback, or how it was received. Or delete this line.]',
    },
  },
  {
    id: 'tke-social',
    index: '02',
    title: 'Building a Chapter Brand',
    category: 'Social & Content',
    year: '2025 — Now',
    blurb:
      'Owning branding and external communications for a campus organisation across social and physical channels.',
    skills: ['Social Media Management', 'Brand Messaging', 'Campaign Planning', 'Design'],
    image: '/work/tke-logo.png',
    imageAlt: 'The Tau Kappa Epsilon crest',
    imageFit: 'contain',
    caseStudy: {
      challenge:
        'Chapter communications were inconsistent. Every event looked like it came from a different organisation, and attendance depended on who happened to catch which post.',
      insight:
        'Visibility was not a posting-frequency problem, it was a recognition problem. An audience mid-scroll has to know who is talking before it decides whether to care.',
      strategy:
        'Establish one visual and verbal system across every channel, then build promotional campaigns around events rather than announcing them once and hoping.',
      execution:
        'Manage branding and external communications across social media and campus platforms. Build promotional campaigns for events, and design the digital and print content carrying chapter values and achievements.',
      results:
        '[PLACEHOLDER — add real outcomes if you have them: attendance change, follower growth, engagement. Do not estimate. Delete this line if you have no numbers.]',
    },
  },
  {
    id: 'philanthropy',
    index: '03',
    title: 'Philanthropy That Converts',
    category: 'Campaign & Partnerships',
    year: '2025 — Now',
    blurb:
      'Building the volunteer network and business partnerships behind a week-long fundraising push for St. Jude.',
    skills: ['Partnership Development', 'Networking', 'Campaign Planning', 'Client Relationships'],
    image: '',
    imageAlt: 'Philanthropy campaign work',
    caseStudy: {
      challenge:
        'Fundraising weeks live or die on infrastructure built before they start. Volunteers, partners and funding streams all have to exist in advance.',
      insight:
        'Donations follow relationships. The organisations that raise the most are the ones that spent the off-season building partnerships instead of asking cold.',
      strategy:
        'Treat philanthropy like a campaign — build the volunteer network, deepen partnerships with local groups and businesses, and diversify funding streams before the week begins.',
      execution:
        'Established a network of volunteers for planning and execution, networked with industry leaders to investigate new partnerships, and deepened relationships with groups and businesses to strengthen funding streams.',
      results: 'Played a part in raising over $20,000 for St. Jude in one week.',
    },
  },
  {
    id: 'visual-identity',
    index: '04',
    title: 'A Personal Identity System',
    category: 'Branding & Logo Design',
    year: '2024 — 2025',
    blurb:
      'A monogram taken from pencil sketch to finished mark — and the first idea that had to be thrown out to get there.',
    skills: ['Logo Design', 'Adobe Illustrator', 'Concept Development', 'Colour Theory'],
    image: '/work/lc-monogram-color.png',
    imageAlt: 'The LC monogram in forest green and aged-page yellow',
    gallery: [
      {
        src: '/work/lc-monogram-mono.png',
        alt: 'The LC monogram in black and white',
        caption: 'The mono mark — the book cover reads as an L, the curved pages as a C.',
      },
      {
        src: '/work/lc-monogram-color.png',
        alt: 'The LC monogram in forest green and aged-page yellow',
        caption: 'The colour version — forest green cover, aged-page yellow.',
      },
    ],
    caseStudy: {
      challenge:
        'A personal mark has to say something true about the person behind it, and it has to survive everywhere — small on a profile, large on a cover, in one colour and in full colour.',
      insight:
        'The first direction was built on the name. The Cahill crest carries a whale, so I sketched whale tails as the initials, and a version where the tail read as an L and the head completed a C. It worked as a puzzle, but whales were not indicative of who I am or where my aspirations lead, so I set the idea aside. A book was. I am an avid reader and I want to be a published author, so the symbolism was already true before I drew anything.',
      strategy:
        'Keep the constraint from the whale drafts — build the initials out of the symbol itself rather than setting letters beside it — and apply it to a book. The angle of a cover becomes the L. The curve of the pages becomes the C.',
      execution:
        'Sketched cover angles and page curves by hand until one version was clearly the right one, then rebuilt it in Illustrator from a plethora of shapes, guide lines and shape selection. The cover angle was adjusted slightly, and a surrounding semi-circle was added on the same angle as the C to close the composition.',
      results:
        'Two finished versions. The black-and-white mark is clean and classy; the colour version uses a green cover and semi-circle with an aged-page yellow, for a rich, forest-like feel that matches the vibe I want my writing to have. Having both means I can go back and forth depending on which is most appropriate for the circumstance.',
    },
  },
  {
    id: 'editorial-layout',
    index: '05',
    title: 'Designing the Printed Page',
    category: 'Editorial & Print Design',
    year: '2024 — 2025',
    blurb:
      'A three-column conservation feature and a two-page travel trifold, both built on a real grid in InDesign.',
    skills: ['Adobe InDesign', 'Layout & Grid', 'Typography', 'Publication Design'],
    image: '/work/going-green-spread.png',
    imageAlt: 'Going Green — a three-column feature layout about saving turtles in the Pacific',
    gallery: [
      {
        src: '/work/going-green-spread.png',
        alt: 'Going Green — a three-column feature layout about saving turtles in the Pacific',
        caption:
          'Going Green — three columns, a feathered background and text wrapped to the turtle.',
      },
      {
        src: '/work/paris-trifold-outside.png',
        alt: 'The outside of the Paris trifold: cover, overleaf and inside-right panels',
        caption: 'Paris trifold, outside — cover, overleaf and inside right.',
      },
      {
        src: '/work/paris-trifold-inside.png',
        alt: 'The inside of the Paris trifold: attractions, food and sights panels',
        caption: 'Paris trifold, inside — attractions, food and sights.',
      },
    ],
    caseStudy: {
      challenge:
        'Two very different briefs with the same underlying problem: a lot of copy and a lot of images competing for a fixed amount of paper. A conservation feature about saving turtles in the Pacific, and a travel trifold about Paris.',
      insight:
        'Text is the part that has to fit. Placing it first — before backgrounds, before decoration — is what keeps a layout from turning into a puzzle you cannot finish. And where the text breaks matters as much as whether it fits: a column that ends mid-sentence reads as an accident.',
      strategy:
        'Build the grid first, flow the copy into it, and only then bring in imagery and ornament. Let every image earn its place by having the text wrap to it rather than dodge around it.',
      execution:
        'GOING GREEN: a letter document set on three margins, with the copy divided evenly between the columns so that every column ends on the last sentence of a paragraph. The background was feathered to blend, the large turtle was dropped in and the text wrapped and moulded around it, and the remaining images were sized identically to hold the balance. A dotted rule separates the first two columns and squiggly lines decorate the title. PARIS: a horizontal document with slugs, a second page and three gutters, with all the copy placed into its fold before anything else. Cover, overleaf and inside-right use images as full-bleed backgrounds with the overlay and transparency adjusted so the type stays readable; the remaining panels use a grey-blue eyedropped from the sky in the cover photo, and orange dashed rules on the overleaf add a splash of colour and a break for the eye.',
      results:
        'Two finished pieces on real grids, including a photograph of my own from the Louvre. The typeface took the longest: the script I first fell for turned out to be too hard to read at size, so I settled on a face with a hint of script left in it that never obstructs the print form.',
    },
  },
  {
    id: 'creative-writing',
    index: '06',
    title: 'Award-Winning Narrative',
    category: 'Copy & Storytelling',
    year: '2024 — 2025',
    blurb:
      'Two campus-wide writing wins, and the argument that marketing is storytelling with a business objective attached.',
    skills: ['Copywriting', 'Narrative Structure', 'Editing', 'Creative Direction'],
    image: '',
    imageAlt: 'Creative writing work',
    links: [
      {
        href: 'https://docs.google.com/document/d/1zZ945u571QeGEuQYPAgdqMOk9jqIyOuDzbdcn1TpFXI/edit',
        label: 'Read my work',
      },
    ],
    caseStudy: {
      challenge:
        'Most marketing copy fails for the same reason most writing fails. It says what it wants to say instead of what the reader needs to hear.',
      insight:
        'A reader gives you one line to earn the second. That is true of a poem, a short story and a caption, and the discipline transfers directly.',
      strategy:
        'Treat every piece as structure first — what is withheld, what is revealed, and in what order.',
      execution:
        'OBITUARY: BROTHERHOOD took first place in the DH Poetry Prize. Air Grows Thick took second in the Wilder Fiction Contest. Alongside them, a documented deep-revision process taking a first-year essay through brainstorm, draft, revision and rewrite.',
      results: 'Two campus-wide competition placements, and a revision process documented end to end.',
    },
  },
];

/* ---------------------------------------------------------------------------
 * 4. ABOUT
 * ------------------------------------------------------------------------ */
export const about = {
  heading: ['Marketing starts', 'with understanding', 'people.'],

  /**
   * [EDIT ME] Landon — this is the section that should sound most like you.
   * Rewrite freely. Each string is its own paragraph.
   */
  paragraphs: [
    'I have needed to communicate since I left the womb. As a kid I drew comic books until my hands cramped, going through enough paper in a year to stack taller than I was. The stories got more complicated as I got older. The reason never changed.',
    'That is what pulled me toward marketing. A campaign works the way a story works — you earn attention, you give people a reason to stay, and you leave them with something they remember. The brands that win are the ones that understand who they are talking to before they decide what to say.',
    'At Quinnipiac I am studying Communications and Media Studies with minors in Marketing and English, on the accelerated 3+1 track toward a Master of Arts in Project Management. In practice that means working on both halves of the job: the strategy behind the campaign, and the craft that makes it land.',
  ],

  /**
   * PORTRAIT — the large photo in the About column.
   * Files live in /public/photos/. Set photo: '' to fall back to the
   * designed monogram placeholder frame instead.
   */
  photo: '/photos/landon-portrait.jpg',
  photoAlt: 'Landon Cahill',
  photoCaption: 'Litchfield, Connecticut',

  /**
   * SUPPORTING PHOTOS — the two smaller frames under the portrait.
   * The caption field is optional: leave it '' and no caption is rendered.
   * Add or remove entries freely; the grid adapts.
   */
  gallery: [
    {
      src: '/photos/landon-speaking.jpg',
      alt: 'Landon Cahill speaking at a podium',
      caption: '', // e.g. 'Speaking at [EVENT], [YEAR]'
    },
    {
      src: '/photos/landon-waterfront.jpg',
      alt: 'Landon Cahill outdoors by the water',
      caption: '', // e.g. '[CITY], [YEAR]'
    },
  ],
} as const;

/* ---------------------------------------------------------------------------
 * 5. EXPERIENCE  (verified — Landon's resume)
 * ------------------------------------------------------------------------ */
export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  kind: 'Leadership' | 'Experience' | 'Education';
  location?: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'Social Media Chair',
    org: 'Tau Kappa Epsilon',
    period: 'Nov 2025 — Present',
    kind: 'Leadership',
    location: 'Quinnipiac University',
    points: [
      'Manage chapter branding and external communications across social media and campus platforms.',
      'Create promotional campaigns that build event attendance and chapter visibility.',
      'Design digital and print content highlighting chapter values and achievements.',
    ],
  },
  {
    role: 'Philanthropy & Fundraising Committee',
    org: 'Tau Kappa Epsilon',
    period: 'Jan 2025 — Present',
    kind: 'Leadership',
    location: 'Quinnipiac University',
    points: [
      'Established a network of volunteers to assist in planning and executing philanthropic activities.',
      'Networked with industry leaders and investigated partnerships to increase opportunities.',
      'Deepened partnerships with groups and businesses to strengthen funding streams.',
      'Played a part in raising over $20,000 for St. Jude in one week.',
    ],
  },
  {
    role: 'Waitstaff',
    org: 'Torrington Country Club',
    period: 'Jun 2026 — Aug 2026',
    kind: 'Experience',
    location: 'Goshen, CT',
    points: ['Provided attentive customer service in a fast-paced, high-end dining environment.'],
  },
  {
    role: 'Head Lifeguard & Instructor',
    org: 'Litchfield Country Club',
    period: 'May 2022 — Aug 2025',
    kind: 'Experience',
    location: 'Litchfield County, CT',
    points: [
      'Promoted to Head Lifeguard in 2024.',
      'Assisted with planning and implementation of events at the aquatic facility and club banquets.',
      'Acted as the link between guards and management, supporting a collaborative work environment.',
      'Maintained accurate records of incident reports, pool chemicals and patron counts.',
    ],
  },
  {
    role: 'M.A. Project Management',
    org: 'Quinnipiac University',
    period: 'Expected May 2028',
    kind: 'Education',
    location: 'Hamden, CT',
    points: ['Accelerated 3+1 dual-degree track.'],
  },
  {
    role: 'B.A. Communications & Media Studies',
    org: 'Quinnipiac University',
    period: 'Aug 2024 — May 2027',
    kind: 'Education',
    location: 'Hamden, CT',
    points: ['Minors in Marketing and English.'],
  },
];

/* ---------------------------------------------------------------------------
 * 6. THE MARKETING TOOLKIT  (verified — Landon's resume)
 * ------------------------------------------------------------------------ */
export const toolkit = [
  {
    id: 'strategy',
    label: 'Strategy',
    caption: 'Deciding what to say before deciding how to say it.',
    items: [
      'Brand Messaging',
      'Campaign Planning',
      'Market Research',
      'Competitive Analysis',
      'Project Management',
    ],
  },
  {
    id: 'digital',
    label: 'Digital',
    caption: 'Meeting the audience where it already is.',
    items: ['Social Media Marketing', 'Content Creation', 'Content Strategy', 'Community Management'],
  },
  {
    id: 'creative',
    label: 'Creative',
    caption: 'The part that earns the attention.',
    items: ['Copywriting', 'Storytelling', 'Creative Direction', 'Art Direction', 'Creative Thinking'],
  },
  {
    id: 'craft',
    label: 'Tools & Craft',
    caption: 'Where the work actually gets made.',
    items: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe InDesign',
      'Canva',
      'Google Workspace',
      'Claude',
      'Gemini',
    ],
  },
  {
    id: 'professional',
    label: 'Professional',
    caption: 'How the work gets through the room.',
    items: ['Public Speaking', 'Client Relationships', 'Leadership', 'Collaboration'],
  },
];

/** Verified certifications only. Delete any line that is not current. */
export const certifications = [
  'Certified in Google AI Essentials & Prompt Engineering',
  'Claude 101 Certified',
];

/* ---------------------------------------------------------------------------
 * 7. BRAND STATEMENT
 * ------------------------------------------------------------------------ */
export const brandStatement = {
  lines: ['Good marketing', "doesn't interrupt", 'people. It gives them', 'something'],
  /** Rendered in serif italic + accent colour as the final line. */
  emphasis: 'worth noticing.',
  attribution: 'The idea this whole portfolio is built on',
};

/* ---------------------------------------------------------------------------
 * 8. CONTACT SECTION + FOOTER
 * ------------------------------------------------------------------------ */
export const contactSection = {
  heading: ["Let's make something", 'people remember.'],
  blurb:
    'Looking for internships, freelance projects, and any room where the work is figuring out what a brand should say. If that sounds like your team, say hello.',
};

export const footer = {
  tagline: 'Marketing • Strategy • Creative',
  signature: 'Built with strategy. Designed with intention.',
};

export const navLinks = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'toolkit', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];
