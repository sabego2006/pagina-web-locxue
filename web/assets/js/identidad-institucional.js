/**
 * Sección: Identidad Institucional — Semillero LOCXUE
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
