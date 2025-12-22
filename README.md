
# MechWay Backend (Express + SQLite)

This is a minimal backend for the MechWay static site. It provides simple JSON API endpoints to store contact submissions, booking requests and product inquiries using SQLite.

Getting started

1. Install dependencies

```bash
cd server
npm install
```

2. Create a `.env` file in the `server/` folder (you can copy `.env.example`)

```bash
cp .env.example .env
# edit .env and set ADMIN_KEY to a secret value
```

3. Run the server

```bash
npm start
# or for development with auto-reload:
npm run dev
```

4. Endpoints

- `POST /api/contact` - body: `{ name, phone, email?, subject?, message }`
- `POST /api/book` - body: `{ name, phone, vehicle_type, brand?, model?, service_needed?, location?, details? }`
- `POST /api/inquiry` - body: `{ product_id?, product_name, name, phone, message? }`
- `GET /api/admin/submissions` - requires header `x-admin-key` set to your `ADMIN_KEY` value. Returns JSON lists of recent submissions.

Notes

- Data is stored in `server/mechway.sqlite` using `better-sqlite3`.
- This is a simple prototype. For production consider:
  - Adding authentication for admin UI
  - Rate limiting, input sanitization, and validation
  - Email notifications (nodemailer + SMTP provider)
  - Moving to a managed database for higher scale
