// Single source of truth for page content. Everything here traces back to the
// CV, which in turn traces back to code that was read in the repositories.

export const profile = {
  name: 'Thuriya Ye Naing',
  role: 'Software Engineering Student',
  tagline: 'I build backends that survive contact with real traffic.',
  location: 'Yangon, Myanmar',
  email: 'thuriyayenaing@uit.edu.mm',
  phone: '+959 792665153',
  github: 'https://github.com/theYE-8266-viren-Nai',
  githubHandle: 'theYE-8266-viren-Nai',
  linkedin: 'https://linkedin.com/in/thuriya-ye-naing-5b7528219',
  linkedinHandle: 'in/thuriya-ye-naing',
  intro: [
    'Final-year Computer Science student at the University of Information Technology in Yangon, majoring in Software Engineering.',
    'Most of what I know came from shipping things people actually used — a festival voting platform that took live traffic, a gym management system for a paying client, and a load balancer I wrote to understand how failure detection really works.',
  ],
};

export const education = {
  school: 'University of Information Technology',
  degree: 'Bachelor of Computer Science, Major in Software Engineering',
  graduation: 'Expected April 2027',
  coursework: [
    'Data Structures',
    'Algorithms',
    'Database Systems',
    'Web Development',
    'Software Engineering',
    'Operating Systems',
  ],
};

export type Project = {
  title: string;
  subtitle: string;
  kind: 'freelance' | 'hackathon' | 'academic';
  period: string;
  role?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
  metric?: { value: string; label: string };
};

export const projects: Project[] = [
  {
    title: 'The Whole Welcome Festival 2026',
    subtitle: 'Event platform with live voting',
    kind: 'freelance',
    period: 'Jan 2026',
    role: 'Freelance Developer',
    summary:
      'A public event platform built and launched in under 24 hours for a youth festival in Yangon. I owned the data layer and the voting backend.',
    highlights: [
      'Live dance-crew voting API with device fingerprinting, database-level uniqueness constraints and IP rate limiting',
      'Scheduled voting window with admin pause and override controls',
      'Load tested with Artillery, ramping 5 → 50 concurrent users per second across warm-up, sustained and peak phases',
      'Admin endpoints for vote summaries, CSV export and reset',
    ],
    stack: ['Next.js 16', 'TypeScript', 'Prisma', 'Neon PostgreSQL', 'Vercel'],
    links: [
      { label: 'Repository', href: 'https://github.com/heinthant2k4/whole-welcome-festival-2026' },
      { label: 'Live site', href: 'https://wwfest.vercel.app' },
    ],
    metric: { value: '<24h', label: 'build to launch' },
  },
  {
    title: 'AuraFit',
    subtitle: 'Gym management system — REST API + SPA',
    kind: 'freelance',
    period: 'Feb 2026',
    role: 'Freelance Developer',
    summary:
      'A full-stack gym management system for a client: an API-only Laravel backend consumed by a separate typed React frontend.',
    highlights: [
      '32 REST endpoints with Laravel Sanctum token authentication',
      'Six Eloquent models covering members, trainers, memberships, workout plans, payments and attendance',
      'Typed Axios service layer with React Context auth state',
      'Role-based routing with distinct Admin, Trainer and Member dashboards behind protected routes',
    ],
    stack: ['Laravel 12', 'PHP 8.4', 'React 18', 'TypeScript', 'Vite'],
    links: [
      { label: 'API', href: 'https://github.com/theYE-8266-viren-Nai/AuraFit' },
      { label: 'Frontend', href: 'https://github.com/theYE-8266-viren-Nai/AuraFitGym' },
    ],
    metric: { value: '32', label: 'API endpoints' },
  },
  {
    title: 'Sat Thwal',
    subtitle: 'All-in-one student services platform',
    kind: 'hackathon',
    period: 'Jul — Aug 2026',
    role: 'UIT Innovative Hackathon 2026',
    summary:
      'A mobile-first platform connecting Myanmar university students to verified tutors, hostels, meal packages and campus transport. I led development as top contributor, 55 of 95 commits across a five-person team.',
    highlights: [
      'LLM-backed recommendation engine ranking listings against each student’s budget, township and subject profile, with a deterministic fallback when the model is unavailable',
      'Four-role authorization model across 38 PostgreSQL migrations with row-level security, triggers and an admin audit trail',
      'Protected-route indexes and optimistic UI updates to cut perceived navigation latency',
      'Playwright end-to-end tests for smoke and responsive service flows',
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'OpenRouter', 'Playwright'],
    links: [
      { label: 'Repository', href: 'https://github.com/theYE-8266-viren-Nai/sat-thwal' },
      { label: 'Live site', href: 'https://sat-thwal.vercel.app' },
    ],
    metric: { value: '38', label: 'SQL migrations' },
  },
  {
    title: 'EcoLink Myanmar',
    subtitle: 'Recycling & environmental reporting platform',
    kind: 'hackathon',
    period: 'Jul 2026',
    role: 'Let’s Tech Hackathon',
    summary:
      'A civic recycling platform built in a five-day sprint with a four-person team, letting citizens report waste sites, schedule pickups and earn redeemable points.',
    highlights: [
      'Environment-report submission and admin moderation workflow',
      'Rewards point ledger where awards fire as database triggers on approval, so balances stay consistent without application-side reconciliation',
      'OpenRouter vision models classifying recyclable materials from photos into schema-validated JSON — material, count, estimated weight, confidence',
      'Migrated authentication from Clerk to Supabase Auth mid-sprint',
    ],
    stack: ['Next.js 16', 'TypeScript', 'Prisma 7', 'PostGIS', 'Mapbox', 'Vitest'],
    links: [
      { label: 'Repository', href: 'https://github.com/theYE-8266-viren-Nai/EcoLinkMyanmar' },
      { label: 'Live site', href: 'https://eco-link-myanmar.vercel.app' },
    ],
    metric: { value: '22', label: 'test files' },
  },
  {
    title: 'Load Balancer with Predictive Failure Detection',
    subtitle: 'Distributed systems coursework — CST-6111',
    kind: 'academic',
    period: 'Aug 2026',
    summary:
      'An HTTP load balancer in Go routing live traffic across three independent backend processes, rerouting automatically when a node fails.',
    highlights: [
      'Predictive health subsystem using EWMA latency tracking against a rolling pool median',
      'Flags a degrading backend after three probe rounds — before it returns a single error — and drops its traffic share to zero',
      'REST replay endpoint benchmarking round-robin, least-connections and weighted routing on identical workloads',
      'Validated by a 30-test Go unit suite; stack containerized with Docker Compose',
    ],
    stack: ['Go', 'Goroutines', 'React 19', 'TypeScript', 'Docker'],
    links: [
      { label: 'Repository', href: 'https://github.com/theYE-8266-viren-Nai/Load_Balancer_With_Golang' },
    ],
    metric: { value: '0', label: 'requests to a degraded node' },
  },
  {
    title: 'Student Community Platform',
    subtitle: 'Coursework — CST-4105',
    kind: 'academic',
    period: 'Aug 2025',
    summary:
      'A student community platform with a Spring Boot REST backend and a React frontend, supporting posts, likes and saves, study groups and user profiles.',
    highlights: [
      'Stateless JWT authentication with Spring Security filters and BCrypt',
      'Layered controller–service–repository architecture over Spring Data JPA and PostgreSQL',
      'Avatar and cover image upload with static file serving',
      'MockMvc and Mockito controller tests covering the study-group endpoints',
    ],
    stack: ['Spring Boot 3.5', 'Java 17', 'PostgreSQL', 'React 19', 'JWT'],
    links: [
      { label: 'Backend', href: 'https://github.com/theYE-8266-viren-Nai/scb' },
      { label: 'Frontend', href: 'https://github.com/theYE-8266-viren-Nai/sbcp' },
    ],
  },
  {
    title: 'Cafe Management System',
    subtitle: 'Coursework — CST-4307',
    kind: 'academic',
    period: 'Feb — Jul 2025',
    summary:
      'A cafe ordering and administration web application covering menu categories, products, cart, orders, ratings, reviews and blog modules.',
    highlights: [
      'Role-separated access through three custom middleware layers across 90+ routes',
      '13 database migrations with Eloquent ORM relationships',
      'AJAX endpoints for responsive cart updates',
    ],
    stack: ['Laravel 11', 'MySQL', 'Blade', 'Bootstrap'],
    links: [
      { label: 'Repository', href: 'https://github.com/theYE-8266-viren-Nai/cafe_management_system' },
    ],
  },
];

export const skills = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Java', 'Go', 'PHP', 'C++', 'SQL', 'HTML/CSS'] },
  { group: 'Frameworks', items: ['Next.js', 'React', 'Spring Boot', 'Laravel', 'Node.js', 'Astro', 'Tailwind CSS'] },
  { group: 'Data', items: ['PostgreSQL', 'MySQL', 'Prisma', 'Spring Data JPA', 'Eloquent', 'Supabase', 'PostGIS'] },
  { group: 'Tooling', items: ['Git', 'Docker', 'Vercel', 'Maven', 'npm', 'Neon'] },
  { group: 'Testing', items: ['Playwright', 'Vitest', 'JUnit', 'Mockito', 'Go testing', 'Artillery'] },
  { group: 'Areas', items: ['REST API design', 'Auth & RBAC', 'LLM integration', 'Concurrency', 'Distributed systems'] },
];

export const speaking = {
  title: 'Version Control 101: A Beginner’s Guide to GitHub',
  org: 'UIT Coder Club',
  date: 'Jul 2025',
  role: 'Speaker',
  detail:
    'A beginner-level Git and GitHub seminar for junior students — version control fundamentals, Git vs GitHub, the CLI, branching, collaboration workflows, and repository best practices across a seven-part curriculum.',
};
