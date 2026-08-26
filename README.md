# INNOVORTEX — Production Website Repository

> **Brand Tagline**: Engineering Intelligence for a Safer Tomorrow.  
> **Brand Positioning**: Intelligent Technology. Safer Spaces.  
> **Flagship Product**: SafeEdge™ — Edge AI Safety & Alert Platform

This repository contains the full-stack web architecture for **INNOVORTEX**, a deep-tech company transforming conventional surveillance into intelligent, real-time safety infrastructure.

---

## Features

- **Deep-Tech Visual Identity**: Dark navy `#07111F`, electric cyan `#20D9FF`, emerald accent `#39E58C`, and alert amber `#FFB547` with custom typography (`Space Grotesk`, `Inter`, `JetBrains Mono`).
- **Alternating Visual Rhythm**: Carefully sculpted dark and light sections for high-contrast storytelling.
- **SafeEdge™ Dashboard Simulation**: Interactive real-time hardware status monitor, sensor feed telemetry, and live event log.
- **Technical Architecture Diagram**: Conceptual pipeline visualization from camera & PIR sensors down to edge inference and multimodal alerts.
- **Strict Data Isolation**: 100% decoupling of copy/metrics from JSX (`src/data/*`).
- **Team Collaboration Ready**: Strict TypeScript, ESLint, Prettier, GitHub Actions CI/CD pipeline, PR and issue templates.
- **SafeEdge Operational Backend**: Protected dashboard telemetry and event APIs, persistent local storage, signed admin sessions, and Socket.IO realtime updates.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS & PostCSS
- **Icons**: Lucide React
- **Code Quality**: ESLint & Prettier
- **CI/CD**: GitHub Actions

---

## Project Structure

INNOVORTEX/
├── .github/                  # CI/CD Workflows, PR & Issue Templates
│   ├── workflows/ci.yml
│   ├── pull_request_template.md
│   └── ISSUE_TEMPLATE/
├── docs/                     # Architectural & security documentation
├── public/                   # Static assets & favicon
├── src/
│   ├── app/                  # Next.js App Router (15+ routes & SEO generators)
│   ├── components/           # Reusable UI component library
│   │   ├── ui/               # Atomic elements (Button, Section, Badge, Modal, etc.)
│   │   ├── navigation/       # Navbar, Footer, MobileMenu
│   │   ├── technology/       # SystemDiagram & pipeline visualizations
│   │   ├── dashboard/        # DashboardMockup & EventLog
│   │   ├── product/          # Product specific components
│   │   ├── sections/         # Hero, SolutionCard, MetricCard, Timeline, etc.
│   │   └── forms/            # Contact & Demo Request forms
│   ├── data/                 # Isolated structured data (products, solutions, tech, etc.)
│   ├── hooks/                # Custom React hooks (useDashboardMock, useMobileMenu)
│   ├── lib/                  # Utilities, constants, & validation logic
│   ├── styles/               # Global CSS & Tailwind imports
│   └── types/                # Strict TypeScript interfaces
├── .env.example
├── .gitignore
├── API_DOCUMENTATION.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
└── SECURITY.md


---

## Getting Started

### Prerequisites

- **Node.js**: `>= 18.18.0`
- **npm**: `>= 9.0.0`

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/innovortex/innovortex-website.git](https://github.com/innovortex/innovortex-website.git)
   cd innovortex-website
Install dependencies:

Bash
npm install
Configure environment variables:

Bash
cp .env.example .env.local
Ensure your .env.local contains:

Code snippet
PORT=3000
NODE_ENV=development
ADMIN_PASSWORD_HASH=your_admin_hash
AUTH_JWT_SECRET=your_jwt_secret
Development
Start the local development server:

Bash
npx cross-env NODE_ENV=development node server.mjs
Open http://localhost:3000 in your browser.

API Documentation
For full backend endpoint specifications, payload formats, and status codes, refer to API_DOCUMENTATION.md.

Code Quality & Verification
Run static analysis and type checks:

Bash
# Run ESLint check
npm run lint

# Run TypeScript strict type check
npm run type-check

# Format codebase with Prettier
npm run format
Build
To compile a production build:

Bash
npm run build
To test the production build locally:

Bash
npm run start
Git Workflow & Team Contribution
Branch Strategy
All development work follows the strict git workflow below. Direct pushes to main are strictly prohibited.

main (Production deployment)
  ↑
develop (Staging & Integration)
  ↑
feature/* or fix/* or chore/*
Branch Naming Conventions:
feature/home-page

feature/technology-page

feature/safeedge-page

feature/solutions

feature/dashboard

feature/contact

fix/navbar

fix/responsive-layout

chore/project-setup

Pull Requests
Create a feature branch off develop:

Bash
git checkout develop
git pull origin develop
git checkout -b feature/my-new-feature
Commit changes using atomic, descriptive messages.

Push branch and open a Pull Request targeting develop.

Ensure CI pipeline checks (Lint, Type-check, Build) pass cleanly.

Obtain approval from at least one code reviewer before merging.

Security Policy
Security guidelines and vulnerability disclosure procedures are documented in SECURITY.md.

Never commit .env, API keys, or private certificates to source control

---

## Roadmap

See [src/data/roadmap.ts](file:///Users/shivam/Downloads/railway/INNOVORTEX/src/data/roadmap.ts) or visit the `/roadmap` page on the live website.

---

## License

All rights reserved © INNOVORTEX. See [LICENSE](file:///Users/shivam/Downloads/railway/INNOVORTEX/LICENSE) for details.
