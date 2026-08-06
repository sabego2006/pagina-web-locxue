/**
 * Sección: Identidad Institucional — Semillero LOCXUE
 * Mejora progresiva: animación discreta de aparición al hacer scroll.
 *
 * - Si este script no se carga, la sección se ve y funciona igual,
 *   solo sin la animación (ver CSS: estado visible por defecto).
 * - Respeta prefers-reduced-motion (delegado también al CSS).
 * - No depende de ninguna otra sección ni modifica el DOM fuera
 *   de "#identidad".
 */
(function () {
  "use strict";

  var section = document.getElementById("identidad");
  if (!section) return;

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    return;
  }

  // Marca la sección como lista para animar (activa las reglas CSS
  // que ocultan los elementos .identidad__reveal antes de aparecer).
  section.setAttribute("data-js-ready", "");

  var revealTargets = section.querySelectorAll(
    ".identidad__card, .identidad__valor, .identidad__facts, .identidad__propuesta, .identidad__rol, .identidad__linea"
  );

  revealTargets.forEach(function (el) {
    el.classList.add("identidad__reveal");
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealTargets.forEach(function (el) {
    observer.observe(el);
  });
})();
