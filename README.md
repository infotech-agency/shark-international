# Shark International Trading

Frontend-only Next.js + React + TypeScript + Tailwind CSS. All content is hardcoded and editable. No backend, API, database, Vite, Vinext, Cloudflare, Worker, authentication or plugin setup is included.

## Start

Use Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
```

The build exports a static website into `out/`. Upload the **contents** of `out/` to any static hosting service. The source ZIP intentionally excludes generated folders such as `node_modules`, `.next` and `out`; installing and building recreates them.

## Edit guide

| Change                                                       | File or folder                               |
| ------------------------------------------------------------ | -------------------------------------------- |
| Page section order                                           | `app/page.tsx`                               |
| Every page section's text and markup                         | Matching component in `components/sections/` |
| Header and footer                                            | `components/layout/`                         |
| Company phone, email, WhatsApp, addresses and production URL | `config/company.ts`                          |
| Navigation labels                                            | `data/navigation.ts`                         |
| Five commodity categories, images and descriptions           | `data/sectors.ts`                            |
| Interactive product tabs                                     | `components/business/commodity-explorer.tsx` |
| Trading-process content                                      | `data/trading-process.ts`                    |
| Process tabs                                                 | `components/process/trading-process.tsx`     |
| Enquiry fields and roles                                     | `data/enquiry.ts`                            |
| Email draft composer                                         | `components/contact/enquiry-form.tsx`        |
| Brand colours and shared styles                              | `styles/base.css`                            |
| Display typography and shared readability rules              | `styles/readability.css`                     |
| Individual section styles, including mobile rules            | Matching stylesheet in `styles/sections/`    |
| Header/footer styling                                        | `styles/layout/`                             |
| Reveal animation logic                                       | `components/motion/motion-system.tsx`        |
| Animation keyframes and reduced-motion rules                 | `styles/motion.css`                          |
| Logo and photographs                                         | `public/images/`                             |
| Local fonts                                                  | `public/fonts/`, `styles/fonts.css`          |
| SEO metadata                                                 | `app/layout.tsx`                             |

`app/globals.css` imports the stylesheets. Keep readability and reduced-motion overrides at the end. Section classes are also used by the animation controller.

The shared contact-selection event is in `lib/enquiry-events.ts`. Browser UI hooks are in `hooks/`. The world-map outline is in `data/world-map.ts` and the geographic markers are in `components/maps/world-map.tsx`.

## Enquiries

The form validates required fields and prepares a `mailto:` draft in the visitor's email application. The visitor reviews and sends it. Nothing is submitted to a server, stored in a database or reported as sent automatically. A configured email application is required; direct email, phone and WhatsApp links are also available.

## Fonts and visual reference

The supplied logo is an image, so its exact custom wordmark typeface cannot be confirmed. Michroma provides a similar wide geometric character for display headings. Inter is used for readable body text, menus and forms. Fonts are stored locally and do not depend on runtime Google Fonts requests.

Buoyancy (https://buoyancy.ae/) informed the broad industrial imagery, clearer product presentation and stronger text hierarchy. Shark's branding, content and five approved commodity sectors are its own. Company facts come from the supplied blueprint. No client logos, testimonials, volumes or owned infrastructure claims have been added.

## Media sources

- Hero: https://www.pexels.com/photo/container-ship-in-hamburg-harbor-at-sunset-32385315/
- Steel wire coils: https://www.pexels.com/photo/stacks-of-industrial-steel-wire-coils-outdoors-36397792/
- Quarry: https://www.pexels.com/photo/mine-in-rocky-mountains-15071433/
- Unsplash photographs: container yard `1494412519320-aa613dfb7738`, agriculture `1500382017468-9049fed747ef`, chemical plant `1516937941344-00b4e0337589`.
- Map outline: https://github.com/holtzy/D3-graph-gallery/blob/master/DATA/world.geojson (Natural Earth-derived geometry).
- Google Fonts: https://fonts.google.com/specimen/Michroma and https://fonts.google.com/specimen/Inter.

Photography illustrates industries and does not imply ownership. Confirm client approval and final licensed production assets before public launch. The agriculture image currently shows farmland rather than fertilizer inputs.

## Checks

```bash
npm run typecheck
npm run lint
npm run format:check
```

`npm run format` applies consistent formatting. No Lighthouse score is claimed. Confirm final company contact details, production URL and approved legal text before launch. Personal phone numbers and unapproved legal registrations remain hidden.
