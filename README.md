<img width="1512" height="861" alt="image" src="https://github.com/user-attachments/assets/49b90ef3-5698-4e06-9f43-4bc36418ede1" />

# MIDI Takehome

A React + TypeScript app powered by Vite.

## Prerequisites

- Node.js 20+ (or current LTS)
- npm

## Hosted version

```bash
https://midi-design-challenge-avgpa.ondigitalocean.app/
```

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal (typically [http://localhost:5173](http://localhost:5173)).

## Available scripts

- `npm run dev` - Start Vite in development mode with hot reload.
- `npm run build` - Type-check and create a production build.
- `npm run start` - Run a production preview server (binds to `PORT` for hosts like DigitalOcean).
- `npm run preview` - Preview the production build locally.
- `npm run lint` - Run ESLint across the project.

## Deploy to DigitalOcean App Platform

Recommended: create a **Static Site** app.

- Source: this repository
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: any client-exposed vars must be prefixed with `VITE_`
- SPA fallback: add a rewrite rule from `/*` to `/index.html` (status 200) if using client-side routing

If you accidentally create a **Web Service**, set:

- Build command: `npm run build`
- Run command: `npm run start`

This repo includes `npm run start` so the Web Service path does not fail with "determine start command".
