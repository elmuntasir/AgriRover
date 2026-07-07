/* ══════════════════════════════════════════════════════════════
   AGRIROVER — Component List Data File
   components/component-template.js

   This file is a list of "component objects". Each object describes
   ONE part used in the rover. The Component List page (Hardware →
   Component Details) reads this list and automatically draws a card
   for every object in it — image on the left, details on the right.

   INSTRUCTIONS:
   1. Drop the component's photo into  components/pic/
      e.g. components/pic/esp32-cam.jpg
   2. Copy the COMPONENT TEMPLATE block below (from the { to the },)
   3. Paste it inside the COMPONENTS array, fill in the fields
   4. Save — no need to touch any other file, the page updates itself

   Leave a field as "" (empty string) if you don't have that info yet.

   NOTE ON QUANTITY / PRICE:
   - qty        → how many units you need (just omit this field, or set
                  it to 1, if you only need one — the card then shows
                  a single price with no multiplication).
   - unitPrice  → the price of ONE unit, not the total.
   The page automatically computes qty × unitPrice per component, and
   only shows the "qty × unit price" breakdown when qty is more than 1.
   The grand Total Cost at the bottom of the page adds up qty × unitPrice
   across every component.
   ══════════════════════════════════════════════════════════════ */


var COMPONENTS = [

  /* ┌─────────────────────────────────────────────────────────┐
     │  COMPONENT TEMPLATE — copy from here                    │
     └─────────────────────────────────────────────────────────┘
  {
    name:      "",   // Component name          e.g. "12V DC Gear Motor"
    model:     "",   // Model / part number     e.g. "150 RPM Gear Motor"
    pic:       "",   // Path to its photo       e.g. "components/pic/dc-gear-motor.jpg"
                       // Leave "" to show a placeholder icon instead.
    qty:       1,     // How many you need       e.g. 4
                       // Leave as 1 (or omit) if you only need one.
    unitPrice: "",   // Price of ONE unit, in BDT   e.g. "280"
                       // The page multiplies this by qty automatically.
    function:  "",   // What it DOES, technically
                       // e.g. "150 RPM, ~1.5 kg·cm torque gear motor."
    usecase:   "",   // WHY / WHERE it's used in AgriRover
                       // e.g. "Drives all four wheels of the chassis."
  },
     │  COMPONENT TEMPLATE — copy until here                    │
     └─────────────────────────────────────────────────────────┘ */


  /* ── Vision & Compute ── */
  {
    name: "ESP32-CAM",
    model: "AI-Thinker ESP32-CAM (OV2640)",
    pic: "components/pic/esp32-cam.jpg",
    qty: 1,
    unitPrice: "550",
    function: "ESP32 module with a built-in OV2640 2MP camera and Wi-Fi. Captures a photo on command and can upload it over HTTP/Wi-Fi.",
    usecase: "Dedicated vision unit — during Patrol Mode it snaps a field photo at each time/distance interval and sends it to the control room for YOLOv8 analysis.",
  },
  {
    name: "ESP32-WROOM-32 Dev Board",
    model: "ESP32-WROOM-32",
    pic:       "components/pic/ESP32-WROOM-32 Dev Board.jpg",
    qty: 1,
    unitPrice: "550",
    function: "Dual-core 240MHz microcontroller with Wi-Fi/Bluetooth and enough GPIO to drive motors, read sensors, and control actuators simultaneously.",
    usecase: "Main controller of the rover — reads GPS/ultrasonic/gas/soil sensors, drives the motors, fires the relay for spot-spraying, and streams live Bangla audio from the laptop to the speaker in Guide Mode.",
  },
  {
    name: "CP2102 USB-to-TTL Programmer",
    model: "CP2102",
    pic:       "components/pic/CP2102 USB-to-TTL Programmer__CP2102.jpg",
    qty: 1,
    unitPrice: "150",
    function: "USB-to-serial adapter used to flash firmware onto the ESP32-CAM, which has no onboard USB port.",
    usecase: "One-time flashing tool, not mounted on the rover — needed once (and again for any re-flash) to upload code to the ESP32-CAM.",
  },

  /* ── Navigation & Sensing ── */
  {
    name: "NEO-6M GPS Module",
    model: "NEO-6M",
    pic: "components/pic/NEO-6M GPS Module__.jpg",
    qty: 1,
    unitPrice: "550",
    function: "UART GPS receiver with 1Hz update rate and roughly ±2.5m accuracy (CEP).",
    usecase: "Gives the rover its live field position — used to trigger photo capture at fixed distance intervals, tag detections with coordinates, and guide the farmer to the right spot on the map in Guide Mode.",
  },
  {
    name: "HC-SR04 Ultrasonic Sensor",
    model: "HC-SR04",
    pic:       "components/pic/HC-SR04 Ultrasonic Sensor__.webp",
    qty: 2,
    unitPrice: "80",
    function: "Ultrasonic distance sensor, 2–400cm range, 15° beam angle. One unit is mounted on the pan servo for plant-height scanning; the other is fixed front-facing for obstacle detection.",
    usecase: "The panning unit sweeps across the row and measures plant height — since weeds are typically shorter than crop plants, a height dip flags a likely weed location for the camera/YOLOv8 to confirm. The fixed unit stops the rover before it hits an obstacle.",
  },
  {
    name: "SG90 Micro Servo",
    model: "SG90",
    pic:       "components/pic/SG90 Micro Servo.jpg",
    qty: 1,
    unitPrice: "150",
    function: "9g micro servo, roughly 180° sweep, PWM controlled.",
    usecase: "Pans the weed-detection ultrasonic sensor side to side across the row instead of only sensing one fixed point, so height differences across the whole row width can be caught.",
  },
  {
    name: "MQ-4 Methane Gas Sensor",
    model: "MQ-4",
    pic: "components/pic/mq4-gas-sensor.jpg",
    qty: 1,
    unitPrice: "220",
    function: "Analog gas sensor tuned for methane (CH₄) and natural gas concentration, outputs a variable voltage proportional to gas level.",
    usecase: "Logged alongside each field reading to flag unusual methane build-up (e.g. from decomposing organic matter/waterlogged soil) — reported to the farmer as a Guide Mode item since the rover can't act on this itself.",
  },
  {
    name: "Capacitive Soil Moisture Sensor",
    model: "Capacitive V1.2",
    pic: "components/pic/Capacitive Soil Moisture Sensor V1.2.jpg",
    qty: 1,
    unitPrice: "130",
    function: "Corrosion-resistant capacitive sensor that outputs an analog voltage proportional to soil water content.",
    usecase: "Logged at each patrol stop to build a soil-moisture map of the field; dry zones are surfaced to the farmer in Guide Mode (the rover can't irrigate on its own).",
  },

  /* ── Drive System ── */
  {
    name: "L298N Motor Driver",
    model: "L298N",
    pic: "components/pic/L298N Motor Driver.jpg",
    qty: 1,
    unitPrice: "120",
    function: "Dual H-bridge motor driver module rated for 2A continuous current per channel.",
    usecase: "Drives the rover's DC gear motors forward/backward and controls turning speed via PWM during patrol navigation.",
  },
  {
    name: "12V DC Gear Motor",
    model: "150 RPM Gear Motor",
    pic: "components/pic/12V DC Gear Motor.jpg",
    qty: 4,
    unitPrice: "280",
    function: "150 RPM, ~1.5 kg·cm torque gear motor with an encoder-ready shaft.",
    usecase: "Drives all four wheels of the 4WD chassis so the rover can move along and between crop rows during patrol.",
  },
  {
    name: "4WD Robot Chassis Kit",
    model: "Aluminium 4WD Chassis, 300×220mm",
    pic: "components/pic/4WD Robot Chassis Kit__ Aluminium 4WD Chassis, 300×220mm.webp",
    qty: 1,
    unitPrice: "1200",
    function: "Aluminium alloy chassis with mounting points for 4 motors, wheels, and an electronics deck.",
    usecase: "Physical base of the rover that carries the electronics, sensors, and spray tank across the field.",
  },

  /* ── Power ── */
  {
    name: "11.1V 3S LiPo Battery",
    model: "2200mAh 25C, XT60",
    pic: "components/pic/11.1V 3S LiPo Battery__2200mAh 25C, XT60.jpg",
    qty: 1,
    unitPrice: "900",
    function: "3-cell LiPo battery, 2200 mAh capacity, 25C discharge rating.",
    usecase: "Main power source for the rover — powers the drive motors, pump, and all electronics for a full patrol run (~40–45 min).",
  },
  {
    name: "LiPo Balance Charger",
    model: "B3 Compact Charger",
    pic: "components/pic/LiPo Balance Charger__B3 Compact Charger.jpg",
    qty: 1,
    unitPrice: "350",
    function: "Balance charger for 2S/3S LiPo packs, keeps individual cell voltages even while charging.",
    usecase: "Recharges the rover's battery safely between test/demo runs.",
  },
  {
    name: "LM2596 Buck Converter",
    model: "LM2596 Step-Down",
    pic: "components/pic/LM2596 Buck Converter__LM2596 Step-Down.jpg",
    qty: 2,
    unitPrice: "80",
    function: "Adjustable step-down (buck) converter, steps 12V battery voltage down to 5V.",
    usecase: "One unit powers the ESP32-WROOM-32 + sensors, the other independently powers the ESP32-CAM, so Wi-Fi camera transmission doesn't brown out the sensor bus.",
  },

  /* ── Bangla Voice Guidance ── */
  {
    name: "MAX98357A I2S Amplifier",
    model: "MAX98357A",
    pic: "components/pic/MAX98357A I2S Amplifier__.jpg",
    qty: 1,
    unitPrice: "200",
    function: "I2S digital-input Class-D amplifier — takes a digital audio stream straight from the ESP32's I2S peripheral and drives a speaker directly, no separate DAC needed.",
    usecase: "Plays live Bangla speech in Guide Mode. The laptop's Bangla TTS model generates the sentence (specific to what YOLOv8 just detected) and streams it to the rover over Wi-Fi; the ESP32-WROOM-32 pipes it straight through this amp to the speaker.",
  },
  {
    name: "Speaker 3W 4Ω",
    model: "3W 4Ω Mini Speaker",
    pic: "components/pic/Mini Speaker 3W 4Ω.jpg",
    qty: 1,
    unitPrice: "100",
    function: "Small 3W speaker, driven directly by the MAX98357A's onboard Class-D amplifier.",
    usecase: "Outputs the live Bangla voice guidance audibly to the farmer in the field.",
  },

  /* ── Action Mode: Spot Spraying ── */
  {
    name: "Peristaltic Pump",
    model: "12V, 100 mL/min",
    pic: "components/pic/Peristaltic pump__12V,100 mL--min.jpg",
    qty: 1,
    unitPrice: "480",
    function: "12V pump with chemical-resistant tubing, moves liquid at roughly 100 mL/min.",
    usecase: "Delivers pesticide/herbicide to the spray nozzle whenever Action Mode confirms a weed/pest that the rover can treat on its own.",
  },
  {
    name: "Spray Nozzle",
    model: "Flat Fan, 80°",
    pic: "components/pic/Spray Nozzle__Flat Fan, 80°.jpg",
    qty: 1,
    unitPrice: "120",
    function: "Flat fan spray nozzle with an 80° spray angle, 1/4\" fitting.",
    usecase: "Delivers a controlled spot-spray pattern onto the detected weed/pest location rather than blanket-spraying the row.",
  },
  {
    name: "2-Channel Relay Module",
    model: "5V, 10A/250VAC",
    pic: "components/pic/2-Channel Relay Module__5V, 10A,250VAC.jpg",
    qty: 1,
    unitPrice: "100",
    function: "5V-logic relay board that switches the 12V pump circuit on/off under microcontroller control.",
    usecase: "Lets the ESP32-WROOM-32 turn the spray pump on only for the moment Action Mode decides to spray, then shut it off again.",
  },

  /* ── Misc ── */
  {
    name: "Wires, Headers & Prototyping Kit",
    model: "Assorted Male/Female Jumpers",
    pic: "components/pic/Wires, Headers & Prototyping Kit__Assorted Male-Female Jumpers.jpg",
    qty: 1,
    unitPrice: "150",
    function: "Assorted jumper wires and pin headers of various lengths.",
    usecase: "Wires up every sensor, motor driver, and module to the two ESP32 boards.",
  },
  {
    name: "Custom PCB / Perfboard",
    model: "Perfboard, general purpose",
    pic: "components/pic/Custom PCB,Perfboard__general purpose.jpg",
    qty: 1,
    unitPrice: "150",
    function: "General-purpose prototyping board for soldering a clean, vibration-resistant wiring layout.",
    usecase: "Houses the ESP32-WROOM-32 and its sensor/relay connections so wiring survives the rover moving over uneven field terrain.",
  },

  /* Paste more component blocks here ... */

];


/* ════════════════════════════════════════════════════════════
   RENDER — do not change this part
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  renderComponentsPage('page-components-list', COMPONENTS);
});