# CFC Funded Account Support

CFC is a Next.js website for a service that helps forex traders approach prop
firm funded-account challenges with planning, risk management, and
accountability.

## Tech stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Motion and GSAP animations
- Formik, Yup, and EmailJS for the contact form
- React Three Fiber for the contact visual

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Environment variables

The contact form requires these values in `.env.local`:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Available scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production app
- `npm run start` - Start the production app
- `npm run lint` - Run ESLint

## Site configuration

Update the canonical domain in `app/layout.tsx`, `app/robots.ts`, and
`app/sitemap.ts` before deployment. The current value is a placeholder because
the client's production domain was not provided.
