/* ============================================================
   SECCIÓN: Logros, Eventos y Convocatorias — Semillero LOCXUE
   ------------------------------------------------------------
   JavaScript mínimo, sin dependencias externas. Controla los
   filtros de la cronología de eventos por categoría.

   El conteo animado de las estadísticas (.stat[data-value]) NO
   se maneja aquí: ya lo cubre initCountUp() en
   web/assets/js/main.js para cualquier .stat del sitio,
   incluidas las 4 stats de esta sección.
   ============================================================ */
(function () {
  'use strict';

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

  document.addEventListener('DOMContentLoaded', initEventFilters);
})();
