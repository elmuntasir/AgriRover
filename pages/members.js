/* ══════════════════════════════════════════════════════════════
   AGRIROVER — Members Page
   pages/members.js

   HOW TO EDIT:
   Everything you need to change is in the CONFIG section below.
   Fill in names, pic filenames, links. Leave a field as ""
   to hide that button/element entirely.

   Photo files go in:  assets/images/members/<filename>
   ══════════════════════════════════════════════════════════════ */

/* ════════════════════════════════════════════════════════════
   ██  SUPERVISOR
   ════════════════════════════════════════════════════════════ */
var SUPERVISOR = {
  name:       "Mohammad Shidujaman, PhD",
  pic:        "assets/images/members/sidu.png",
  role:       "Supervisor",
  title:      "Assistant Professor",
  dept:       "Department of Computer Science & Engineering",
  university: "Independent University, Bangladesh",
  research:   "Explainable Artificial Intelligence and Robotics, Human Computer Interaction, Human Robot Interaction",
  email:      "",       /* e.g. "shidu@iub.edu.bd" */
  website:    "",       /* faculty page URL */
  linkedin:   "",
  rg:         "",       /* ResearchGate profile URL */
};

/* ════════════════════════════════════════════════════════════
   ██  MEMBER 1
   ════════════════════════════════════════════════════════════ */
var MEMBER1 = {
  name:     "Md Muntasir Rahman Rafin",
  pic:      "assets/images/members/muntasir.jpg",
  role:     "Team Lead · AI & Software",
  quote:    "Building the future of farming, one line of code at a time.",
  github:   "https://github.com/elmuntasir",
  fb:       "https://www.facebook.com/mun.rafin/",
  linkedin: "https://www.linkedin.com/in/munrafin/",
  rg:       "",
};

/* ════════════════════════════════════════════════════════════
   ██  MEMBER 2
   ════════════════════════════════════════════════════════════ */
var MEMBER2 = {
  name:     "Tahura Anzum Toa",
  pic:      "assets/images/members/toa.jpg",
  role:     "Hardware & Embedded Systems",
  quote:    "Every circuit is a conversation between power and precision.",
  github:   "https://github.com/tahura98",
  ID:       "2230230",
  linkedin: "https://www.linkedin.com/in/tahura-anzum-toa-33194826a/",
  rg:       "",
};

/* ════════════════════════════════════════════════════════════
   ██  MEMBER 3
   ════════════════════════════════════════════════════════════ */
var MEMBER3 = {
  name:     "Member 3 Name",
  pic:      "assets/images/members/moba.jpg",
  role:     "Role / Responsibility",
  quote:    "Your quote here.",
  github:   "",
  fb:       "",
  linkedin: "",
  rg:       "",
};

/* ════════════════════════════════════════════════════════════
   ██  MEMBER 4
   ════════════════════════════════════════════════════════════ */
var MEMBER4 = {
  name:     "Member 4 Name",
  pic:      "assets/images/members/m4.jpg",
  role:     "Role / Responsibility",
  quote:    "Your quote here.",
  github:   "",
  fb:       "",
  linkedin: "",
  rg:       "",
};

/* ════════════════════════════════════════════════════════════
   ██  MEMBER 5
   ════════════════════════════════════════════════════════════ */
var MEMBER5 = {
  name:     "Member 5 Name",
  pic:      "assets/images/members/m5.jpg",
  role:     "Role / Responsibility",
  quote:    "Your quote here.",
  github:   "",
  fb:       "",
  linkedin: "",
  rg:       "",
};

/* ════════════════════════════════════════════════════════════
   RENDER ENGINE — no need to edit below this line
   ════════════════════════════════════════════════════════════ */
(function () {

  var ICONS = {
    github:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    rg:       '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 00-.112.437 8.01 8.01 0 00-.078.53 9.68 9.68 0 00-.05.629c-.016.223-.023.445-.023.677 0 .217.006.43.018.637.013.207.03.408.054.6.024.194.056.374.097.54.04.165.09.31.15.43a2.1 2.1 0 00.45.65c.196.185.432.33.709.437.277.107.588.16.935.16.345 0 .656-.053.933-.16a2.034 2.034 0 001.155-1.086c.063-.12.113-.266.153-.43.04-.166.073-.347.098-.54a6.79 6.79 0 00.052-.601 9.593 9.593 0 00.018-.637c0-.232-.008-.454-.024-.677a9.677 9.677 0 00-.05-.63 7.977 7.977 0 00-.077-.53 3.193 3.193 0 00-.112-.436c-.244-.744-.65-1.303-1.214-1.68C21.094.19 20.404 0 19.586 0zm-15.17 0C2.01 0 .01 1.997.01 4.4c0 2.402 1.998 4.4 4.406 4.4 2.408 0 4.406-1.998 4.406-4.4C8.822 1.997 6.824 0 4.416 0zm6.336 10.24v13.52h1.44V17.6h3.12c.456 0 .83.04 1.122.122.292.082.52.213.685.394.164.181.283.42.355.717.072.297.107.657.107 1.08v1.12c0 .305.012.562.037.77.025.207.067.39.127.548h1.496a3.6 3.6 0 01-.153-.622 7.133 7.133 0 01-.067-.726v-1.12c0-.606-.1-1.116-.299-1.528-.199-.412-.535-.726-1.007-.944.44-.21.776-.505 1.006-.886.23-.38.345-.852.345-1.413 0-.44-.074-.833-.222-1.18a2.448 2.448 0 00-.638-.893 2.88 2.88 0 00-1-.558 4.094 4.094 0 00-1.311-.2h-4.944zm-10.172 0v13.52h8.812V10.24H.01zm1.44 1.44h5.932v10.64H1.45V11.68zm9.332 0h3.384c.408 0 .756.054 1.043.162.287.108.52.257.697.448.176.19.307.41.39.655.083.245.124.51.124.793 0 .598-.174 1.069-.52 1.415-.348.346-.85.518-1.51.518h-3.608V11.68z"/></svg>',
    email:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    globe:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
  };

  function initials(name) {
    return name.split(' ').filter(Boolean).map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase();
  }

  function photoEl(src, name) {
    var img = document.createElement('img');
    img.src = src;
    img.alt = name;
    img.onerror = function () {
      var fb = document.createElement('div');
      fb.className = 'photo-fallback';
      fb.textContent = initials(name);
      this.parentNode.replaceChild(fb, this);
    };
    return img;
  }

  function linkEl(href, iconHtml, label) {
    if (!href) return null;
    var a = document.createElement('a');
    a.className = 'member-link';
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = iconHtml + '<span>' + label + '</span>';
    return a;
  }

  function appendLinks(container, pairs) {
    pairs.forEach(function (p) { if (p) container.appendChild(p); });
  }

  /* ── Supervisor ── */
  function buildSupervisor() {
    var sv   = SUPERVISOR;
    var wrap = document.getElementById('supervisor-block');
    if (!wrap) return;

    var fw = document.createElement('div');
    fw.className = 'supervisor-frame-wrap';
    fw.appendChild(photoEl(sv.pic, sv.name));
    wrap.appendChild(fw);

    var badge = document.createElement('div');
    badge.className = 'supervisor-badge';
    badge.textContent = sv.role || 'Supervisor';
    wrap.appendChild(badge);

    var nm = document.createElement('div');
    nm.className = 'supervisor-name';
    nm.textContent = sv.name;
    wrap.appendChild(nm);

    if (sv.title) {
      var t = document.createElement('div');
      t.className = 'supervisor-title';
      t.textContent = sv.title;
      wrap.appendChild(t);
    }

    if (sv.dept) {
      var d = document.createElement('div');
      d.className = 'supervisor-dept';
      d.textContent = sv.dept + (sv.university ? ' · ' + sv.university : '');
      wrap.appendChild(d);
    }

    if (sv.research) {
      var r = document.createElement('div');
      r.className = 'supervisor-research';
      r.innerHTML = '<strong>Research Area</strong>' + sv.research;
      wrap.appendChild(r);
    }

    var sl = document.createElement('div');
    sl.className = 'supervisor-links';
    appendLinks(sl, [
      linkEl(sv.email    ? 'mailto:' + sv.email : '', ICONS.email,    'Email'),
      linkEl(sv.website,                              ICONS.globe,    'Website'),
      linkEl(sv.linkedin,                             ICONS.linkedin, 'LinkedIn'),
      linkEl(sv.rg,                                   ICONS.rg,       'ResearchGate'),
    ]);
    if (sl.children.length) wrap.appendChild(sl);
  }

  /* ── Member card ── */
  function buildMember(data, idx) {
    var card = document.createElement('div');
    card.className = 'member-card' + (idx % 2 === 0 ? ' flip' : '');

    /* Photo col */
    var pc = document.createElement('div');
    pc.className = 'member-photo-col';

    var fr = document.createElement('div');
    fr.className = 'member-frame';
    fr.appendChild(photoEl(data.pic, data.name));

    var nb = document.createElement('div');
    nb.className = 'member-number';
    nb.textContent = (idx < 10 ? '0' : '') + idx;
    fr.appendChild(nb);
    pc.appendChild(fr);

    /* Info col */
    var ic = document.createElement('div');
    ic.className = 'member-info-col';

    var il = document.createElement('div');
    il.className = 'member-index-label';
    il.textContent = 'Member ' + idx;
    ic.appendChild(il);

    var nm = document.createElement('div');
    nm.className = 'member-name';
    nm.textContent = data.name;
    ic.appendChild(nm);

    var rl = document.createElement('div');
    rl.className = 'member-role';
    rl.textContent = data.role;
    ic.appendChild(rl);

    if (data.quote) {
      var q = document.createElement('div');
      q.className = 'member-quote';
      q.textContent = data.quote;
      ic.appendChild(q);
    }

    var ml = document.createElement('div');
    ml.className = 'member-links';
    appendLinks(ml, [
      linkEl(data.github,   ICONS.github,   'GitHub'),
      linkEl(data.linkedin, ICONS.linkedin, 'LinkedIn'),
      linkEl(data.fb,       ICONS.facebook, 'Facebook'),
      linkEl(data.rg,       ICONS.rg,       'ResearchGate'),
    ]);
    if (ml.children.length) ic.appendChild(ml);

    card.appendChild(pc);
    card.appendChild(ic);
    return card;
  }

  /* ── Init on DOM ready ── */
  document.addEventListener('DOMContentLoaded', function () {
    buildSupervisor();
    var list = document.getElementById('members-list');
    if (!list) return;
    [MEMBER1, MEMBER2, MEMBER3, MEMBER4, MEMBER5].forEach(function (m, i) {
      if (m) list.appendChild(buildMember(m, i + 1));
    });
  });

})();
