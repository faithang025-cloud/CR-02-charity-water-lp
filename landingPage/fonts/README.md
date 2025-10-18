How to add webfonts for this project

This folder is a placeholder for hosting webfonts locally. The project expects the following files (used by the @font-face rules in `styles.css`):

- ProximaNova-Regular.woff2
- ProximaNova-Bold.woff2
- Avenir-Book.woff2
- Avenir-Heavy.woff2

Instructions:
1. If you have licensed copies of these fonts, copy the .woff2 files into this folder.
2. If you use a webfont provider (Adobe Fonts/Typekit, Google Fonts, etc.), remove or comment the @font-face rules in `styles.css` and paste the provider's embed snippet into the `<head>` of `landingPage/page.html`.
3. If you don't have these fonts, consider using a free similar font (e.g., Inter or Nunito) and update `--font-sans` in `styles.css` accordingly.

Notes:
- Keep `font-display: swap` to avoid invisible text during font load.
- Serving fonts locally (from /landingPage/fonts/) will allow screenshots and offline previews to match your design.
