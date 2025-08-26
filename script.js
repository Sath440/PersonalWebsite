// Small interactions: set current year, handle contact form submission (client-only)
document.addEventListener('DOMContentLoaded',()=>{
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const note = document.getElementById('form-note');
      note.textContent = 'Thanks — this is a demo form. Add a backend or form service to receive messages.';
      form.reset();
    });
  }

  // Small progressive enhancement: smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href && href.startsWith('#')){
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth',block:'start'});
        }
      }
    });
  });
});
