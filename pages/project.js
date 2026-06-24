/* ══════════════════════════════════════════════════════════════
   AGRIROVER — Project Pages
   pages/project.js
   Covers: Vision & Goals, Methodology, Survey Data,
           Results, Future Work, Weekly Updates
   ══════════════════════════════════════════════════════════════ */

(function () {

  /* ════════════════════════════════════════════════════════════
     VISION & GOALS — page-vision
     ════════════════════════════════════════════════════════════ */
  function buildVision() {
    var el = document.getElementById('page-vision');
    if (!el) return;
    el.innerHTML = `
      <div class="page-header">
        <div class="page-eyebrow">Project</div>
        <h1 class="page-title">Vision &amp; Goals</h1>
        <p class="page-subtitle">What AgriRover aims to achieve and the benefits it delivers.</p>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Primary Vision</h2>
        <div class="abstract-box">
          The primary goal of AgriRover is to develop an autonomous agricultural rover capable of
          reducing unnecessary herbicide and pesticide usage through AI-assisted precision farming.
          Rather than blanket-spraying entire fields, AgriRover surveys, detects, maps, and treats
          only the affected areas — protecting healthy crops and minimising environmental impact.
        </div>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Rover Goals</h2>
        <div class="goal-list">
          ${[
            ['Survey crop fields using an onboard camera (OV2640) and GPS module (NEO-6M).'],
            ['Detect weeds, pest nests, and unhealthy crops using YOLOv8 computer vision.'],
            ['Send captured images and sensor data to a laptop-based control room via Wi-Fi.'],
            ['Generate a real-time digital field map of all detected anomalies (GPS-tagged).'],
            ['Optimize the treatment route using a TSP/VRP solver to minimise distance and battery use.'],
            ['Execute targeted weed cutting (blade module) and spot spraying (peristaltic pump) only where needed.'],
          ].map(([t], i) => `
            <div class="goal-item">
              <span class="goal-num">0${i + 1}</span>
              <span class="goal-text">${t}</span>
            </div>`).join('')}
        </div>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Benefits</h2>
        <div class="benefits-grid">
          ${[
            ['🌿', 'Reduced Chemical Usage',    'Targeted spraying cuts herbicide and pesticide consumption dramatically versus blanket methods.'],
            ['🌍', 'Environmental Protection',  'Minimises agrochemical runoff, soil contamination, and long-term ecosystem damage.'],
            ['🌾', 'Crop Safety',               'Healthy crops are never unnecessarily exposed to chemicals — only anomaly zones are treated.'],
            ['💰', 'Lower Operational Cost',    'Farmers save on chemical procurement and labour through intelligent route optimisation.'],
            ['🔋', 'Battery Efficiency',        'TSP/VRP route planning reduces rover travel distance and extends per-charge field coverage.'],
            ['🗺️', 'Digital Field Records',     'GPS-tagged field maps provide historical data for future crop monitoring and planning.'],
            ['🤖', 'Scalable Platform',         'Architecture supports future multi-rover swarm deployments for larger agricultural estates.'],
          ].map(([icon, title, desc]) => `
            <div class="benefit-card">
              <div class="benefit-icon">${icon}</div>
              <div class="benefit-title">${title}</div>
              <div class="benefit-desc">${desc}</div>
            </div>`).join('')}
        </div>
      </div>`;
  }

  /* ════════════════════════════════════════════════════════════
     METHODOLOGY — page-methodology
     ════════════════════════════════════════════════════════════ */
  function buildMethodology() {
    var el = document.getElementById('page-methodology');
    if (!el) return;
    el.innerHTML = `
      <div class="page-header">
        <div class="page-eyebrow">Project</div>
        <h1 class="page-title">Methodology</h1>
        <p class="page-subtitle">System design, workflow, and the technical approach behind AgriRover.</p>
      </div>

      <div class="section-block">
        <h2 class="section-heading">System Overview</h2>
        <div class="abstract-box">
          AgriRover operates as a two-unit system: the <strong>Rover Unit</strong> handles physical
          sensing and actuation in the field, while the <strong>Control Room</strong> (laptop/server)
          handles AI inference, field mapping, route optimisation, and command dispatch.
          Communication between the units is handled via WebSocket over a Wi-Fi hotspot.
        </div>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Workflow Pipeline</h2>
        <div class="method-steps">
          ${[
            ['01', 'Field Survey',          'The rover autonomously navigates the crop field, capturing images via the OV2640 camera and recording GPS coordinates (NEO-6M) alongside ultrasonic proximity readings.',                                          ['Camera Stream', 'GPS Tagging', 'Ultrasonic']],
            ['02', 'Data Transmission',     'Image frames and sensor data are streamed in real time to the laptop-based control room via MJPEG stream over Wi-Fi (ESP32-S3 built-in hotspot).',                                                            ['Wi-Fi', 'MJPEG Stream', 'WebSocket']],
            ['03', 'AI Detection',          'The control room runs a YOLOv8 model on incoming frames to classify anomalies into three categories: Weed, Pest, and Disease. Bounding boxes and confidence scores are logged per frame.',                    ['YOLOv8', 'Weed / Pest / Disease', 'Confidence Score']],
            ['04', 'Field Map Generation',  'Detected anomalies are plotted onto a GPS-tagged digital field map stored in a local database. The map is rendered live in the dashboard UI showing zone type and severity.',                                 ['GPS Overlay', 'Database', 'Live Dashboard']],
            ['05', 'Route Optimisation',    'A TSP/VRP solver computes the optimal treatment path through all flagged anomaly coordinates, minimising total rover travel distance and battery drain.',                                                     ['TSP Solver', 'VRP', 'Route Planning']],
            ['06', 'Targeted Actuation',    'The command dispatcher sends movement, blade, and spray instructions to the rover via WebSocket. The rover executes targeted weed cutting and spot spraying only at anomaly coordinates.',                    ['Blade Module', 'Spray Module', 'WebSocket Commands']],
          ].map(([num, title, desc, tags]) => `
            <div class="method-step">
              <div class="step-dot">${num}</div>
              <div class="step-body">
                <div class="step-title">${title}</div>
                <div class="step-desc">${desc}</div>
                <div class="step-tags">${tags.map(t => `<span class="step-tag">${t}</span>`).join('')}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Hardware Stack</h2>
        <div class="info-grid">
          ${[
            ['Microcontroller',  'ESP32-S3 (Wi-Fi built-in)'],
            ['Camera',           'OV2640'],
            ['GPS',              'NEO-6M (Serial/UART)'],
            ['Proximity',        'HC-SR04 Ultrasonic'],
            ['Motor Driver',     'L298N / BTS7960'],
            ['Drive Motors',     '4WD 12V DC Gear Motors'],
            ['Battery',          '11.1V 3S LiPo'],
            ['Blade Module',     'DC Motor + Blade'],
            ['Spray Module',     'Peristaltic Pump + Nozzle'],
          ].map(([label, val]) => `
            <div class="info-card">
              <div class="info-card-label">${label}</div>
              <div class="info-card-value">${val}</div>
            </div>`).join('')}
        </div>
      </div>`;
  }

  /* ════════════════════════════════════════════════════════════
     SURVEY DATA — page-survey
     ════════════════════════════════════════════════════════════ */
  function buildSurvey() {
    var el = document.getElementById('page-survey');
    if (!el) return;

    // Chart data from the project proposal PDF (n=80 farmers)
    var charts = [
      {
        fig:   'SURVEY FIG. 01',
        title: 'Current Weed Control Methods',
        desc:  'Distribution of primary weed management practices currently employed by respondents.',
        slices: [
          { label: 'Manual Weeding',             pct: 45, color: '#5a8f6e' },
          { label: 'Blanket Herbicide Spraying', pct: 35, color: '#e07b54' },
          { label: 'Mixed Method',               pct: 20, color: '#6aabab' },
        ],
      },
      {
        fig:   'SURVEY FIG. 02',
        title: 'Primary Farming Challenge Reported',
        desc:  'Most critical constraint identified by farmers affecting seasonal crop output.',
        slices: [
          { label: 'Weed Infestation', pct: 40, color: '#5a8f6e' },
          { label: 'Pest Attack',      pct: 30, color: '#6aabab' },
          { label: 'High Labour Cost', pct: 20, color: '#e07b54' },
          { label: 'Water Management', pct: 10, color: '#9b7fd4' },
        ],
      },
      {
        fig:   'SURVEY FIG. 03',
        title: 'Level of Concern Regarding Chemical Overuse',
        desc:  'Farmer awareness and concern about long-term environmental impact of agrochemical use.',
        slices: [
          { label: 'Very Concerned',      pct: 60, color: '#5a8f6e' },
          { label: 'Somewhat Concerned',  pct: 25, color: '#e07b54' },
          { label: 'Not Concerned',       pct: 15, color: '#6aabab' },
        ],
      },
      {
        fig:   'SURVEY FIG. 04',
        title: 'Willingness to Adopt an AI Rover System',
        desc:  'Social readiness and receptiveness toward deploying autonomous agricultural technology.',
        slices: [
          { label: 'Yes, willing to adopt',        pct: 70, color: '#5a8f6e' },
          { label: 'Maybe / Needs demonstration',  pct: 20, color: '#e07b54' },
          { label: 'No / Uncertain',               pct: 10, color: '#6aabab' },
        ],
      },
      {
        fig:   'SURVEY FIG. 05',
        title: 'Expected Primary Benefit of AgriRover Deployment',
        desc:  'Farmer-perceived value proposition of AI-based precision weed and pest control intervention.',
        slices: [
          { label: 'Reduced Chemical Usage',  pct: 40, color: '#5a8f6e' },
          { label: 'Lower Labour Cost',       pct: 25, color: '#e07b54' },
          { label: 'Higher Crop Yield',       pct: 20, color: '#6aabab' },
          { label: 'Environmental Protection',pct: 15, color: '#9b7fd4' },
        ],
      },
    ];

    function donutSVG(slices) {
      var r = 52, cx = 60, cy = 60, stroke = 22;
      var circ = 2 * Math.PI * r;
      var offset = 0;
      var paths = slices.map(function (s) {
        var dash = (s.pct / 100) * circ;
        var gap  = circ - dash;
        var seg  = `<circle cx="${cx}" cy="${cy}" r="${r}"
          fill="none" stroke="${s.color}" stroke-width="${stroke}"
          stroke-dasharray="${dash.toFixed(2)} ${gap.toFixed(2)}"
          stroke-dashoffset="${(-offset).toFixed(2)}"
          transform="rotate(-90 ${cx} ${cy})"/>`;
        offset += dash;
        return seg;
      });
      return `<svg class="donut-svg" width="120" height="120" viewBox="0 0 120 120">
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--bg3)" stroke-width="${stroke}"/>
        ${paths.join('')}
        <text x="${cx}" y="${cy - 6}" text-anchor="middle" font-family="var(--font-mono)" font-size="10" fill="var(--muted)">n =</text>
        <text x="${cx}" y="${cy + 8}" text-anchor="middle" font-family="var(--font-display)" font-size="14" font-weight="600" fill="var(--ink)">80</text>
      </svg>`;
    }

    var chartHTML = charts.map(function (c) {
      var legend = c.slices.map(function (s) {
        return `<div class="legend-item">
          <div class="legend-dot" style="background:${s.color}"></div>
          <span>${s.label}</span>
          <span class="legend-pct">${s.pct}%</span>
        </div>`;
      }).join('');

      return `<div class="survey-chart-card">
        <div class="survey-fig-label">${c.fig}</div>
        <div class="survey-chart-title">${c.title}</div>
        <div class="survey-chart-desc">${c.desc}</div>
        <div class="donut-wrap">
          ${donutSVG(c.slices)}
          <div class="legend">${legend}</div>
        </div>
      </div>`;
    });

    // Layout: 2 col for first 4, full width for 5th
    el.innerHTML = `
      <div class="page-header">
        <div class="page-eyebrow">Project</div>
        <h1 class="page-title">Survey Data</h1>
        <p class="page-subtitle">Farmer survey results (n = 80) on weed control practices, challenges, and AI adoption readiness.</p>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Context</h2>
        <div class="abstract-box">
          A structured survey was conducted with 80 farmers to develop a process for addressing
          complex engineering problems considering cultural and societal factors. The results
          informed AgriRover's design priorities and validated the need for precision, AI-assisted
          weed and pest management in the Bangladeshi agricultural context.
        </div>
      </div>

      <div class="survey-grid">
        ${chartHTML.slice(0, 4).join('')}
      </div>
      <div class="survey-grid" style="grid-template-columns:1fr">
        ${chartHTML[4]}
      </div>`;
  }

  /* ════════════════════════════════════════════════════════════
     RESULTS — page-results
     ════════════════════════════════════════════════════════════ */
  function buildResults() {
    var el = document.getElementById('page-results');
    if (!el) return;
    el.innerHTML = `
      <div class="page-header">
        <div class="page-eyebrow">Project</div>
        <h1 class="page-title">Results</h1>
        <p class="page-subtitle">Detection accuracy, field test outcomes, and performance metrics.</p>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Performance Metrics</h2>
        <div class="result-stat-grid">
          ${[
            ['—',    'Detection Accuracy',    'YOLOv8 mAP pending field validation'],
            ['—',    'False Positive Rate',   'To be measured in field trials'],
            ['—',    'Route Efficiency',      'TSP vs. naive path, pending test run'],
            ['—',    'Chemical Reduction',    'Projected vs. blanket spray baseline'],
          ].map(([val, label, note]) => `
            <div class="result-stat">
              <div class="result-stat-value">${val}</div>
              <div class="result-stat-label">${label}</div>
              <div style="font-size:.72rem;color:var(--muted);margin-top:4px;font-family:var(--font-mono)">${note}</div>
            </div>`).join('')}
        </div>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Status</h2>
        <div class="abstract-box">
          Field testing and validation is scheduled for <strong>Weeks 8–9</strong> of the project
          timeline (Jul 29 – Aug 10, 2025). Results including detection accuracy, route efficiency
          benchmarks, and chemical usage comparisons will be published here once field runs are complete.
        </div>
      </div>`;
  }

  /* ════════════════════════════════════════════════════════════
     FUTURE WORK — page-future
     ════════════════════════════════════════════════════════════ */
  function buildFuture() {
    var el = document.getElementById('page-future');
    if (!el) return;
    el.innerHTML = `
      <div class="page-header">
        <div class="page-eyebrow">Project</div>
        <h1 class="page-title">Future Work</h1>
        <p class="page-subtitle">Planned improvements and next-phase capabilities beyond the current prototype.</p>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Next Phase</h2>
        <div class="future-grid">
          ${[
            ['Phase 2', 'Multi-Rover Swarm',         'Deploy coordinated fleets of rovers across larger fields, dividing the field map into zones and assigning rovers dynamically for parallel treatment.'],
            ['Phase 2', 'Solar Power Integration',   'Replace or augment the LiPo battery with onboard solar panels to extend operational range and enable full-day autonomous runs.'],
            ['Phase 2', 'Improved AI Model',         'Expand the YOLOv8 training dataset to cover more weed species, regional pests, and crop disease classes specific to Bangladesh.'],
            ['Phase 3', 'Cloud Dashboard',           'Move the control room from a local laptop to a cloud-hosted dashboard accessible remotely by farmers via mobile app.'],
            ['Phase 3', 'Soil Sensor Integration',   'Add soil moisture, pH, and nutrient sensors to enrich the field map with agronomic data beyond visual anomalies.'],
            ['Phase 3', 'Autonomous Recharging',     'Implement docking stations in the field so rovers can autonomously return, recharge, and resume coverage without human intervention.'],
          ].map(([phase, title, desc]) => `
            <div class="future-card">
              <div class="future-phase">${phase}</div>
              <div class="future-title">${title}</div>
              <div class="future-desc">${desc}</div>
            </div>`).join('')}
        </div>
      </div>`;
  }

  /* ════════════════════════════════════════════════════════════
     WEEKLY UPDATES — page-weekly
     ════════════════════════════════════════════════════════════ */
  function buildWeekly() {
    var el = document.getElementById('page-weekly');
    if (!el) return;

    var weeks = [
      { num: 1,  dates: 'Jun 10–16',  title: 'Literature Review & Requirement Analysis', desc: 'Review papers, study existing autonomous rover systems, and define project requirements and system architecture.',  status: 'done'   },
      { num: 2,  dates: 'Jun 17–23',  title: 'System Design',                            desc: 'Finalise overall system architecture, experimental block diagram, and data flow design between rover and control room.', status: 'done'   },
      { num: 3,  dates: 'Jun 24–30',  title: 'Hardware Selection & Procurement',         desc: 'Select all components (ESP32-S3, OV2640, NEO-6M, HC-SR04, motors, battery), place orders, and collect parts.',        status: 'done'   },
      { num: 4,  dates: 'Jul 1–7',    title: 'Rover Chassis & Mechanical Design',        desc: 'Fabricate or assemble the rover chassis, mount 4WD motors, integrate motor driver, and perform wheel setup.',           status: 'active' },
      { num: 5,  dates: 'Jul 8–14',   title: 'Firmware Development (ESP32-S3)',          desc: 'Develop motor control, ultrasonic sensing, GPS serial interface, camera streaming, and Wi-Fi hotspot firmware.',         status: 'todo'   },
      { num: 6,  dates: 'Jul 15–21',  title: 'AI Model Development & Training',          desc: 'Collect weed/pest/disease image dataset, train YOLOv8 model, evaluate mAP, and optimise for inference speed.',          status: 'todo'   },
      { num: 7,  dates: 'Jul 22–28',  title: 'Control Room & Dashboard Development',     desc: 'Build the laptop-side application: live camera view, GPS field map, anomaly database, route planner UI.',               status: 'todo'   },
      { num: 8,  dates: 'Jul 29–Aug 4', title: 'Route Optimisation Module',             desc: 'Implement TSP/VRP solver, integrate with field map anomaly coordinates, test route planning efficiency.',                 status: 'todo'   },
      { num: 9,  dates: 'Aug 5–10',   title: 'System Integration, Testing & Documentation', desc: 'Integrate all hardware and software, run field validation trials, collect results data, write final report.',         status: 'todo'   },
    ];

    var statusLabel = { done: 'Completed', active: 'In Progress', todo: 'Upcoming' };

    el.innerHTML = `
      <div class="page-header">
        <div class="page-eyebrow">Project</div>
        <h1 class="page-title">Weekly Updates</h1>
        <p class="page-subtitle">9-week project timeline — Jun 10 to Aug 10, 2025.</p>
      </div>

      <div class="week-list">
        ${weeks.map(function (w) { return `
          <div class="week-item">
            <div class="week-label">
              <div class="week-num">Week ${w.num}</div>
              <div class="week-dates">${w.dates}</div>
            </div>
            <div class="week-body">
              <div class="week-title">${w.title}</div>
              <div class="week-desc">${w.desc}</div>
              <div class="week-status ${w.status}">${statusLabel[w.status]}</div>
            </div>
          </div>`; }).join('')}
      </div>`;
  }

  /* ── Init all on DOM ready ── */
  document.addEventListener('DOMContentLoaded', function () {
    buildVision();
    buildMethodology();
    buildSurvey();
    buildResults();
    buildFuture();
    buildWeekly();
  });

})();
