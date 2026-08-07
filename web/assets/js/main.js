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

  function initEventFilters() {
    const filterContainer = document.querySelector('.events-filter');
    if (!filterContainer) return;

    const filterBtns = filterContainer.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.timeline__item[data-category]');

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        filterBtns.forEach((b) => {
          b.classList.remove('filter-btn--active');
          b.setAttribute('aria-selected', 'false');
        });

        btn.classList.add('filter-btn--active');
        btn.setAttribute('aria-selected', 'true');

        items.forEach((item) => {
          const cat = item.getAttribute('data-category');
          if (filter === 'all' || cat === filter) {
            item.removeAttribute('hidden');
          } else {
            item.setAttribute('hidden', 'true');
          }
        });
      });
    });
  }

  function initStatsCounter() {
    const statsContainer = document.querySelector('.stats-grid[data-component="stats"]');
    if (!statsContainer) return;

    const statValues = statsContainer.querySelectorAll('.stat__value[data-target]');
    if (!statValues.length) return;

    let animated = false;

    function animateNumbers() {
      statValues.forEach((el) => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        if (isNaN(target)) return;
        let count = 0;
        const speed = Math.max(1, Math.floor(target / 25));
        const originalText = el.textContent.trim();
        const hasPlus = originalText.includes('+');

        const timer = setInterval(() => {
          count += speed;
          if (count >= target) {
            el.textContent = target + (hasPlus ? '+' : '');
            clearInterval(timer);
          } else {
            el.textContent = count;
          }
        }, 40);
      });
    }

    if (!('IntersectionObserver' in window) || REDUCED_MOTION) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          animateNumbers();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsContainer);
  }

  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav__menu a[href^="#"]');
    if (!sections.length || !navLinks.length) return;

    function onScroll() {
      const scrollPos = window.scrollY + getHeaderHeight() + 80;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('is-active', 'nav__link--active');
            } else {
              link.classList.remove('is-active', 'nav__link--active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  document.addEventListener('DOMContentLoaded', () => {
    initLog();
    initMobileNav();
    initSmoothScroll();
    initScrollSpy();
    initFadeIn();
    initEventFilters();
    initStatsCounter();
  });
})();