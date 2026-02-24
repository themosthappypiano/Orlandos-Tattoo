## Packages
framer-motion | Smooth page transitions and scroll-reveals for a premium feel
clsx | Conditional class merging
tailwind-merge | Safely merging Tailwind classes

## Notes
Tailwind Config - extend fontFamily:
fontFamily: {
  gothic: ["var(--font-gothic)"],
  condensed: ["var(--font-condensed)"],
  sans: ["var(--font-sans)"],
}

All images will have a 'grayscale' filter applied via Tailwind to strictly enforce the monochrome aesthetic.
We use a CSS-based noise overlay to provide the gritty texture.
