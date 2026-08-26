# Contributing to INNOVORTEX

Thank you for contributing to the INNOVORTEX codebase! As a deep-tech engineering team, we prioritize code quality, maintainability, performance, and strict architectural boundaries.

---

## 1. Code of Conduct

All contributors are expected to uphold our [Code of Conduct](CODE_OF_CONDUCT.md). Be respectful, professional, and collaborative.

---

## 2. Git Branch & Merge Strategy

Direct pushes to `main` or `develop` are disabled. All changes must be made via Pull Requests.

```
main (Production)
  ↑
develop (Development Integration)
  ↑
feature/* | fix/* | chore/*
```

### Branch Naming Conventions
- `feature/<feature-description>`: New UI sections, components, or page features.
- `fix/<issue-description>`: Bug fixes and layout corrections.
- `chore/<task-description>`: Tooling updates, dependency bumps, or repository config.

Examples:
- `feature/safeedge-dashboard`
- `fix/mobile-navbar-overflow`
- `chore/tailwind-colors`

---

## 3. Development Workflow

1. Fork or clone the repository.
2. Checkout the `develop` branch and pull latest changes:
   ```bash
   git checkout develop
   git pull origin develop
   ```
3. Create your task branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Implement changes adhering to the strict architectural guidelines:
   - Separate UI components from content (`src/data/*`).
   - Use strict TypeScript interfaces (`src/types/*`).
   - Do not hardcode metrics, partner logos, or fake achievements.
6. Verify code quality locally:
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```

---

## 4. Pull Request Checklist

Before submitting a PR, ensure:
- [ ] Code follows project formatting rules (`npm run format`).
- [ ] TypeScript strict compilation succeeds with no errors (`npm run type-check`).
- [ ] ESLint checks pass with no warnings or errors (`npm run lint`).
- [ ] All new content is placed inside `src/data/`.
- [ ] PR description details the changes made and links relevant issue numbers.

---

## 5. Security & Confidentiality

- **Never** commit `.env` files, API keys, credentials, or private certificates.
- Check `.gitignore` before adding new file types.
