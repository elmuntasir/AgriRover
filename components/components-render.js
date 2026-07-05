/* ══════════════════════════════════════════════════════════════
   AGRIROVER — Component List Render Engine
   components/components-render.js

   This is the shared renderer. It reads the COMPONENTS array from
   component-template.js and builds the Component Details page
   automatically. You shouldn't need to edit this file — add your
   parts in component-template.js instead.
   ══════════════════════════════════════════════════════════════ */

function renderComponentsPage(pageId, components) {
  var el = document.getElementById(pageId);
  if (!el) return;

  components = components || [];

  /* ── Placeholder icon shown when a photo is missing/broken ── */
  function placeholderSVG() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>`;
  }

  /* ── Single component card ── */
  function componentCard(c, idx) {
    var imgHTML = c.pic
      ? `<img src="${c.pic}" alt="${c.name}"
           onerror="this.parentNode.classList.add('comp-img-wrap-empty');this.remove()">`
      : '';

    var qty = (c.qty && Number(c.qty) > 0) ? Number(c.qty) : 1;
    var unit = parseFloat(String(c.unitPrice).replace(/[^\d.]/g, ''));
    var hasPrice = c.unitPrice !== undefined && c.unitPrice !== '' && !isNaN(unit);
    var total = hasPrice ? unit * qty : 0;

    var priceHTML = '';
    if (hasPrice) {
      priceHTML = qty > 1
        ? `<div class="comp-price-badge">
             <span class="comp-price-total">৳ ${total.toLocaleString()}</span>
             <span class="comp-price-breakdown">${qty} × ৳${unit.toLocaleString()}</span>
           </div>`
        : `<div class="comp-price-badge">৳ ${unit.toLocaleString()}</div>`;
    }

    return `
      <div class="comp-card">
        <div class="comp-img-wrap${c.pic ? '' : ' comp-img-wrap-empty'}">
          ${imgHTML || placeholderSVG()}
        </div>
        <div class="comp-info">
          <div class="comp-info-top">
            <div>
              <div class="comp-name">${c.name || 'Unnamed Component'}${qty > 1 ? ` <span class="comp-qty-tag">×${qty}</span>` : ''}</div>
              ${c.model ? `<div class="comp-model">${c.model}</div>` : ''}
            </div>
            ${priceHTML}
          </div>
          ${c.function ? `
            <div class="comp-row">
              <div class="comp-label">Function</div>
              <div class="comp-text">${c.function}</div>
            </div>` : ''}
          ${c.usecase ? `
            <div class="comp-row">
              <div class="comp-label">Use Case</div>
              <div class="comp-text">${c.usecase}</div>
            </div>` : ''}
        </div>
      </div>`;
  }

  /* ── Empty state ── */
  function emptyState() {
    return `<div class="comp-empty">
      ${placeholderSVG()}
      No components added yet. Add them in components/component-template.js.
    </div>`;
  }

  /* ── Total cost (qty × unit price, summed across all components) ── */
  var total = components.reduce(function (sum, c) {
    var qty = (c.qty && Number(c.qty) > 0) ? Number(c.qty) : 1;
    var unit = parseFloat(String(c.unitPrice).replace(/[^\d.]/g, ''));
    return sum + (isNaN(unit) ? 0 : unit * qty);
  }, 0);

  /* ── Build page ── */
  el.innerHTML = `
    <div class="page-header">
      <div class="page-eyebrow">Hardware</div>
      <h1 class="page-title">Component List</h1>
      <p class="page-subtitle">Every part used in the AgriRover build — photo, function, use case, and price.</p>
    </div>

    <div class="section-block">
      <h2 class="section-heading">Components (${components.length})</h2>
      ${components.length > 0
      ? `<div class="comp-list">${components.map(componentCard).join('')}</div>`
      : emptyState()}
      ${components.length > 0 && total > 0
      ? `<div class="comp-total">
             <span class="comp-total-label">Total Cost</span>
             <span class="comp-total-value">৳ ${total.toLocaleString()}</span>
           </div>`
      : ''}
    </div>`;
}