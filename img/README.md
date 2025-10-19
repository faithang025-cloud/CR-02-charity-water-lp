How to replace images

This folder contains the images used by the landing page. There are two easy ways to replace an image:

1) Replace the file directly
   - Overwrite the existing file (for example, `logo.png` or `hero.jpg`) with a new image using the same filename.
   - Reload `landingPage/page.html` in the browser. No code changes needed.

2) Update the image mapping
   - Edit `landingPage/images.js` and change the filename for the key you want.
   - Example:
     IMAGES.logo = 'img/new-logo.png'
   - Save and reload the page.

Notes
- Filenames in `images.js` are relative to `landingPage/page.html`.
- If you add a new image with a different filename, either overwrite the old file or update `images.js`.
- `images.js` will attempt to apply the mapping on page load; if a mapping key is missing it logs a warning in the console.
