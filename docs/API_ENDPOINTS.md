# INNOVORTEX Backend API Endpoints

Base URL for local development: `http://localhost:3000`

## Form APIs

### `POST /api/contact`

Stores contact inquiries with basic validation.

Required JSON body:

```json
{
  "name": "Dr. Alex Vance",
  "email": "alex.vance@institution.edu",
  "phone": "+91 98765 43210",
  "organization": "Apex Educational Trust",
  "role": "Head of Security Infrastructure",
  "message": "We want to evaluate SafeEdge for a campus perimeter.",
  "agreeToPrivacy": true
}
```

Success response: `200 OK`

Invalid response: `400 Bad Request`

### `POST /api/demo-request`

Stores SafeEdge demo requests with organization and deployment details.

Required JSON body:

```json
{
  "fullName": "Sarah Jenkins",
  "workEmail": "s.jenkins@campus-security.org",
  "organizationName": "Global Educational Campus",
  "organizationType": "Educational Institution / Campus",
  "deploymentTimeline": "Within 3 Months",
  "primaryConcern": "Women's Safety & Perimeter Vigilance",
  "additionalNotes": "Pilot across two perimeter zones."
}
```

Success response: `200 OK`

Invalid response: `400 Bad Request`

## Content APIs

All content endpoints return seeded website data from `src/data/*`.

| Method | Endpoint | Content |
| --- | --- | --- |
| `GET` | `/api/products` | SafeEdge product details and how-it-works pipeline |
| `GET` | `/api/technology` | Hardware, AI inference, sensors, and connectivity data |
| `GET` | `/api/solutions` | Solution and industry vertical details |
| `GET` | `/api/impact` | Impact metrics and scenario data |
| `GET` | `/api/about` | Company summary, philosophy, and focus areas |
| `GET` | `/api/roadmap` | Product roadmap milestones |

## Response Shape

Successful responses:

```json
{
  "success": true,
  "message": "Request completed successfully",
  "data": {}
}
```

Validation failures:

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": "Please enter a valid email address"
  }
}
```

## Local Persistence

Contact and demo submissions are saved in local JSON files under `.data/` during development:

- `.data/contact-submissions.json`
- `.data/demo-requests.json`

The `.data/` directory is intentionally ignored by Git.
