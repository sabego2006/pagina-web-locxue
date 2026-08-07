/* ============================================================
   SECCIÓN: Proyectos Desarrollados — Semillero LOCXUE
   ------------------------------------------------------------
   JavaScript mínimo, sin dependencias externas. Controla el
   modal de detalle de cada tarjeta ("Ver más"), con manejo de
   foco accesible (WCAG 2.1 - 2.4.3 / 2.1.2).

   Módulo autocontenido: se ejecuta solo dentro de
   #proyectos, por lo que no interfiere con el JS de otras
   secciones desarrolladas en paralelo.
   ============================================================ */

(function () {
  "use strict";

  const section = document.getElementById("proyectos");
  if (!section) return;

  /**
   * Fuente única de datos de cada proyecto/actividad.
   * Debe mantenerse sincronizada con los atributos
   * data-project de proyectos.html.
   */
  const PROYECTOS = {
    "2013-taller-scrum": {
      tag: "Formación en metodologías ágiles · Scrum",
      title: "Planeación de un taller práctico de Scrum",
      desc:
        "El 4 de abril de 2013, en la lista de correo pública de la comunidad " +
        "Ágiles Colombia, la estudiante Diana Alejandra Calderón Matallana " +
        "(Universidad de Cundinamarca) comenta que, junto a compañeros del " +
        "Semillero LOCXUE, están interesados en realizar un taller práctico " +
        "sobre Scrum, retomando una dinámica de enseñanza con tijeras y " +
        "pegante compartida en el mismo hilo. No se encontró evidencia " +
        "pública de que el taller se haya ejecutado posteriormente.",
      year: "2013",
      status: "Documentado (intercambio), sin evidencia de ejecución posterior",
      source: "https://groups.google.com/g/agiles-colombia/c/eXXRkigNL5k",
      sourceLabel: "Ver hilo original en Google Groups",
    },
    "2014-agile-open": {
      tag: "Metodologías ágiles de desarrollo de software",
      title: "Primer Agile Open Fusagasugá",
      desc:
        "El sábado 26 de abril de 2014, en las instalaciones de la Universidad " +
        "de Cundinamarca (sede Fusagasugá), se realizó el primer \u201cAgile Open " +
        "Fusagasugá\u201d: un evento abierto y gratuito bajo metodología Open " +
        "Space, organizado junto con la comunidad Ágiles Colombia. El " +
        "Semillero LOCXUE figura como canal de contacto institucional del " +
        "evento. Incluyó charlas, conversatorios y Coding Dojos sobre Scrum, " +
        "Extreme Programming, Lean, Kanban y Software Craftsmanship, con " +
        "inscripción gratuita por Eventbrite y certificado de asistencia.",
      year: "2014",
      status: "Finalizado — 26 de abril de 2014",
      source: "https://agilescolombia.org/2014/04/04/agile-open-fusagasuga/",
      sourceLabel: "Ver publicación original en agilescolombia.org",
    },
  };

  const modalRoot = section.querySelector("[data-modal-root]");
  const modalDialog = modalRoot.querySelector(".locxue-proyectos__modal-dialog");
  const modalTag = modalRoot.querySelector("[data-modal-tag]");
  const modalTitle = modalRoot.querySelector("[data-modal-title]");
  const modalDesc = modalRoot.querySelector("[data-modal-desc]");
  const modalYear = modalRoot.querySelector("[data-modal-year]");
  const modalStatus = modalRoot.querySelector("[data-modal-status]");
  const modalSource = modalRoot.querySelector("[data-modal-source]");
  const closeButtons = modalRoot.querySelectorAll("[data-modal-close], [data-modal-backdrop]");

  let lastFocusedElement = null;

  function getFocusableElements() {
    return modalDialog.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
  }

  function openModal(projectId) {
    const data = PROYECTOS[projectId];
    if (!data) return;

    modalTag.textContent = data.tag;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    modalYear.textContent = data.year;
    modalStatus.textContent = data.status;
    modalSource.href = data.source;
    modalSource.lastChild
      ? (modalSource.firstChild.textContent = data.sourceLabel + " ")
      : (modalSource.textContent = data.sourceLabel);

    lastFocusedElement = document.activeElement;
    modalRoot.hidden = false;
    document.body.style.overflow = "hidden";
    modalDialog.focus();

    document.addEventListener("keydown", handleKeydown);
  }

  function closeModal() {
    modalRoot.hidden = true;
    document.body.style.overflow = "";
    document.removeEventListener("keydown", handleKeydown);

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  function handleKeydown(event) {
    if (event.key === "Escape") {
      closeModal();
      return;
    }

    if (event.key === "Tab") {
      const focusable = Array.from(getFocusableElements());
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }

  section.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-modal-open]");
    if (trigger) {
      openModal(trigger.getAttribute("data-modal-open"));
    }
  });

  closeButtons.forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  /**
   * Animación de entrada escalonada de las tarjetas.
   * Respeta prefers-reduced-motion (ver proyectos.css).
   */
  const cards = section.querySelectorAll(".proyecto-card");
  cards.forEach((card, index) => {
    card.style.setProperty("--lx-card-delay", `${index * 90}ms`);
  });
})();
