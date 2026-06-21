/* ============================================
   Église La Puissance Bruxelles — Main JS
   Vanilla JS uniquement — aucune librairie externe
   ============================================ */

(function() {
  'use strict';

  /* ——— Menu Overlay ——— */
  const menuToggle = document.querySelector('.navbar__toggle');
  const menuOverlay = document.getElementById('menu-overlay');
  const menuClose = document.querySelector('.menu-overlay__close');
  const menuLinks = document.querySelectorAll('.menu-overlay__links a');

  function openMenu() {
    if (!menuOverlay) return;
    menuOverlay.hidden = false;
    // Force reflow for transition
    void menuOverlay.offsetWidth;
    menuOverlay.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (menuClose) menuClose.focus();
  }

  function closeMenu() {
    if (!menuOverlay) return;
    menuOverlay.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(function() {
      menuOverlay.hidden = true;
      menuToggle.focus();
    }, 400);
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      if (menuOverlay.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (menuClose) {
    menuClose.addEventListener('click', closeMenu);
  }

  menuLinks.forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuOverlay && menuOverlay.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // Close on click outside
  if (menuOverlay) {
    menuOverlay.addEventListener('click', function(e) {
      if (e.target === menuOverlay) {
        closeMenu();
      }
    });
  }

  /* ——— Sticky Bottom Bar ——— */
  const stickyBar = document.querySelector('.sticky-bar');
  let stickyBarVisible = false;

  function updateStickyBar() {
    if (!stickyBar) return;
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 200 && !stickyBarVisible) {
      stickyBar.classList.add('is-visible');
      stickyBarVisible = true;
    } else if (scrollY <= 200 && stickyBarVisible) {
      stickyBar.classList.remove('is-visible');
      stickyBarVisible = false;
    }
  }

  // Throttled scroll listener
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateStickyBar();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial check
  updateStickyBar();

  /* ——— Video Facade (YouTube) ——— */
  const videoFacades = document.querySelectorAll('.video-facade');

  videoFacades.forEach(function(facade) {
    const videoId = facade.getAttribute('data-video-id');
    if (!videoId) return;

    const playBtn = facade.querySelector('.play-btn');
    if (!playBtn) return;

    playBtn.addEventListener('click', function() {
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0');
      iframe.setAttribute('title', 'Lecteur vidéo YouTube');
      iframe.setAttribute('width', '100%');
      iframe.setAttribute('height', '100%');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      iframe.style.position = 'absolute';
      iframe.style.inset = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';

      facade.innerHTML = '';
      facade.appendChild(iframe);
    });
  });

  /* ——— Map Facade (Google Maps) ——— */
  const mapFacades = document.querySelectorAll('.map-facade');

  mapFacades.forEach(function(facade) {
    const btn = facade.querySelector('.map-facade__btn');
    const container = facade.querySelector('.map-facade__container');
    if (!btn || !container) return;

    const address = btn.getAttribute('data-map-address');
    if (!address) return;

    btn.addEventListener('click', function() {
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500!2d4.35!3d50.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z' + encodeURIComponent(address) + '!5e0!3m2!1sfr!2sbe!4v1');
      iframe.setAttribute('width', '100%');
      iframe.setAttribute('height', '100%');
      iframe.setAttribute('style', 'border:0;');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('loading', 'lazy');
      iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
      iframe.setAttribute('title', 'Carte Google Maps — Église La Puissance Bruxelles');

      container.innerHTML = '';
      container.appendChild(iframe);
      container.setAttribute('aria-hidden', 'false');
      btn.style.display = 'none';
    });
  });

  /* ——— Accordéon FAQ ——— */
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(function(accordion) {
    const items = accordion.querySelectorAll('.accordion__item');

    items.forEach(function(item) {
      const trigger = item.querySelector('.accordion__trigger');
      const panel = item.querySelector('.accordion__panel');
      if (!trigger || !panel) return;

      trigger.addEventListener('click', function() {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        // Close all other items in this accordion
        items.forEach(function(otherItem) {
          const otherTrigger = otherItem.querySelector('.accordion__trigger');
          const otherPanel = otherItem.querySelector('.accordion__panel');
          if (otherTrigger && otherPanel && otherTrigger !== trigger) {
            otherTrigger.setAttribute('aria-expanded', 'false');
            otherPanel.classList.remove('is-open');
          }
        });

        // Toggle current item
        trigger.setAttribute('aria-expanded', !isExpanded);
        if (!isExpanded) {
          panel.classList.add('is-open');
        } else {
          panel.classList.remove('is-open');
        }
      });
    });
  });

  /* ——— Formulaire — Validation basique ——— */
  const forms = document.querySelectorAll('form');

  forms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      let valid = true;
      const requiredInputs = form.querySelectorAll('[required]');

      requiredInputs.forEach(function(input) {
        // Remove previous error state
        input.classList.remove('form__input--error', 'form__textarea--error');
        const existingError = input.parentElement.querySelector('.form__error');
        if (existingError) existingError.remove();

        if (!input.value.trim()) {
          valid = false;
          input.classList.add(input.tagName === 'TEXTAREA' ? 'form__textarea--error' : 'form__input--error');

          const errorMsg = document.createElement('p');
          errorMsg.className = 'form__error';
          errorMsg.textContent = 'Ce champ est requis pour vous répondre';
          input.parentElement.appendChild(errorMsg);
        }
      });

      // Check RGPD checkbox
      const rgpdCheckbox = form.querySelector('input[name="rgpd_consent"]');
      if (rgpdCheckbox && !rgpdCheckbox.checked) {
        valid = false;
        const existingError = rgpdCheckbox.parentElement.querySelector('.form__error');
        if (!existingError) {
          const errorMsg = document.createElement('p');
          errorMsg.className = 'form__error';
          errorMsg.textContent = 'Veuillez accepter la politique de confidentialité pour continuer';
          rgpdCheckbox.parentElement.appendChild(errorMsg);
        }
      }

      if (!valid) {
        e.preventDefault();
      }
    });
  });

  /* ——— Smooth scroll for anchor links ——— */
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  /* -----------------------------------------------------------
     Barre d'action sticky bas-d'écran (mobile, après 200px scroll)
     Le markup est injecté par partials.js.
     ----------------------------------------------------------- */
  const bottomBar = document.querySelector('.js-sticky-bottom-bar');
  let bottomBarVisible = false;

  function updateBottomBar() {
    if (!bottomBar) return;
    if (window.innerWidth >= 1024) { bottomBar.classList.remove('is-visible'); return; }
    if (window.scrollY > 200) {
      if (!bottomBarVisible) { bottomBar.classList.add('is-visible'); bottomBarVisible = true; }
    } else if (bottomBarVisible) {
      bottomBar.classList.remove('is-visible'); bottomBarVisible = false;
    }
  }
  window.addEventListener('scroll', updateBottomBar, { passive: true });
  window.addEventListener('resize', updateBottomBar, { passive: true });
  updateBottomBar();

})();
