# aws-learning

A modular `Next.js` + `Tailwind CSS` starter for AWS learning, EC2 deployment practice, and resume-style landing pages.

## Overview

This project is built as a reusable scaffold with:

- `SSR` via the App Router page in `app/page.tsx`
- `CSR` via a client component mounted under the server page
- a simple modular folder structure for future scaling
- starter API routes that can later be split into microservices
- a resume PDF served from `public/`

## Tech Stack

- `Next.js` App Router
- `React`
- `TypeScript`
- `Tailwind CSS`

## Project Structure

```text
app/
  api/
    health/route.ts
    profile/route.ts
  actions.ts
  globals.css
  layout.tsx
  page.tsx
components/
  client/
  layout/
  sections/
lib/
  site-data.ts
public/
  Morphy Resume.pdf
types/
  site.ts
```

## Rendering Pattern

`app/page.tsx` is the main `SSR` entry route.

- It is an async server component.
- It uses server-side data loading from `lib/site-data.ts`.
- It mounts a `CSR` island from `components/client/landing-page-client.tsx`.

This pattern is useful when you want:

- SEO-friendly server rendering
- client-side interaction where needed
- clean boundaries for future growth

## API Routes

The project includes starter API endpoints:

- `/api/health`
- `/api/profile`

These are simple examples that give you a clean boundary for future service extraction.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## GitHub Push

If you create a GitHub repo named `aws-learning`, you can push this project with:

```bash
git init
git add .
git commit -m "Initial Next.js AWS learning scaffold"
git branch -M main
git remote add origin https://github.com/damer143/aws-learning.git
git push -u origin main
```

## EC2 Deployment Idea

This repo is a good practice project for:

- cloning from GitHub into an EC2 instance
- installing Node.js and dependencies
- building the Next.js app
- running it with `pm2`
- reverse proxying with `nginx`

## Notes

- The resume PDF is currently stored in `public/Morphy Resume.pdf`.
- You can replace the site content in `lib/site-data.ts` to reuse this scaffold for other projects.
- You can expand the API layer later if you want to move toward a microservice architecture.
