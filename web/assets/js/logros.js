/**
 * ==========================================================================
 * MÓDULO: 05 - LOGROS, RECONOCIMIENTOS Y EVENTOS (LOCXUE)
 * ==========================================================================
 */

(function () {
  'use strict';

  function initCategoryFilters() {
    var filterBtns = document.querySelectorAll('.logros-eventos-module .lem-filter-btn');
    var eventCards = document.querySelectorAll('.logros-eventos-module .lem-event-card');

    if (!filterBtns.length || !eventCards.length) return;

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var category = btn.getAttribute('data-filter');

        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        eventCards.forEach(function (card) {
          var cardCategory = card.getAttribute('data-category');
          if (category === 'todos' || cardCategory === category) {
            card.style.display = 'flex';
            setTimeout(function () {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(function () {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  function initAnimatedCounters() {
    var counters = document.querySelectorAll('.logros-eventos-module .lem-stat-card__number');
    if (!counters.length) return;

    var hasAnimated = false;

    function animate() {
      counters.forEach(function (counter) {
        var target = parseInt(counter.getAttribute('data-target'), 10);
        var prefix = counter.getAttribute('data-prefix') || '';
        var suffix = counter.getAttribute('data-suffix') || '';
        var duration = 1500;
        var start = 0;
        var stepTime = Math.abs(Math.floor(duration / target));

        var timer = setInterval(function () {
          start += 1;
          counter.textContent = prefix + start + suffix;
          if (start >= target) {
            counter.textContent = prefix + target + suffix;
            clearInterval(timer);
          }
        }, Math.max(stepTime, 30));
      });
    }

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            animate();
          }
        });
      }, { threshold: 0.3 });

      var statsSection = document.querySelector('.logros-eventos-module .lem-stats-grid');
      if (statsSection) observer.observe(statsSection);
    } else {
      animate();
    }
  }

  function initEvidenceModal() {
    var modal = document.getElementById('lem-evidence-modal');
    var closeBtn = document.getElementById('lem-modal-close');
    var modalTitle = document.getElementById('lem-modal-title');
    var modalFiles = document.getElementById('lem-modal-files');
    var openBtns = document.querySelectorAll('.logros-eventos-module .lem-btn-evidence');

    if (!modal || !openBtns.length) return;

    openBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var eventName = btn.getAttribute('data-event-title') || 'Evidencia Fotográfica';
        var filesStr = btn.getAttribute('data-files') || '';
        var files = filesStr.split(',').map(function (f) { return f.trim(); });

        if (modalTitle) modalTitle.textContent = eventName;
        if (modalFiles) {
          modalFiles.innerHTML = '';
          files.forEach(function (file) {
            if (file) {
              var li = document.createElement('li');
              li.className = 'lem-modal__file-item';
              li.innerHTML = 
                '<div style="width: 100%;">' +
                  '<img src="assets/img/' + file + '" alt="' + file + '" style="max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 0.5rem; display: block;" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">' +
                  '<div class="lem-gallery-card__fallback" style="display: none; padding: 1.5rem; border: 1px dashed #CBD5E1; border-radius: 8px;">' +
                    '<span class="lem-gallery-card__fallback-icon">🖼️</span>' +
                    '<span class="lem-gallery-card__fallback-text">Fotografía pendiente de incorporar</span>' +
                    '<span class="lem-gallery-card__fallback-file">' + file + '</span>' +
                  '</div>' +
                '</div>';
              modalFiles.appendChild(li);
            }
          });
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initCategoryFilters();
      initAnimatedCounters();
      initEvidenceModal();
    });
  } else {
    initCategoryFilters();
    initAnimatedCounters();
    initEvidenceModal();
  }
})();
