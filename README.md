# Abandoned to Fortune 🏚️➡️💰

**A simple starter project to find abandoned properties and connect them with property hunters.**

This repository contains a minimal, mobile-first web app scaffold (backend + frontend) to get you started quickly.

Quickstart
---------

1. Clone the repo

```bash
git clone https://github.com/jamiestevenson878gang/abandonedtofortune.git
cd abandonedtofortune
```

2. Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

3. Frontend

```bash
cd frontend
npm install
npm start
```

Defaults
--------
- Default branch: main
- Starter database: PostgreSQL (recommended)
- Includes small example seed data to try locally

Files included
--------------
- backend/ (Express API) - endpoints: /api/properties, /api/hunters, /api/deals
- frontend/ (React) - simple map + list UI placeholder
- database/schema.sql - SQL schema for PostgreSQL
- .env.example - environment variables

Next steps
----------
- Add API keys (Mapbox, Zillow, Land Registry) in repository secrets or .env
- Replace seed/sample data with real data sources and integrations
- Deploy to a host (Render, Vercel, Heroku, etc.)

---

Built to turn abandoned properties into fortune.
