# HarlindoJaya

Static Next.js marketing site for HarlindoJaya genset rental, service, overhaul, and industrial installation services.

## Development

```bash
npm install
npm run build
```

## Static Export

This project uses `output: 'export'`. Production files are generated in `out/`.

## Deployment Rule

Always push to GitHub before FTP deploy.

1. Make changes locally.
2. Run `npm run build`.
3. Commit and push to GitHub.
4. Deploy `out/` to FTP `public_html`.
5. Check no-cache production URL.

## Spec

See `specs/light-blue-redesign.md`.
