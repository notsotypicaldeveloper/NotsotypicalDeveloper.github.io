export const Bio = {
  name: "Mohit",
  handle: "@notsotypicaldeveloper",
  role: "Full-Stack Engineer",
  company: "RaftLabs",
  tagline: "I build systems that move money, data, and people at scale.",
  description:
    "Full-stack engineer with 6+ years shipping production systems across fintech, DeFi, and SaaS — deepest in backend, at home across the stack. Most recently: an NLP-powered trading engine that turns plain English into executable trades, a serverless booking redesign that cut latency from 20 seconds to 4, and instant KYC that collapsed 5-day onboarding into 15 minutes. I care about correctness, latency budgets, and code that's still readable at 2am during an incident.",
  github: "https://github.com/notsotypicaldeveloper",
  email: "gargmohit19la@gmail.com",
};

// Real numbers from real systems — each one shipped to production users.
export const metrics = [
  { value: "20s → 4s", label: "booking latency, serverless redesign" },
  { value: "5d → 15min", label: "KYC onboarding, automated verification" },
  { value: "10k+", label: "concurrent users on live exchange" },
  { value: "+25%", label: "trading volume after crypto integration" },
  { value: "850+", label: "DSA problems solved" },
];

// Cycled by the hero terminal. Each command is a real system I've built.
export const terminalRuns = [
  {
    cmd: 'trade "sell 2 ETH if it drops below my average buy"',
    trace: [
      { text: "parsing intent · GPT-4o", status: "ok", ms: "112ms" },
      { text: "risk check · position sized", status: "ok", ms: "38ms" },
      { text: "order routed · limit @ avg-entry", status: "ok", ms: "64ms" },
    ],
    result: "✓ executable trade from plain English · 70+ pilot users",
  },
  {
    cmd: 'book "2 nights, sea view, arriving friday"',
    trace: [
      { text: "availability · RMS sync", status: "ok", ms: "1.2s" },
      { text: "rate + inventory reconciled", status: "ok", ms: "800ms" },
      { text: "reservation confirmed", status: "ok", ms: "2.0s" },
    ],
    result: "✓ 4s end-to-end · was 20s before the serverless redesign",
  },
  {
    cmd: 'kyc verify --applicant new_user_4821',
    trace: [
      { text: "document OCR + liveness", status: "ok", ms: "3.1s" },
      { text: "sanctions + PEP screen", status: "ok", ms: "1.8s" },
      { text: "account provisioned", status: "ok", ms: "410ms" },
    ],
    result: "✓ 15 minutes · onboarding used to take 3–5 days",
  },
];

export const skills = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python 3", "Java", "C++", "SQL"],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Nest.js",
      "Express",
      "Spring Boot",
      "GraphQL",
      "Hasura",
      "FastAPI",
      "Django",
      "Socket.io",
      "Microservices",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Redux",
      "HTML5 / CSS3",
      "styled-components",
      "Framer Motion",
      "Bootstrap",
    ],
  },
  {
    title: "AI / ML",
    skills: [
      "AutoGen",
      "Multi-agent systems",
      "RAG",
      "GPT-4o",
      "YOLOv8",
      "LLM integration",
      "Claude Code",
      "Cursor",
    ],
  },
  {
    title: "Data & Queues",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "Kafka",
      "RabbitMQ",
    ],
  },
  {
    title: "Infra & Tooling",
    skills: [
      "AWS",
      "Lambda",
      "S3",
      "Docker",
      "Vercel",
      "Cloudflare",
      "Nginx",
      "GitHub Actions",
      "JMeter",
      "LoadRunner",
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "./raftlabs.jpeg",
    website: "https://www.raftlabs.com",
    role: "Software Engineer — Backend",
    company: "RaftLabs",
    date: "Feb 2025 — present",
    highlights: [
      "Architected a PoC NLP-powered trading engine converting natural language into executable trades — cut execution friction 40% and lifted retention 20% across 70+ pilot users.",
      "Cut booking latency 80% (20s → 4s) and eliminated infra costs via a serverless Next.js + Vercel redesign with RMS integration, owning the sync contracts and reconciliation logic so bookings stay consistent even when upstream APIs misbehave.",
      "Maintain a production Java 21 / Spring Boot ticketing platform (Maven, PostgreSQL, Keycloak) with Dockerized CI/CD on AWS.",
    ],
    skills: [
      "Node.js",
      "TypeScript",
      "Next.js",
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "Keycloak",
      "AWS",
      "Vercel",
    ],
  },
  {
    id: 1,
    img: "https://miro.medium.com/v2/resize:fill:88:88/1*g0aw1bqKCxNUGim6s03xxw.jpeg",
    website: "https://hashstack.finance",
    role: "Software Engineer — Backend",
    company: "HashStack Finance",
    date: "Jun 2024 — Aug 2024",
    highlights: [
      "Built the re-staking engine letting users move L2 StarkNet assets back to Ethereum L1 for yield — the bridge-and-settle path is latency- and correctness-critical because real funds are in flight.",
      "Migrated the company blog from Ghost CMS to Hugo + GitHub Pages, dropping hosting cost to zero and page load to under 400ms.",
    ],
    skills: [
      "Node.js",
      "Express",
      "Socket.io",
      "Redis",
      "StarkNet / EVM",
      "Hugo",
    ],
  },
  {
    id: 2,
    img: "https://static.ambitionbox.com/alpha/company/photos/logos/panaesha-capital-pte-ltd.jpg",
    website: "", // panaesha.com is dead and pcex.io no longer belongs to them — add if a real domain exists
    role: "Software Engineer — Full-Stack",
    company: "Panaesha Capital",
    date: "Oct 2019 — Mar 2024",
    highlights: [
      "Core engineer on a live crypto exchange for 4.5 years — built and scaled the order manager, terminal manager, and referral system for 10k+ concurrent users.",
      "Integrated crypto assets (ETH, USDT, Chainlink), driving a 25% increase in trading volume.",
      "Cut KYC onboarding from 3–5 days to under 15 minutes with an automated verification system.",
      "Built a notification service (admin + Telegram bots) that improved query resolution 14%.",
    ],
    skills: [
      "TypeScript",
      "Node.js",
      "React",
      "PostgreSQL",
      "Redis",
      "AWS (EC2, S3)",
      "Docker",
      "Nginx",
      "Stripe",
    ],
  },
  {
    id: 3,
    img: "./sapient.png",
    website: "https://publicissapient.com",
    role: "Intern — Performance Engineering",
    company: "Publicis Sapient",
    date: "Jan 2018 — Jun 2018",
    highlights: [
      "Performance and load testing with JMeter, Selenium, and LoadRunner — identified API timeouts and throughput ceilings, reported back with reproducible scenarios rather than vague numbers.",
    ],
    skills: ["JMeter", "LoadRunner", "Selenium", "Performance Testing"],
  },
];

export const projects = [
  {
    id: 0,
    title: "CopilotGuard",
    date: "2026 · Build AI",
    description:
      "A 4-agent AutoGen swarm that detects and auto-remediates Microsoft 365 Copilot data oversharing — proving each leak with the exact prompt that triggered it, so security teams get evidence instead of alerts.",
    tags: ["FastAPI", "AutoGen", "GPT-4o", "Multi-agent"],
    category: "ai",
    github: "https://github.com/notsotypicaldeveloper",
    webapp: "",
  },
  {
    id: 1,
    title: "Store Intelligence",
    date: "2025",
    description:
      "CCTV analytics pipeline: YOLOv8 + ByteTrack feeding FastAPI/SQLite to compute footfall, conversion funnels, heatmaps, and anomalies from raw retail camera footage.",
    tags: ["FastAPI", "YOLOv8", "ByteTrack", "SQLite"],
    category: "ai",
    github: "https://github.com/notsotypicaldeveloper",
    webapp: "",
  },
  {
    id: 2,
    title: "LeadsOnBlink",
    date: "2024",
    description:
      "B2B lead-discovery platform with search filters and Stripe pay-per-reveal. The unlock ledger is idempotent even if a payment webhook fires twice — the edge case that quietly corrupts credits in lesser systems.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux"],
    category: "web",
    github: "https://github.com/notsotypicaldeveloper/LeadsOnBlink",
    webapp: "https://leads-on-blink.vercel.app/",
  },
  {
    id: 3,
    title: "GraphQL + Realtime Playground",
    date: "2024",
    description:
      "A from-scratch Node.js backend where GraphQL is the primary contract and Socket.io the realtime channel — one service, a typed query surface, live pushes to subscribed clients. Dockerised dev, CI, auth as a first-class concern.",
    tags: ["GraphQL", "Socket.io", "Node.js", "MongoDB", "Docker"],
    category: "backend",
    github: "https://github.com/notsotypicaldeveloper/GraphQL_APIs_with_Sockets",
    webapp: "",
  },
  {
    id: 4,
    title: "Production-Ready Auth Service",
    date: "2024",
    description:
      "A reference backend covering what production actually needs: JWT auth, password hashing, Multer → Cloudinary uploads, request validation, Husky hooks, Dockerfile, CI. The next service starts secure by default.",
    tags: ["Node.js", "Express", "JWT", "MongoDB", "CI/CD"],
    category: "backend",
    github: "https://github.com/notsotypicaldeveloper",
    webapp: "",
  },
  {
    id: 5,
    title: "Mario Fruit Ninja",
    date: "2024",
    description:
      "A vanilla-JS arcade game — collision detection, sprite animation, and a scoring loop written without a framework, so the event loop and frame budget stay visible.",
    tags: ["JavaScript", "Canvas", "CSS"],
    category: "game",
    github: "https://github.com/notsotypicaldeveloper/MarioFruitNinja",
    webapp: "https://mario-fruit-ninja.vercel.app/",
  },
];
