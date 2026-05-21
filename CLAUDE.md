Stack: Next.js App Router, TypeScript strict (no `any`), Tailwind, Motion, Lenis, GSAP, lucide-react.

Brand aesthetic — strict:
- Background: warm cream (#FAF6F1)
- Primary accent: deep burgundy (#8B1538)
- Secondary accent: soft gold (#C9A961)
- Body text: charcoal (#1A1A1A)
- Refined, romantic, editorial, premium. Not dark, not brutalist, not corporate.
- Display font: Playfair Display via next/font/google
- Script font: Pinyon Script via next/font/google
- Body font: DM Sans via next/font/google
- Generous whitespace, slow elegant animations, hairline gold dividers
- Subtle paper-grain texture on background (very low opacity)

Engineering rules — strict:
- Strict TypeScript, no `any` types
- Server components by default, "use client" only when needed
- next/image for every image with explicit width/height
- next/font for ALL typography
- useReducedMotion checks on every animation
- Every animation useEffect returns a cleanup function
- No hydration mismatches (no Date.now/Math.random/window in render)
- No layout shift, reserve dimensions for embeds and images
- Smooth scroll for all anchor links via Lenis
- Mobile-first responsive at 320, 768, 1024, 1440
- Semantic HTML
- Visible focus states on every interactive element
- ARIA labels on icon-only buttons
- Touch targets at least 44x44px on mobile
- WCAG AA contrast
- prefers-reduced-motion honored everywhere

Use https://theproposalconcierge.ca as the canonical URL and metadataBase for all metadata and schema, even though the domain is not live yet.

Never: em dashes anywhere, purple, neon, dark backgrounds, Inter/Roboto/Arial/Geist, generic card layouts, harsh shadows.
