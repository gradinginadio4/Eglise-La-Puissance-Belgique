/* =========================================================================
   partials.js — Source UNIQUE des éléments d'habillage répétés sur le site.
   Injecte : en-tête + menu mobile (mount "header") et barre sticky + pied
   de page (mount "footer"). Modifier la navigation ou le pied ICI seulement.

   Fonctionnement : chargé en "defer" AVANT main.js. Au parse terminé, il
   remplit les points de montage <div data-partial="..."></div>, puis main.js
   (defer, exécuté ensuite) relie les interactions. Le contenu indexable des
   pages reste en HTML statique : seuls nav et pied sont injectés.

   Les jetons {{...}} sont volontairement conservés : ils seront substitués
   par le mécanisme de configuration (lot suivant). main.js et partials.js
   doivent donc être inclus dans le périmètre de substitution.
   ========================================================================= */
(function () {
  'use strict';

  /* Liens de navigation — ordre = arborescence validée */
  var NAV = [
    { href: 'index.html',            label: 'Accueil' },
    { href: 'qui-sommes-nous.html',  label: 'Qui sommes-nous' },
    { href: 'premiere-visite.html',  label: 'Première visite', priority: true },
    { href: 'vie-de-leglise.html',   label: "Vie de l'église" },
    { href: 'medias.html',           label: 'Médias' },
    { href: 'mimpliquer.html',       label: "M'impliquer" },
    { href: 'contact.html',          label: 'Contact' }
  ];

  /* Page courante (nom de fichier ; défaut = index.html) */
  var current = location.pathname.split('/').pop() || 'index.html';
  if (current === '') current = 'index.html';

  function isCurrent(href) { return href === current; }

  /* ---- ICÔNES (inline, zéro requête) ---- */
  var ICON_WHATSAPP = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
  var ICON_PIN = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>';
  var ICON_WA_SMALL = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
  var ICON_PRAY = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';

  /* ---- EN-TÊTE + MENU MOBILE ---- */
  function buildHeader() {
    var desktopLinks = NAV.map(function (n) {
      return '<li><a href="' + n.href + '"' + (isCurrent(n.href) ? ' aria-current="page"' : '') + '>' + n.label + '</a></li>';
    }).join('');

    var overlayLinks = NAV.map(function (n) {
      var cls = n.priority ? ' class="menu-overlay__highlight"' : '';
      return '<li><a href="' + n.href + '"' + cls + (isCurrent(n.href) ? ' aria-current="page"' : '') + '>' + n.label + '</a></li>';
    }).join('');

    return '' +
    '<header class="navbar" role="banner">' +
    '  <div class="navbar__inner container">' +
    '    <a href="index.html" class="navbar__logo" aria-label="Accueil — Église La Puissance Bruxelles">' +
    '      <img src="assets/img/placeholders/logo.svg" alt="Logo Église La Puissance Bruxelles" width="160" height="40" loading="eager">' +
    '    </a>' +
    '    <button class="navbar__toggle" aria-expanded="false" aria-controls="menu-overlay" aria-label="Ouvrir le menu de navigation">' +
    '      <span class="navbar__toggle-bar"></span><span class="navbar__toggle-bar"></span><span class="navbar__toggle-bar"></span>' +
    '    </button>' +
    '    <nav class="navbar__desktop-nav" aria-label="Navigation principale">' +
    '      <ul class="navbar__links">' + desktopLinks + '</ul>' +
    '      <a href="premiere-visite.html" class="btn btn--primary">Venez dimanche</a>' +
    '    </nav>' +
    '  </div>' +
    '</header>' +
    '<div id="menu-overlay" class="menu-overlay" role="dialog" aria-modal="true" aria-label="Menu de navigation" hidden>' +
    '  <div class="menu-overlay__inner">' +
    '    <button class="menu-overlay__close" aria-label="Fermer le menu"><span aria-hidden="true">✕</span> Fermer</button>' +
    '    <nav aria-label="Navigation mobile"><ul class="menu-overlay__links">' + overlayLinks + '</ul></nav>' +
    '    <div class="menu-overlay__socials">' +
    '      <a href="https://wa.me/32493942798" class="menu-overlay__social menu-overlay__social--whatsapp" aria-label="Contacter l\'église La Puissance Bruxelles sur WhatsApp" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">💬</span> WhatsApp</a>' +
    '      <a href="https://www.facebook.com/share/1AjnWAqgMp/" class="menu-overlay__social" aria-label="Facebook" target="_blank" rel="noopener noreferrer">FB</a>' +
    '      <a href="https://www.instagram.com/VOTRE_COMPTE" class="menu-overlay__social" aria-label="Instagram" target="_blank" rel="noopener noreferrer">IG</a>' +
    '      <a href="https://www.youtube.com/channel/UC2S53PaiXAZHaEvGb1-PZQg" class="menu-overlay__social" aria-label="YouTube" target="_blank" rel="noopener noreferrer">YT</a>' +
    '      <a href="https://www.tiktok.com/@VOTRE_COMPTE" class="menu-overlay__social" aria-label="TikTok" target="_blank" rel="noopener noreferrer">TT</a>' +
    '    </div>' +
    '  </div>' +
    '</div>';
  }

  /* ---- BARRE STICKY + PIED DE PAGE ---- */
  function buildFooter() {
    return '' +
    '<div class="sticky-bottom-bar js-sticky-bottom-bar" role="navigation" aria-label="Actions rapides">' +
    '  <a href="premiere-visite.html">' + ICON_PIN + '<span>Venir</span></a>' +
    '  <a href="https://wa.me/32493942798" target="_blank" rel="noopener noreferrer" aria-label="Contacter l\'église La Puissance Bruxelles sur WhatsApp">' + ICON_WA_SMALL + '<span>WhatsApp</span></a>' +
    '  <a href="mimpliquer.html#demande-de-priere">' + ICON_PRAY + '<span>Prier</span></a>' +
    '</div>' +
    '<footer class="footer" role="contentinfo">' +
    '  <div class="container">' +
    '    <div class="footer__top">' +
    '      <a href="index.html" class="footer__logo" aria-label="Accueil"><img src="assets/img/placeholders/logo-footer.svg" alt="Logo Église La Puissance Bruxelles" width="140" height="35" loading="lazy"></a>' +
    '      <div class="footer__socials">' +
    '        <a href="https://www.facebook.com/share/1AjnWAqgMp/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">FB</a>' +
    '        <a href="https://www.instagram.com/VOTRE_COMPTE" aria-label="Instagram" target="_blank" rel="noopener noreferrer">IG</a>' +
    '        <a href="https://www.youtube.com/channel/UC2S53PaiXAZHaEvGb1-PZQg" aria-label="YouTube" target="_blank" rel="noopener noreferrer">YT</a>' +
    '        <a href="https://www.tiktok.com/@VOTRE_COMPTE" aria-label="TikTok" target="_blank" rel="noopener noreferrer">TT</a>' +
    '      </div>' +
    '    </div>' +
    '    <p class="footer__legal">© 2026 Église La Puissance Bruxelles</p>' +
    '    <nav class="footer__links" aria-label="Liens légaux">' +
    '      <a href="mentions-legales.html">Mentions légales</a><span aria-hidden="true">·</span>' +
    '      <a href="politique-confidentialite.html">Politique de confidentialité</a><span aria-hidden="true">·</span>' +
    '      <a href="politique-confidentialite.html#cookies">Cookies</a>' +
    '    </nav>' +
    '  </div>' +
    '</footer>';
  }

  function mount(name, html) {
    var el = document.querySelector('[data-partial="' + name + '"]');
    if (el) el.outerHTML = html;
  }

  mount('header', buildHeader());
  mount('footer', buildFooter());
})();
