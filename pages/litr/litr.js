/* ══════════════════════════════════════════════════════════════
   AGRIROVER — Literature Review Render Engine
   pages/litr/litr.js

   This file is the shared renderer. It reads from each member's
   data file (e.g. litr-m1.js) and builds the page automatically.
   Members never touch this file.
   ══════════════════════════════════════════════════════════════ */

function renderLitrPage(pageId, reviewerData, papers) {
  var el = document.getElementById(pageId);
  if (!el) return;

  /* ── Reviewer header ── */
  function reviewerHeader() {
    var photoHTML;
    if (reviewerData.pic) {
      photoHTML = `<img class="litr-reviewer-photo"
        src="${reviewerData.pic}" alt="${reviewerData.name}"
        onerror="this.outerHTML='<div class=\\'litr-reviewer-fallback\\'>${initials(reviewerData.name)}</div>'">`;
    } else {
      photoHTML = `<div class="litr-reviewer-fallback">${initials(reviewerData.name)}</div>`;
    }

    return `
      <div class="litr-reviewer">
        ${photoHTML}
        <div class="litr-reviewer-info">
          <div class="litr-reviewer-name">${reviewerData.name}</div>
          <div class="litr-reviewer-role">${reviewerData.role || 'Literature Reviewer'}</div>
          ${reviewerData.summary
            ? `<div class="litr-reviewer-summary">${reviewerData.summary}</div>`
            : ''}
        </div>
        <div class="litr-paper-count">
          <strong>${papers.length}</strong>
          paper${papers.length !== 1 ? 's' : ''}<br>reviewed
        </div>
      </div>`;
  }

  /* ── Single paper card ── */
  function paperCard(paper, idx) {
    var findings = (paper.findings || []).map(function (f) {
      return `<div class="litr-finding-item">${f}</div>`;
    }).join('');

    var tags = (paper.tags || []).map(function (t) {
      return `<span class="litr-tag">${t}</span>`;
    }).join('');

    var doi = paper.doi
      ? `<a class="litr-doi" href="${paper.doi.startsWith('http') ? paper.doi : 'https://doi.org/' + paper.doi}"
           target="_blank" rel="noopener">DOI ↗</a>`
      : '';

    return `
      <div class="litr-card">
        <div class="litr-card-num">Paper ${idx + 1}</div>
        <div class="litr-card-title">${paper.title}</div>
        <div class="litr-card-meta">
          <span class="litr-meta-authors">${paper.authors}</span>
          <span class="litr-meta-year">${paper.year}</span>
          ${paper.journal ? `<span class="litr-meta-journal">${paper.journal}</span>` : ''}
        </div>
        ${paper.abstract
          ? `<div class="litr-card-abstract">${paper.abstract}</div>`
          : ''}
        ${findings
          ? `<div class="litr-findings">
               <div class="litr-findings-label">Key Findings</div>
               <div class="litr-findings-list">${findings}</div>
             </div>`
          : ''}
        <div class="litr-card-footer">
          <div class="litr-tags">${tags}</div>
          ${doi}
        </div>
      </div>`;
  }

  /* ── Empty state ── */
  function emptyState() {
    return `<div class="litr-empty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
      </svg>
      No papers added yet. Edit the data file to add literature reviews.
    </div>`;
  }

  /* ── Build page ── */
  el.innerHTML = `
    <div class="page-header">
      <div class="page-eyebrow">Literature Review</div>
      <h1 class="page-title">${reviewerData.name}</h1>
      <p class="page-subtitle">${reviewerData.subtitle || 'Individual literature review contribution — CSE 426, AgriRover.'}</p>
    </div>

    ${reviewerHeader()}

    <div class="section-block">
      <h2 class="section-heading">Papers Reviewed</h2>
      ${papers.length > 0
        ? `<div class="litr-list">${papers.map(paperCard).join('')}</div>`
        : emptyState()}
    </div>`;
}

/* ── Utility ── */
function initials(name) {
  return (name || '').split(' ').filter(Boolean).map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase();
}
