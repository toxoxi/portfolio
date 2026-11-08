# What is this?
https://portfolio-2m.firebaseapp.com

# Development
## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Deployment
1. yarn run generate
2. firebase deploy

# Static information pages

The pages in `public/tools/` are copied unchanged into the generated site. They use a local stylesheet and do not load the application bundle. Each page includes `noindex`; this requests search exclusion and is not an access restriction.

Run `npm run generate` and check `/tools/`, `/tools/privacy/`, and `/tools/terms/` in the generated output before deployment.
