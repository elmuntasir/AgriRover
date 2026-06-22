/* ══════════════════════════════════════════
   AGRIROVER — Main JS
   Sidebar nav, theme toggle, page routing
   ══════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Theme ──────────────────────────────────
  const html = document.documentElement;
  const THEME_KEY = 'agrirover-theme';

  function getTheme() {
    return localStorage.getItem(THEME_KEY) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  function applyTheme(t) {
    html.setAttribute('data-theme', t);
    localStorage.setItem(THEME_KEY, t);
    // Update toggle label
    const label = document.querySelector('.toggle-label');
    if (label) label.textContent = t === 'dark' ? 'Dark Mode' : 'Light Mode';
    const icon = document.querySelector('.theme-toggle .theme-icon use');
    if (icon) icon.setAttribute('href', t === 'dark' ? '#icon-sun' : '#icon-moon');
  }

  applyTheme(getTheme());

  document.addEventListener('DOMContentLoaded', function () {
    // ── Theme toggle ──
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.addEventListener('click', function () {
        applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
      });
    }

    // ── Sidebar accordion ──
    document.querySelectorAll('.nav-link[data-toggle]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const item = this.closest('.nav-item');
        const wasOpen = item.classList.contains('open');
        // Close all
        document.querySelectorAll('.nav-item.open').forEach(function (i) {
          if (i !== item) i.classList.remove('open');
        });
        item.classList.toggle('open', !wasOpen);
      });
    });

    // ── Page routing ──
    function navigate(pageId) {
      // Hide all pages
      document.querySelectorAll('.page').forEach(function (p) {
        p.classList.remove('active');
      });
      // Show target
      const target = document.getElementById('page-' + pageId);
      if (target) target.classList.add('active');

      // Update nav active states
      document.querySelectorAll('.nav-link, .sub-nav-link').forEach(function (l) {
        l.classList.remove('active');
        if (l.dataset.page === pageId) l.classList.add('active');
      });

      // Open parent if sub-nav
      const subLink = document.querySelector('.sub-nav-link[data-page="' + pageId + '"]');
      if (subLink) {
        const parentItem = subLink.closest('.nav-item');
        if (parentItem) parentItem.classList.add('open');
      }

      // Close mobile sidebar
      closeMobileSidebar();

      // Update URL hash
      history.replaceState(null, '', '#' + pageId);
      window.scrollTo(0, 0);
    }

    // Attach nav links
    document.querySelectorAll('[data-page]').forEach(function (el) {
      if (!el.dataset.toggle) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          navigate(this.dataset.page);
        });
      }
    });

    // Initial route from hash
    const hash = window.location.hash.replace('#', '');
    navigate(hash || 'home');

    // ── Mobile sidebar ──
    const sidebar   = document.getElementById('sidebar');
    const overlay   = document.getElementById('sidebarOverlay');
    const menuBtn   = document.getElementById('mobileMenuBtn');

    function openMobileSidebar() {
      sidebar.classList.add('open');
      overlay.classList.add('visible');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileSidebar() {
      sidebar.classList.remove('open');
      overlay.classList.remove('visible');
      document.body.style.overflow = '';
    }

    if (menuBtn)  menuBtn.addEventListener('click', openMobileSidebar);
    if (overlay)  overlay.addEventListener('click', closeMobileSidebar);
  });
})();
