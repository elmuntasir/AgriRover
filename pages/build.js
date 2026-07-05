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
        <p class="page-subtitle">Physical rover build — chassis, electronics, and assembly progress.</p>
      </div>

      <div class="proto-status-row">
        ${[
          ['done',   'Chassis Design'],
          ['active', 'Electronics Mounting'],
          ['active', 'Firmware Integration'],
          ['todo',   'Blade Module'],
          ['todo',   'Spray Module'],
          ['todo',   'Field Testing'],
        ].map(([s, l]) => `
          <div class="proto-status-badge">
            <span class="dot dot-${s}"></span>${l}
          </div>`).join('')}
      </div>

      <div class="section-block">
        <h2 class="section-heading">Rover Photos</h2>
        <div class="photo-grid">
          ${[
            ['rover-front.jpg',  'Front View'],
            ['rover-side.jpg',   'Side View'],
            ['rover-chassis.jpg','Chassis'],
            ['rover-pcb.jpg',    'Electronics'],
          ].map(([file, label]) => `
            <div class="photo-slot">
              <img src="assets/images/prototype/${file}"
                alt="${label}"
                onerror="this.parentNode.innerHTML='<svg viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1.5\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/><circle cx=\\'8.5\\' cy=\\'8.5\\' r=\\'1.5\\'/><polyline points=\\'21 15 16 10 5 21\\'/></svg><span class=\\'photo-slot-label\\'>${label}</span>'">
            </div>`).join('')}
        </div>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Build Specifications</h2>
        <div class="content-card" style="padding:0;overflow:hidden">
          <table class="spec-table">
            <thead><tr><th>Component</th><th>Details</th></tr></thead>
            <tbody>
              ${[
                ['Chassis',          '<strong>4WD Rover Frame</strong><span class="spec-sub">Aluminium alloy, 300×220mm footprint</span>'],
                ['Drive Motors',     '<strong>12V DC Gear Motors ×4</strong><span class="spec-sub">Torque: 1.5 kg·cm, 150 RPM</span>'],
                ['Motor Driver',     '<strong>L298N / BTS7960</strong><span class="spec-sub">Dual H-bridge, 2A continuous per channel</span>'],
                ['Microcontroller',  '<strong>ESP32-S3</strong><span class="spec-sub">Dual-core 240 MHz, Wi-Fi + BT built-in</span>'],
                ['Camera',           '<strong>OV2640</strong><span class="spec-sub">2MP, MJPEG stream, 30 FPS @ 800×600</span>'],
                ['GPS',              '<strong>NEO-6M</strong><span class="spec-sub">Serial/UART, 1Hz update rate, ±2.5m CEP</span>'],
                ['Proximity',        '<strong>HC-SR04 ×2</strong><span class="spec-sub">Ultrasonic, 2–400cm range, front + rear</span>'],
                ['Battery',          '<strong>11.1V 3S LiPo</strong><span class="spec-sub">2200 mAh, ~45 min field runtime</span>'],
                ['Blade Module',     '<strong>DC Motor + Blade</strong><span class="spec-sub">Weed cutting actuator, PWM controlled</span>'],
                ['Spray Module',     '<strong>Peristaltic Pump + Nozzle</strong><span class="spec-sub">Herbicide/pesticide spot spray, 12V</span>'],
              ].map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Assembly Notes</h2>
        <div class="abstract-box">
          The rover chassis uses a modular mounting plate system allowing the blade and spray modules
          to be attached or detached independently. The ESP32-S3 is mounted on a custom PCB carrier
          with breakout headers for motor driver, sensor, and actuator connections. All wiring is
          routed through cable management channels to avoid interference with the drive wheels.
          Build photos will be added here as assembly progresses.
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
        <p class="page-subtitle">YOLOv8-based weed, pest, and disease detection pipeline.</p>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Detection Pipeline</h2>
        <div class="ai-pipeline">
          ${[
            ['01', 'Frame Capture',    'OV2640 streams MJPEG frames to control room at 30 FPS over Wi-Fi.'],
            ['02', 'Pre-processing',   'Frames resized to 640×640, normalised, and batched for inference.'],
            ['03', 'YOLOv8 Inference', 'Model classifies each frame into Weed, Pest, or Disease with bounding boxes and confidence scores.'],
            ['04', 'GPS Tagging',      'Detections above confidence threshold are tagged with current GPS coordinates.'],
            ['05', 'Map Update',       'Tagged anomalies are written to the SQLite field map database and rendered on the dashboard.'],
          ].map(([n, t, d]) => `
            <div class="ai-pipe-step">
              <div class="ai-pipe-num">${n}</div>
              <div class="ai-pipe-title">${t}</div>
              <div class="ai-pipe-desc">${d}</div>
            </div>`).join('')}
        </div>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Model Configuration</h2>
        <div class="content-card" style="padding:0;overflow:hidden">
          <table class="spec-table">
            <thead><tr><th>Parameter</th><th>Value</th></tr></thead>
            <tbody>
              ${[
                ['Base Architecture', '<strong>YOLOv8n</strong><span class="spec-sub">Nano variant — optimised for speed on laptop CPU</span>'],
                ['Input Size',        '<strong>640 × 640 px</strong>'],
                ['Classes',           '<strong>3</strong><span class="spec-sub">Weed · Pest · Disease</span>'],
                ['Confidence Threshold', '<strong>0.45</strong><span class="spec-sub">Detections below this are ignored</span>'],
                ['IoU Threshold',     '<strong>0.50</strong><span class="spec-sub">NMS overlap threshold</span>'],
                ['Dataset Source',    '<strong>Roboflow + custom field images</strong>'],
                ['Training Framework','<strong>Ultralytics YOLOv8 · PyTorch</strong>'],
                ['Inference Target',  '<strong>Laptop CPU (no GPU required)</strong>'],
                ['Target FPS',        '<strong>≥ 15 FPS</strong><span class="spec-sub">During live stream inference</span>'],
              ].map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Training Status</h2>
        <div class="proto-status-row">
          ${[
            ['done',   'Dataset Collection Plan'],
            ['active', 'Data Labelling (Roboflow)'],
            ['todo',   'Model Training'],
            ['todo',   'Validation & mAP Evaluation'],
            ['todo',   'On-Device Optimisation'],
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
    el.innerHTML = `
      <div class="page-header">
        <div class="page-eyebrow">Software</div>
        <h1 class="page-title">Control Dashboard</h1>
        <p class="page-subtitle">Laptop-side UI for live monitoring, field mapping, and rover command dispatch.</p>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Dashboard Screenshot</h2>
        <div class="block-diagram-wrap">
          <img src="assets/images/prototype/dashboard.png" alt="Control Dashboard"
            onerror="this.outerHTML='<svg viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1.5\\'><rect x=\\'2\\' y=\\'3\\' width=\\'20\\' height=\\'14\\' rx=\\'2\\'/><line x1=\\'8\\' y1=\\'21\\' x2=\\'16\\' y2=\\'21\\'/><line x1=\\'12\\' y1=\\'17\\' x2=\\'12\\' y2=\\'21\\'/></svg><span>Dashboard screenshot coming soon</span>'">
        </div>
      </div>

      <div class="section-block">
        <h2 class="section-heading">Features</h2>
        <div class="dashboard-features">
          ${[
            ['📹', 'Live Camera View',    'Real-time MJPEG stream from the rover\'s OV2640 camera with YOLOv8 bounding box overlay drawn on each frame.'],
            ['🗺️', 'GPS Field Map',       'Interactive field map with GPS-tagged anomaly markers. Colour-coded by type: green (weed), orange (pest), red (disease).'],
            ['🛣️', 'Route Plan Display',  'Visualises the TSP/VRP optimised treatment route as a path overlay on the field map before the rover executes it.'],
            ['⚙️', 'Command Panel',       'Manual override buttons for movement (F/B/L/R), blade on/off, and spray on/off via WebSocket commands.'],
            ['📊', 'Detection Log',       'Timestamped log of all anomalies detected per session with GPS coordinate, class, confidence, and frame thumbnail.'],
            ['💾', 'Run History',         'SQLite-backed session history. Previous field maps and detection logs are stored and can be replayed or exported.'],
          ].map(([icon, title, desc]) => `
            <div class="dash-feature">
              <div class="dash-feature-icon">${icon}</div>
              <div class="dash-feature-title">${title}</div>
              <div class="dash-feature-desc">${desc}</div>
            </div>`).join('')}
        </div>
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
