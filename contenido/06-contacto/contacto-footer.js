/**
 * Módulo: Redes Sociales, Contacto y Pie de Página (Footer) — Semillero LOCXUE
 * Responsable: Brayan Sarmiento
 *
 * Funcionalidades:
 * - Validación reactiva y accesible del formulario de contacto.
 * - Contador dinámico de caracteres en el textarea del mensaje.
 * - Estado de carga visual (spinner) y confirmación de envío.
 * - Función de copiado al portapapeles para el correo institucional oficial.
 * - Desplazamiento suave para el botón "Subir" del pie de página.
 * - Revelación progresiva con IntersectionObserver (Scroll Reveal).
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initContactoForm();
    initCopyEmail();
    initScrollToTop();
    initScrollReveal();
  });

  /**
   * 1. Manejo e Interacción del Formulario de Contacto
   */
  function initContactoForm() {
    var form = document.getElementById("contacto__form");
    var statusBanner = document.getElementById("contacto__status");
    var submitBtn = document.getElementById("contacto__submit-btn");
    var resetBtn = document.getElementById("contacto__reset-btn");
    if (!form) return;

    var inputNombre = document.getElementById("contacto-nombre");
    var inputEmail = document.getElementById("contacto-email");
    var selectRol = document.getElementById("contacto-rol");
    var textMensaje = document.getElementById("contacto-mensaje");
    var charCount = document.getElementById("contacto-char-count");

    // Contador de caracteres en tiempo real
    if (textMensaje && charCount) {
      textMensaje.addEventListener("input", function () {
        var len = textMensaje.value.length;
        charCount.textContent = len + " / 500";
        if (len >= 500) {
          charCount.style.color = "#d93838";
        } else {
          charCount.style.color = "";
        }
      });
    }

    // Funciones de validación específicas
    function validateNombre() {
      if (!inputNombre) return true;
      var val = inputNombre.value.trim();
      var isValid = val.length >= 3;
      setFieldStatus(inputNombre, isValid);
      return isValid;
    }

    function validateEmail() {
      if (!inputEmail) return true;
      var val = inputEmail.value.trim();
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var isValid = regex.test(val);
      setFieldStatus(inputEmail, isValid);
      return isValid;
    }

    function validateRol() {
      if (!selectRol) return true;
      var isValid = Boolean(selectRol.value);
      setFieldStatus(selectRol, isValid);
      return isValid;
    }

    function validateMensaje() {
      if (!textMensaje) return true;
      var val = textMensaje.value.trim();
      var isValid = val.length >= 10;
      setFieldStatus(textMensaje, isValid);
      return isValid;
    }

    // Validación al escribir / cambiar de campo
    if (inputNombre) {
      inputNombre.addEventListener("input", function () {
        if (inputNombre.value.length > 2) validateNombre();
      });
      inputNombre.addEventListener("blur", validateNombre);
    }

    if (inputEmail) {
      inputEmail.addEventListener("input", function () {
        if (inputEmail.value.indexOf("@") !== -1) validateEmail();
      });
      inputEmail.addEventListener("blur", validateEmail);
    }

    if (selectRol) {
      selectRol.addEventListener("change", validateRol);
    }

    if (textMensaje) {
      textMensaje.addEventListener("input", function () {
        if (textMensaje.value.length > 9) validateMensaje();
      });
      textMensaje.addEventListener("blur", validateMensaje);
    }

    // Envío del Formulario
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var v1 = validateNombre();
      var v2 = validateEmail();
      var v3 = validateRol();
      var v4 = validateMensaje();

      if (!v1 || !v2 || !v3 || !v4) {
        // Enfocar el primer elemento con error
        var firstError = form.querySelector(".has-error input, .has-error select, .has-error textarea");
        if (firstError) firstError.focus();
        return;
      }

      // Animación de estado enviando
      if (submitBtn) {
        submitBtn.classList.add("is-submitting");
        submitBtn.disabled = true;
        var btnText = submitBtn.querySelector(".contacto__btn-text");
        if (btnText) btnText.textContent = "Enviando mensaje...";
      }

      // Simulación de respuesta de red (600ms)
      setTimeout(function () {
        form.reset();
        clearAllStatus(form);
        if (charCount) charCount.textContent = "0 / 500";

        if (submitBtn) {
          submitBtn.classList.remove("is-submitting");
          submitBtn.disabled = false;
          var btnText = submitBtn.querySelector(".contacto__btn-text");
          if (btnText) btnText.textContent = "Enviar Mensaje";
        }

        form.style.display = "none";
        if (statusBanner) {
          statusBanner.hidden = false;
          statusBanner.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 650);
    });

    // Botón para resetear y enviar otro mensaje
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        if (statusBanner) statusBanner.hidden = true;
        form.style.display = "grid";
        if (inputNombre) inputNombre.focus();
      });
    }
  }

  function setFieldStatus(element, isValid) {
    var group = element.closest(".contacto__form-group");
    if (!group) return;
    if (isValid) {
      group.classList.remove("has-error");
      group.classList.add("is-valid");
    } else {
      group.classList.remove("is-valid");
      group.classList.add("has-error");
    }
  }

  function clearAllStatus(form) {
    var groups = form.querySelectorAll(".contacto__form-group");
    groups.forEach(function (grp) {
      grp.classList.remove("is-valid");
      grp.classList.remove("has-error");
    });
  }

  /**
   * 2. Botón Copiar Correo al Portapapeles
   */
  function initCopyEmail() {
    var copyBtn = document.getElementById("contacto-copy-email");
    if (!copyBtn) return;

    var emailToCopy = "semillerolocxue@gmail.com";

    copyBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      var copyTextSpan = copyBtn.querySelector(".contacto__copy-text");

      function showSuccess() {
        copyBtn.classList.add("is-copied");
        if (copyTextSpan) copyTextSpan.textContent = "¡Copiado!";
        setTimeout(function () {
          copyBtn.classList.remove("is-copied");
          if (copyTextSpan) copyTextSpan.textContent = "Copiar";
        }, 2200);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(emailToCopy).then(showSuccess).catch(function () {
          fallbackCopyText(emailToCopy);
          showSuccess();
        });
      } else {
        fallbackCopyText(emailToCopy);
        showSuccess();
      }
    });

    function fallbackCopyText(text) {
      var textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        // Fallback silencioso
      }
      document.body.removeChild(textArea);
    }
  }

  /**
   * 3. Botón "Subir" del Footer
   */
  function initScrollToTop() {
    var btn = document.getElementById("footer-scroll-top");
    if (!btn) return;

    btn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /**
   * 4. Animaciones de Revelación Progresiva (IntersectionObserver)
   */
  function initScrollReveal() {
    var section = document.getElementById("contacto");
    if (!section) return;

    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    section.setAttribute("data-js-ready", "");

    var targets = section.querySelectorAll(".contacto__card, .contacto__social-card, .contacto__location-box, .contacto__header");
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
      { threshold: 0.12, rootMargin: "0px 0px -25px 0px" }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
