# Multi-Tenant Notes SaaS (MongoDB Version)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment:
   ```bash
   cp .env.example .env
   ```

3. Seed database with tenants & users:
   ```bash
   npm run seed
   ```

4. Run development server:
   ```bash
   npm run dev
   ```

## Deployment on Vercel
- Set `MONGO_URI` and `JWT_SECRET` in Vercel Environment Variables.
- Deploy, and run `npm run seed` once manually to create tenants/users.