# SafeEdge Backend API Documentation

## Base URL
`http://localhost:3000/api`

## Response Format
```json
{
  "success": true,
  "message": "Request completed successfully",
  "data": { ... }
}
## Available Endpoints

### Public Content APIs
* **`GET /api/products`** - Returns product details, specs, and pipeline stages.
* **`GET /api/technology`** - Returns architecture and tech stack details.
* **`GET /api/solutions`** - Returns industry use cases and target sectors.
* **`GET /api/impact`** - Returns performance metrics and impact data.
* **`GET /api/about`** - Returns company background and mission.
* **`GET /api/roadmap`** - Returns feature roadmap milestones.

### Submission APIs
* **`POST /api/contact`**
  * **Body:** `{ "name": string, "email": string, "phone": string, "organization": string, "role": string, "message": string }`
* **`POST /api/demo-request`**
  * **Body:** `{ "user": string, "organization": string, "timeline": string, "concern": string, "notes": string }`