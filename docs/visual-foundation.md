# Visual foundation

Scope: global design tokens, responsive header and homepage hero only. Existing Next.js 16.3.4, Tailwind 4 and project configuration are preserved.

## Original asset inspection

All five files decoded successfully and were visually inspected before implementation. Original filenames, bytes and dimensions are unchanged (verified using SHA-256).

| Asset | Dimensions | Width / height | Content and dominant colors |
| --- | --- | --- | --- |
| `logo.png` | 3531 × 2969 | 1.189:1 | JB monogram, readable “Consultorio Dental”, small tooth detail; blue and ivory on transparent background. |
| `area-trabajo.JPG` | 4032 × 3024 | 4:3 | Wide treatment room with wall logo, desk and dental chair; white, navy, beige and wood. High resolution, but a busier composition. |
| `area-trabajo2.JPG` | 960 × 1280 | 3:4 | Close view of dental chair, lamp and wall illustrations; navy, white and cream. Tighter clinical framing. |
| `recepcion.JPG` | 960 × 1280 | 3:4 | Reception desk and chairs beside wood paneling and warm lighting; ivory, brown, black and white. Selected for the welcoming light and orderly composition. |
| `sala-estar.JPG` | 798 × 1280 | 0.623:1 | Waiting chairs, mirror and plant; ivory, black, wood and green. Narrower composition with less flexibility for a hero. |

The displayed name is **JB Consultorio Dental**. Pixel sampling confirmed primary logo blue `#3a5898`, darker blue `#253d85`, and ivory `#ebe8df`. The UI uses primary `#3a5898`, hover `#293f78`, warm background `#faf9f6`, secondary background `#eeece5`, text `#222d3e`, secondary text `#606775`, border `#dcdedc` and focus `#244a9c`. Geist is self-hosted through `next/font`.

The hero's crop is presentation-only via `object-fit: cover`; original images are never cropped or rewritten. `next/image` provides responsive derivatives and the hero uses eager loading with high fetch priority, as recommended by the installed Next.js documentation.

## Extension points

`src/lib/site.ts` centralizes the name, navigation and CTA destinations. Only `#inicio` exists in this stage. The other navigation anchors, `#servicios` and booking destination `#contacto` deliberately await future sections and verified booking information. They do not submit appointments. No contact details or medical claims were invented.

The mobile navigation is a disclosure, not a modal: native links follow the toggle in keyboard order. It closes on selection, Escape (restoring toggle focus), outside click, focus leaving the header, or switching to desktop. The header becomes white with a subtle shadow after scrolling.

Accessibility includes Spanish language and alt text, a skip link, focusable main landmark, one H1, visible focus rings, hidden decorative graphics, reduced-motion support and touch controls at least 44px tall.

## Validation (2026-09-07)

- `npm run lint`: passed.
- `npm run build`: Turbopack could not bind an internal CSS-processing port (`Operation not permitted`) in this environment, including the elevated retry. Configuration was not changed to work around this.
- `npm run build -- --webpack`: full production build, TypeScript and static generation passed.
- Chromium on an unchanged temporary copy of the application source, served with `next dev --webpack`: 320, 768, 1024 and 1440px passed; screenshots visually reviewed. All displayed images loaded, all five original URLs returned 200, and there was no horizontal overflow or browser console error/warning.
- Desktop anchor navigation, mobile toggle/selection/Escape/Tab behavior, skip link, scroll styling and reduced motion passed.
- Text contrast: primary button 6.93:1, secondary text on main background 5.40:1, primary text 13.18:1.
- An initially stalled optimized WebP request cleared after restarting the temporary dev server; the complete subsequent browser run passed.
- Temporary development server stopped. A pre-existing development server was left untouched.
- `git diff --check` and original-asset SHA-256 verification passed. No commit created.
