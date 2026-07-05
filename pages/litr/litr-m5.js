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
var LITR_MX_REVIEWER = {
  name:     "Sumaiya Nasrin",
  pic:      "assets/images/members/suma.jpg",
  role:     "Software",       /* Your project role       e.g. "Hardware & Embedded Systems"   */
  subtitle: "",       /* One line about your review focus
                         e.g. "Literature review on autonomous rover navigation and embedded systems." */
  summary:  "",       /* 1-2 sentences about what topics you covered in your review */
};

/* ════════════════════════════════════════════════════════════
   YOUR PAPERS — copy the block below once per paper
   ════════════════════════════════════════════════════════════ */
var LITR_MX_PAPERS = [

  /* ┌─────────────────────────────────────────────────────────┐
     │  PAPER TEMPLATE — copy from here                        │
     └─────────────────────────────────────────────────────────┘ */

{
  title: "AGROBOT: An IoT-Enabled Autonomous Agricultural Robot for Precision Farming",
  authors: "Aditya Landge, Prajwal Patil, Shubham Jadhav, Sakshi Jadhav, Prof. D. A. Jakkan",
  year: "2025",
  journal: "IEEE Conference Paper",

  abstract: "This paper introduces AGROBOT, an IoT-enabled autonomous agricultural robot designed to reduce manual labor and improve precision farming. The robot uses an ESP32 controller, soil moisture sensors, wireless communication, and a zigzag navigation strategy to perform ploughing, seed dispensing, and field monitoring. The proposed system aims to increase farming efficiency, reduce labor dependency, and support sustainable agricultural practices through real-time monitoring and automation.",

  findings: [
    "The robot combines ploughing, seed dispensing, and field monitoring into a single autonomous platform.",
    "ESP32-based IoT connectivity enables real-time monitoring through a mobile application.",
    "A zigzag navigation algorithm provides systematic coverage of the farming area.",
    "The modular design makes the robot suitable for small and marginal farmers.",
    "The system reduces labor requirements while promoting precision agriculture."
  ],

  tags: [
    "IoT",
    "ESP32",
    "Precision Farming",
    "Autonomous Robot",
    "Soil Moisture Sensor",
    "Smart Agriculture"
  ],

  doi: "https://doi.org/10.1109/PUNECON67554.2025.11378815 "
},

{
  title: "Design and Fabrication of Genz-The Farm Robot",
  authors: "Lalapeta Bhanu Prakash, Konduru Rithvik, Ramkumar Venkatasamy, N. Sivakamasundari",
  year: "2025",
  journal: "2nd International Conference on Intelligent and Innovative Practices in Engineering & Management (IIPEM 2025)",

  abstract: "This paper presents the design and fabrication of the GenZ Farm Robot for efficient pesticide spraying while minimizing farmers' exposure to harmful chemicals. The robot is remotely controlled using a FlySky FS-i6S controller and incorporates a multi-nozzle spraying system with adjustable pressure for accurate pesticide application. Experimental results show that the robot improves spraying efficiency, reduces pesticide wastage, and can cover approximately one acre in about two hours.",

  findings: [
    "Remote-controlled operation improves safety by reducing direct pesticide exposure.",
    "The adjustable multi-nozzle spraying system provides more uniform pesticide distribution.",
    "The four-wheel drive design improves mobility on uneven agricultural land.",
    "The robot can spray approximately one acre within two hours.",
    "Automation helps reduce labor requirements and pesticide wastage."
  ],

  tags: [
    "Pesticide Spraying",
    "Precision Farming",
    "Remote Control",
    "Agricultural Robot",
    "Automation",
    "Smart Farming"
  ],

  doi: "https://doi.org/10.1109/IIPEM65914.2025.11548074 "

},

{
  title: "Automated Fertilizer Application and Plant Bed Formation Robot",
  authors: "Sai Devanth Reddy D, Manoj Varma G. V., Swathi Adabala, Haridra Jinugu, Peeyush K. P.",
  year: "2025",
  journal: "2025 IEEE International Conference on Robotics and Mechatronics (ICRM)",

  abstract: "This paper proposes an autonomous agricultural robot that performs fertilizer application and plant bed formation simultaneously to improve farming efficiency. The system combines autonomous navigation, wireless communication, sensor-based automation, and a web application for monitoring and control. The developed prototype demonstrates the potential to reduce fertilizer wastage, improve nutrient utilization, and increase agricultural productivity.",

  findings: [
    "The robot performs fertilizer application and plant bed formation in a single operation.",
    "Wireless communication enables remote monitoring and control through a web application.",
    "Precise fertilizer placement helps reduce nutrient loss and resource wastage.",
    "Autonomous navigation minimizes manual labor during field operations.",
    "The developed prototype demonstrates improved efficiency for precision farming."
  ],

  tags: [
    "Autonomous Robot",
    "Fertilizer Application",
    "Precision Farming",
    "ESP32",
    "Wireless Communication",
    "Sustainable Agriculture"
  ],

  doi: "https://doi.org/10.1109/ICRM66809.2025.11349062 "
},

{
  title: "IoT Based Low Cost Smart Indoor Farming Management System Using an Assistant Robot and Mobile App",
  authors: "Md. Shadman Shovon, Md. Al Amin, Md. Raju Ahmed, Md. Farhan Hossain",
  year: "2024",
  journal: "IEEE Conference Proceedings",

  abstract: "This paper proposes a low-cost smart indoor farming system that combines IoT technology, an assistant robot, and a mobile application to automate crop management. Environmental sensors continuously monitor temperature, humidity, soil moisture, and light intensity, while the robot performs essential farming tasks based on the collected data. The proposed system helps reduce manual intervention, improves crop monitoring, and provides a cost-effective solution for indoor farming.",

  findings: [
    "The assistant robot automates routine indoor farming operations with minimal human involvement.",
    "IoT sensors continuously monitor environmental conditions and transmit real-time data.",
    "The mobile application allows users to remotely monitor and control the farming system.",
    "Automation improves resource utilization by supplying water only when required.",
    "The low-cost design makes the system suitable for small-scale indoor farming."
  ],

  tags: [
    "IoT",
    "Indoor Farming",
    "Assistant Robot",
    "Mobile Application",
    "Automation",
    "Smart Agriculture"
  ],

  doi: ""

},



{
  title: "Smart Agriculture Farming Robot based on Bluetooth",
  authors: "N. S. Kavya, M. Meghana, G. Akhila, M. Bhavya, B. Shiva Kumar",
  year: "2023",
  journal: "International Journal of Engineering Research and Technology (IJERT)",

  abstract: "This paper presents a Bluetooth-controlled agricultural robot designed to simplify common farming activities such as seed sowing, irrigation, pesticide spraying, and field monitoring. The robot is operated through a smartphone application, providing farmers with an easy and affordable automation solution. The proposed system reduces manual labor while improving the efficiency of basic agricultural operations.",

  findings: [
    "Bluetooth communication enables convenient wireless control using a smartphone.",
    "The robot integrates multiple farming operations into a single platform.",
    "The compact design is suitable for small agricultural fields.",
    "Automation decreases human effort and improves operational efficiency.",
    "The proposed system offers a low-cost solution for precision farming."
  ],

  tags: [
    "Bluetooth",
    "Smart Farming",
    "Agricultural Robot",
    "Seed Sowing",
    "Pesticide Spraying",
    "Automation"
  ],

  doi: "https://doi.org/10.1109/ICDICI62993.2024.10810918 "

},

{
  title: "Agribot – A Multifunctional Autonomous Robot for Enhanced Agricultural Efficiency and Precision Farming",
  authors: "S. Vignesh, P. Santhosh Kumar, M. Harish, K. Ramesh",
  year: "2025",
  journal: "IEEE Conference Proceedings",

  abstract: "This paper introduces Agribot, a multifunctional autonomous robot developed to perform several agricultural tasks including seed sowing, irrigation, fertilizer application, crop monitoring, and obstacle avoidance. The robot combines IoT connectivity, environmental sensors, GPS-based navigation, and autonomous control to improve farming productivity. Experimental results indicate that the proposed system enhances operational efficiency while reducing labor requirements and resource wastage.",

  findings: [
    "Agribot combines multiple agricultural operations into one autonomous robotic platform.",
    "GPS and obstacle avoidance improve navigation accuracy and field coverage.",
    "IoT connectivity enables remote monitoring and real-time data collection.",
    "Sensor-based irrigation and fertilizer application reduce water and nutrient wastage.",
    "The robot improves farming efficiency while lowering dependence on manual labor."
  ],

  tags: [
    "Agribot",
    "Precision Farming",
    "IoT",
    "GPS Navigation",
    "Autonomous Robot",
    "Smart Agriculture"
  ],

  doi: "https://doi.org/10.1109/ICFTS62006.2025.11031932 "

},



{
  title: "A Design Review of a Pure Solar-Power Supply for Surveillance Farming Robot",
  authors: "M. A. Rahman, S. Islam, M. R. Hasan, M. H. Kabir",
  year: "2024",
  journal: "IEEE Conference Proceedings",

  abstract: "This paper reviews the design of a solar-powered energy system for agricultural surveillance robots. The study focuses on replacing conventional battery charging methods with a renewable solar power supply to improve operational time and reduce environmental impact. The proposed design demonstrates that solar energy can provide a reliable and sustainable power source for long-duration farming applications.",

  findings: [
    "Solar energy can significantly extend the operating time of surveillance robots.",
    "Renewable power reduces dependence on external battery charging infrastructure.",
    "The proposed design lowers operating costs over long-term agricultural use.",
    "A properly designed power management system improves overall energy efficiency.",
    "The approach supports environmentally sustainable precision farming."
  ],

  tags: [
    "Solar Energy",
    "Surveillance Robot",
    "Renewable Energy",
    "Power Management",
    "Precision Farming",
    "Agricultural Robotics"
  ],

  doi: "https://doi.org/10.1109/ICDCM54452.2023.10433632 "

},

{
  title: "Bridging HRI Theory and Practice: Design Guidelines for Robot Communication in Dairy Farming",
  authors: "Anne Ingeborg Myrseth, Pål Johan From, and Co-authors",
  year: "2025",
  journal: "Journal of Human-Robot Interaction",

  abstract: "This paper investigates how agricultural robots should communicate with farmers in dairy farming environments. By combining human-robot interaction principles with practical farming requirements, the authors develop communication design guidelines that improve trust, usability, and collaboration between robots and users. The study highlights the importance of clear feedback and intuitive interaction for successful robotic adoption in agriculture.",

  findings: [
    "Effective robot communication improves user trust and acceptance.",
    "Visual and auditory feedback helps farmers better understand robot actions.",
    "Human-centered interface design increases operational safety and usability.",
    "Simple communication methods reduce operator confusion during robot deployment.",
    "The proposed guidelines can support future agricultural robot development."
  ],

  tags: [
    "Human-Robot Interaction",
    "Dairy Farming",
    "Robot Communication",
    "User Interface",
    "Agricultural Robotics",
    "HRI"
  ],

  doi: "https://doi.org/10.1145/3610977.3634991 "

},


{
  title: "A Teleoperation System of Shallot Watering Robot for Precision Farming",
  authors: "R. F. Sari, A. Nugroho, M. Rizki, and Co-authors",
  year: "2024",
  journal: "IEEE Conference Proceedings",

  abstract: "This paper presents a teleoperated watering robot designed specifically for shallot cultivation. The system enables farmers to remotely control irrigation while monitoring field conditions through wireless communication. Experimental results show that the robot provides accurate watering, reduces water consumption, and supports precision irrigation practices.",

  findings: [
    "Teleoperation enables remote irrigation management from a safe distance.",
    "The robot delivers water more accurately than conventional manual methods.",
    "Wireless communication supports real-time monitoring during operation.",
    "Efficient irrigation reduces unnecessary water consumption.",
    "The proposed system improves productivity for shallot farming."
  ],
  tags: [
    "Teleoperation",
    "Precision Irrigation",
    "Watering Robot",
    "Shallot Farming",
    "Wireless Communication",
    "Smart Agriculture"
  ],

  doi: "https://doi.org/10.1109/CENIM67940.2025.11326184 "

},

{
  title: "Design of AI-Based Integrated Swarm Robotics for Autonomous Farming Operations",
  authors: "A. Kumar, S. Sharma, P. Verma, and Co-authors",
  year: "2025",
  journal: "IEEE Conference Proceedings",

  abstract: "This paper proposes an AI-based swarm robotics system for autonomous farming operations. Multiple robots cooperate using artificial intelligence, wireless communication, and distributed task allocation to perform agricultural activities more efficiently than a single robot. The proposed approach improves scalability, fault tolerance, and overall field productivity for large-scale precision agriculture.",

  findings: [
    "Swarm robotics enables multiple robots to complete farming tasks collaboratively.",
    "Artificial intelligence improves task allocation and autonomous decision-making.",
    "The distributed system increases reliability because other robots can continue working if one fails.",
    "Cooperative operation improves field coverage and reduces task completion time.",
    "The proposed architecture is suitable for future large-scale precision farming applications."
  ],

  tags: [
    "Swarm Robotics",
    "Artificial Intelligence",
    "Precision Farming",
    "Multi-Robot System",
    "Autonomous Agriculture",
    "Smart Farming"
  ],

  doi: "https://doi.org/10.1109/ICAIQSA67794.2025.11440424 "
}


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
  renderLitrPage('page-lit-m5', LITR_MX_REVIEWER, LITR_MX_PAPERS);

});
