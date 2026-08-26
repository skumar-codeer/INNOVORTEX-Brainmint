# Security Policy

## Supported Versions

Only the latest `main` branch of the INNOVORTEX repository is actively supported for security updates.

| Version | Supported          |
| ------- | ------------------ |
| Main    | :white_check_mark: |
| < 0.1   | :x:                |

## Reporting a Vulnerability

INNOVORTEX takes security seriously. If you discover a security vulnerability within this repository or product deployment:

1. **Do NOT open a public GitHub Issue.**
2. Send a detailed report to security@innovortex.com (or contact the engineering lead directly).
3. Include step-by-step reproduction instructions, affected routes/components, and potential impact.

### Security Guidelines for Developers

* **Secrets & Credentials**: Never commit `.env`, `.env.local`, API tokens, private SSH keys, or database credentials.
* **Input Validation**: Validate all client-side inputs (`src/lib/validation.ts`) and sanitize data before server submission.
* **Dependencies**: Periodically run `npm audit` and keep core packages updated.
