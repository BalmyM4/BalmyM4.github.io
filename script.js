  // Solo navegación entre secciones; no hay simuladores ni datos ficticios interactivos.
  const slides = [...document.querySelectorAll('main > .slide')];
  const counter = document.getElementById('slideCounter');
  const progressBar = document.getElementById('progressBar');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const nextLabel = document.getElementById('nextLabel');
  let active = 0;
  function updateNavigation(index) {
    active = Math.max(0, Math.min(index, slides.length - 1));
    document.body.classList.toggle('on-cover', active === 0);
    counter.textContent = `${active + 1} / ${slides.length}`;
    progressBar.style.width = `${100 * (active + 1) / slides.length}%`;
    prevBtn.disabled = active === 0;
    nextBtn.disabled = active === slides.length - 1;
    nextLabel.textContent = active === slides.length - 1 ? 'Final' : 'Siguiente';
  }
  function goTo(index) {
    const n = Math.max(0, Math.min(index, slides.length - 1));
    slides[n].scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
    updateNavigation(n);
  }
  prevBtn.addEventListener('click', () => goTo(active - 1));
  nextBtn.addEventListener('click', () => goTo(active + 1));
  document.addEventListener('keydown', e => {
    if (e.altKey || e.ctrlKey || e.metaKey || /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) return;
    if (['ArrowRight', 'PageDown'].includes(e.key) || (e.key === ' ' && !e.shiftKey)) { e.preventDefault();goTo(active + 1); }
    if (['ArrowLeft', 'PageUp'].includes(e.key) || (e.key === ' ' && e.shiftKey)) { e.preventDefault();goTo(active - 1); }
    if (e.key === 'Home') {e.preventDefault();goTo(0)}
    if (e.key === 'End') {e.preventDefault();goTo(slides.length - 1)}
  });
  const observer = new IntersectionObserver(entries => {
    const visibles = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio);
    if (visibles.length) updateNavigation(slides.indexOf(visibles[0].target));
  }, {threshold:[.2,.4,.6,.8]});
  slides.forEach(slide => observer.observe(slide));
  if(location.hash) {
    const index = slides.findIndex(slide => '#' + slide.id === decodeURIComponent(location.hash));
    if(index >= 0) updateNavigation(index);
  } else updateNavigation(0);
