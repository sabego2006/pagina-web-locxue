// ==========================================================================
// Semillero LOCXUE — Script principal
// Módulos: log inicial, navegación móvil, smooth scroll, fade-in por sección.
// Respeta prefers-reduced-motion. Vanilla JS sin dependencias.
// ==========================================================================

(function () {
  'use strict';

  const REDUCED_MOTION =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initLog() {
    console.log('Semillero LOCXUE — Sitio Web Inicializado');
  }

  function initMobileNav() {
    const toggle = document.querySelector('.nav__toggle');
    const menu = document.querySelector('#nav-menu');
    if (!toggle || !menu) return;

    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      menu.classList.toggle('nav__menu--open', open);
    };

    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      setOpen(!open);
    });

    // Cierra el menú al hacer clic en cualquier enlace (UX móvil).
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setOpen(false));
    });

    // Cierra con Escape.
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  function getHeaderHeight() {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue('--header-height');
    const parsed = parseInt(raw, 10);
    return Number.isFinite(parsed) ? parsed : 72;
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const id = link.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;

        e.preventDefault();
        const headerHeight = getHeaderHeight();
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: REDUCED_MOTION ? 'auto' : 'smooth' });
        target.focus({ preventScroll: true });
      });
    });
  }

  function initFadeIn() {
    const sections = document.querySelectorAll('main .section');
    if (!sections.length) return;

    if (!('IntersectionObserver' in window) || REDUCED_MOTION) {
      sections.forEach((s) => s.classList.add('section--visible'));
      return;
    }

    sections.forEach((s) => s.classList.add('section--hidden'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section--visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    sections.forEach((s) => io.observe(s));
  }

  // initCountUp — anima las stat-boxes cuando entran en viewport.
  // Lee data-value de cada .stat, anima easeOutCubic hacia el destino.
  // Respeta prefers-reduced-motion. No-op si data-value es 0.
  function initCountUp() {
    const stats = document.querySelectorAll('.stat[data-value]');
    if (!stats.length) return;

    const animate = (el) => {
      const target = parseInt(el.dataset.value, 10) || 0;
      const valueEl = el.querySelector('.stat__value');
      if (!valueEl || target === 0) return;
      const duration = 1500;
      const start = performance.now();
      const step = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        valueEl.textContent = Math.round(target * eased);
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (REDUCED_MOTION || !('IntersectionObserver' in window)) {
      stats.forEach((el) => {
        const valueEl = el.querySelector('.stat__value');
        const target = parseInt(el.dataset.value, 10) || 0;
        if (valueEl && target > 0) valueEl.textContent = target;
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    stats.forEach((s) => io.observe(s));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initLog();
    initMobileNav();
    initSmoothScroll();
    initFadeIn();
    initCountUp();
  });
})();