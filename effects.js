// ===== WAIT FOR SPA RENDER =====
const waitForDOM = () =>
  new Promise(resolve => {
    const el = document.getElementById('root');
    if (el && el.children.length > 0) return resolve();

    const observer = new MutationObserver(() => {
      if (el.children.length > 0) {
        observer.disconnect();
        resolve();
      }
    });

    observer.observe(el, { childList: true });
  });

// ===== INIT EFFECTS =====
waitForDOM().then(() => {
  console.log('🔥 Effects loaded');

  const elements = document.querySelectorAll('#root *');

  // REVEAL
  const reveal = () => {
    const h = window.innerHeight;
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < h - 60) {
        el.classList.add('reveal', 'active');
      }
    });
  };

  window.addEventListener('scroll', reveal);
  reveal();

  // HOVER
  document.querySelectorAll('#root a, #root button').forEach(el => {
    el.classList.add('hover-lift', 'glow');
  });

  // GLASS
  document.querySelectorAll('#root section, #root article, #root .card, #root div')
    .forEach(el => {
      if (el.offsetHeight > 120) el.classList.add('glass');
    });

  // PARALLAX (hero only)
  document.querySelectorAll('#root img').forEach(img => {
    img.classList.add('parallax');
    img.setAttribute('data-speed', '3');
  });
});

// SPA-safe fix for "View Our Work"
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href="/en/works"]');
  if (!link) return;

  e.preventDefault();

  // ищем секцию с кейсами / логотипами
  const target =
    document.querySelector('#portfolio') ||
    document.querySelector('#clients') ||
    document.querySelector('#works') ||
    document.querySelector('section:last-of-type');

  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    alert('Portfolio section is coming soon 🚀');
  }
});