import type { ExperienceDetail } from "@/types";

export const experienceDetails: ExperienceDetail[] = [
  {
    startDate: { month: 4, year: 2022 },
    endDate: { month: 10, year: 2022 },
    company: { name: "IIT Madras", website: "https://www.iitm.ac.in/" },
    position: "Junior WebOps Developer",
    location: "Remote",
    desc: [
      "Worked in a team of 10 contributors to made the Backend API for issuing certificates to students participating in Shastra'23.",
      "Made using Python 3, FastAPI, SQLAlchemy and PIL.",
    ],
  },
  {
    startDate: { month: 3, year: 2023 },
    endDate: { month: 4, year: 2024 },
    company: { name: "SKCET", website: "https://www.skcet.ac.in/" },
    position: "Full Stack Developer Intern",
    location: "Coimbatore, India",
    desc: [
      "Worked in a team of 4 to develop a Lab Management System.",
      "Contains features for student attendance, lab inventory management, bill management and report generation.",
      "The system is currently used in 11 CS/IT Labs at SKCET.",
    ],
  },
  {
    startDate: { month: 6, year: 2024 },
    endDate: { month: 1, year: 2025 },
    company: { name: "HyperVerge", website: "https://hyperverge.co/" },
    position: "Data Engineer Intern",
    location: "Bengaluru, India",
    desc: [
      "Prepared Data and fine-tuned multiple LLMs for specific and general field-extraction use cases.",
      "Developed an LLM-based error-tagging pipeline using OpenAI and Python.",
      "Automating the process to reduce time by 97%.",
    ],
  },
  {
    startDate: { month: 2, year: 2025 },
    endDate: { month: 4, year: 2025 },
    company: {
      name: "RipeHouse Advisory",
      website: "https://www.ripehouseadvisory.com.au/",
    },
    position: "Freelance Software Engineer",
    location: "Remote",
    desc: [
      "Made a CRM System to store property and client details.",
      "Features include Client on-boarding, real-time internal chat system and notification system.",
      "Used JavaScript, Express.js, React.js, Node.js, AWS S3, and Supabase.",
    ],
  },
  {
    startDate: { month: 4, year: 2025 },
    endDate: { month: 6, year: 2025 },
    company: { name: "Venture Group" },
    position: "Freelance Software Engineer",
    location: "Remote",
    desc: [
      "Developed PropertyHub, a cross-platform Flutter application for a Qatar-based property management company, supporting role-based workflows for property, contract, and service management with real-time synchronization using Firebase.",
      "Tech: Flutter, Firebase Auth, Firestore, Storage, App Check.",
    ],
  },
  {
    startDate: { month: 7, year: 2025 },
    endDate: { month: 11, year: 2025 },
    company: { name: "Dialmania" },
    position: "Freelance Software Engineer",
    location: "Remote",
    desc: [
      "Developed a VoIP/SIP management platform with user and admin dashboards for SIP credential management, billing, and system monitoring; integrated MagnusBilling for call tracking and NOWPayments for crypto-based balance top-ups with TOTP-based authentication.",
      "Tech: Next.js, PostgreSQL, Drizzle ORM, Tailwind CSS, shadcn/ui, Docker, MagnusBilling, NOWPayments, Nodemailer.",
    ],
  },
  {
    startDate: { month: 2, year: 2026 },
    endDate: { month: 5, year: 2026 },
    company: {
      name: "Synergeek",
      website: "https://linkedin.com/company/synergeek",
    },
    position: "Software Engineer",
    location: "Remote",
    desc: [
      "Developed eaTesZy, a multi-tenant food court management platform enabling malls to manage kitchens and operations, kitchens to handle menus, orders, branding, and payouts, and customers to place and track multi - kitchen orders with billing history support.",
      "Tech: TypeScript, React, Vite, Hono.js, PostgreSQL, Drizzle ORM, TanStack Router, TanStack Query, Zustand, Tailwind CSS, shadcn/ui, Zod, Razorpay, AWS S3, pnpm Monorepo.",
    ],
  },
  {
    startDate: { month: 3, year: 2026 },
    endDate: { month: 3, year: 2026 },
    company: { name: "Marqait AI", website: "https://www.marqait.com/" },
    position: "Full Stack Developer",
    location: "Remote",
    desc: [
      "Built AumOS end-to-end (frontend + backend), a two-sided temple operating system connecting `administrators and devotees, implementing admin dashboards, service booking, donations, and AI-driven `interactions. Tech: TanStack Start, NestJS, TypeScript, Node.js, PostgreSQL, Redis, `Railway.",
      "Developed backend systems for Taurus AI, an AI transformation intelligence platform, implementing asynchronous AI workflow pipelines and Anthropic API integrations for workflow-level analysis. Tech: Python, FastAPI, SQLModel, Pydantic, PostgreSQL, Redis, Celery, Anthropic APIs.",
      "Built frontend features for n-suite, an ecosystem for film production and AI-powered tooling, focusing on talent, equipment, and production management workflows. Tech: React, Vite, TanStack Router, shadcn/ui.",
    ],
  },
  {
    startDate: { month: 4, year: 2026 },
    endDate: "Current",
    company: {
      name: "Flameback Capital",
      website: "https://www.flamebackcapital.com/",
    },
    position: "Software Developer I",
    location: "Bengaluru, India",
    desc: [
      "Building backend services and web features using Django and Vue, focusing on scalable application development with Docker.",
      "Refactoring tightly coupled trading infrastructure using abstract classes to support multiple broker integrations, including Zerodha and AliceBlue, improving modularity and extensibility.",
      "Working with PostgreSQL and Redis for data storage, caching, and performance optimization.",
    ],
  },
];
