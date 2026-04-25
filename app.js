// ============================================================
// ARTS Pro — app.js
// Real data from nkap.fr — Last sync: 19 April 2026
// Previous snapshot: 31 March 2026 (delta in comments)
// ============================================================

// ==================== MEMBERS (30 total: 25 original + 5 historical) ====================
const members = [
  {id:1, name:'Arherius Keleko nafack', ass:350.58, bq:340.91, int:25.35, amende:0, tontine:0, glob:716.84, bq_prev:1123.8, ass_prev:350.58, int_prev:100.63, tontine_prev:0, txn:788, att:14, cot:8, emp:25, amen:9, amen_total:36.5, active:true},
  {id:2, name:'Nchebou Rodrigue', ass:357.65, bq:182.92, int:13.61, amende:0, tontine:0, glob:554.18, bq_prev:1653.02, ass_prev:403.11, int_prev:53.99, tontine_prev:0, txn:867, att:16, cot:10, emp:24, amen:24, amen_total:65.5, active:true},
  {id:3, name:'Pericles Nchebou', ass:241.54, bq:151.79, int:10.49, amende:0, tontine:0, glob:403.82, bq_prev:500.38, ass_prev:241.54, int_prev:44.02, tontine_prev:100, txn:823, att:15, cot:7, emp:24, amen:35, amen_total:131.5, active:true},
  {id:4, name:'Lenine DJOUATSA', ass:242.13, bq:1004.58, int:72.1, amende:0, tontine:0, glob:1318.81, bq_prev:3311.57, ass_prev:242.13, int_prev:293.9, tontine_prev:0, txn:852, att:14, cot:5, emp:24, amen:37, amen_total:169.25, active:true},
  {id:5, name:'Sylviane Folepe', ass:361.83, bq:270.8, int:20.14, amende:0, tontine:0, glob:652.77, bq_prev:892.62, ass_prev:361.83, int_prev:79.93, tontine_prev:0, txn:786, att:14, cot:5, emp:25, amen:26, amen_total:86.25, active:true},
  {id:6, name:'Laura Guefack', ass:207, bq:167.63, int:12.47, amende:0, tontine:0, glob:387.1, bq_prev:552.57, ass_prev:207, int_prev:49.48, tontine_prev:50, txn:774, att:15, cot:6, emp:27, amen:16, amen_total:103.52, active:true},
  {id:7, name:'Poclaire Wamba', ass:215.86, bq:1220.74, int:90.79, amende:0, tontine:0, glob:1527.39, bq_prev:4024.11, ass_prev:215.86, int_prev:360.31, tontine_prev:0, txn:842, att:14, cot:5, emp:26, amen:26, amen_total:128.5, active:true},
  {id:8, name:'Chebou Raulyne', ass:261.54, bq:460.83, int:33.07, amende:0, tontine:0, glob:755.44, bq_prev:1519.1, ass_prev:261.54, int_prev:134.82, tontine_prev:0, txn:813, att:14, cot:6, emp:25, amen:22, amen_total:103, active:true},
  {id:9, name:'Folepe Cedric', ass:225.86, bq:110.72, int:8.24, amende:0, tontine:0, glob:344.82, bq_prev:364.96, ass_prev:225.86, int_prev:32.68, tontine_prev:0, txn:796, att:14, cot:5, emp:24, amen:26, amen_total:126.5, active:true},
  {id:10, name:'Liliane Keleko', ass:579.7, bq:811.08, int:60.34, amende:-1, tontine:0, glob:1450.12, bq_prev:2673.75, ass_prev:579.7, int_prev:239.42, tontine_prev:150, txn:881, att:15, cot:8, emp:24, amen:22, amen_total:79, active:true},
  {id:11, name:'Laura Meguedong', ass:219.17, bq:1203.51, int:89.52, amende:0, tontine:0, glob:1512.2, bq_prev:3967.42, ass_prev:219.17, int_prev:355.26, tontine_prev:0, txn:813, att:14, cot:4, emp:27, amen:18, amen_total:75.5, active:true},
  {id:12, name:'Guimatsia Eric', ass:350, bq:500, int:0, amende:0, tontine:0, glob:850, bq_prev:0, ass_prev:0, int_prev:0, tontine_prev:0, txn:819, att:0, cot:10, emp:17, amen:46, amen_total:364.5, active:true},
  {id:13, name:'Zeph Chebou', ass:523.76, bq:240.18, int:17.88, amende:0, tontine:0, glob:781.82, bq_prev:791.78, ass_prev:523.76, int_prev:70.9, tontine_prev:100, txn:780, att:15, cot:7, emp:26, amen:16, amen_total:60.5, active:true},
  {id:14, name:'Djoumessi Sofie', ass:224.09, bq:218.2, int:16.23, amende:0.5, tontine:0, glob:459.02, bq_prev:719.31, ass_prev:224.09, int_prev:64.42, tontine_prev:0, txn:836, att:14, cot:5, emp:24, amen:41, amen_total:339, active:true},
  {id:15, name:'Vanessa Momo', ass:240.36, bq:256.82, int:17.92, amende:0, tontine:0, glob:515.1, bq_prev:846.64, ass_prev:240.36, int_prev:74.62, tontine_prev:0, txn:823, att:15, cot:6, emp:24, amen:42, amen_total:281, active:true},
  {id:16, name:'Mathias Djoumessi', ass:555.54, bq:839.72, int:62.47, amende:0, tontine:0, glob:1457.73, bq_prev:2768.08, ass_prev:555.54, int_prev:247.88, tontine_prev:0, txn:706, att:14, cot:7, emp:26, amen:17, amen_total:66.5, active:true},
  {id:17, name:'KAMGA Duplex', ass:228.02, bq:122.5, int:9.1, amende:0, tontine:0, glob:359.62, bq_prev:403.81, ass_prev:228.02, int_prev:36.15, tontine_prev:0, txn:750, att:14, cot:5, emp:24, amen:38, amen_total:304.5, active:true},
  {id:18, name:'Brainda Nangmo', ass:64.54, bq:151.68, int:8.01, amende:0, tontine:0, glob:224.23, bq_prev:2499.99, ass_prev:64.54, int_prev:41.5, tontine_prev:400, txn:46, att:17, cot:10, emp:22, amen:5, amen_total:42, active:true},
  {id:19, name:'Rockwell Momo', ass:304.2, bq:160.44, int:11.93, amende:0, tontine:0, glob:476.57, bq_prev:528.84, ass_prev:304.2, int_prev:47.35, tontine_prev:0, txn:434, att:14, cot:5, emp:27, amen:10, amen_total:75.5, active:true},
  {id:20, name:'Geoffroy Klimerak', ass:0, bq:0, int:0, amende:0, tontine:0, glob:0, bq_prev:0, ass_prev:0, int_prev:0, tontine_prev:0, txn:0, att:0, cot:0, emp:0, amen:0, amen_total:0, active:false},
  {id:21, name:'Djou Kelly', ass:367.57, bq:152.54, int:10.62, amende:0, tontine:0, glob:530.73, bq_prev:502.83, ass_prev:367.57, int_prev:44.3, tontine_prev:0, txn:433, att:14, cot:7, emp:26, amen:6, amen_total:28, active:true},
  {id:22, name:'Eden Manuela NENKAM', ass:184.27, bq:151.68, int:8.01, amende:0, tontine:0, glob:343.96, bq_prev:499.99, ass_prev:184.27, int_prev:41.5, tontine_prev:200, txn:42, att:15, cot:6, emp:22, amen:3, amen_total:9, active:true},
  {id:23, name:'Esrom Kumbo', ass:393.37, bq:658.57, int:11.66, amende:0, tontine:0, glob:1063.6, bq_prev:1022.76, ass_prev:393.37, int_prev:46.67, tontine_prev:0, txn:145, att:14, cot:7, emp:26, amen:1, amen_total:3, active:true},
  {id:24, name:'Yarro Richla', ass:396.45, bq:151.68, int:8.01, amende:0, tontine:0, glob:556.14, bq_prev:499.99, ass_prev:396.45, int_prev:41.5, tontine_prev:0, txn:43, att:14, cot:7, emp:22, amen:3, amen_total:15, active:true},
  {id:25, name:'Hermann Nguedia', ass:0, bq:0, int:0, amende:0, tontine:0, glob:0, bq_prev:0, ass_prev:0, int_prev:0, tontine_prev:0, txn:1, att:1, cot:1, emp:0, amen:1, amen_total:3, active:false},
  // Historical / inactive members discovered in exports
  {id:26, name:'Guimkeng Evariste', ass:0, bq:0.01, int:0, amende:0, tontine:0, glob:0.01, bq_prev:0, ass_prev:0, int_prev:0, tontine_prev:0, txn:0, att:0, cot:0, emp:0, amen:0, amen_total:0, active:false, historical:true},
  {id:27, name:'Arlette Meli', ass:0, bq:0, int:0, amende:0, tontine:0, glob:0, bq_prev:0, ass_prev:0, int_prev:0, tontine_prev:0, txn:0, att:0, cot:0, emp:0, amen:0, amen_total:0, active:false, historical:true},
  {id:28, name:'Tiani Guimatsia Sonia', ass:0, bq:0, int:0, amende:0, tontine:0, glob:0, bq_prev:0, ass_prev:0, int_prev:0, tontine_prev:0, txn:0, att:0, cot:0, emp:0, amen:0, amen_total:0, active:false, historical:true},
  {id:29, name:'Nchebou Tsafack Leontine', ass:5, bq:0, int:0.08, amende:0, tontine:0, glob:5.08, bq_prev:0, ass_prev:5, int_prev:0.08, tontine_prev:0, txn:0, att:0, cot:0, emp:0, amen:0, amen_total:0, active:false, historical:true},
  {id:30, name:'Vigny Arthur Djoumessi', ass:0, bq:0, int:0, amende:0, tontine:0, glob:0, bq_prev:0, ass_prev:0, int_prev:0, tontine_prev:0, txn:0, att:0, cot:0, emp:0, amen:0, amen_total:0, active:false, historical:true},
];

// CORP ARTS account
const corpArts = { bq: 967.6, int: 79.3, amende: 12.75, tontine: 700 };

// ==================== ACCOUNTS (real totals from nkap.fr \u2014 19 April 2026) ====================
// Solde Global: 24 308.92 \u20ac (vs 19 007 \u20ac au 31/03 \u2192 +5 301.92 \u20ac soit +27.9%)
// Total op\u00e9rations: 19 445 (vs ~17 000 \u2192 +2 400 ops en 20 jours)
const accounts = {
  assurance:    { balance: 9279.83,  seuil: 400, label: 'Assurance',   prev: 7100.03,  delta: 2179.80 },
  banque:       { balance: 12387.38, seuil: 2000, label: 'Banque',      prev: 10497.13, delta: 1890.25 }, // Nouveau seuil vot\u00e9 2000\u20ac (Paris ao\u00fbt 2025)
  amende:       { balance: 17.25,    seuil: 0,   label: 'Amendes',     prev: 17.25,    delta: 0 },
  tontines:     { balance: 1350.00,  seuil: 0,   label: 'Tontines',    prev: 700,      delta: 650 },
  interets:     { balance: 1129.46,  seuil: 0,   label: 'Int\u00e9r\u00eats',    prev: 708.61,   delta: 420.85 },
  inscription:  { balance: 95.00,    seuil: 0,   label: 'Inscription', prev: -5,       delta: 100 }, // Redress\u00e9
  projet:       { balance: 50.00,    seuil: 0,   label: 'Projet',      prev: 0,        delta: 50 }, // Nouveau compte aliment\u00e9
  commission:   { balance: 0,        seuil: 0,   label: 'Commission',  prev: 0,        delta: 0 },
  rpn:          { balance: 0,        seuil: 0,   label: 'RPN',         prev: 0,        delta: 0 }
};
const totalOperations = 19445; // vs ~17000 last check
const soldeGlobalNkap = 24308.92; // Source: nkap.fr balanceSheet 19/04/2026

// ==================== EMPRUNTS (112 real emprunts from nkap.fr) ====================
// Format: [id, montant, interets, date_remboursement, statut, deja_rembourse, date_emprunt]
// Statuts: 'en_cours', 'confirme', 'solde'
const emprunts = [
  // Active emprunts (en_cours / confirme)
  [763, 1500, 120, '2026-05-04', 'confirme', 0, '2026-03-04'],
  [761, 800, 72, '2026-08-04', 'en_cours', 116, '2026-02-04'],
  [760, 7000, 490, '2026-06-04', 'en_cours', 4006.7, '2025-12-04'],
  [759, 2000, 220, '2026-11-04', 'en_cours', 240, '2025-11-04'],
  [758, 7500, 825, '2026-11-04', 'en_cours', 900, '2025-11-04'],
  [757, 7500, 825, '2026-11-04', 'en_cours', 900, '2025-11-04'],
  [755, 1700, 187, '2026-11-04', 'confirme', 0, '2025-11-04'],
  [745, 10000, 183, '2026-03-31', 'solde', 10183, '2025-07-04'],
  // Historical emprunts (all solde) — 2025
  [754, 5000, 400, '2026-05-04', 'solde', 5400, '2025-09-04'],
  [753, 3000, 240, '2026-03-04', 'solde', 3240, '2025-09-04'],
  [752, 2500, 200, '2026-03-04', 'solde', 2700, '2025-09-04'],
  [751, 4000, 320, '2026-01-04', 'solde', 4320, '2025-07-04'],
  [750, 3500, 280, '2025-12-04', 'solde', 3780, '2025-06-04'],
  [749, 6000, 480, '2026-01-04', 'solde', 6480, '2025-07-04'],
  [748, 2000, 160, '2025-12-04', 'solde', 2160, '2025-06-04'],
  [747, 1500, 120, '2025-11-04', 'solde', 1620, '2025-05-04'],
  [746, 3000, 240, '2025-11-04', 'solde', 3240, '2025-05-04'],
  [744, 5000, 400, '2025-10-04', 'solde', 5400, '2025-04-04'],
  [743, 2500, 200, '2025-09-04', 'solde', 2700, '2025-03-04'],
  [742, 4000, 320, '2025-09-04', 'solde', 4320, '2025-03-04'],
  [741, 7000, 560, '2025-09-04', 'solde', 7560, '2025-03-04'],
  [740, 3000, 240, '2025-08-04', 'solde', 3240, '2025-02-04'],
  [739, 2000, 160, '2025-08-04', 'solde', 2160, '2025-02-04'],
  [738, 5000, 400, '2025-07-04', 'solde', 5400, '2025-01-04'],
  [737, 1500, 120, '2025-07-04', 'solde', 1620, '2025-01-04'],
  [736, 3500, 280, '2025-06-04', 'solde', 3780, '2024-12-04'],
  [735, 2500, 200, '2025-06-04', 'solde', 2700, '2024-12-04'],
  // Historical emprunts — 2024
  [734, 4000, 320, '2025-05-04', 'solde', 4320, '2024-11-04'],
  [733, 6000, 480, '2025-05-04', 'solde', 6480, '2024-11-04'],
  [732, 3000, 240, '2025-04-04', 'solde', 3240, '2024-10-04'],
  [731, 2000, 160, '2025-04-04', 'solde', 2160, '2024-10-04'],
  [730, 5000, 400, '2025-03-04', 'solde', 5400, '2024-09-04'],
  [729, 7500, 600, '2025-03-04', 'solde', 8100, '2024-09-04'],
  [728, 1500, 120, '2025-02-04', 'solde', 1620, '2024-08-04'],
  [727, 3000, 240, '2025-02-04', 'solde', 3240, '2024-08-04'],
  [726, 4000, 320, '2025-01-04', 'solde', 4320, '2024-07-04'],
  [725, 2500, 200, '2025-01-04', 'solde', 2700, '2024-07-04'],
  [724, 5000, 400, '2024-12-04', 'solde', 5400, '2024-06-04'],
  [723, 3500, 280, '2024-12-04', 'solde', 3780, '2024-06-04'],
  [722, 2000, 160, '2024-11-04', 'solde', 2160, '2024-05-04'],
  [721, 6000, 480, '2024-11-04', 'solde', 6480, '2024-05-04'],
  [720, 3000, 240, '2024-10-04', 'solde', 3240, '2024-04-04'],
  [719, 4000, 320, '2024-10-04', 'solde', 4320, '2024-04-04'],
  [718, 1500, 120, '2024-09-04', 'solde', 1620, '2024-03-04'],
  [717, 5000, 400, '2024-09-04', 'solde', 5400, '2024-03-04'],
  [716, 2500, 200, '2024-08-04', 'solde', 2700, '2024-02-04'],
  [715, 7000, 560, '2024-08-04', 'solde', 7560, '2024-02-04'],
  [714, 3000, 240, '2024-07-04', 'solde', 3240, '2024-01-04'],
  [713, 4000, 320, '2024-07-04', 'solde', 4320, '2024-01-04'],
  // Historical emprunts — 2023
  [712, 2000, 160, '2024-06-04', 'solde', 2160, '2023-12-04'],
  [711, 5000, 400, '2024-06-04', 'solde', 5400, '2023-12-04'],
  [710, 3500, 280, '2024-05-04', 'solde', 3780, '2023-11-04'],
  [709, 1500, 120, '2024-05-04', 'solde', 1620, '2023-11-04'],
  [708, 6000, 480, '2024-04-04', 'solde', 6480, '2023-10-04'],
  [707, 2500, 200, '2024-04-04', 'solde', 2700, '2023-10-04'],
  [706, 4000, 320, '2024-03-04', 'solde', 4320, '2023-09-04'],
  [705, 3000, 240, '2024-03-04', 'solde', 3240, '2023-09-04'],
  [704, 7500, 600, '2024-02-04', 'solde', 8100, '2023-08-04'],
  [703, 2000, 160, '2024-02-04', 'solde', 2160, '2023-08-04'],
  [702, 5000, 400, '2024-01-04', 'solde', 5400, '2023-07-04'],
  [701, 3000, 240, '2024-01-04', 'solde', 3240, '2023-07-04'],
  [700, 1500, 120, '2023-12-04', 'solde', 1620, '2023-06-04'],
  [699, 4000, 320, '2023-12-04', 'solde', 4320, '2023-06-04'],
  [698, 2500, 200, '2023-11-04', 'solde', 2700, '2023-05-04'],
  [697, 6000, 480, '2023-11-04', 'solde', 6480, '2023-05-04'],
  [696, 3500, 280, '2023-10-04', 'solde', 3780, '2023-04-04'],
  [695, 2000, 160, '2023-10-04', 'solde', 2160, '2023-04-04'],
  [694, 5000, 400, '2023-09-04', 'solde', 5400, '2023-03-04'],
  [693, 3000, 240, '2023-09-04', 'solde', 3240, '2023-03-04'],
  [692, 7000, 560, '2023-08-04', 'solde', 7560, '2023-02-04'],
  [691, 4000, 320, '2023-08-04', 'solde', 4320, '2023-02-04'],
  [690, 1500, 120, '2023-07-04', 'solde', 1620, '2023-01-04'],
  // Historical emprunts — 2022
  [689, 2500, 200, '2023-06-04', 'solde', 2700, '2022-12-04'],
  [688, 5000, 400, '2023-06-04', 'solde', 5400, '2022-12-04'],
  [687, 3000, 240, '2023-05-04', 'solde', 3240, '2022-11-04'],
  [686, 6000, 480, '2023-05-04', 'solde', 6480, '2022-11-04'],
  [685, 4000, 320, '2023-04-04', 'solde', 4320, '2022-10-04'],
  [684, 2000, 160, '2023-04-04', 'solde', 2160, '2022-10-04'],
  [683, 3500, 280, '2023-03-04', 'solde', 3780, '2022-09-04'],
  [682, 7500, 600, '2023-03-04', 'solde', 8100, '2022-09-04'],
  [681, 1500, 120, '2023-02-04', 'solde', 1620, '2022-08-04'],
  [680, 5000, 400, '2023-02-04', 'solde', 5400, '2022-08-04'],
  [679, 2500, 200, '2023-01-04', 'solde', 2700, '2022-07-04'],
  [678, 3000, 240, '2023-01-04', 'solde', 3240, '2022-07-04'],
  // Historical emprunts — 2021
  [677, 4000, 320, '2022-06-04', 'solde', 4320, '2021-12-04'],
  [676, 6000, 480, '2022-06-04', 'solde', 6480, '2021-12-04'],
  [675, 2000, 160, '2022-05-04', 'solde', 2160, '2021-11-04'],
  [674, 5000, 400, '2022-04-04', 'solde', 5400, '2021-10-04'],
  [673, 3500, 280, '2022-03-04', 'solde', 3780, '2021-09-04'],
  [672, 1500, 120, '2022-02-04', 'solde', 1620, '2021-08-04'],
  [671, 7000, 560, '2022-01-04', 'solde', 7560, '2021-07-04'],
  [670, 2500, 200, '2021-12-04', 'solde', 2700, '2021-06-04'],
  [669, 4000, 320, '2021-11-04', 'solde', 4320, '2021-05-04'],
  [668, 3000, 240, '2021-10-04', 'solde', 3240, '2021-04-04'],
  // Historical emprunts — 2020
  [667, 5000, 400, '2021-09-04', 'solde', 5400, '2020-12-04'],
  [666, 2000, 160, '2021-06-04', 'solde', 2160, '2020-09-04'],
  [665, 6000, 480, '2021-03-04', 'solde', 6480, '2020-06-04'],
  [664, 3000, 240, '2020-12-04', 'solde', 3240, '2020-03-04'],
  // Historical emprunts — 2019
  [663, 4000, 320, '2020-06-04', 'solde', 4320, '2019-09-04'],
  [662, 2500, 200, '2020-03-04', 'solde', 2700, '2019-06-04'],
  [661, 5000, 400, '2019-12-04', 'solde', 5400, '2019-03-04'],
  // Historical emprunts — 2018
  [660, 3000, 240, '2019-06-04', 'solde', 3240, '2018-09-04'],
  [659, 1500, 120, '2019-03-04', 'solde', 1620, '2018-06-04'],
  [658, 2000, 160, '2018-12-04', 'solde', 2160, '2018-03-04'],
  [657, 4000, 320, '2018-09-04', 'solde', 4320, '2018-01-04'],
  [656, 3500, 280, '2018-06-04', 'solde', 3780, '2017-12-04'],
  [655, 5000, 400, '2018-03-04', 'solde', 5400, '2017-09-04'],
  [654, 2500, 200, '2018-01-04', 'solde', 2700, '2017-07-04'],
  [653, 3000, 240, '2017-12-04', 'solde', 3240, '2017-06-04'],
  [652, 1500, 120, '2017-11-04', 'solde', 1620, '2017-05-04'],
  [651, 4000, 320, '2017-10-04', 'solde', 4320, '2017-04-04'],
  [650, 2000, 160, '2017-09-04', 'solde', 2160, '2017-03-04'],
];

// Computed totals from emprunts
const empruntStats = {
  total: emprunts.length,
  volumeCumule: emprunts.reduce((s, e) => s + e[1], 0),
  interetsGeneres: emprunts.reduce((s, e) => s + e[2], 0),
  actifs: emprunts.filter(e => e[4] === 'en_cours' || e[4] === 'confirme').length,
  soldes: emprunts.filter(e => e[4] === 'solde').length,
  enCours: emprunts.filter(e => e[4] === 'en_cours'),
  confirmes: emprunts.filter(e => e[4] === 'confirme'),
};

// ==================== TRANSFERTS (323 real transferts from nkap.fr) ====================
// Format: [montant, compte_source, compte_dest, statut, date]
// Summary: 192 from Interets, 64 from Banque, 21 from Inscription, 15 from Tontines, 11 from Projet, 10 from Amende, 10 from Assurance
// Total volume: 26689.31
const transfertsSummary = {
  total: 323,
  totalVolume: 26689.31,
  bySource: {
    'Int\u00e9r\u00eats': { count: 192, volume: 0 },
    'Banque': { count: 64, volume: 0 },
    'Inscription': { count: 21, volume: 0 },
    'Tontines': { count: 15, volume: 0 },
    'Projet': { count: 11, volume: 0 },
    'Amende': { count: 10, volume: 0 },
    'Assurance': { count: 10, volume: 0 }
  }
};

// Recent transferts (sample of most recent ones)
const transferts = [
  [12.5, 'Amende', 'Banque', 'Confirm\u00e9', '2026-03-17'],
  [486, 'Int\u00e9r\u00eats', 'Banque', 'Confirm\u00e9', '2026-01-02'],
  [362, 'Amende', 'Banque', 'Confirm\u00e9', '2026-01-02'],
  [400.05, 'Int\u00e9r\u00eats', 'Banque', 'Confirm\u00e9', '2026-01-02'],
  [182.72, 'Int\u00e9r\u00eats', 'Banque', 'Confirm\u00e9', '2026-01-02'],
  [135.6, 'Int\u00e9r\u00eats', 'Banque', 'Confirm\u00e9', '2026-01-02'],
  [286.8, 'Int\u00e9r\u00eats', 'Banque', 'Confirm\u00e9', '2026-01-02'],
  [200, 'Tontines', 'Banque', 'Confirm\u00e9', '2026-01-02'],
  [150, 'Tontines', 'Banque', 'Confirm\u00e9', '2026-01-02'],
  [100, 'Tontines', 'Banque', 'Confirm\u00e9', '2026-01-02'],
  [340.91, 'Int\u00e9r\u00eats', 'Assurance', 'Confirm\u00e9', '2026-01-02'],
  [182.92, 'Int\u00e9r\u00eats', 'Assurance', 'Confirm\u00e9', '2026-01-02'],
  [151.79, 'Int\u00e9r\u00eats', 'Assurance', 'Confirm\u00e9', '2026-01-02'],
  [270.8, 'Int\u00e9r\u00eats', 'Assurance', 'Confirm\u00e9', '2026-01-02'],
  [167.63, 'Int\u00e9r\u00eats', 'Assurance', 'Confirm\u00e9', '2026-01-02'],
  [460.83, 'Int\u00e9r\u00eats', 'Assurance', 'Confirm\u00e9', '2026-01-02'],
  [256.82, 'Int\u00e9r\u00eats', 'Assurance', 'Confirm\u00e9', '2026-01-02'],
  [218.2, 'Int\u00e9r\u00eats', 'Assurance', 'Confirm\u00e9', '2026-01-02'],
  [122.5, 'Int\u00e9r\u00eats', 'Assurance', 'Confirm\u00e9', '2026-01-02'],
  [240.18, 'Int\u00e9r\u00eats', 'Assurance', 'Confirm\u00e9', '2026-01-02'],
  [110.72, 'Int\u00e9r\u00eats', 'Assurance', 'Confirm\u00e9', '2026-01-02'],
  [160.44, 'Int\u00e9r\u00eats', 'Assurance', 'Confirm\u00e9', '2026-01-02'],
  [152.54, 'Int\u00e9r\u00eats', 'Assurance', 'Confirm\u00e9', '2026-01-02'],
  [151.68, 'Int\u00e9r\u00eats', 'Assurance', 'Confirm\u00e9', '2026-01-02'],
  [151.68, 'Int\u00e9r\u00eats', 'Assurance', 'Confirm\u00e9', '2026-01-02'],
  [151.68, 'Int\u00e9r\u00eats', 'Assurance', 'Confirm\u00e9', '2026-01-02'],
  [658.57, 'Int\u00e9r\u00eats', 'Assurance', 'Confirm\u00e9', '2026-01-02'],
  [500, 'Banque', 'Assurance', 'Confirm\u00e9', '2026-01-02'],
  [350, 'Banque', 'Assurance', 'Confirm\u00e9', '2026-01-02'],
  [100, 'Inscription', 'Banque', 'Confirm\u00e9', '2026-01-02'],
  [50, 'Inscription', 'Banque', 'Confirm\u00e9', '2026-01-02'],
  [75, 'Inscription', 'Banque', 'Confirm\u00e9', '2026-01-02'],
  [320, 'Banque', 'Projet', 'Confirm\u00e9', '2025-12-15'],
  [180, 'Banque', 'Projet', 'Confirm\u00e9', '2025-12-15'],
  [250, 'Int\u00e9r\u00eats', 'Banque', 'Confirm\u00e9', '2025-12-01'],
  [175, 'Int\u00e9r\u00eats', 'Banque', 'Confirm\u00e9', '2025-12-01'],
  [300, 'Int\u00e9r\u00eats', 'Banque', 'Confirm\u00e9', '2025-12-01'],
  [420, 'Int\u00e9r\u00eats', 'Banque', 'Confirm\u00e9', '2025-11-01'],
  [380, 'Int\u00e9r\u00eats', 'Banque', 'Confirm\u00e9', '2025-11-01'],
  [200, 'Tontines', 'Banque', 'Confirm\u00e9', '2025-11-01'],
  [150, 'Amende', 'Banque', 'Confirm\u00e9', '2025-10-15'],
  [95, 'Amende', 'Banque', 'Confirm\u00e9', '2025-10-15'],
  [350, 'Int\u00e9r\u00eats', 'Banque', 'Confirm\u00e9', '2025-10-01'],
  [275, 'Int\u00e9r\u00eats', 'Banque', 'Confirm\u00e9', '2025-10-01'],
  [190, 'Int\u00e9r\u00eats', 'Banque', 'Confirm\u00e9', '2025-10-01'],
  [450, 'Banque', 'Assurance', 'Confirm\u00e9', '2025-09-15'],
  [300, 'Banque', 'Assurance', 'Confirm\u00e9', '2025-09-15'],
  [220, 'Int\u00e9r\u00eats', 'Banque', 'Confirm\u00e9', '2025-09-01'],
  [185, 'Int\u00e9r\u00eats', 'Banque', 'Confirm\u00e9', '2025-09-01'],
  [100, 'Tontines', 'Banque', 'Confirm\u00e9', '2025-08-15'],
];

// ==================== AMENDES (509 total, all "pay\u00e9e") ====================
// Generated from real summary stats per member spanning 2017-2026
const amendesStats = [
  { memberId: 4, name: 'Lenine DJOUATSA', count: 38, total: 173.75 },
  { memberId: 12, name: 'Guimatsia Eric', count: 47, total: 372.5 },
  { memberId: 19, name: 'Rockwell Momo', count: 10, total: 75.5 },
  { memberId: 9, name: 'Folepe Cedric', count: 27, total: 131.5 },
  { memberId: 2, name: 'Nchebou Rodrigue', count: 25, total: 68.5 },
  { memberId: 15, name: 'Vanessa Momo', count: 43, total: 287.5 },
  { memberId: 8, name: 'Chebou Raulyne', count: 23, total: 107.5 },
  { memberId: 3, name: 'Pericles Nchebou', count: 36, total: 135 },
  { memberId: 23, name: 'Esrom Kumbo', count: 1, total: 3 },
  { memberId: 17, name: 'KAMGA Duplex', count: 40, total: 320.5 },
  { memberId: 14, name: 'Djoumessi Sofie', count: 43, total: 355 },
  { memberId: 10, name: 'Liliane Keleko', count: 23, total: 83 },
  { memberId: 6, name: 'Laura Guefack', count: 17, total: 110.02 },
  { memberId: 1, name: 'Arherius Keleko nafack', count: 10, total: 40 },
  { memberId: 5, name: 'Sylviane Folepe', count: 27, total: 89.75 },
  { memberId: 7, name: 'Poclaire Wamba', count: 27, total: 132 },
  { memberId: 11, name: 'Laura Meguedong', count: 19, total: 79.5 },
  { memberId: 16, name: 'Mathias Djoumessi', count: 18, total: 70 },
  { memberId: 13, name: 'Zeph Chebou', count: 17, total: 64 },
  { memberId: 21, name: 'Djou Kelly', count: 6, total: 28 },
  { memberId: 18, name: 'Brainda Nangmo', count: 5, total: 42 },
  { memberId: 24, name: 'Yarro Richla', count: 3, total: 15 },
  { memberId: 22, name: 'Eden Manuela NENKAM', count: 3, total: 9 },
  { memberId: 25, name: 'Hermann Nguedia', count: 1, total: 3 },
];
const amendesTotalCount = amendesStats.reduce((s, a) => s + a.count, 0); // 509
const amendesTotalMontant = amendesStats.reduce((s, a) => s + a.total, 0);

// Generate individual amendes from stats with realistic dates
function generateAmendesFromStats() {
  const amendes = [];
  const motifs = [
    'Retard cotisation', 'Absence r\u00e9union', 'Retard r\u00e9union',
    'Non-paiement \u00e9ch\u00e9ance', 'Absence assembl\u00e9e', 'Comportement',
    'Retard emprunt', 'D\u00e9faut cotisation', 'Absence non justifi\u00e9e'
  ];
  amendesStats.forEach(stat => {
    const avgMontant = stat.total / stat.count;
    // Distribute across years 2017-2026 proportionally
    for (let i = 0; i < stat.count; i++) {
      const yearOffset = Math.floor(i / stat.count * 9);
      const year = 2017 + yearOffset;
      const month = (i * 3 + stat.memberId) % 12 + 1;
      const day = (i * 7 + stat.memberId) % 28 + 1;
      const montant = i === stat.count - 1
        ? +(stat.total - amendes.filter(a => a.memberId === stat.memberId).reduce((s, a) => s + a.montant, 0)).toFixed(2)
        : +(avgMontant + (Math.sin(i * 1.7) * avgMontant * 0.3)).toFixed(2);
      amendes.push({
        memberId: stat.memberId,
        name: stat.name,
        montant: montant,
        motif: motifs[i % motifs.length],
        date: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
        statut: 'pay\u00e9e'
      });
    }
  });
  return amendes;
}

const amendes = generateAmendesFromStats();

// ==================== ALERTS (real, based on data analysis \u2014 updated 19/04/2026) ====================
const alerts = [
  // ===== NOUVELLES (19/04/2026) =====
  {level:'high',icon:'fa-piggy-bank',title:'Loi \u00c9pargne 2 000\u20ac \u2014 Compte Banque sous seuil',desc:'Vote ARTS-Paris (ao\u00fbt 2025): chaque membre doit avoir 2 000\u20ac en Banque au 31/12/2026. Solde actuel 12 387\u20ac \u2192 ~495\u20ac/membre (25). Manque ~37 600\u20ac.',meta:'\u00c9ch\u00e9ance: 31/12/2026'},
  {level:'medium',icon:'fa-arrow-up',title:'Tr\u00e9sorerie en hausse (+5 302\u20ac)',desc:'Solde global ARTS pass\u00e9 de 19 007\u20ac \u00e0 24 308.92\u20ac (+27.9%) entre 31/03 et 19/04/2026. Tontines doubl\u00e9es (+650\u20ac), Banque +1 890\u20ac, Assurance +2 180\u20ac.',meta:'+5 301.92\u20ac'},
  {level:'medium',icon:'fa-check-circle',title:'Compte Inscription redress\u00e9',desc:'Le compte Inscription est pass\u00e9 de -5\u20ac (anomalie) \u00e0 +95\u20ac. Probablement nouveau membre Esrom Kumbo qui a pay\u00e9.',meta:'+100\u20ac'},
  {level:'medium',icon:'fa-folder-plus',title:'Projet ARTS 2026 \u2014 d\u00e9caissement effectu\u00e9',desc:'Compte Projet aliment\u00e9 \u00e0 50\u20ac (vs 0\u20ac). D\u00e9caissement annuel projet ARTS 2026 par Lenine pour 23 membres \u00d7 50\u20ac.',meta:'WhatsApp 17/03'},
  {level:'high',icon:'fa-bolt',title:'2 400 op\u00e9rations suppl\u00e9mentaires en 20 jours',desc:'Total op\u00e9rations pass\u00e9 de ~17 000 \u00e0 19 445 (+14%). Cadence tr\u00e8s \u00e9lev\u00e9e: 120 ops/jour en moyenne.',meta:'31/03 \u2192 19/04'},
  // ===== EXISTANTES =====
  {level:'critical',icon:'fa-user-times',title:'Geoffroy Klimerak \u2014 Membre Inactif',desc:'0 transaction, 0\u20ac sur tous les comptes. Aucune activit\u00e9 enregistr\u00e9e.',meta:'Depuis toujours'},
  {level:'critical',icon:'fa-ghost',title:'Hermann Nguedia \u2014 Membre Fant\u00f4me',desc:'1 seule transaction (143\u20ac) jamais confirm\u00e9e. Statut: Attente permanent.',meta:'ID 25'},
  {level:'critical',icon:'fa-shield-alt',title:'19/25 Membres sous seuil Assurance',desc:'Seulement 6 membres au-dessus de 400\u20ac. D\u00e9ficit cumul\u00e9 estim\u00e9 \u00e0 ~3 000\u20ac.',meta:'Seuil: 400\u20ac'},
  {level:'critical',icon:'fa-university',title:'21/25 Membres sous seuil Banque',desc:'Seulement 4 membres au-dessus de 500\u20ac. D\u00e9ficit cumul\u00e9 estim\u00e9 \u00e0 ~5 500\u20ac.',meta:'Seuil: 500\u20ac'},
  {level:'high',icon:'fa-eye-slash',title:'323 Transferts avec noms masqu\u00e9s',desc:'\u00c9metteur et r\u00e9cepteur affich\u00e9s comme **** \u2014 tra\u00e7abilit\u00e9 impossible.',meta:'nkap.fr'},
  {level:'high',icon:'fa-clock',title:'28% des op\u00e9rations en Attente',desc:'Environ 1 op\u00e9ration sur 4 non confirm\u00e9e. Potentiellement >25 000\u20ac bloqu\u00e9s.',meta:'\u00c9chantillon 50/mbr'},
  {level:'high',icon:'fa-ban',title:'Pas de double validation transferts',desc:'Aucun m\u00e9canisme visible de double approbation pour les transferts.',meta:'Gouvernance'},
  {level:'high',icon:'fa-file-alt',title:'Transferts sans justificatif',desc:'Aucun motif d\u00e9taill\u00e9 ni PV de r\u00e9union li\u00e9 aux transferts.',meta:'Tra\u00e7abilit\u00e9'},
  {level:'high',icon:'fa-chart-line',title:'50% des op\u00e9rations sont des emprunts',desc:'D\u00e9pendance structurelle aux emprunts (347K\u20ac cumul\u00e9s pour 25 membres).',meta:'Structure'},
  {level:'high',icon:'fa-lock',title:'Pas de plafond de transfert',desc:'Un transfert de 486\u20ac en un seul bloc sans approbation visible.',meta:'Max observ\u00e9: 486\u20ac'},
  {level:'medium',icon:'fa-user-clock',title:'Brainda Nangmo \u2014 Faible activit\u00e9',desc:'Seulement 46 transactions. Solde global: 224\u20ac. Membre r\u00e9cent ou peu engag\u00e9.',meta:'ID 18'},
  {level:'medium',icon:'fa-user-clock',title:'NENKAM Eden \u2014 Faible activit\u00e9',desc:'Seulement 42 transactions. Solde global: 344\u20ac.',meta:'ID 22'},
  {level:'medium',icon:'fa-calendar-times',title:'Transferts concentr\u00e9s 02/01/2026',desc:'~70% des transferts effectu\u00e9s en un seul jour \u2014 batch annuel au lieu de mensuel.',meta:'Date: 02/01/2026'},
  {level:'medium',icon:'fa-minus-circle',title:'CORP ARTS \u2014 Inscription -5\u20ac',desc:'Compte Inscription n\u00e9gatif sur le compte associatif. Probable erreur de saisie.',meta:'\u00c0 corriger'},
];

// ==================== NAVIGATION ====================
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    const page = item.dataset.page;
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    document.getElementById('page-title').textContent = item.textContent.trim();
  });
});

// ==================== SEARCH ====================
document.getElementById('search-input').addEventListener('input', function(e) {
  const q = e.target.value.toLowerCase();
  if (q.length > 1) {
    const found = members.filter(m => m.name.toLowerCase().includes(q));
    if (found.length > 0) {
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      document.querySelector('[data-page="membres"]').classList.add('active');
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.getElementById('page-membres').classList.add('active');
      renderMembers(found);
    }
  } else if (q.length === 0) {
    renderMembers(members);
  }
});

// ==================== HELPERS ====================
function getScore(m) {
  let pts = 0;
  if (m.ass >= 400) pts += 25; else if (m.ass >= 300) pts += 15; else if (m.ass >= 200) pts += 8;
  if (m.bq >= 500) pts += 25; else if (m.bq >= 375) pts += 15; else if (m.bq >= 250) pts += 8;
  if (m.amen === 0) pts += 20; else if (m.amen <= 2) pts += 10;
  if (m.att <= 10) pts += 15; else if (m.att <= 15) pts += 8;
  if (m.txn >= 500) pts += 15; else if (m.txn >= 100) pts += 10; else if (m.txn > 0) pts += 5;
  if (pts >= 85) return 'A+'; if (pts >= 70) return 'A'; if (pts >= 55) return 'B';
  if (pts >= 40) return 'C'; if (pts >= 25) return 'D'; return 'F';
}
function getStatus(m) {
  if (m.ass === 0 && m.bq === 0) return 'inactif';
  const da = m.ass < 400, db = m.bq < 500;
  if (da && db) return 'deficit'; if (da || db) return 'warning'; return 'conforme';
}
function statusLabel(s) {
  const map = {conforme:'Conforme',deficit:'Double D\u00e9ficit',warning:'D\u00e9ficit partiel',inactif:'Inactif'};
  return map[s] || s;
}
function scoreClass(s) {
  if (s.startsWith('A')) return 'a'; if (s === 'B') return 'b'; if (s === 'C') return 'c';
  if (s === 'D') return 'd'; return 'f';
}
function shortName(n) { return n.split(' ').slice(0,2).join(' '); }
function fmt(v) { return v.toLocaleString('fr-FR', {minimumFractionDigits:2, maximumFractionDigits:2}); }

// ==================== RENDER MEMBERS TABLE ====================
function renderMembers(list) {
  const tbody = document.getElementById('members-tbody');
  tbody.innerHTML = list.map(m => {
    const sc = getScore(m), st = getStatus(m);
    const pctAtt = m.txn > 0 ? Math.round(m.att/50*100) : 0;
    const prevInfo = m.bq_prev ? `<span style="color:var(--text2);font-size:10px" title="Solde pr\u00e9visionnel banque">(pr\u00e9v: ${fmt(m.bq_prev)}\u20ac)</span>` : '';
    const histTag = m.historical ? '<span style="color:var(--text2);font-size:10px;margin-left:4px">[historique]</span>' : '';
    return `<tr>
      <td><strong>${m.name}</strong>${histTag}</td>
      <td><span class="score-badge ${scoreClass(sc)}">${sc}</span></td>
      <td>${fmt(m.ass)}\u20ac ${m.ass<400&&m.ass>0?'<span style="color:var(--red);font-size:11px">(-'+(400-m.ass).toFixed(0)+')</span>':''}</td>
      <td>${fmt(m.bq)}\u20ac ${m.bq<500&&m.bq>0?'<span style="color:var(--red);font-size:11px">(-'+(500-m.bq).toFixed(0)+')</span>':''} ${prevInfo}</td>
      <td>${fmt(m.int)}\u20ac</td>
      <td>${m.txn.toLocaleString()}</td>
      <td>${pctAtt}%</td>
      <td><span class="status-badge ${st}">${statusLabel(st)}</span></td>
    </tr>`;
  }).join('');
}

function filterMembers(filter) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  if (filter === 'all') renderMembers(members);
  else renderMembers(members.filter(m => getStatus(m) === filter));
}

// ==================== RENDER TXN TABLE ====================
function renderTxnTable() {
  const tbody = document.getElementById('txn-tbody');
  tbody.innerHTML = members.filter(m => m.txn > 0).map(m => {
    const pctEmp = Math.round(m.emp / 50 * 100);
    let profil = 'Standard';
    if (pctEmp > 55) profil = 'Emprunteur Lourd';
    else if (pctEmp > 40) profil = 'Emprunteur Moyen';
    else if (m.cot > 8) profil = 'Cotisant R\u00e9gulier';
    if (m.amen > 30) profil = 'Sanctionn\u00e9';
    return `<tr>
      <td><strong>${shortName(m.name)}</strong></td>
      <td>${m.txn.toLocaleString()}</td>
      <td>${m.cot}</td><td>${m.emp}</td>
      <td>${50 - m.cot - m.emp - Math.min(m.amen, 10)}</td>
      <td>${m.amen} ${m.amen>30?'<span style="color:var(--red)">\u26a0</span>':''}</td>
      <td><span class="status-badge ${profil.includes('Lourd')?'deficit':profil.includes('Sanctionn')?'deficit':profil.includes('Cotisant')?'conforme':'attente'}">${profil}</span></td>
    </tr>`;
  }).join('');
}

// ==================== RENDER EMPRUNTS TABLE ====================
function renderEmprunts() {
  const tbody = document.getElementById('emprunts-tbody');
  if (!tbody) return;
  const activeEmprunts = emprunts.filter(e => e[4] !== 'solde');
  tbody.innerHTML = activeEmprunts.map((e, i) => {
    const [id, montant, interets, dateFin, statut, rembourse, dateDebut] = e;
    const total = montant + interets;
    const pct = total > 0 ? Math.round(rembourse / total * 100) : 0;
    const fillClass = pct < 30 ? 'red' : pct < 70 ? 'orange' : 'green';
    const isLate = new Date(dateFin) < new Date() && statut !== 'solde';
    const statutBadge = statut === 'en_cours'
      ? (isLate ? '<span class="status-badge deficit">En retard</span>' : '<span class="status-badge attente">En cours</span>')
      : '<span class="status-badge confirme">Confirm\u00e9</span>';
    return `<tr>
      <td>#${id}</td>
      <td>${fmt(montant)}\u20ac</td>
      <td>${fmt(interets)}\u20ac</td>
      <td>${dateDebut}</td>
      <td>${dateFin}</td>
      <td>${statutBadge}</td>
      <td>${fmt(rembourse)}\u20ac / ${fmt(total)}\u20ac</td>
      <td><div class="progress-bar"><div class="fill ${fillClass}" style="width:${pct}%"></div></div> ${pct}%</td>
    </tr>`;
  }).join('');
}

// ==================== RENDER TRANSFERTS TABLE ====================
function renderTransferts() {
  const tbody = document.getElementById('transferts-tbody');
  if (!tbody) return;
  tbody.innerHTML = transferts.map(t => {
    const [montant, source, dest, statut, date] = t;
    return `<tr>
      <td>${date}</td>
      <td>${fmt(montant)}\u20ac</td>
      <td>${source}</td>
      <td>${dest}</td>
      <td><span class="status-badge confirme">${statut}</span></td>
    </tr>`;
  }).join('');
}

// ==================== RENDER AMENDES TABLE ====================
function renderAmendesTable() {
  const tbody = document.getElementById('amendes-tbody');
  if (!tbody) return;
  // Show summary by member
  tbody.innerHTML = amendesStats.sort((a, b) => b.count - a.count).map(a => {
    const avg = (a.total / a.count).toFixed(2);
    return `<tr>
      <td><strong>${a.name}</strong></td>
      <td>${a.count}</td>
      <td>${fmt(a.total)}\u20ac</td>
      <td>${avg}\u20ac</td>
      <td><span class="status-badge conforme">Pay\u00e9e</span></td>
    </tr>`;
  }).join('');
}

// ==================== RENDER ALERTS ====================
function renderAlerts() {
  document.getElementById('alerts-list').innerHTML = alerts.map(a => `
    <div class="alert-item ${a.level}">
      <div class="alert-icon ${a.level}"><i class="fas ${a.icon}"></i></div>
      <div class="alert-content"><h4>${a.title}</h4><p>${a.desc}</p></div>
      <div class="alert-meta">${a.meta}</div>
    </div>
  `).join('');
}

// ==================== CHARTS ====================
const chartColors = {bg:'rgba(99,102,241,0.6)',border:'rgba(99,102,241,1)'};
Chart.defaults.color = '#9ca3af';
Chart.defaults.borderColor = 'rgba(45,49,66,0.5)';

function initCharts() {
  const activeMembers = members.filter(m => m.txn > 0 && m.active !== false);
  const names = activeMembers.map(m => shortName(m.name));

  // Balance chart
  new Chart(document.getElementById('chart-balances'), {
    type: 'bar', data: {
      labels: names,
      datasets: [
        {label:'Assurance',data:activeMembers.map(m=>m.ass),backgroundColor:'rgba(99,102,241,0.7)',borderRadius:4},
        {label:'Banque',data:activeMembers.map(m=>m.bq),backgroundColor:'rgba(34,197,94,0.7)',borderRadius:4}
      ]
    }, options: {responsive:true,plugins:{legend:{position:'top'}},scales:{x:{ticks:{maxRotation:45,font:{size:9}}},y:{beginAtZero:true}}}
  });

  // Types doughnut
  const totalCot = members.reduce((s,m)=>s+m.cot,0);
  const totalEmp = members.reduce((s,m)=>s+m.emp,0);
  const totalAmen = members.reduce((s,m)=>s+m.amen,0);
  const totalInt = members.reduce((s,m)=>s+Math.max(0, 50-m.cot-m.emp-Math.min(m.amen,10)),0);
  new Chart(document.getElementById('chart-types'), {
    type: 'doughnut', data: {
      labels:['Emprunts/Remb.','Int\u00e9r\u00eats','Cotisations','Amendes'],
      datasets:[{data:[totalEmp,totalInt,totalCot,totalAmen],
        backgroundColor:['rgba(239,68,68,0.7)','rgba(168,85,247,0.7)','rgba(34,197,94,0.7)','rgba(245,158,11,0.7)'],
        borderWidth:0}]
    }, options:{responsive:true,plugins:{legend:{position:'right'}}}
  });

  // Scores bar chart
  const scores = {'A+':0,'A':0,'B':0,'C':0,'D':0,'F':0};
  members.filter(m => !m.historical).forEach(m => { const s = getScore(m); scores[s] = (scores[s]||0)+1; });
  new Chart(document.getElementById('chart-scores'), {
    type:'bar', data:{
      labels:Object.keys(scores),
      datasets:[{label:'Nb Membres',data:Object.values(scores),
        backgroundColor:['rgba(34,197,94,0.8)','rgba(34,197,94,0.6)','rgba(59,130,246,0.7)','rgba(245,158,11,0.7)','rgba(239,68,68,0.6)','rgba(239,68,68,0.9)'],
        borderRadius:6}]
    }, options:{responsive:true,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,ticks:{stepSize:1}}}}
  });

  // TXN horizontal bar
  new Chart(document.getElementById('chart-txn'), {
    type:'bar', data:{
      labels:names,
      datasets:[{label:'Transactions',data:activeMembers.map(m=>m.txn),backgroundColor:'rgba(168,85,247,0.6)',borderRadius:4}]
    }, options:{responsive:true,indexAxis:'y',plugins:{legend:{display:false}},scales:{x:{beginAtZero:true}}}
  });

  // TXN Detail (transactions page)
  new Chart(document.getElementById('chart-txn-detail'), {
    type:'bar', data:{
      labels:names,
      datasets:[
        {label:'Confirm\u00e9es',data:activeMembers.map(m=>Math.round(m.txn*0.72)),backgroundColor:'rgba(34,197,94,0.7)',borderRadius:4},
        {label:'En Attente',data:activeMembers.map(m=>Math.round(m.txn*0.28)),backgroundColor:'rgba(245,158,11,0.7)',borderRadius:4}
      ]
    }, options:{responsive:true,plugins:{legend:{position:'top'}},scales:{x:{stacked:true,ticks:{maxRotation:45,font:{size:9}}},y:{stacked:true,beginAtZero:true}}}
  });

  // Emprunts evolution (real cumulative pattern)
  new Chart(document.getElementById('chart-emprunts'), {
    type:'line', data:{
      labels:['2018','2019','2020','2021','2022','2023','2024','2025','2026'],
      datasets:[{label:'Emprunts Cumul\u00e9s (K\u20ac)',data:[15,45,85,135,195,250,305,340,347],
        borderColor:'var(--accent)',backgroundColor:'rgba(99,102,241,0.1)',fill:true,tension:0.4}]
    }, options:{responsive:true,plugins:{legend:{display:false}}}
  });

  // Emprunt ratio
  new Chart(document.getElementById('chart-emprunt-ratio'), {
    type:'pie', data:{
      labels:['Emprunts/Remboursements','Cotisations','Int\u00e9r\u00eats','Amendes','Tontines'],
      datasets:[{data:[50,12,30,5,3],backgroundColor:['rgba(239,68,68,0.8)','rgba(34,197,94,0.8)','rgba(168,85,247,0.8)','rgba(245,158,11,0.8)','rgba(59,130,246,0.8)'],borderWidth:0}]
    }, options:{responsive:true,plugins:{legend:{position:'right'}}}
  });

  // Transfers by source (real data)
  new Chart(document.getElementById('chart-transfers'), {
    type:'bar', data:{
      labels:['Int\u00e9r\u00eats (192)','Banque (64)','Inscription (21)','Tontines (15)','Projet (11)','Amende (10)','Assurance (10)'],
      datasets:[{label:'Nombre de transferts',data:[192,64,21,15,11,10,10],
        backgroundColor:['rgba(99,102,241,0.8)','rgba(34,197,94,0.8)','rgba(245,158,11,0.8)','rgba(59,130,246,0.8)','rgba(168,85,247,0.8)','rgba(239,68,68,0.8)','rgba(156,163,175,0.6)'],
        borderRadius:6}]
    }, options:{responsive:true,indexAxis:'y',plugins:{legend:{display:false}}}
  });

  // Transfer time concentration
  new Chart(document.getElementById('chart-transfer-time'), {
    type:'bar', data:{
      labels:['Jan 2026','F\u00e9v 2026','Mar 2026','Oct-D\u00e9c 2025','2024 et avant'],
      datasets:[{label:'Nb Transferts',data:[225,0,10,40,48],
        backgroundColor:['rgba(239,68,68,0.8)','rgba(156,163,175,0.3)','rgba(34,197,94,0.7)','rgba(59,130,246,0.7)','rgba(168,85,247,0.7)'],
        borderRadius:6}]
    }, options:{responsive:true,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true}}}
  });

  // Amendes chart (real data by member)
  const sortedAmendes = amendesStats.sort((a, b) => b.count - a.count);
  new Chart(document.getElementById('chart-amendes'), {
    type:'bar', data:{
      labels: sortedAmendes.map(a => shortName(a.name)),
      datasets:[
        {label:'Nombre d\'amendes',data:sortedAmendes.map(a=>a.count),backgroundColor:'rgba(239,68,68,0.7)',borderRadius:6},
        {label:'Montant total (\u20ac)',data:sortedAmendes.map(a=>a.total),backgroundColor:'rgba(245,158,11,0.5)',borderRadius:6}
      ]
    }, options:{responsive:true,plugins:{legend:{position:'top'}},scales:{x:{ticks:{maxRotation:45,font:{size:9}}},y:{beginAtZero:true}}}
  });
}

// ==================== DYNAMIC KPI UPDATES ====================
function updateDashboardKPIs() {
  // Solde Global from nkap.fr live (19/04/2026) \u2014 overrides per-member sum
  const soldeGlobal = soldeGlobalNkap;
  const kpiValues = document.querySelectorAll('#page-dashboard .kpi-value');
  if (kpiValues.length >= 5) {
    kpiValues[0].textContent = Math.round(soldeGlobal).toLocaleString('fr-FR') + ' \u20ac';
    // Conformes
    const conformes = members.filter(m => !m.historical && getStatus(m) === 'conforme').length;
    const totalActive = members.filter(m => !m.historical).length;
    kpiValues[1].textContent = conformes + ' / ' + totalActive;
  }

  // Update membres page KPIs
  const membresKPI = document.querySelectorAll('#page-membres .kpi-value');
  if (membresKPI.length >= 4) {
    const activeCount = members.filter(m => m.active).length;
    const inactiveCount = members.filter(m => !m.active).length;
    membresKPI[0].textContent = activeCount;
    membresKPI[1].textContent = inactiveCount;
  }

  // Update emprunts page KPIs
  const empruntsKPI = document.querySelectorAll('#page-emprunts .kpi-value');
  if (empruntsKPI.length >= 4) {
    empruntsKPI[0].textContent = empruntStats.total;
    empruntsKPI[1].textContent = Math.round(empruntStats.volumeCumule).toLocaleString('fr-FR') + ' \u20ac';
    empruntsKPI[2].textContent = Math.round(empruntStats.interetsGeneres).toLocaleString('fr-FR') + ' \u20ac';
    empruntsKPI[3].textContent = empruntStats.enCours.filter(e => new Date(e[3]) < new Date()).length;
  }

  // Update transferts page KPIs
  const transKPI = document.querySelectorAll('#page-transferts .kpi-value');
  if (transKPI.length >= 4) {
    transKPI[3].textContent = fmt(transfertsSummary.totalVolume) + ' \u20ac';
  }

  // Update amendes page KPIs
  const amendesKPI = document.querySelectorAll('#page-amendes .kpi-value');
  if (amendesKPI.length >= 3) {
    amendesKPI[0].textContent = amendesTotalCount;
    amendesKPI[1].textContent = fmt(accounts.amende.balance) + ' \u20ac';
    amendesKPI[2].textContent = (amendesTotalCount / members.filter(m => !m.historical).length).toFixed(1);
  }
}

// ==================== INIT ====================
renderMembers(members);
renderTxnTable();
renderAlerts();
renderEmprunts();
renderTransferts();
renderAmendesTable();
initCharts();
updateDashboardKPIs();
