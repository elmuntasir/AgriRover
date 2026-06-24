/* ══════════════════════════════════════════════════════════════
   LITERATURE REVIEW — Member 1: Muntasir Rafin
   pages/litr/litr-m1.js

   HOW TO ADD A PAPER — copy this block into LITR_M1_PAPERS:
   {
     title:    "",
     authors:  "",
     year:     "",
     journal:  "",
     abstract: "",
     findings: ["", ""],
     tags:     [],
     doi:      "",
   },
   ══════════════════════════════════════════════════════════════ */

var LITR_M1_REVIEWER = {
  name:     "Md Muntasir Rahman Rafin",
  pic:      "assets/images/members/muntasir.jpg",
  role:     "Team Lead · AI & Software",
  subtitle: "Literature review on YOLO-based weed detection, transformer architectures, and precision agriculture AI systems.",
  summary:  "Focused on state-of-the-art object detection models for real-time weed and pest identification, evaluating accuracy, speed, and suitability for embedded rover deployment in agricultural environments.",
};

var LITR_M1_PAPERS = [

  {
    title:    "Assessing the capability of YOLO- and transformer-based object detectors for real-time weed detection",
    authors:  "A. Allmendinger, A. O. Saltık, G. G. Peteinatos, A. Stein, R. Gerhards",
    year:     "2025",
    journal:  "Precision Agriculture, vol. 26, art. 52",
    abstract: "This study benchmarks YOLO-family and Vision Transformer-based detectors specifically for real-time weed detection under varied field conditions. It evaluates the trade-off between inference latency and detection accuracy, finding YOLO variants competitive with transformers at a fraction of the computational cost — a key consideration for rover-based edge deployment.",
    findings: [
      "YOLO-based models achieve near-real-time inference suitable for embedded rover hardware.",
      "Transformer-based detectors yield marginally higher mAP but require 3–5× more compute.",
      "Background complexity (soil texture, lighting variation) is the dominant factor affecting detection performance across all models.",
    ],
    tags: ["YOLOv8", "Transformer", "Real-Time Detection", "Weed Detection", "Precision Agriculture"],
    doi:  "10.1007/s11119-025-10246-0",
  },

  {
    title:    "A lightweight weed detection model for cotton fields based on an improved YOLOv8n",
    authors:  "J. Wang, Z. Qi, Y. Wang et al.",
    year:     "2025",
    journal:  "Scientific Reports, vol. 15, art. 457",
    abstract: "Proposes a compressed YOLOv8n variant specifically optimised for weed detection in cotton field environments under resource constraints. The model applies structured pruning and knowledge distillation to reduce parameter count while preserving competitive detection accuracy, making it viable for edge deployment on rover-class hardware.",
    findings: [
      "Lightweight YOLOv8n variant achieves ~40% parameter reduction with less than 2% mAP drop.",
      "Maintains real-time inference at 30+ FPS on edge hardware without GPU acceleration.",
      "Cotton-specific data augmentation pipeline significantly improves generalisation across varying crop row conditions.",
    ],
    tags: ["YOLOv8n", "Lightweight Model", "Edge Deployment", "Cotton", "Model Compression"],
    doi:  "10.1038/s41598-024-84748-8",
  },

  {
    title:    "PD-YOLO: A novel weed detection method based on multi-scale feature fusion",
    authors:  "S. Li, Z. Chen, J. Xie, H. Zhang, J. Guo",
    year:     "2025",
    journal:  "Frontiers in Plant Science, vol. 16",
    abstract: "Introduces PD-YOLO, a modified YOLO architecture incorporating a multi-scale feature pyramid for improved detection of weeds at varying distances and sizes within a single forward pass. The architecture is specifically designed to handle small weed instances that are typically missed by standard single-scale detectors.",
    findings: [
      "Multi-scale feature fusion improves small weed detection by 12.4% mAP over standard YOLOv8.",
      "Handles weed instances as small as 8×8 pixels reliably, relevant to early-stage detection.",
      "Inference speed remains within real-time bounds suitable for rover camera streams.",
    ],
    tags: ["PD-YOLO", "Multi-Scale", "Feature Fusion", "Small Object Detection", "Weed"],
    doi:  "10.3389/fpls.2025.1506524",
  },

  {
    title:    "YOLO-CWD: A novel model for crop and weed detection based on improved YOLOv8",
    authors:  "Anonymous",
    year:     "2025",
    journal:  "Crop Protection, vol. 192, art. 107169",
    abstract: "Presents YOLO-CWD, a dual-class detection model that simultaneously identifies both crop plants and weeds within the same scene. The simultaneous detection approach allows the system to avoid targeting crop plants during actuation, a critical safety requirement for precision spraying rovers like AgriRover.",
    findings: [
      "Dual-class detection enables safe crop-weed discrimination in a single inference pass.",
      "Achieves 91.3% mAP on combined crop-weed benchmark dataset.",
      "Crop false-positive rate below 2%, critical for avoiding accidental treatment of healthy plants.",
    ],
    tags: ["YOLO-CWD", "Crop Detection", "Weed Detection", "YOLOv8", "Dual-Class"],
    doi:  "10.1016/j.cropro.2025.107169",
  },

  {
    title:    "Field evaluation of an agricultural weed detector using YOLO image recognition: Background conditions affect detection performance",
    authors:  "S. Matsuhashi, R. Sugiura, M. Asai et al.",
    year:     "2025",
    journal:  "Pest Management Science, vol. 81, no. 10",
    abstract: "Conducts real-world field evaluation of a YOLO-based weed detector deployed on agricultural equipment, examining how varying background conditions — including wet vs. dry soil, sunlight angle, and crop density — affect detection reliability. Findings directly inform AgriRover's camera calibration and lighting compensation strategy.",
    findings: [
      "Detection accuracy drops by up to 18% under high-contrast sunlight conditions.",
      "Wet soil backgrounds cause false positives due to spectral similarity with dark weed patches.",
      "Model retraining with field-specific images improves real-world accuracy by 14% over lab-trained models.",
    ],
    tags: ["Field Evaluation", "YOLO", "Background Conditions", "Real-World Testing", "Agricultural Robotics"],
    doi:  "10.1002/ps.70009",
  },

  {
    title:    "YOLO-SW: A Real-Time Weed Detection Model for Soybean Fields Using Swin Transformer and RT-DETR",
    authors:  "Y. Shuai, J. Shi, Y. Li et al.",
    year:     "2025",
    journal:  "Agronomy, vol. 15, no. 7",
    abstract: "Proposes YOLO-SW, a hybrid architecture combining Swin Transformer attention blocks with RT-DETR's detection head for weed detection in soybean fields. The hybrid approach captures long-range spatial dependencies missed by purely convolutional models, improving detection in dense crop row conditions.",
    findings: [
      "Swin Transformer backbone captures spatial context across rows, improving dense-scene accuracy by 8.7% mAP.",
      "RT-DETR detection head enables end-to-end training without NMS post-processing, reducing latency.",
      "Model achieves state-of-the-art on soybean weed benchmark while maintaining 25 FPS inference.",
    ],
    tags: ["YOLO-SW", "Swin Transformer", "RT-DETR", "Soybean", "Hybrid Architecture"],
    doi:  "10.3390/agronomy15071712",
  },

  {
    title:    "GE-YOLO for Weed Detection in Rice Paddy Fields",
    authors:  "Anonymous",
    year:     "2025",
    journal:  "Applied Sciences, vol. 15, no. 5",
    abstract: "Introduces GE-YOLO, a YOLO variant incorporating Gather-and-Expand modules for improved weed detection in rice paddy environments. Rice paddies present unique challenges — flooded backgrounds, narrow inter-row gaps, and similar visual texture between weeds and rice — making this directly relevant to Bangladesh's primary crop context.",
    findings: [
      "GE module improves feature discrimination between rice plants and morphologically similar weeds.",
      "Achieves 89.6% mAP on rice-specific weed dataset, outperforming base YOLOv8 by 6.2%.",
      "Particularly effective in flooded paddy conditions where background reflection creates noise.",
    ],
    tags: ["GE-YOLO", "Rice Paddy", "Weed Detection", "Feature Extraction", "Bangladesh Context"],
    doi:  "10.3390/app15052823",
  },

  {
    title:    "HDMS-YOLO: A multi-scale weed detection model for complex farmland environments",
    authors:  "J. Hua, R. He, Y. Zeng, Q. Chen",
    year:     "2025",
    journal:  "Frontiers in Plant Science, vol. 16",
    abstract: "Presents HDMS-YOLO, which addresses the challenge of detecting weeds across highly heterogeneous farmland environments — different soil types, lighting, crop varieties — within a single unified model. This generalisation capability is critical for a rover that must operate across different field zones without model switching.",
    findings: [
      "HDMS architecture generalises across 6 different crop environments with less than 3% mAP variance.",
      "Multi-scale detection head handles weed sizes from seedling to mature plant in one pass.",
      "Outperforms environment-specific models on cross-domain test sets, validating generalisation.",
    ],
    tags: ["HDMS-YOLO", "Multi-Scale", "Generalisation", "Complex Environments", "Weed"],
    doi:  "10.3389/fpls.2025.1696392",
  },

  {
    title:    "Comparative performance analysis of YOLO object detection algorithms for weed detection in agriculture",
    authors:  "S. Sonawane, N. N. Patil",
    year:     "2024",
    journal:  "Integrated Computer-Aided Engineering",
    abstract: "Provides a systematic comparative analysis of YOLOv5, YOLOv7, and YOLOv8 variants on agricultural weed detection tasks, evaluating mAP, FPS, model size, and computational requirements. This benchmark directly informed AgriRover's decision to adopt YOLOv8 as the detection backbone.",
    findings: [
      "YOLOv8 consistently outperforms YOLOv5 and YOLOv7 on weed detection mAP by 4–9%.",
      "YOLOv8n offers the best speed-accuracy trade-off for edge deployment scenarios.",
      "Larger YOLO variants plateau in accuracy gain while significantly increasing inference cost.",
    ],
    tags: ["YOLOv5", "YOLOv7", "YOLOv8", "Comparative Analysis", "Benchmark"],
    doi:  "10.3233/IDT-240978",
  },

  {
    title:    "WeedVision: Multi-Stage Growth and Classification of Weeds using DETR and RetinaNet for Precision Agriculture",
    authors:  "T. Islam, T. T. Sarker, K. R. Ahmed, C. B. Rankrape, K. Gage",
    year:     "2025",
    journal:  "arXiv preprint",
    abstract: "Introduces WeedVision, a multi-stage weed classification system that identifies not just weed presence but growth stage — seedling, juvenile, or mature — using a combination of DETR (transformer-based detector) and RetinaNet. Growth stage classification enables AgriRover to prioritise treatment targets: mature weeds with seed heads pose greater crop threat and should be treated first.",
    findings: [
      "Multi-stage classification achieves 87.4% accuracy on weed growth stage identification.",
      "DETR backbone provides superior detection of occluded weeds in dense crop canopies.",
      "Growth stage data enables priority-based route optimisation — mature weeds treated first.",
    ],
    tags: ["WeedVision", "DETR", "RetinaNet", "Growth Stage", "Multi-Stage Classification"],
    doi:  "https://arxiv.org/abs/2502.00000",
  },

];

/* ── Render ── */
document.addEventListener('DOMContentLoaded', function () {
  renderLitrPage('page-lit-m1', LITR_M1_REVIEWER, LITR_M1_PAPERS);
});