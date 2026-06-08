# Spec: Light Blue HarlindoJaya Redesign

## Goal
Modernize HarlindoJaya into a light blue-white, mobile-first marketing site while preserving all source content from harlindojaya.com.

## Scope
- Main route family: `/`, `/layanan`, `/harga`, `/proyek`, `/tentang`, `/faq`, `/kontak`.
- Preserve copy, contacts, pricing, FAQ, service data, and project data.
- Use only relevant FTP assets.
- Deploy only after GitHub backup.

## Design Rules
- Theme: light blue-white locked across page.
- Accent: one blue accent.
- Typography: Geist sans/mono.
- Mobile first: one-column at small viewport, progressive grids at `sm`, `md`, `lg`, `xl`.
- Hero: fits first viewport, primary CTA visible.
- Buttons: readable contrast, tactile active state, no desktop wrapping.
- Navigation: one line desktop, hamburger mobile.
- Cards: soft radius, subtle blue hairlines, no dark-mode leftovers.

## SEO Requirements
- `sitemap.xml`
- `robots.txt`
- LocalBusiness JSON-LD
- FAQPage JSON-LD
- Metadata title/description preserved.

## QA Checklist
- Build succeeds with `npm run build`.
- Routes return 200 after static export.
- Desktop 1440/1280 visual pass.
- Tablet 768 visual pass.
- Mobile 390/375 visual pass.
- Header nav works.
- Mobile menu opens/closes.
- WhatsApp links use `6281281104105`.
- Tel link uses `+6281281104105`.
- Mail and Maps links work.
- FAQ accordion works.
- No horizontal overflow on mobile.
- GitHub commit pushed before FTP upload.
- Post-deploy no-cache URL checked.

## Rollback
Use latest pushed GitHub commit/tag before FTP deploy.
