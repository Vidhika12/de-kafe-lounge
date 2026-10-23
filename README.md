# De Kafe' Lounge — Website

Café · Bakery (Layered in Love) · Events — Rammurthy Nagar, Bengaluru.
Built with **React + TypeScript + Vite** (design based on the Capella template).

## Run it on your computer

```bash
npm install
npm run dev
```
Then open http://localhost:3000

## Pages
Home · About · Menu · Cakes (Layered in Love lookbook) · Events · Gallery · Book a Table · Contact

## Where to edit things

| What | File |
|---|---|
| Phone, WhatsApp, hours, address, Instagram links, ratings | `src/data/site.ts` |
| Menu items, gallery photos, event types | `src/data/menuData.ts` |
| Cake lookbook | `src/data/cakesData.ts` |
| Photos | `public/images/` (then reference as `/images/your-photo.jpg`) |
| Colours & fonts | top of `src/index.css` (`:root` variables) |

## How the booking & contact forms work
There is no server to maintain. When a guest submits the **Book a Table** or **Contact** form,
WhatsApp opens with all their details pre-filled and addressed to the café's number
(`whatsappNumber` in `src/data/site.ts`). They just press send.

## Deploy to Vercel (free)
1. Create a new GitHub repository and upload this folder (without `node_modules`).
2. Go to https://vercel.com/new → import the repo.
3. Vercel detects Vite automatically (build: `npm run build`, output: `dist`). Click **Deploy**.

`vercel.json` is already included so page links like `/cakes` work after refresh.
