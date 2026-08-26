# INNOVORTEX Web Architecture & System Design Document

This document outlines the software engineering principles, folder structure, data isolation boundaries, and future API readiness for the INNOVORTEX website repository.

---

## 1. Core Architectural Pillars

### A. Strict UI & Data Isolation
To ensure team collaboration and prevent JSX pollution:
- **Zero JSX Hardcoding**: All page content, product specifications, solution cards, tech stack nodes, roadmap milestones, and initial dashboard telemetry are strictly defined inside typed files under `src/data/`.
- **TypeScript First**: Every data file adheres to interfaces exported from `src/types/index.ts`.

### B. Deep-Tech Visual Rhythm
The visual rhythm is engineered using alternating section backgrounds:
- `Hero` → **DARK** (`#07111F`)
- `Problem Statement` → **LIGHT** (`#F6F8FA`)
- `Product (SafeEdge™)` → **DARK** (`#07111F`)
- `Technology Engine` → **LIGHT** (`#F6F8FA`)
- `System Dashboard` → **DARK** (`#07111F`)
- `Real-World Impact` → **LIGHT** (`#F6F8FA`)
- `Call-to-Action (CTA)` → **DARK** (`#07111F`)

### C. Responsive & Accessible Foundations
- Mobile-first CSS utility classes via Tailwind CSS.
- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Visible cyan focus outlines (`focus-visible:ring-2 focus-visible:ring-brand-cyan`).
- Accessible modal dialogs (`src/components/ui/Modal.tsx`) with keyboard trap prevention and ESC listeners.

---

## 2. Component Hierarchy

```
src/components/
├── ui/                  # Atomic primitives (Button, Container, Section, Badge, Modal, etc.)
├── navigation/          # Sticky Navbar, Footer, and slide-out MobileMenu
├── technology/          # Interactive SystemDiagram pipeline flow
├── dashboard/           # SafeEdge Console mockup (DashboardMockup, EventLog)
├── product/             # SafeEdge specific ProductCard
├── sections/            # Hero, SolutionCard, MetricCard, Timeline, CaseStudyCard, CTASection
└── forms/               # Validating ContactForm & DemoRequestForm
```

---

## 3. Future Backend & Telemetry Integration

While the initial repository runs client-side telemetry simulation (`src/hooks/use-dashboard-mock.ts`), the data model and UI layers are fully prepared for real-time WebSocket or REST backend APIs:
1. Replace `useDashboardMock()` hook with a real SSE (Server-Sent Events) or WebSocket subscription hook targeting `NEXT_PUBLIC_SAFEEDGE_TELEMETRY_URL`.
2. Target `ContactForm` and `DemoRequestForm` submissions to Next.js API Routes (`/api/contact`, `/api/demo`) or webhooks.
