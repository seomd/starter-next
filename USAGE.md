# USAGE.md

## Deploy

- Vercel: deploy from the repo root.
- Netlify: deploy from the repo root (Next.js runtime).

## SEO.md Workflow

1. Edit `SEO.md` with your domain, identity, and intent queries.
2. Install the CLI:

```bash
npm install -g seomd-cli
```

3. Validate locally:

```bash
seomd validate
```

4. Pull/write back platform intelligence (if configured):

```bash
seomd sync
seomd analyze
```

## Environment Variables

- `SEOMD_API_URL` (optional) API base URL
- `SEOMD_API_KEY` (optional) provider key for writebacks
- `SEOMD_PAYMENT_TOKEN` (optional) agent-native pay-per-scan token

Copy `.env.example` to `.env.local` for local development.
