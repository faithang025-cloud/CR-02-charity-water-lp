// images.js
// Central mapping for page images. To replace an image:
// 1) Swap the file in /landingPage/img/ with the same filename, OR
// 2) Edit this mapping to point to a new filename (relative to this HTML file).
// Then reload the page — no HTML edits required.

// Central mapping for page images. We keep both a light and a dark logo
// so the script can swap the logo automatically when the page theme changes.
window.IMAGES = {
  // swapped: use the original/dark-friendly logo for light mode
  lightLogo: 'img/charitywater_logo_vertical_AllBlack.png',
  // and the supplied white-text logo for dark mode
  darkLogo: 'img/charitywater_logo_vertical_WhiteText.png',
  hero: 'img/hero.jpg',
  value1: 'img/value1.jpg',
  value2: 'img/value2.jpg',
  value3: 'img/value3.jpg',
  feature: 'img/feature.jpg'
};

(function applyImages(){
  if(!window.IMAGES) return;

  // helper to determine which logo to show based on current theme
  function currentLogoPath(){
    return document.documentElement.getAttribute('data-theme') === 'dark'
      ? window.IMAGES.darkLogo
      : window.IMAGES.lightLogo;
  }

  // apply non-logo mappings once (keeps data-img attributes so we can update logo later)
  document.querySelectorAll('img[data-img]').forEach(img => {
    const key = img.getAttribute('data-img');
    if(!key) return;
    if(key === 'logo') return; // handled separately
    const path = window.IMAGES[key];
    if(path){
      img.src = path;
      // leave data-img so page authors can still see the mapping
    } else {
      console.warn('images.js: no mapping for', key);
    }
  });

  // function to update all logo images on the page
  function updateLogoImages(){
    const path = currentLogoPath();
    document.querySelectorAll('img[data-img="logo"]').forEach(img => {
      if(img.src && img.src.endsWith(path)) return; // already set
      img.src = path;
    });
  }

  // initial logo set
  updateLogoImages();

  // watch for theme changes (data-theme attribute on <html>) and update logo
  const observer = new MutationObserver(mutations => {
    for(const m of mutations){
      if(m.type === 'attributes' && m.attributeName === 'data-theme'){
        updateLogoImages();
      }
    }
  });
  observer.observe(document.documentElement, { attributes: true });

  // Also listen for a storage event in case theme is toggled in another tab
  window.addEventListener('storage', (e) => {
    if(e.key === 'site-theme') updateLogoImages();
  });

})();
