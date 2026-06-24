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
var LITR_M3_REVIEWER = {
    name:     "Maria Jahan Noon",
  pic:      "assets/images/members/noon.jpg",
  role:     "AI & Computer Vision Engineer (Software)",       /* Your project role       e.g. "Hardware & Embedded Systems"   */
  subtitle: "",       /* One line about your review focus
                         e.g. "Literature review on autonomous rover navigation and embedded systems." */
  summary:  "I have reviewed several papers on autonomous rover navigation and embedded systems, focusing on the integration of AI and computer vision techniques.",       /* 1-2 sentences about what topics you covered in your review */
};

var MEMBER3 = {
  name:     "Maria Jahan Noon",
  pic:      "assets/images/members/noon.jpg",
  role:     "AI & Computer Vision Engineer (Software)",
  quote:    "Transforming data into decisions, and innovation into sustainable harvests.",
  github:   "https://github.com/Maria-Jahan-Noon?tab=repositories",
  fb:       "",
  linkedin: "https://www.linkedin.com/in/maria-jahan-noon-1245b23bb/",
  rg:       "",
};
/* ════════════════════════════════════════════════════════════
   YOUR PAPERS — copy the block below once per paper
   ════════════════════════════════════════════════════════════ */
var LITR_M3_PAPERS = [

  /* ┌─────────────────────────────────────────────────────────┐
     │  PAPER TEMPLATE — copy from here                        │
     └─────────────────────────────────────────────────────────┘ */
  {
  title: "The Cyber-Physical Control Room: A Mixed Reality Interface for Mobile Robot Teleoperation and Human-Robot Teaming",
  authors: "Michael E. Walker, Maitrey Gramopadhye, Bryce Ikeda, Jack Burns, Daniel Szafir",
  year: "2024",
  journal: "2024 19th ACM/IEEE International Conference on Human-Robot Interaction (HRI)",
  abstract: "This paper presents an immersive Cyber-Physical Control Room interface that provides both robot-egocentric and robot-exocentric 3D perspectives for remote mobile robot operation. The system was evaluated against traditional robot interfaces in a mock disaster response scenario with mixed human-robot teams. Results showed the interface improved operator effectiveness by 28% while navigating complex environments and enhanced human-robot teaming aspects including social engagement and teammate tracking.",
  findings: [
    "Improved robot operator effectiveness by 28% in complex warehouse navigation",
    "Enhanced social engagement and human-robot teaming capabilities",
    "Better remote operator ability to track human teammates in the field",
    "Improved opinions of human teammate leadership qualities"
  ],
  tags: ["Mixed Reality", "Robot Teleoperation", "Human-Robot Teaming", "Control Room", "3D Interface"],
  doi: "10.1109/HRI59958.2024.10660714"
},

{
  title: "I Need to Pass Through! Understandable Robot Behavior for Passing Interaction in Narrow Environment",
  authors: "Yusuke Fujioka, Yuyi Liu, Takayuki Kanda",
  year: "2024",
  journal: "2024 19th ACM/IEEE International Conference on Human-Robot Interaction (HRI)",
  abstract: "This study developed a motion control algorithm enabling social mobile robots to intuitively convey their intent through social cues when navigating narrow aisles and interacting with people. The algorithm estimates person understanding based on their reactions and provides corresponding motion strategies for effective passing interactions. Field testing in a store with 75cm wide aisles showed the method significantly improved the robot's ability to pass through compared to traditional move-then-wait strategies.",
  findings: [
    "Achieved 73.1% successful passage rate compared to 16.7% with traditional methods",
    "Motion control algorithm effectively conveys robot intent through social cues",
    "Estimates human understanding based on real-time reactions to robot movement",
    "Successfully tested over six days in real store environment with narrow aisles"
  ],
  tags: ["Social Navigation", "Narrow Environment", "Robot Behavior", "Passing Interaction", "Motion Control"],
  doi: "10.1109/HRI59958.2024.10660713"
},

{
  title: "A System for Human-Robot Teaming through End-User Programming and Shared Autonomy",
  authors: "Michael Hagenow, Emmanuel Senft, Robert Radwin, Michael Gleicher, Michael Zinn, Bilge Mutlu",
  year: "2024",
  journal: "Proceedings of the 2024 ACM/IEEE International Conference on Human-Robot Interaction (HRI '24)",
  abstract: "This paper describes a flexible human-robot teaming system combining end-user programming and shared autonomy methods for industrial tasks difficult to fully automate. The system allows skilled workers to provide high-level task planning while robots assume physical task burdens, demonstrated in aircraft manufacturing sanding applications. The research identifies key challenges and opportunities in deploying collaborative human-robot workflows for complex, variable tasks.",
  findings: [
    "Combines end-user programming with shared autonomy for flexible task execution",
    "Enables skilled workers to retain high-level planning while robots handle physical tasks",
    "Successfully demonstrated in two types of aircraft manufacturing sanding tasks",
    "Addresses automation challenges for tasks with high complexity and variability"
  ],
  tags: ["Human-Robot Teaming", "End-User Programming", "Shared Autonomy", "Collaborative Robotics", "Industrial Applications"],
  doi: "10.1145/3610977.3634965"
},

{
  title: "Deep Learning Based Detector YOLOv5 for Identifying Insect Pests",
  authors: "Iftikhar Ahmad, Yayun Yang, Yi Yue, Chen Ye, Muhammad Hassan, Xi Cheng, Yunzhi Wu, Youhua Zhang",
  year: "2022",
  journal: "Applied Sciences, vol. 12, no. 19, art. 10167",
  abstract: "This study developed a YOLOv5-based object detection system to identify 23 different species of insect pests from digital images and videos for precision agriculture applications. The researchers created a new IP-23 dataset with 7,046 images and compared eight YOLO architectures, finding YOLOv5x achieved state-of-the-art performance. The system enables spot spraying to reduce pesticide use while conserving beneficial insects like honeybees.",
  findings: [
    "YOLOv5x achieved 98.3% mAP@0.5 and 79.8% mAP@0.5:0.95 on IP-23 dataset",
    "System detects 23 insect pest species in 40.5 milliseconds",
    "Created new IP-23 dataset with 7,046 images under varying conditions",
    "Enables real-time pest detection on mobile IP cameras for field applications",
    "Reduces pesticide use through targeted spot spraying capabilities"
  ],
  tags: ["YOLOv5", "Insect Pest Detection", "Deep Learning", "Precision Agriculture", "Object Detection"],
  doi: "10.3390/app121910167"
},

{
  title: "Crop Pest Recognition in Real Agricultural Environment Using Convolutional Neural Networks by a Parallel Attention Mechanism",
  authors: "Shuai Zhao, Jizhan Liu, Zijun Bai, Chunjiang Hu, Yongcun Jin",
  year: "2022",
  journal: "Frontiers in Plant Science, vol. 13, art. 839572",
  abstract: "This research proposes an improved ResNet-50 model with a parallel attention mechanism (PCSA) for recognizing 10 types of crop pests in real agricultural environments. The model effectively suppresses complex backgrounds and extracts multi-scale pest features without increasing parameter count. Testing showed 98.17% accuracy with fast recognition speed of 32.29ms per image, meeting real-time detection requirements for agricultural robots.",
  findings: [
    "ResNet-50-PCSA achieved 98.17% accuracy on 10-class pest recognition",
    "Average detection time of 32.29ms per image enables real-time operation",
    "Parallel attention mechanism improves accuracy by 5.76% over baseline ResNet-50",
    "Model size of 91MB suitable for lightweight deployment on agricultural equipment",
    "Successfully validated on rice leaf disease dataset with 99.35% accuracy"
  ],
  tags: ["Crop Pest Recognition", "ResNet-50", "Attention Mechanism", "Deep Learning", "Real-Time Detection"],
  doi: "10.3389/fpls.2022.839572"
},

{
  title: "Advances in Artificial Intelligence-Enabled Crop Pest and Disease Detection: A Systematic Review",
  authors: "Zhen Ma, Cundeng Wang, Xinzhong Wang, Xuegeng Chen",
  year: "2026",
  journal: "Agriculture, vol. 16, no. 12, art. 1262",
  abstract: "This systematic review analyzes the transition from single-sensor monitoring to intelligent perception and multimodal fusion in crop pest and disease detection. The paper examines spectral sensing technologies, deep learning model evolution including lightweight CNNs and Vision Transformers, and the integration of UAV, IoT, and robotic systems. Three critical challenges are identified for practical field deployment: dataset bias, computing resource allocation, and the need for end-to-end closed-loop systems.",
  findings: [
    "Detection technology evolving from single sensors to multimodal fusion systems",
    "Lightweight CNNs, ViTs, and Mamba models improving feature extraction in complex environments",
    "Integration of UAV remote sensing, IoT edge computing, and robots enabling perception-decision-execution pipelines",
    "Dataset bias creates gap between laboratory performance and field deployment",
    "Need for complete end-to-end systems from detection to field operations"
  ],
  tags: ["AI in Agriculture", "Pest Detection", "Deep Learning", "Multimodal Fusion", "Systematic Review"],
  doi: "10.3390/agriculture16121262"
},

{
  title: "Monitoring IoT and Robotics Data for Sustainable Agricultural Practices Using a New Edge–Fog–Cloud Architecture",
  authors: "Mohamed El-Ouati, Sandro Bimonte, Nicolas Tricot",
  year: "2026",
  journal: "Computers, vol. 15, no. 1, art. 32",
  abstract: "This paper presents a novel five-layer smart farming architecture designed to manage high-volume, diverse data from IoT devices, robots, and drones in modern agriculture. The system uses Kafka for real-time stream ingestion, Hadoop/Spark for batch processing of historical data in the cloud, and Geoflink/PostGIS for low-latency geovisualization. An Open Metadata-based Governance Layer ensures data quality and lineage across all components.",
  findings: [
    "Five-layer architecture: Source, Ingestion, Batch, Speed, and Governance layers",
    "Kafka enables high-throughput real-time data stream ingestion at fog level",
    "Hadoop cluster with Spark, Hive, and Drill processes large-scale historical data in cloud",
    "Geoflink and PostGIS provide low-latency real-time geovisualization",
    "Open Metadata ensures data quality, lineage, and organization across system"
  ],
  tags: ["IoT", "Agricultural Robotics", "Edge-Fog-Cloud Architecture", "Data Management", "Smart Farming"],
  doi: "10.3390/computers15010032"
},

{
  title: "Design and Experiment of an Agricultural Field Management Robot and Its Navigation Control System",
  authors: "Longfei Cui, Feixiang Le, Xinyu Xue, Tao Sun, Yuxuan Jiao",
  year: "2024",
  journal: "Agronomy, vol. 14, no. 4, art. 654",
  abstract: "This research presents a multifunctional electric field management robot platform with four switchable steering modes and automatic wheel-track adjustment for pesticide application, weeding, and field information collection. The robot integrates multi-sensor navigation including GPS, RGB camera, and LiDAR for unmanned driving in complex field environments. Field tests demonstrated high trajectory tracking accuracy with average lateral error of 20.75mm in crab steering mode and 77.98mm for vision-based crop row following.",
  findings: [
    "Robot platform features four steering modes: Ackermann, four-wheel, crab, and zero-radius steering",
    "Crab steering achieved highest accuracy with 20.75mm average lateral error",
    "Vision-based crop row tracking achieved 77.98mm average position deviation",
    "Multi-sensor navigation system integrates GPS, RGB camera, and multi-line LiDAR",
    "Platform supports modular attachment of sprayers, weeders, and data collectors"
  ],
  tags: ["Agricultural Robot", "Navigation Control", "Path Planning", "Autonomous Driving", "Field Management"],
  doi: "10.3390/agronomy14040654"
},

{
  title: "AgriPath: a robust multi-objective path planning framework for agricultural robots in dynamic field environments",
  authors: "Chenghan Yang, Dingkun Zheng, Siming Chen, Madina Mansurova, Baurzhan Belgibaev, Baidong Zhao",
  year: "2025",
  journal: "Frontiers in Plant Science, vol. 16, art. 1687747",
  abstract: "This study introduces AgriPath, a multi-objective path planning framework integrating improved CNN, A* algorithm, and whale optimization algorithm for agricultural robot navigation in complex field environments. The system outperformed advanced algorithms in path length, smoothness, planning time, and dynamic obstacle avoidance across simple, moderate, and complex maize field scenarios. Key innovations include causal convolution for trajectory prediction, NDVI-based dynamic heuristics, and non-linear convergence factors for balanced optimization.",
  findings: [
    "Achieved path length of 971.34m vs competitors' 1,018-1,026m in simple scenarios",
    "Planning time of 125.1ms significantly faster than competing algorithms",
    "Dynamic obstacle avoidance success rate of 0.92-0.98 in complex environments",
    "Improved CNN with causal convolution enhances short-term trajectory prediction",
    "NDVI-based dynamic heuristics improve global path adaptability"
  ],
  tags: ["Path Planning", "Agricultural Robots", "Multi-Objective Optimization", "A* Algorithm", "Dynamic Environments"],
  doi: "10.3389/fpls.2025.1687747"
},

{
  title: "Research Progress on Path Planning and Tracking Control Methods for Orchard Mobile Robots in Complex Scenarios",
  authors: "Yayun Shen, Yue Shen, Yafei Zhang, Chenwei Huo, Zhuofan Shen, Wei Su, Hui Liu",
  year: "2025",
  journal: "Agriculture, vol. 15, no. 18, art. 1917",
  abstract: "This comprehensive review examines state-of-the-art path planning and tracking control strategies for orchard mobile robots operating in complex, unstructured environments. The paper analyzes advances in global and local path planning methods, tracking control approaches for different motion models, and identifies key technical challenges. The authors conclude that future progress requires highly integrated multimodal solutions combining AI with end-to-end control systems rather than single-algorithm approaches.",
  findings: [
    "No single universal navigation algorithm can handle complex orchard environments",
    "Traditional hierarchical architectures show limitations in unstructured orchard settings",
    "Advanced methods like MPC and RL show promise but face computational and generalization challenges",
    "Future research needs tightly coupled multimodal perception-decision-control frameworks",
    "Integration of AI with end-to-end control systems identified as key direction"
  ],
  tags: ["Orchard Robots", "Path Planning", "Tracking Control", "Autonomous Navigation", "Review Paper"],
  doi: "10.3390/agriculture15181917"
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
  renderLitrPage('page-lit-m3', LITR_M3_REVIEWER, LITR_M3_PAPERS);
});
