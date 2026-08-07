/**
 * Módulo: Redes Sociales, Contacto y Pie de Página (Footer) — Semillero LOCXUE
 * Responsable: Brayan Sarmiento
 *
 * Funcionalidades:
 * - Validación en tiempo real del formulario de contacto institucional.
 * - Mensajes de estado accesible (ARIA live region).
 * - Animación progresiva de revelación al hacer scroll (IntersectionObserver).
 * - Desplazamiento suave para enlaces internos.
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initContactoForm();
    initScrollReveal();
  });

  /**
   * Manejo e Interacción del Formulario de Contacto
   */
  function initContactoForm() {
    var form = document.getElementById("contacto__form");
    var statusBanner = document.getElementById("contacto__status");
    if (!form) return;

    var inputNombre = document.getElementById("contacto-nombre");
    var inputEmail = document.getElementById("contacto-email");
    var selectRol = document.getElementById("contacto-rol");
    var textMensaje = document.getElementById("contacto-mensaje");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var isValid = true;

      // Validar Nombre
      if (!inputNombre.value.trim()) {
        setError(inputNombre, true);
        isValid = false;
      } else {
        setError(inputNombre, false);
      }

      // Validar Email
      var emailVal = inputEmail.value.trim();
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal || !emailRegex.test(emailVal)) {
        setError(inputEmail, true);
        isValid = false;
      } else {
        setError(inputEmail, false);
      }

      // Validar Rol
      if (!selectRol.value) {
        setError(selectRol, true);
        isValid = false;
      } else {
        setError(selectRol, false);
      }

      // Validar Mensaje
      if (!textMensaje.value.trim() || textMensaje.value.trim().length < 10) {
        setError(textMensaje, true);
        isValid = false;
      } else {
        setError(textMensaje, false);
      }

      if (isValid) {
        // Simulación exitosa del envío
        form.reset();
        if (statusBanner) {
          statusBanner.hidden = false;
          statusBanner.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    });

    // Limpieza de errores al escribir
    [inputNombre, inputEmail, selectRol, textMensaje].forEach(function (element) {
      if (!element) return;
      element.addEventListener("input", function () {
        setError(element, false);
      });
    });
  }

  function setError(inputEl, hasError) {
    var group = inputEl.closest(".contacto__form-group");
    if (!group) return;
    if (hasError) {
      group.classList.add("has-error");
    } else {
      group.classList.remove("has-error");
    }
  }

  /**
   * Animaciones de Scroll Reveal (Mejora Progresiva)
   */
  function initScrollReveal() {
    var section = document.getElementById("contacto");
    if (!section) return;

    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    section.setAttribute("data-js-ready", "");

    var targets = section.querySelectorAll(".contacto__card, .contacto__social-card, .contacto__header");
    targets.forEach(function (el) {
      el.classList.add("contacto__reveal");
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
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
