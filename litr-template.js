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
  name:     "",       /* Your full name          e.g. "Tahura Anzum Toa"          */
  pic:      "",       /* Your photo path         e.g. "assets/images/members/toa.jpg" */
  role:     "",       /* Your project role       e.g. "Hardware & Embedded Systems"   */
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
    title:    "",     /* Full title of the paper                                    */
    authors:  "",     /* Author names  e.g. "A. Smith, B. Jones, C. Lee"            */
    year:     "",     /* Publication year  e.g. "2025"                              */
    journal:  "",     /* Journal or conference name
                         e.g. "Precision Agriculture, vol. 26, art. 52"             */
    abstract: "",     /* Write 2–4 sentences summarising the paper IN YOUR OWN WORDS.
                         What problem does it solve? What method did they use?
                         What did they find?                                         */
    findings: [       /* List the key findings — each as a short sentence           */
      "",             /* Finding 1                                                  */
      "",             /* Finding 2                                                  */
      "",             /* Finding 3  (add or remove lines as needed)                */
    ],
    tags: [           /* 3–6 keywords  e.g. "YOLOv8", "Weed Detection", "ESP32"    */
      "",
      "",
      "",
    ],
    doi:  "",         /* DOI string or full URL
                         e.g. "10.1007/s11119-025-10246-0"
                         or   "https://arxiv.org/abs/2502.00000"
                         Leave "" if no DOI available                               */
  },
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
  renderLitrPage('page-lit-mX', LITR_MX_REVIEWER, LITR_MX_PAPERS);
});
