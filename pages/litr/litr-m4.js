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
var LITR_M4_REVIEWER = {
    name: "Mobasshira Akter",
    pic: "assets/images/members/muba.jpg",
    role: "",     /* Your project role       e.g. "Hardware & Embedded Systems"   */
    subtitle: "",       /* One line about your review focus
                         e.g. "Literature review on autonomous rover navigation and embedded systems." */
    summary: "",       /* 1-2 sentences about what topics you covered in your review */
};


/* ════════════════════════════════════════════════════════════
   YOUR PAPERS — copy the block below once per paper
   ════════════════════════════════════════════════════════════ */
var LITR_M4_PAPERS = [

    {
        id: "PAPER 01",
        title: "PD-YOLO: A novel weed detection method based on multi-scale feature fusion",
        authors: ["Shengzhou Li", "Zihan Chen", "Jialong Xie", "Hewei Zhang", "Jianwen Guo"],
        year: 2025,
        journal: "Frontiers in Plant Science",
        keyFindings: [
            "Improves YOLOv8n to easily find small weeds that look exactly like crops.",
            "Uses a new PF-FPN network to detect tiny weeds hidden under dense leaves.",
            "Achieves 95.0% accuracy while staying lightweight and fast for real-world weeding robots."
        ]
    },
    {
        id: "PAPER 02",
        title: "Application of YOLOv8 Improved Model Incorporating Attentional Mechanism in Weed Identification",
        authors: ["Zhanwei Feng", "Adisak Sangsongfa", "Noppadol Amdee"],
        year: 2026,
        journal: "ASEAN Journal of Scientific and Technological Reports",
        keyFindings: [
            "Integrates a Global Attention Module (GAM) after each C2f block in the YOLOv8 backbone to improve contextual feature extraction.",
            "Enhances target detection performance specifically for visually complex, dense, and heavily overlapping weeds.",
            "Outperforms the baseline YOLOv8 in precision, recall, and mAP while maintaining low computational costs."
        ]
    },
    {
        id: "PAPER 03",
        title: "Enhancing Pakistan Rice Plant Disease Detection: A Highly Effective Pre-Trained CNN Model",
        authors: ["M. A. Arshed", "Z. Akram", "H. Z. Bajwa", "et al."],
        year: 2024,
        journal: "IEEE",
        keyFindings: [
            "Presents a fine-tuned ResNet101V2 model for rapid regional rice disease identification.",
            "Achieves 81% accuracy across five rice leaf diseases and healthy samples.",
            "Outperforms standard ResNet101, ResNet50V2, and DenseNet121 architectures."
        ]
    },
    {
        id: "PAPER 04",
        title: "Deep Learning Pricing of Processing Firms in Agricultural Markets",
        authors: ["H. Khalili"],
        year: 2024,
        journal: "Agriculture (MDPI)",
        keyFindings: [
            "Presents a deep reinforcement learning framework using Q-learning to optimize spatial pricing.",
            "Approximates game-theoretic Nash equilibrium pricing without prior market knowledge.",
            "Proves discriminatory (OD) and uniform (UD) pricing emerge under high transport constraints."
        ]
    },
    {
        id: "PAPER 05",
        title: "Deep learning techniques for in-crop weed recognition in large-scale grain production systems: A Review",
        authors: ["Kun Hu", "Zhiyong Wang", "Guy Coleman", "Asher Bender", "Tingting Yao", "Shan Zeng", "Dezhen Song", "Arnold Schumann", "Michael Walsh"],
        year: 2024,
        journal: "Precision Agriculture",
        keyFindings: [
            "Reviews deep learning approaches for weed recognition, including classification, detection, and segmentation.",
            "Summarizes more than 30 state-of-the-art weed detection studies and publicly available datasets.",
            "Highlights future research directions such as real-time inference, explainable AI, and weakly supervised learning."
        ]
    },
    {
        id: "PAPER 06",
        title: "Agricultural Object Detection with YOLO Algorithm: A Bibliometric and Systematic Literature Review",
        authors: ["S. Chandra", "H. Sharma", "A. Kumar", "et al."],
        year: 2024,
        journal: "arXiv (Systematic Literature Review)",
        keyFindings: [
            "Reviews the evolution of the YOLO algorithm (YOLOv1-YOLOv8) for agricultural object detection.",
            "Compares YOLO models for crop, fruit, weed, pest, and disease detection based on accuracy and speed.",
            "Identifies current research gaps and future directions, including lightweight models and edge AI."
        ]
    },
    {
        id: "PAPER 07",
        title: "Review of Weed Recognition: A Global Agriculture Perspective",
        authors: ["Madeleine Darbyshire", "Shaun Coutts", "Petra Bosilj", "Elizabeth Sklar", "Simon Parsons"],
        year: 2024,
        journal: "Computers and Electronics in Agriculture",
        keyFindings: [
            "Provides a comprehensive systematic review of weed recognition research across different crops using AI.",
            "Identifies that crops such as wheat and rice are still underrepresented in weed recognition research.",
            "Highlights the need for more real-world validation, larger datasets, and robust AI models."
        ]
    },
    {
        id: "PAPER 08",
        title: "Analysis of the Impact of Different Improvement Methods Based on YOLOv8 for Weed Detection",
        authors: ["Xin Wang", "Rui Zhang", "Yijie Liu", "Xiaohui Li", "Qian Zhao"],
        year: 2024,
        journal: "Agriculture (MDPI)",
        keyFindings: [
            "Compares various YOLOv8 improvements for complex weed detection.",
            "Proves attention, feature fusion, and lightweight designs cut complexity and boost accuracy.",
            "Improves Precision, Recall, and mAP for real-time applications."
        ]
    },
    {
        id: "PAPER 09",
        title: "YOLOv8 Model for Weed Detection in Wheat Fields Based on Visual Transformer and Multi-Scale Feature Fusion",
        authors: ["Haoran Li", "Yufei Wang", "Xuefeng Zhang", "Jianhua Li", "Wei Chen"],
        year: 2024,
        journal: "Sensors (MDPI)",
        keyFindings: [
            "Integrates ViT and multi-scale fusion into YOLOv8 for wheat fields.",
            "Improves real-time detection of small and overlapping weeds.",
            "Outperforms baseline YOLOv8 in Precision, Recall, and mAP."
        ]
    },
    {
        id: "PAPER 10",
        title: "A Review of Deep Learning Applications in Weed Detection: UAV and Robotic Approaches for Precision Agriculture",
        authors: ["P. Saini", "D. S. Nagesh"],
        year: 2025,
        journal: "European Journal of Agronomy",
        keyFindings: [
            "Compares CNNs and multimodal sensors in field deployment.",
            "Evaluates edge computing for real-time robotic weed tracking.",
            "Identifies limits in dataset scalability and field lighting."
        ]
    }
];


/* ════════════════════════════════════════════════════════════
   RENDER — change 'page-lit-mX' to your member number
   Member 2 → 'page-lit-m2'
   Member 3 → 'page-lit-m3'   ... and so on
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
    renderLitrPage('page-lit-m4', LITR_M4_REVIEWER, LITR_M4_PAPERS);
});
