// Progress bar
const progressBar = document.getElementById('progress-bar');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (window.scrollY / total * 100) + '%';
  });
}

// Scroll-triggered fade-in
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
      observer.unobserve(el.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => observer.observe(el));

// Staggered children
document.querySelectorAll('.problem-grid, .chapter-list, .solution-points').forEach(container => {
  Array.from(container.children).forEach((child, i) => {
    child.style.transitionDelay = (i * 80) + 'ms';
    child.classList.add('fade-up');
    observer.observe(child);
  });
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// CTA link replacement helper — call replaceCTAUrl('https://note.com/xxx') after URL is known
window.replaceCTAUrl = function(url) {
  document.querySelectorAll('a[href="#NOTE_URL"]').forEach(a => a.setAttribute('href', url));
};
