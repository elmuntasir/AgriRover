/* ══════════════════════════════════════════════════════════════
   AGRIROVER — Literature Review Data File
   pages/litr/litr-mX.js   ← rename to litr-m2.js, litr-m3.js etc.

   INSTRUCTIONS:
   1. Rename this file to your member number  e.g. litr-m2.js
   2. Fill in YOUR REVIEWER INFO section below
   3. Copy the PAPER TEMPLATE block as many times as you need
   4. Fill in each paper's details
   5. Change the page ID at the bottom to match your number
      e.g. Member 2 → 'page-lit-m2'
   ══════════════════════════════════════════════════════════════ */


/* ════════════════════════════════════════════════════════════
   YOUR REVIEWER INFO — fill this in once
   ════════════════════════════════════════════════════════════ */
var LITR_M2_REVIEWER = {
    name:     "Tahura Anzum Toa",
  pic:      "assets/images/members/toa.jpg",
  role:     "Hardware & Embedded Systems",       /* Your project role       e.g. "Hardware & Embedded Systems"   */
  subtitle: "AI-Driven Agricultural Robotics for Precision Farming: A Review of Weed Detection, Pest Monitoring, and Autonomous Rover Technologies",       /* One line about your review focus
                         e.g. "Literature review on autonomous rover navigation and embedded systems." */
  summary:  "This literature review examines recent advancements in AI-based agricultural robotics, focusing on weed detection, pest monitoring, robotic weeding, digital field mapping, and autonomous navigation. Most studies utilize deep learning models such as YOLOv5 and YOLOv8 to improve detection accuracy and support precision agriculture. While existing research addresses individual challenges like detection, mapping, or path planning, few solutions integrate all functionalities into a single autonomous rover platform. This review highlights these research gaps and provides the foundation for developing AgriRover, an intelligent system that combines anomaly detection, field mapping, route optimization, and targeted treatment for sustainable farming.",       /* 1-2 sentences about what topics you covered in your review */
};

var LITR_M2_MEMBER = {
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
   YOUR PAPERS — copy the block below once per paper
   ════════════════════════════════════════════════════════════ */
var LITR_M2_PAPERS = [

  /* ┌─────────────────────────────────────────────────────────┐
     │  PAPER TEMPLATE — copy from here                        │
     └─────────────────────────────────────────────────────────┘ */

{
  title: "Accurate Detection and Precision Spraying of Corn and Weeds Using the Improved YOLOv5 Model",
  authors: "B. Wang, Y. Yan, Y. Lan, M. Wang, Z. Bian",
  year: "2023",
  journal: "IEEE Access, vol. 11, pp. 29868–29882",
  abstract: "This paper presents an improved YOLOv5 model for detecting corn and weeds and integrates the detection system with precision spraying technology to reduce herbicide use and improve efficiency.",
  findings: [
    "Improved YOLOv5 achieved accurate weed and corn detection.",
    "Precision spraying reduced unnecessary herbicide application.",
    "The system improved smart farming efficiency."
  ],
  tags: ["YOLOv5", "Weed Detection", "Precision Spraying", "Agriculture", "Computer Vision"],
  doi: "10.1109/ACCESS.2023.3258439"
},

{
  title: "Weeding Robot Based on Lightweight Platform and Dual Cameras",
  authors: "M. Y. Wang, W. Leelapatra",
  year: "2022",
  journal: "SKIMA 2022",
  abstract: "The study developed a lightweight agricultural robot equipped with dual cameras for weed detection and field navigation.",
  findings: [
    "Dual cameras improved weed localization accuracy.",
    "Lightweight design reduced deployment cost.",
    "Camera calibration is critical for outdoor performance."
  ],
  tags: ["Weeding Robot", "Dual Camera", "Agricultural Robotics", "Automation", "Computer Vision"],
  doi: "10.1109/SKIMA57145.2022.10029527"
},

{
  title: "Detection and Localizing of Rumex Seedlings for Robotic Weeding",
  authors: "N. Känsäkoski, T. Heikkilä, J. Kotaniemi",
  year: "2022",
  journal: "IEEE/ASME MESA 2022",
  abstract: "This work focuses on detecting and localizing Rumex weed seedlings to support robotic weeding operations.",
  findings: [
    "Accurate localization is essential for robotic weed removal.",
    "Computer vision successfully identified Rumex seedlings.",
    "The approach supports precision mechanical weeding."
  ],
  tags: ["Robotic Weeding", "Seedling Detection", "Localization", "Computer Vision", "Precision Agriculture"],
  doi: "10.1109/MESA55290.2022.10004464"
},

{
  title: "Smart Pest Control in Grain Warehouses: YOLOv8-powered IoT Robot Car for Precision Agriculture",
  authors: "M. Zarboubi, S. Chabaa, A. Dliou, A. Zeroual",
  year: "2024",
  journal: "GAST 2024",
  abstract: "The paper combines YOLOv8, IoT communication, and a robotic car to automate pest monitoring and control.",
  findings: [
    "YOLOv8 enabled reliable pest detection.",
    "IoT integration allowed remote monitoring.",
    "Mobile robot platforms can automate pest management."
  ],
  tags: ["YOLOv8", "IoT", "Pest Detection", "Robot Car", "Precision Agriculture"],
  doi: "10.1109/GAST60528.2024.10520743"
},

{
  title: "Enhancing Precision Agriculture Pest Control: A Generalized Deep Learning Approach With YOLOv8-Based Insect Detection",
  authors: "M. Vilar-Andreu, L. García, A.-J. Garcia-Sanchez, R. Asorey-Cacheda, J. Garcia-Haro",
  year: "2024",
  journal: "IEEE Access, vol. 12",
  abstract: "This research presents a generalized YOLOv8-based deep learning model for detecting insects in agricultural environments.",
  findings: [
    "YOLOv8 effectively detected multiple insect species.",
    "Deep learning improved pest monitoring accuracy.",
    "The system supports data-driven pest control decisions."
  ],
  tags: ["YOLOv8", "Insect Detection", "Pest Control", "Deep Learning", "Precision Agriculture"],
  doi: "10.1109/ACCESS.2024.3413979"
},

{
  title: "An Enhanced and Lightweight YOLOv8-Based Model for Accurate Rice Pest Detection",
  authors: "G. Liu, J. Di, Q. Wang, Y. Zhao, Y. Yang",
  year: "2025",
  journal: "IEEE Access, vol. 13",
  abstract: "RicePest-YOLO introduces a lightweight YOLOv8 architecture optimized for accurate rice pest detection under complex conditions.",
  findings: [
    "Improved detection of small rice pests.",
    "Lightweight architecture reduced computational cost.",
    "Maintained high accuracy in complex backgrounds."
  ],
  tags: ["YOLOv8", "Rice Pest", "Lightweight AI", "Deep Learning", "Agriculture"],
  doi: "10.1109/ACCESS.2025.3569819"
},

{
  title: "Deep Learning Techniques for Weed Detection in Agricultural Environments: A Comprehensive Review",
  authors: "D. G. Pai, R. Kamath, M. Balachandra",
  year: "2024",
  journal: "IEEE Access, vol. 12",
  abstract: "This review summarizes deep learning approaches for weed identification, classification, and localization in agriculture.",
  findings: [
    "Deep learning significantly improves weed detection.",
    "Dataset quality strongly affects model performance.",
    "Field variability remains a major challenge."
  ],
  tags: ["Review", "Deep Learning", "Weed Detection", "CNN", "Agriculture"],
  doi: "10.1109/ACCESS.2024.3418454"
},

{
  title: "YOLOv8-MLD: A Lightweight Method for Weed Detection in Cornfields",
  authors: "P. Shen, T. Li, H. Xue, Z. Zhao, H. Cao, K. Mei, G. Wang",
  year: "2026",
  journal: "IEEE Access, vol. 14",
  abstract: "The paper proposes a lightweight YOLOv8-based weed detection model designed for real-time operation in cornfields.",
  findings: [
    "Reduced computational complexity.",
    "Maintained strong weed detection performance.",
    "Suitable for resource-constrained hardware."
  ],
  tags: ["YOLOv8", "Lightweight Model", "Weed Detection", "Cornfield", "Real-Time AI"],
  doi: "10.1109/ACCESS.2026.3687147"
},

{
  title: "Smart Weed Management and Their Profile Mapping Using Deep Learning and Digital Mapping",
  authors: "A. K. Tiwari, D. Singh, A. Yadav, S. Mishra, S. Singh",
  year: "2024",
  journal: "InCACCT 2024",
  abstract: "This study combines deep learning and digital mapping to identify weed-infested areas and generate field profiles.",
  findings: [
    "Digital mapping improved weed management planning.",
    "Deep learning enabled automated weed detection.",
    "Profile mapping supported precision treatment decisions."
  ],
  tags: ["Weed Mapping", "Deep Learning", "Digital Agriculture", "GIS", "Precision Farming"],
  doi: "10.1109/InCACCT61598.2024.10551208"
},

{
  title: "Path Planning of Agricultural Information Collection Robot Integrating Ant Colony Algorithm and Particle Swarm Algorithm",
  authors: "Q. Wu, H. Chen, B. Liu",
  year: "2024",
  journal: "IEEE Access, vol. 12",
  abstract: "The paper proposes a hybrid Ant Colony Optimization and Particle Swarm Optimization approach for agricultural robot path planning.",
  findings: [
    "Hybrid ACO-PSO improved route efficiency.",
    "Reduced travel distance and energy consumption.",
    "Enhanced agricultural robot navigation performance."
  ],
  tags: ["Path Planning", "ACO", "PSO", "Agricultural Robot", "Optimization"],
  doi: "10.1109/ACCESS.2024.3385670"
}



,
  /* └─────────────────────────────────────────────────────────┘
     │  PAPER TEMPLATE — copy until here                        │
     └─────────────────────────────────────────────────────────┘ */


  /* Paste more paper blocks here ... */


];


/* ════════════════════════════════════════════════════════════
   RENDER — change 'page-lit-mX' to your member number
   Member 2 → 'page-lit-m2'
   Member 3 → 'page-lit-m3'   ... and so on
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  renderLitrPage('page-lit-m2', LITR_M2_REVIEWER, LITR_M2_PAPERS);
});
