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

    /* ┌─────────────────────────────────────────────────────────┐
       │  PAPER TEMPLATE — copy from here                        │
       └─────────────────────────────────────────────────────────┘ */
    public class LiteratureReview {
        public static void main(String[] args) {

            // Creating an array of Paper objects for the 10 unique papers
            Paper[] literatureReviewList = new Paper[] {

                new Paper(
                    "PAPER 01",
                    "PD-YOLO: A novel weed detection method based on multi-scale feature fusion",
                    new String[]{ "Shengzhou Li", "Zihan Chen", "Jialong Xie", "Hewei Zhang", "Jianwen Guo"},
                    2025,
                    "Frontiers in Plant Science",
                    new String[]{
                    "Improves YOLOv8n to easily find small weeds that look exactly like crops.",
                    "Uses a new PF-FPN network to detect tiny weeds hidden under dense leaves.",
                    "Achieves 95.0% accuracy while staying lightweight and fast for real-world weeding robots."
                }
                ),

                    new Paper(
                        "PAPER 02",
                        "Application of YOLOv8 Improved Model Incorporating Attentional Mechanism in Weed Identification",
                        new String[]{ "Zhanwei Feng", "Adisak Sangsongfa", "Noppadol Amdee"},
                        2026,
                        "ASEAN Journal of Scientific and Technological Reports",
                        new String[]{
                        "Integrates a Global Attention Module (GAM) after each C2f block in the YOLOv8 backbone to improve contextual feature extraction.",
                        "Enhances target detection performance specifically for visually complex, dense, and heavily overlapping weeds.",
                        "Outperforms the baseline YOLOv8 in precision, recall, and mAP while maintaining low computational costs."
                }
                    ),

                    new Paper(
                        "PAPER 03",
                        "Enhancing Pakistan Rice Plant Disease Detection: A Highly Effective Pre-Trained CNN Model",
                        new String[]{ "M. A. Arshed", "Z. Akram", "H. Z. Bajwa", "et al."},
                        2024,
                        "IEEE",
                        new String[]{
                        "Presents a fine-tuned ResNet101V2 model for rapid regional rice disease identification.",
                        "Achieves 81% accuracy across five rice leaf diseases and healthy samples.",
                        "Outperforms standard ResNet101, ResNet50V2, and DenseNet121 architectures."
                }
                    ),

                    new Paper(
                        "PAPER 04",
                        "Deep Learning Pricing of Processing Firms in Agricultural Markets",
                        new String[]{ "H. Khalili"},
                        2024,
                        "Agriculture (MDPI)",
                        new String[]{
                        "Presents a deep reinforcement learning framework using Q-learning to optimize spatial pricing.",
                        "Approximates game-theoretic Nash equilibrium pricing without prior market knowledge.",
                        "Proves discriminatory (OD) and uniform (UD) pricing emerge under high transport constraints."
                }
                    ),

                    new Paper(
                        "PAPER 05",
                        "Deep learning techniques for in-crop weed recognition in large-scale grain production systems: A Review",
                        new String[]{ "Kun Hu", "Zhiyong Wang", "Guy Coleman", "Asher Bender", "Tingting Yao", "Shan Zeng", "Dezhen Song", "Arnold Schumann", "Michael Walsh"},
                        2024,
                        "Precision Agriculture",
                        new String[]{
                        "Reviews deep learning approaches for weed recognition, including classification, detection, and segmentation.",
                        "Summarizes more than 30 state-of-the-art weed detection studies and publicly available datasets.",
                        "Highlights future research directions such as real-time inference, explainable AI, and weakly supervised learning."
                }
                    ),

                    new Paper(
                        "PAPER 06",
                        "Agricultural Object Detection with YOLO Algorithm: A Bibliometric and Systematic Literature Review",
                        new String[]{ "S. Chandra", "H. Sharma", "A. Kumar", "et al."},
                        2024,
                        "arXiv (Systematic Literature Review)",
                        new String[]{
                        "Reviews the evolution of the YOLO algorithm (YOLOv1-YOLOv8) for agricultural object detection.",
                        "Compares YOLO models for crop, fruit, weed, pest, and disease detection based on accuracy and speed.",
                        "Identifies current research gaps and future directions, including lightweight models and edge AI."
                }
                    ),

                    new Paper(
                        "PAPER 07",
                        "Review of Weed Recognition: A Global Agriculture Perspective",
                        new String[]{ "Madeleine Darbyshire", "Shaun Coutts", "Petra Bosilj", "Elizabeth Sklar", "Simon Parsons"},
                        2024,
                        "Computers and Electronics in Agriculture",
                        new String[]{
                        "Provides a comprehensive systematic review of weed recognition research across different crops using AI.",
                        "Identifies that crops such as wheat and rice are still underrepresented in weed recognition research.",
                        "Highlights the need for more real-world validation, larger datasets, and robust AI models."
                }
                    ),

                    new Paper(
                        "PAPER 08",
                        "Analysis of the Impact of Different Improvement Methods Based on YOLOv8 for Weed Detection",
                        new String[]{ "Xin Wang", "Rui Zhang", "Yijie Liu", "Xiaohui Li", "Qian Zhao"},
                        2024,
                        "Agriculture (MDPI)",
                        new String[]{
                        "Compares various YOLOv8 improvements for complex weed detection.",
                        "Proves attention, feature fusion, and lightweight designs cut complexity and boost accuracy.",
                        "Improves Precision, Recall, and mAP for real-time applications."
                }
                    ),

                    new Paper(
                        "PAPER 09",
                        "YOLOv8 Model for Weed Detection in Wheat Fields Based on Visual Transformer and Multi-Scale Feature Fusion",
                        new String[]{ "Haoran Li", "Yufei Wang", "Xuefeng Zhang", "Jianhua Li", "Wei Chen"},
                        2024,
                        "Sensors (MDPI)",
                        new String[]{
                        "Integrates ViT and multi-scale fusion into YOLOv8 for wheat fields.",
                        "Improves real-time detection of small and overlapping weeds.",
                        "Outperforms baseline YOLOv8 in Precision, Recall, and mAP."
                }
                    ),

                    new Paper(
                        "PAPER 10",
                        "A Review of Deep Learning Applications in Weed Detection: UAV and Robotic Approaches for Precision Agriculture",
                        new String[]{ "P. Saini", "D. S. Nagesh"},
                        2025,
                        "European Journal of Agronomy",
                        new String[]{
                        "Compares CNNs and multimodal sensors in field deployment.",
                        "Evaluates edge computing for real-time robotic weed tracking.",
                        "Identifies limits in dataset scalability and field lighting."
                }
                    )
            };

            System.out.println("Literature Review Class successfully initialized with 10 unique papers.");
        }
    }

// Blueprint Structure for the Paper Object
class Paper {
    String id;
    String title;
    String[] authors;
    int year;
    String journal;
    String[] keyFindings;

        public Paper(String id, String title, String[] authors, int year, String journal, String[] keyFindings) {
            this.id = id;
            this.title = title;
            this.authors = authors;
            this.year = year;
            this.journal = journal;
            this.keyFindings = keyFindings;
        }
    }



    /* Paste more paper blocks here ... */


];


/* ════════════════════════════════════════════════════════════
   RENDER — change 'page-lit-mX' to your member number
   Member 2 → 'page-lit-m2'
   Member 3 → 'page-lit-m3'   ... and so on
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
    renderLitrPage('page-lit-m4', LITR_M4_REVIEWER, LITR_M4_PAPERS);
});
