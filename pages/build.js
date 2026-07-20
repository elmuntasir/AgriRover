/* ══════════════════════════════════════════════════════════════
   AGRIROVER — Build Pages
   pages/build.js
   Covers: Prototype, Software (Overview, AI Model,
           Control Dashboard), Hardware (Component List,
           Cost, Block Diagram)
   ══════════════════════════════════════════════════════════════ */

(function () {

  /* ════════════════════════════════════════════════════════════
     PROTOTYPE — page-prototype
     ════════════════════════════════════════════════════════════ */
  function buildPrototype() {
    var el = document.getElementById('page-prototype');
    if (!el) return;
    el.innerHTML = `
      <div class="page-header">
        <div class="page-eyebrow">Build</div>
        <h1 class="page-title">Prototype</h1>
        <p class="page-subtitle">Physical build, chassis assembly, and hardware integration of the AgriRover.</p>
      </div>

      <div class="proto-status-row">
        ${[
          ['done',   'Chassis Assembly'],
          ['done',   'Motor & L298N Driver Wiring'],
          ['done',   'ESP32-WROOM-32 Integration'],
          ['done',   'ESP32-CAM Mounting'],
          ['done',   'Power Supply (18650 + Buck Converter)'],
          ['active', 'Servo & Spray Nozzle Assembly'],
          ['todo',   'Ultrasonic Sensor Integration'],
          ['todo',   'Full Field Test'],
        ].map(([s, l]) => `
          <div class="proto-status-badge">
            <span class="dot dot-${s}"></span>${l}
          </div>`).join('')}
      </div>

      <div class="section-block">
        <h2 class="section-heading">Build Photos</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:28px">
          <div style="grid-column:1/-1">
            <img src="assets/images/prototype/birdview.jpg" alt="AgriRover Bird's Eye View"
              style="width:100%;height:240px;object-fit:cover;border-radius:var(--radius);border:1px solid var(--border);">
            <div style="margin-top:8px;font-family:var(--font-mono);font-size:.72rem;color:var(--muted);text-align:center;">Bird's eye view of the assembled AgriRover chassis</div>
          </div>
          <div>
            <img src="assets/images/prototype/chasis.jpg" alt="AgriRover Chassis"
              style="width:100%;height:180px;object-fit:cover;border-radius:var(--radius);border:1px solid var(--border);">
            <div style="margin-top:6px;font-family:var(--font-mono);font-size:.72rem;color:var(--muted);text-align:center;">4-wheel chassis frame with motor mounts</div>
          </div>
          <div>
            <img src="assets/images/prototype/motors.jpg" alt="Drive Motors"
              style="width:100%;height:180px;object-fit:cover;border-radius:var(--radius);border:1px solid var(--border);">
            <div style="margin-top:6px;font-family:var(--font-mono);font-size:.72rem;color:var(--muted);text-align:center;">DC gear motors and wheel assembly</div>
          </div>
          <div style="grid-column:1/-1">
            <img src="assets/images/prototype/zoom view.jpg" alt="AgriRover Close-Up"
              style="width:100%;height:220px;object-fit:cover;border-radius:var(--radius);border:1px solid var(--border);">
            <div style="margin-top:8px;font-family:var(--font-mono);font-size:.72rem;color:var(--muted);text-align:center;">Close-up view of electronics and sensor mounting</div>
          </div>
        </div>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Build Specifications</h2>
        <div class="content-card" style="padding:0;overflow:hidden">
          <table class="spec-table">
            <thead><tr><th>Component</th><th>Details</th></tr></thead>
            <tbody>
              ${[
                ['Chassis',          '<strong>4WD Robot Car Chassis Kit</strong><span class="spec-sub">4-wheel drive, includes motors & wheels</span>'],
                ['Drive Motors',     '<strong>MG90S Metal Gear Micro Servo ×1 + DC Motors ×4</strong><span class="spec-sub">For steering and drive</span>'],
                ['Motor Driver',     '<strong>L298N Dual H-Bridge</strong><span class="spec-sub">Replaces DRV8833 — 2A/channel, 5–35V supply</span>'],
                ['Microcontroller',  '<strong>ESP32-WROOM-32</strong><span class="spec-sub">Dual-core 240 MHz, Wi-Fi + BT built-in</span>'],
                ['Camera',           '<strong>ESP32-CAM (OV2640)</strong><span class="spec-sub">2MP, MJPEG stream via Wi-Fi</span>'],
                ['Audio',            '<strong>MAX98357A I2S Amplifier + INMP441 Mic</strong><span class="spec-sub">Replaces DFPlayer — voice I/O for Reaper AI</span>'],
                ['Speaker',          '<strong>2-inch 4Ω 3W Speaker</strong>'],
                ['Proximity',        '<strong>HC-SR04 Ultrasonic Sensor</strong><span class="spec-sub">2–400cm range, obstacle avoidance</span>'],
                ['Relay',            '<strong>5V 1-Channel Relay Module</strong><span class="spec-sub">For pump/blade switching</span>'],
                ['Spray',            '<strong>SRP Micro Submersible Pump + Silicone Tube + Nozzle</strong><span class="spec-sub">Spot-spray pesticide/herbicide</span>'],
                ['Power',            '<strong>2× 18650 Li-ion (2600mAh, 5C)</strong><span class="spec-sub">+ LM2596 Buck Converter (12V→5V)</span>'],
              ].map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>`;
  }

  /* ════════════════════════════════════════════════════════════
     SOFTWARE OVERVIEW — page-sw-overview
     ════════════════════════════════════════════════════════════ */
  function buildSwOverview() {
    var el = document.getElementById('page-sw-overview');
    if (!el) return;
    el.innerHTML = `
      <div class="page-header">
        <div class="page-eyebrow">Software</div>
        <h1 class="page-title">Software Overview</h1>
        <p class="page-subtitle">Architecture of the two-unit software system powering AgriRover.</p>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Architecture</h2>
        <div class="build-two-col">
          <div class="content-card">
            <div class="info-card-label" style="margin-bottom:10px">Unit 1 — Rover (ESP32-S3)</div>
            ${[
              ['Motor Control',    'PWM-based 4WD drive, forward/back/turn commands via WebSocket'],
              ['Camera Stream',    'MJPEG stream over HTTP to control room at 30 FPS'],
              ['GPS Interface',    'NMEA sentence parsing from NEO-6M over UART'],
              ['Ultrasonic',       'HC-SR04 distance polling for obstacle avoidance'],
              ['Actuator Control', 'PWM signals to blade relay and spray pump relay'],
              ['Wi-Fi Hotspot',    'ESP32 acts as AP; control room connects directly'],
            ].map(([t, d]) => `
              <div class="goal-item" style="margin-bottom:8px">
                <span class="goal-num" style="font-size:.58rem;padding:2px 6px">${t}</span>
                <span class="goal-text" style="font-size:.82rem">${d}</span>
              </div>`).join('')}
          </div>
          <div class="content-card">
            <div class="info-card-label" style="margin-bottom:10px">Unit 2 — Control Room (Laptop)</div>
            ${[
              ['Image Reception',     'MJPEG stream ingestion and frame buffering'],
              ['AI Detection',        'YOLOv8 inference on each frame, anomaly classification'],
              ['Field Map',           'GPS-tagged anomaly overlay rendered in real time'],
              ['Route Optimiser',     'TSP/VRP solver over anomaly coordinate set'],
              ['Command Dispatcher',  'WebSocket server sending movement and actuation commands'],
              ['Dashboard UI',        'Live camera view, field map, logs, route plan display'],
            ].map(([t, d]) => `
              <div class="goal-item" style="margin-bottom:8px">
                <span class="goal-num" style="font-size:.58rem;padding:2px 6px">${t}</span>
                <span class="goal-text" style="font-size:.82rem">${d}</span>
              </div>`).join('')}
          </div>
        </div>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Tech Stack</h2>
        <div class="info-grid">
          ${[
            ['Rover Firmware',     'C++ / Arduino (ESP-IDF)'],
            ['AI Model',           'Python · YOLOv8 (Ultralytics)'],
            ['Control Dashboard',  'Python · OpenCV · Flask'],
            ['Database',           'SQLite (field map, run history)'],
            ['Communication',      'WebSocket · HTTP MJPEG'],
            ['Route Optimisation', 'Python · OR-Tools (TSP/VRP)'],
            ['Field Map UI',       'HTML Canvas / Leaflet.js'],
            ['Training Pipeline',  'PyTorch · Roboflow dataset'],
          ].map(([l, v]) => `
            <div class="info-card">
              <div class="info-card-label">${l}</div>
              <div class="info-card-value" style="font-size:.84rem">${v}</div>
            </div>`).join('')}
        </div>
      </div>`;
  }

  /* ════════════════════════════════════════════════════════════
     AI MODEL — page-sw-ai
     ════════════════════════════════════════════════════════════ */
  function buildSwAI() {
    var el = document.getElementById('page-sw-ai');
    if (!el) return;
    el.innerHTML = `
      <div class="page-header">
        <div class="page-eyebrow">Software</div>
        <h1 class="page-title">AI Model</h1>
        <p class="page-subtitle">Three specialised YOLOv8n models trained on Roboflow 3.0 (Fast) and served via Roboflow Hosted Inference — detecting pests, weeds, and plant diseases from rover-captured images.</p>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Detection Pipeline</h2>
        <div class="ai-pipeline">
          ${[
            ['01', 'Image Capture',     'ESP32-CAM (OV2640) captures images of the field and sends them to the laptop control room over Wi-Fi.'],
            ['02', 'Pre-processing',    'Images are Base64-encoded and submitted to the Roboflow Hosted Inference API — no local GPU required.'],
            ['03', 'Triple Inference',  'Each image is run through all three models in parallel: Pest · Weed · Plant Disease detection.'],
            ['04', 'Thresholding',      'Predictions below the 20% confidence threshold are discarded. Severity is graded by confidence: Low / Medium / High.'],
            ['05', 'DB & Dashboard',    'Confirmed detections are written to the SQLite database and rendered live on the field map and history view.'],
          ].map(([n, t, d]) => `
            <div class="ai-pipe-step">
              <div class="ai-pipe-num">${n}</div>
              <div class="ai-pipe-title">${t}</div>
              <div class="ai-pipe-desc">${d}</div>
            </div>`).join('')}
        </div>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Trained Models — Roboflow 3.0</h2>
        <div class="two-col" style="gap:18px;margin-bottom:0">

          <div class="content-card">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
              <span style="font-size:1.6rem">🐛</span>
              <div>
                <div style="font-family:var(--font-display);font-weight:600;font-size:1.05rem;color:var(--ink)">Pest Detection</div>
                <div style="font-family:var(--font-mono);font-size:.65rem;color:var(--accent);margin-top:2px">pest-detection-yu4hv-csabq / v1</div>
              </div>
            </div>
            <table class="spec-table" style="margin-bottom:0">
              <tbody>
                <tr><td>Architecture</td><td><strong>YOLOv8n</strong> <span class="spec-sub">Roboflow 3.0 Fast</span></td></tr>
                <tr><td>Dataset</td><td><strong>Roboflow Universe</strong> <span class="spec-sub">Pest Detection Dataset</span></td></tr>
                <tr><td>Classes (9)</td><td><span class="spec-sub">Aphids · Armyworm · Beetle · Bollworm · Grasshopper · Mites · Mosquito · Sawfly · Stem Borer</span></td></tr>
                <tr><td>Confidence Threshold</td><td><strong>20%</strong></td></tr>
              </tbody>
            </table>
          </div>

          <div class="content-card">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
              <span style="font-size:1.6rem">🌿</span>
              <div>
                <div style="font-family:var(--font-display);font-weight:600;font-size:1.05rem;color:var(--ink)">Weed Detection</div>
                <div style="font-family:var(--font-mono);font-size:.65rem;color:var(--accent);margin-top:2px">weed-detection-esm0d-ia4dm / v1</div>
              </div>
            </div>
            <table class="spec-table" style="margin-bottom:0">
              <tbody>
                <tr><td>Architecture</td><td><strong>YOLOv8n</strong> <span class="spec-sub">Roboflow 3.0 Fast</span></td></tr>
                <tr><td>Dataset</td><td><strong>Roboflow Universe</strong> <span class="spec-sub">Weed Detection Dataset</span></td></tr>
                <tr><td>Classes</td><td><span class="spec-sub">Weed (dense patch presence detection)</span></td></tr>
                <tr><td>Confidence Threshold</td><td><strong>20%</strong></td></tr>
              </tbody>
            </table>
          </div>

          <div class="content-card" style="grid-column:1/-1">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
              <span style="font-size:1.6rem">🍂</span>
              <div>
                <div style="font-family:var(--font-display);font-weight:600;font-size:1.05rem;color:var(--ink)">Plant Disease Detection</div>
                <div style="font-family:var(--font-mono);font-size:.65rem;color:var(--accent);margin-top:2px">plant-disease-xdjxh-9cpbm / v1</div>
              </div>
            </div>
            <table class="spec-table" style="margin-bottom:0">
              <tbody>
                <tr><td>Architecture</td><td><strong>YOLOv8n</strong> <span class="spec-sub">Roboflow 3.0 Fast — trained 2026-07-19</span></td></tr>
                <tr><td>Dataset</td><td><strong>Roboflow Universe</strong> <span class="spec-sub">Plant Disease Detection Dataset</span></td></tr>
                <tr><td>Classes (14+)</td><td><span class="spec-sub">Bacterial Blight · Leaf Blight · Early Blight · Late Blight · Leaf Spot · Brown Spot · Powdery Mildew · Downy Mildew · Anthracnose · Rust · Fusarium Wilt · Root Rot · Mosaic Virus · Nitrogen Deficiency · Rice Blast</span></td></tr>
                <tr><td>Confidence Threshold</td><td><strong>20%</strong> <span class="spec-sub">Lowered to account for lower confidence ranges in plant disease models</span></td></tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Severity Classification</h2>
        <div class="content-card" style="padding:0;overflow:hidden">
          <table class="spec-table">
            <thead><tr><th>Severity</th><th>Confidence Range</th><th>Action</th></tr></thead>
            <tbody>
              <tr><td><span style="color:#d6553d;font-weight:600">● High</span></td><td><strong>≥ 75%</strong></td><td>Immediate intervention required</td></tr>
              <tr><td><span style="color:#e2a23a;font-weight:600">● Medium</span></td><td><strong>50 – 74%</strong></td><td>Monitor closely, treat within days</td></tr>
              <tr><td><span style="color:#6fae63;font-weight:600">● Low</span></td><td><strong>20 – 49%</strong></td><td>Log and observe; re-analyse later</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Training Status</h2>
        <div class="proto-status-row">
          ${[
            ['done',   'Dataset curation on Roboflow Universe'],
            ['done',   'Pest Detection model trained (Roboflow 3.0)'],
            ['done',   'Weed Detection model trained (Roboflow 3.0)'],
            ['done',   'Plant Disease model trained (Roboflow 3.0)'],
            ['done',   'Hosted Inference API integrated'],
            ['done',   'Reanalyze pipeline with purple badge flagging'],
            ['active', 'Field validation with live rover images'],
          ].map(([s, l]) => `
            <div class="proto-status-badge">
              <span class="dot dot-${s}"></span>${l}
            </div>`).join('')}
        </div>
      </div>`;
  }

  /* ════════════════════════════════════════════════════════════
     CONTROL DASHBOARD — page-sw-dashboard
     ════════════════════════════════════════════════════════════ */
  function buildSwDashboard() {
    var el = document.getElementById('page-sw-dashboard');
    if (!el) return;

    var screens = [
      {
        img: 'assets/images/local_server/chat_ui.png',
        tag: 'Reaper AI',
        title: 'Intelligent Farm Advisor',
        desc: 'A voice-enabled conversational AI powered by Groq\'s LLM API. Reaper speaks fluent Bengali, offering tailored agricultural advice, explaining detected crop diseases, and suggesting localized, field-tested treatments in real time.'
      },
      {
        img: 'assets/images/local_server/map_ui.png',
        tag: 'Zone Mapping',
        title: 'Field Health Visualization',
        desc: 'Monitor the health of different crop zones. The dashboard categorizes areas by severity (High, Medium, Low risk) based on the AI rover\'s latest field patrols, letting farmers instantly see which zones need attention.'
      },
      {
        img: 'assets/images/local_server/history_ui.png',
        tag: 'Detection History',
        title: 'Track Anomalies & Reanalyze',
        desc: 'Review past photos and AI predictions. Filter by date and zone, view exactly what disease or pest was detected, and manually trigger a re-analysis on past images — any updated verdicts are flagged with a purple badge.'
      },
      {
        img: 'assets/images/local_server/farmer_profile_ui.png',
        tag: 'Environmental Context',
        title: 'Weather & Risk Assessment',
        desc: 'Real-time weather forecasts are integrated directly into the farmer profile. Reaper uses this contextual data to proactively alert farmers about upcoming risks — such as irrigation adjustments before expected heavy rainfall.'
      },
      {
        img: 'assets/images/local_server/hive_management.png',
        tag: 'Fleet Control',
        title: 'Hive Management',
        desc: 'Centrally track all active AgriRover units deployed in the field. View operational status, assign patrol zones, and monitor the network connectivity and battery status of the entire rover fleet from one screen.'
      },
    ];

    el.innerHTML = `
      <div class="page-header">
        <div class="page-eyebrow">Software</div>
        <h1 class="page-title">Control Dashboard</h1>
        <p class="page-subtitle">A comprehensive, Bengali-first local web application for monitoring field health, managing rovers, and consulting with our AI agricultural advisor.</p>
      </div>

      <div class="why-grid">
        ${screens.map(s => `
          <div class="why-card">
            <img src="${s.img}" alt="${s.title}" class="why-img" style="object-position: left top;">
            <div class="why-content">
              <span class="why-highlight">${s.tag}</span>
              <h3 class="why-title">${s.title}</h3>
              <p class="why-desc">${s.desc}</p>
            </div>
          </div>`).join('')}
      </div>`;
  }

  /* ════════════════════════════════════════════════════════════
     COMPONENT LIST — page-hw-components
     ════════════════════════════════════════════════════════════ */
  function buildHwComponents() {
    var el = document.getElementById('page-hw-components');
    if (!el) return;

    var components = [
      /* [Category, Name, Spec, Qty] */
      ['Microcontroller', 'ESP32-S3 Dev Board',          'Dual-core 240MHz, Wi-Fi + BT, built-in MJPEG camera support',  '1'],
      ['Camera',          'OV2640 Camera Module',         '2MP, up to 30 FPS MJPEG stream, SPI/I2C interface',            '1'],
      ['GPS',             'NEO-6M GPS Module',            'UART, 1Hz update, ±2.5m CEP, active antenna',                  '1'],
      ['Proximity',       'HC-SR04 Ultrasonic Sensor',    '2–400cm range, 15° beam angle, 5V logic',                      '2'],
      ['Motor Driver',    'L298N Motor Driver Module',    'Dual H-bridge, 2A/channel, 5–35V supply',                      '1'],
      ['Motor Driver',    'BTS7960 High Current Driver',  '43A peak, for high-torque scenarios',                           '1'],
      ['Drive Motors',    '12V DC Gear Motor',            '150 RPM, 1.5 kg·cm torque, encoder-ready shaft',               '4'],
      ['Chassis',         '4WD Robot Car Chassis Kit',    'Aluminium alloy, 300×220mm, includes wheels & mounts',         '1'],
      ['Power',           '11.1V 3S LiPo Battery',        '2200 mAh, 25C discharge, XT60 connector',                      '1'],
      ['Power',           'LiPo Balance Charger',         'B3 compact charger, 2S/3S support',                            '1'],
      ['Power',           'DC-DC Buck Converter',         'LM2596 step-down, 12V→5V for ESP32 & sensors',                 '2'],
      ['Actuation',       'DC Motor (Blade Module)',       '12V high-torque, for weed cutting blade',                      '1'],
      ['Actuation',       'Peristaltic Pump',             '12V, 100 mL/min flow rate, chemical-resistant tubing',         '1'],
      ['Actuation',       'Spray Nozzle',                 'Flat fan nozzle, 80° spray angle, 1/4" fitting',               '1'],
      ['Actuation',       'Relay Module (2-channel)',      '5V control, 10A/250VAC, for pump and blade switching',         '2'],
      ['Connectivity',    'Jumper Wires & Headers',       'Male/female, various lengths',                                  '1 set'],
      ['Connectivity',    'Custom PCB / Perfboard',       'For clean ESP32 + sensor wiring',                              '1'],
    ];

    var categories = [...new Set(components.map(function(c){ return c[0]; }))];

    var rows = components.map(function(c, i){
      return `<tr>
        <td style="color:var(--muted);font-size:.72rem">${String(i+1).padStart(2,'0')}</td>
        <td style="color:var(--muted);font-size:.72rem">${c[0]}</td>
        <td><strong>${c[1]}</strong><span class="spec-sub">${c[2]}</span></td>
        <td style="text-align:center;font-family:var(--font-mono);font-size:.82rem">${c[3]}</td>
      </tr>`;
    }).join('');

    el.innerHTML = `
      <div class="page-header">
        <div class="page-eyebrow">Hardware</div>
        <h1 class="page-title">Component List</h1>
        <p class="page-subtitle">Full bill of materials (BOM) for the AgriRover prototype.</p>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Bill of Materials</h2>
        <div class="content-card" style="padding:0;overflow:hidden">
          <table class="spec-table">
            <thead>
              <tr>
                <th style="width:36px">#</th>
                <th style="width:130px">Category</th>
                <th>Component</th>
                <th style="width:50px;text-align:center">Qty</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>`;
  }

  /* ════════════════════════════════════════════════════════════
     COMPONENT COST — page-hw-cost
     ════════════════════════════════════════════════════════════ */
  function buildHwCost() {
    var el = document.getElementById('page-hw-cost');
    if (!el) return;

    var items = [
      /* [Name, Qty, Unit Price BDT, Total BDT] */
      ['ESP32-S3 Dev Board',         '1',  '650',   '650'],
      ['OV2640 Camera Module',       '1',  '350',   '350'],
      ['NEO-6M GPS Module',          '1',  '550',   '550'],
      ['HC-SR04 Ultrasonic Sensor',  '2',  '80',    '160'],
      ['L298N Motor Driver',         '1',  '120',   '120'],
      ['BTS7960 Motor Driver',       '1',  '250',   '250'],
      ['12V DC Gear Motor',          '4',  '280',  '1120'],
      ['4WD Chassis Kit',            '1', '1200',  '1200'],
      ['11.1V 3S LiPo Battery',      '1',  '900',   '900'],
      ['LiPo Balance Charger',       '1',  '350',   '350'],
      ['DC-DC Buck Converter',       '2',  '80',    '160'],
      ['DC Motor (Blade)',            '1',  '220',   '220'],
      ['Peristaltic Pump',           '1',  '480',   '480'],
      ['Spray Nozzle',               '1',  '120',   '120'],
      ['Relay Module (2-ch)',         '2',  '90',    '180'],
      ['Wires, Headers, PCB',        '—',  '—',     '300'],
    ];

    var total = items.reduce(function(s, i){ return s + (parseInt(i[3]) || 0); }, 0);

    var rows = items.map(function(i){
      return `<tr>
        <td>${i[0]}</td>
        <td style="text-align:center;font-family:var(--font-mono);font-size:.8rem">${i[1]}</td>
        <td style="text-align:right;font-family:var(--font-mono);font-size:.8rem">${i[2] === '—' ? '—' : '৳ '+i[2]}</td>
        <td>৳ ${i[3]}</td>
      </tr>`;
    }).join('');

    el.innerHTML = `
      <div class="page-header">
        <div class="page-eyebrow">Hardware</div>
        <h1 class="page-title">Component Cost</h1>
        <p class="page-subtitle">Estimated procurement cost for the AgriRover prototype (BDT).</p>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Cost Breakdown</h2>
        <div class="content-card" style="padding:0;overflow:hidden">
          <table class="spec-table cost-table">
            <thead>
              <tr>
                <th>Component</th>
                <th style="text-align:center;width:50px">Qty</th>
                <th style="text-align:right;width:110px">Unit Price</th>
                <th style="text-align:right;width:110px">Total</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
          <div class="cost-total">
            <span class="cost-total-label">Estimated Total</span>
            <span class="cost-total-value">৳ ${total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div class="abstract-box" style="margin-top:16px">
        Prices are estimated based on local Bangladeshi market rates (Elephant Road, Dhaka) and
        may vary. Components marked "—" have approximate combined costs. Final procurement cost
        will be updated once purchasing is complete.
      </div>`;
  }

  /* ════════════════════════════════════════════════════════════
     BLOCK DIAGRAM — page-hw-block
     ════════════════════════════════════════════════════════════ */
  function buildHwBlock() {
    var el = document.getElementById('page-hw-block');
    if (!el) return;
    el.innerHTML = `
      <div class="page-header">
        <div class="page-eyebrow">Hardware</div>
        <h1 class="page-title">Block Diagram</h1>
        <p class="page-subtitle">Experimental block diagram showing data flow and system connections.</p>
      </div>

      <div class="section-block">
        <h2 class="section-heading">System Block Diagram</h2>
        <div class="block-diagram-wrap">
          <img src="assets/images/prototype/block-diagram.png" alt="AgriRover Block Diagram"
            onerror="this.outerHTML='<svg viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1.5\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/><line x1=\\'3\\' y1=\\'9\\' x2=\\'21\\' y2=\\'9\\'/><line x1=\\'9\\' y1=\\'21\\' x2=\\'9\\' y2=\\'9\\'/></svg><span>Drop block-diagram.png into assets/images/prototype/ to display here</span>'">
        </div>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Data Flow Summary</h2>
        <div class="info-grid">
          ${[
            ['Rover → Control Room', 'Camera stream (MJPEG/HTTP) · GPS + sensor data (WebSocket)'],
            ['Control Room → Rover', 'Movement commands · Blade on/off · Spray on/off (WebSocket)'],
            ['Control Room Internal','AI inference → Anomaly DB → Route optimiser → Command queue'],
            ['Power Flow',           'LiPo → Buck converter → ESP32, sensors, relay modules'],
            ['Actuation',           'Motor driver ← ESP32 PWM · Relays ← ESP32 GPIO'],
            ['Communication Bus',   'Wi-Fi (AP mode) · UART (GPS) · I2C/SPI (Camera)'],
          ].map(([l, v]) => `
            <div class="info-card">
              <div class="info-card-label">${l}</div>
              <div class="info-card-value" style="font-size:.82rem">${v}</div>
            </div>`).join('')}
        </div>
      </div>`;
  }

  /* ── Init all ── */
  document.addEventListener('DOMContentLoaded', function () {
    buildPrototype();
    buildSwOverview();
    buildSwAI();
    buildSwDashboard();
    // Hardware pages are now sourced from the components/ folder when available.
    // If COMPONENTS is not present (older deployments), fall back to the hard-coded builders.
    if (typeof COMPONENTS === 'undefined') {
      buildHwComponents();
      buildHwCost();
      buildHwBlock();
    }
  });

})();
