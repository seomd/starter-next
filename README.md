# SEO.md Starter (Next.js)

This is a blank Next.js App Router starter that includes:

- `SEO.md` and `SEO.REVERSE.md`
- `AGENTS.md` (minimal pointer for agents)
- `SKILL.md` (agent instruction card for automatic setup)
- `DESIGN.md` (intentionally minimal)
- `USAGE.md` (Netlify deploy-time instructions)
- `.seomd/` directory reserved for platform writebacks

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fseomd%2Fstarter-next)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/seomd/starter-next&fullConfiguration=true)

## Local Dev

```bash
npm install
npm run dev
```

## Automatic Setup with an Agent

If you're using a coding agent (OpenClaw, Hermes, Claude Code, etc.), you can use `SKILL.md` to have the agent configure this starter completely automatically. Just point the agent at this repository and tell it to use the SEO.md Starter Setup Skill.

## Next Steps

- After deploying, set env vars in your platform project settings (Vercel/Netlify) using `.env.example` as a reference
- Edit `SEO.md` for your domain and intent queries, then commit/push
- Follow `USAGE.md` for CLI validation and sync/analyze flows
