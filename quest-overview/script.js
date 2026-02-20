(function () {
  'use strict';

  // ----- Mobile nav toggle -----
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-label', navLinks.classList.contains('is-open') ? 'Menu sluiten' : 'Menu openen');
    });
  }

  // ----- Collapsible sections -----
  var sectionTitles = document.querySelectorAll('.section-collapsible .section-title');
  sectionTitles.forEach(function (title) {
    title.addEventListener('click', function () {
      var section = title.closest('.section');
      if (section) section.classList.toggle('is-collapsed');
    });
  });

  // ----- Smooth scroll for nav links (enhance native scroll) -----
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navLinks && navLinks.classList.contains('is-open')) {
          navLinks.classList.remove('is-open');
        }
      }
    });
  });

  // ----- Roadmap step: click toggles description (for touch + hover) -----
  document.querySelectorAll('.roadmap-step[data-desc]').forEach(function (step) {
    step.addEventListener('click', function () {
      this.classList.toggle('is-expanded');
    });
  });
})();
