// Simple theme toggle: toggles data-theme="dark" on <html>
// Stores the user's choice in localStorage so it persists.

(function(){
  const KEY = 'site-theme';
  const toggle = document.getElementById('theme-toggle');
  if(!toggle) return;

  function setTheme(theme){
    if(theme === 'dark'){
      document.documentElement.setAttribute('data-theme','dark');
      toggle.setAttribute('aria-pressed','true');
    } else {
      document.documentElement.removeAttribute('data-theme');
      toggle.setAttribute('aria-pressed','false');
    }
    try{ localStorage.setItem(KEY, theme); } catch(e){}
  }

  // read saved theme
  try{
    const saved = localStorage.getItem(KEY);
    if(saved) setTheme(saved);
  }catch(e){}

  toggle.addEventListener('click', ()=>{
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
})();
