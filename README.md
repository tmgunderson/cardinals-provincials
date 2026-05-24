# Calgary Cardinals Provincials — Tournament Website

**RMLL Alberta Major Female Provincials · July 17–19, 2026 · Brentwood Arena, Calgary**

Built with Next.js 14 (App Router) + Supabase for live score/stat persistence.

---

## Quick Deploy (Claude Code or manual)

### 1. Clone & Install

```bash
git clone https://github.com/bgund2026-lgtm/cardinals-provincials
cd cardinals-provincials
npm install
```

### 2. Set up environment variables

Copy the example file and fill in your values:
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_ADMIN_PIN=your-4-digit-pin
NEXT_PUBLIC_YOUTUBE_CHANNEL=https://youtube.com/@YourChannel
```

### 3. Set up Supabase

1. Create a project at supabase.com
2. Go to SQL Editor → paste contents of `supabase-schema.sql` → Run
3. Copy your project URL and anon key into `.env.local`

### 4. Run locally

```bash
npm run dev
# → http://localhost:3000
```

### 5. Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

When prompted, add your environment variables in the Vercel dashboard under:
**Project → Settings → Environment Variables**

Add the same keys from `.env.local`.

---

## Site Structure

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, live score strip, quick info |
| Live Scores | `/scores` | Auto-refreshing scores (20s poll) |
| Schedule | `/schedule` | Full 3-day bracket |
| Stats | `/stats` | Player stats, sortable |
| Teams | `/teams` | All participating teams |
| Team Profile | `/teams/[teamId]` | Roster, staff, player cards |
| Fundraising | `/fundraising` | 50/50, player board, etc. |
| Apparel | `/apparel` | Pre-order merchandise |
| Hotels | `/directions` | Venues, hotels, transit |
| Info | `/info` | Admission, rules, contact |
| **Admin** | `/admin` | PIN-protected score updater |

---

## Updating Content

### To update before the tournament
Edit `src/lib/data.js` — this is the single source of truth for:
- Team names, rosters, coaching staff (`TEAMS`, `PLAYERS`)
- Game schedule (`GAMES`)
- Fundraiser details (`FUNDRAISERS`)
- Apparel items and prices (`APPAREL`)
- Hotel recommendations (`HOTELS`)

### During the tournament (live updates)
Go to `/admin` on any phone browser → enter PIN → update scores and stats in real time.

### To add the YouTube stream
Update `NEXT_PUBLIC_YOUTUBE_CHANNEL` in your Vercel environment variables (no redeploy needed for env vars in some setups — otherwise push a commit).

---

## Upgrading Later

When you're ready to add more:
- **Apparel checkout** → add Stripe + a checkout API route
- **Team registration** → add a Supabase form + email notification
- **Photo gallery** → Supabase Storage bucket + upload form
- **Push notifications** → Supabase Realtime subscription instead of polling

---

## Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: Supabase (Postgres)
- **Hosting**: Vercel
- **Fonts**: Bebas Neue + Barlow Condensed (Google Fonts)
- **Auth**: PIN-based (upgrade to Clerk when needed)

---

Go Cardinals! 🖤💛
