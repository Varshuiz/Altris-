# ALTRIS TRADING FZCO

Institutional website for ALTRIS TRADING FZCO. Next.js App Router, TypeScript, and Tailwind CSS.

## Develop

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Enquiry email

The contact form posts to a server action and sends mail with [Resend](https://resend.com). Set these in `.env.local` and in the Vercel project:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `RESEND_FROM_EMAIL` — a sender on a domain you have verified in Resend
- `NEXT_PUBLIC_SITE_URL` — the production URL, used for metadata

Without those values the form stays on the page and shows the trading-desk email instead of pretending the message was sent.

## Deploy

Import the repository in Vercel. The app is the repository root. No extra build settings are required beyond the environment variables above.
