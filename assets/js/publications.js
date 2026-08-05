/* ==========================================================================
   BASIL - Publication catalogue
   --------------------------------------------------------------------------
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO ADD A PAPER.

   Copy an existing block, paste it at the TOP of the list, and change the
   fields. Keep the commas and quote marks exactly as they are.

     id       any number, just keep it unique
     type     "journal" | "conference" | "thesis"   (drives the filter buttons)
     year     four-digit number, no quotes
     authors  ["Surname, A.B.", "Surname, C.D."]    one quoted name each,
              so the site can tell authors apart and highlight group members
     title    the article title, no full stop at the end
     journal  full journal name - also picks the cover image
     details  "volume(issue), pages"                (leave "" if not relevant)
     doi      "10.xxxx/yyyy" - becomes the "View Article" button
     cover    "assets/covers/<journal-slug>.jpg"    (see README; optional)

   Counts on the site (filter buttons, home-page tiles) are worked out from
   this list automatically, so you never have to update a number by hand.

   Catalogue sourced from ORCID 0000-0002-7105-5872, enriched via Crossref.
   ========================================================================== */

const PUBLICATIONS = [
  {
    id: 1,
    type: "journal",
    year: 2026,
    authors: ["Reinhardt, A.L.", "Riris, P.", "Harris, B.", "Jha, D.K.", "de Lima Primam, G.L.", "Bauermann, S.G.", "Gayantha, K.", "Rudd, R.", "Roberts, P.", "Behling, H."],
    title: "Late Holocene vegetation dynamics, fire regimes, and human impact in Southern Brazil: A multi-proxy palaeoecological record from the Matematico Lake",
    journal: "Palaeogeography, Palaeoclimatology, Palaeoecology",
    details: "686, 113556",
    doi: "10.1016/J.PALAEO.2026.113556",
    cover: "assets/covers/palaeogeography-palaeoclimatology-palaeoecology.jpg"
  },
  {
    id: 2,
    type: "journal",
    year: 2026,
    authors: ["Chakraborty, K.S.", "Mukhopadhyay, S.", "Jha, D.K.", "Roberts, P."],
    title: "Quaternary research in South Asia: Exploring human-environment interactions",
    journal: "Quaternary Environments and Humans",
    details: "4(1), 100098",
    doi: "10.1016/j.qeh.2026.100098",
    cover: "assets/covers/quaternary-environments-and-humans.jpg"
  },
  {
    id: 3,
    type: "journal",
    year: 2025,
    authors: ["Vaishnav, H.K.", "Janardhana, B.", "Jha, D.K."],
    title: "Acheulean habitation in the Upper Son Valley, India: insights into early occupation and environment",
    journal: "Antiquity",
    details: "99(406)",
    doi: "10.15184/aqy.2025.20",
    cover: "assets/covers/antiquity.jpg"
  },
  {
    id: 4,
    type: "journal",
    year: 2025,
    authors: ["Jha, G.", "Costa, M.", "Tsoupra, A.", "Dias, C.B.", "Kwiecien, O.", "Longman, J.", "Breitenbach, S.F.M.", "Ditchfield, P.", "Jha, D.K.", "Rudd, R.", "Anil, D.", "Paladugu, R.", "Shree, S.", "Achyuthan, H.", "Raj, R.", "Krishnan, K.", "Boivin, N.", "Roberts, P.", "Petraglia, M."],
    title: "Seasonally resolved stratigraphy at Jwalapuram India shows regional surface warming after the Toba volcanic super-eruption",
    journal: "PNAS Nexus",
    details: "4(4)",
    doi: "10.1093/pnasnexus/pgaf109",
    cover: "assets/covers/pnas-nexus.jpg"
  },
  {
    id: 5,
    type: "journal",
    year: 2025,
    authors: ["Jha, D.K.", "Dasgupta, S.", "Sanyal, R."],
    title: "A geoarchaeological timeline of India",
    journal: "Quaternary Environments and Humans",
    details: "3(4), 100089",
    doi: "10.1016/j.qeh.2025.100089",
    cover: "assets/covers/quaternary-environments-and-humans.jpg"
  },
  {
    id: 6,
    type: "journal",
    year: 2025,
    authors: ["Vaishnav, H.K.", "Jha, D.K.", "Janardhana, B."],
    title: "Geoarchaeological perspective on Mesolithic and Neolithic settlement pattern and transition in the Ganga Plain, India",
    journal: "Quaternary Environments and Humans",
    details: "3(1), 100051",
    doi: "10.1016/j.qeh.2024.100051",
    cover: "assets/covers/quaternary-environments-and-humans.jpg"
  },
  {
    id: 7,
    type: "journal",
    year: 2025,
    authors: ["Jha, G.", "Vyas, V.", "Jha, D.K.", "Patalano, R.", "Paladugu, R.", "Ilgner, J.", "Boivin, N.", "Raj, R.", "Krishnan, K.", "Roberts, P.", "Petraglia, M."],
    title: "On-site plant-wax biomarker analysis for assessing soil-organic-microbial degradation in archaeological contexts: A case study from Southern India",
    journal: "iScience",
    details: "28(11), 113656",
    doi: "10.1016/J.ISCI.2025.113656",
    cover: "assets/covers/iscience.jpg"
  },
  {
    id: 8,
    type: "journal",
    year: 2024,
    authors: ["Jha, D.", "Blinkhorn, J.", "Schwab-Lavric, V.", "Zuccarelli Freire, V.", "Ilgner, J.", "Achyuthan, H.", "Boivin, N.", "Devra, R.", "Maezumi, S.Y.", "Gleixner, G.", "Roberts, P.", "Petraglia, M."],
    title: "Plant-wax biomarkers and their isotopes reveal complex relationships between climate, vegetation and fire during collapse of Indus Valley Civilization",
    journal: "",
    details: "",
    doi: "10.5194/EGUSPHERE-EGU24-20312",
    cover: ""
  },
  {
    id: 9,
    type: "journal",
    year: 2024,
    authors: ["Sanyal, P.", "Adhya, S.P.", "Mandal, R.", "Roy, B.", "Dasgupta, B.", "Samantaray, S.", "Sen, R.", "Sarangi, V.", "Kumar, A.", "Jha, D.K.", "Ajay, A."],
    title: "The Geologic History of Plants and Climate in India",
    journal: "Annual Review of Earth and Planetary Sciences",
    details: "52(1), 639-661",
    doi: "10.1146/ANNUREV-EARTH-040722-102442",
    cover: "assets/covers/annual-review-of-earth-and-planetary-sciences.jpg"
  },
  {
    id: 10,
    type: "journal",
    year: 2024,
    authors: ["Roberts, P.", "Caetano-Andrade, V.L.", "Fisher, M.", "Hamilton, R.", "Rudd, R.", "Stokes, F.", "Amano, N.", "Antonosyan, M.", "Dugmore, A.", "Findley, D.M.", "Freire, V.Z.", "Furquim, L.P.", "Fletcher, M.S.", "Hambrecht, G.", "Heddell-Stevens, P.", "Iminjili, V.", "Jha, D.K.", "Jha, G.", "Kinyanjui, R.N.", "Maezumi, S.Y.", "Morrison, K.D.", "Renn, J.", "Stevenson, J.", "Winkelmann, R.", "Ziegler, M.", "Scarborough, V.L.", "White, S.", "Degroot, D.", "Green, A.S.", "Isendahl, C."],
    title: "Uncovering the Multibiome Environmental and Earth System Legacies of Past Human Societies",
    journal: "Annual Review of Environment and Resources",
    details: "49(1), 21-50",
    doi: "10.1146/ANNUREV-ENVIRON-112321-101257",
    cover: "assets/covers/annual-review-of-environment-and-resources.jpg"
  },
  {
    id: 11,
    type: "journal",
    year: 2024,
    authors: ["Zuccarelli Freire, V.", "Ziegler, M.J.", "Caetano-Andrade, V.", "Iminjili, V.", "Lellau, R.", "Stokes, F.", "Rudd, R.C.", "Heberle Viegas, D.", "Maezumi, S.Y.", "Jha, G.", "Antonosyan, M.", "Jha, D.K.", "Winkelmann, R.", "Roberts, P.", "Furquim, L."],
    title: "Addressing the Anthropocene from the Global South: integrating paleoecology, archaeology and traditional knowledge for COP engagement",
    journal: "Frontiers in Earth Science",
    details: "12",
    doi: "10.3389/feart.2024.1470577",
    cover: "assets/covers/frontiers-in-earth-science.jpg"
  },
  {
    id: 12,
    type: "journal",
    year: 2024,
    authors: ["Jha, D.K.", "Patalano, R.", "Ilgner, J.", "Achyuthan, H.", "Alsharekh, A.M.", "Armitage, S.", "Blinkhorn, J.", "Boivin, N.", "Breeze, P.S.", "Devra, R.", "Drake, N.", "Groucutt, H.S.", "Guagnin, M.", "Roberts, P.", "Petraglia, M."],
    title: "Preservation of plant-wax biomarkers in deserts: implications for Quaternary environment and human evolutionary studies",
    journal: "Journal of Quaternary Science",
    details: "39(3), 349-358",
    doi: "10.1002/JQS.3597",
    cover: "assets/covers/journal-of-quaternary-science.jpg"
  },
  {
    id: 13,
    type: "journal",
    year: 2024,
    authors: ["Ramírez-Pedraza, I.", "Tornero, C.", "Aouraghe, H.", "Rivals, F.", "Patalano, R.", "Haddoumi, H.", "Expósito, I.", "Rodríguez-Hidalgo, A.", "Mischke, S.", "van der Made, J.", "Piñero, P.", "Blain, H.A.", "Roberts, P.", "Jha, D.K.", "Agustí, J.", "Sánchez-Bandera, C.", "Lemjidi, A.", "Benito-Calvo, A.", "Moreno-Ribas, E.", "Oujaa, A.", "Mhamdi, H.", "Souhir, M.", "Aissa, A.M.", "Chacón, M.G.", "Sala-Ramos, R."],
    title: "Arid, mosaic environments during the Plio-Pleistocene transition and early hominin dispersals in northern Africa",
    journal: "Nature Communications",
    details: "15(1)",
    doi: "10.1038/S41467-024-52672-0",
    cover: "assets/covers/nature-communications.jpg"
  },
  {
    id: 14,
    type: "journal",
    year: 2024,
    authors: ["Jha, D.K.", "Hirave, P.", "Ghosh, S.", "Dasgupta, B.", "Sanyal, P."],
    title: "Does leaf wax isotopic characterisation of gymnosperms and angiosperms capture environmental gradients in Himalayas?",
    journal: "Organic Geochemistry",
    details: "187, 104720",
    doi: "10.1016/j.orggeochem.2023.104720",
    cover: "assets/covers/organic-geochemistry.jpg"
  },
  {
    id: 15,
    type: "journal",
    year: 2024,
    authors: ["Jha, G.", "Sinha, D.K.", "Jha, D.K.", "Ajithprasad, P."],
    title: "Coasting into India? - Assessing lithostratigraphic context of Middle Palaeolithic occupation in Saurashtra Peninsula",
    journal: "Quaternary Environments and Humans",
    details: "2(6), 100034",
    doi: "10.1016/j.qeh.2024.100034",
    cover: "assets/covers/quaternary-environments-and-humans.jpg"
  },
  {
    id: 16,
    type: "journal",
    year: 2024,
    authors: ["Jha, D.K.", "Vaishnav, H.K.", "Roy, N."],
    title: "Late Quaternary human-environment relationship in the Ganga Plain, India",
    journal: "Quaternary International",
    details: "680, 1-16",
    doi: "10.1016/J.QUAINT.2024.01.002",
    cover: "assets/covers/quaternary-international.jpg"
  },
  {
    id: 17,
    type: "journal",
    year: 2023,
    authors: ["Guagnin, M.", "Shipton, C.", "Stileman, F.", "Jibreen, F.", "AlSulaimi, M.", "Breeze, P.S.", "Stewart, M.", "Hatton, A.", "Drake, N.", "Jha, D.K.", "Al-Tamimi, F.", "Al-Shamry, M.", "Al-Shammari, M.", "Kay, A.", "Groucutt, H.S.", "Alsharekh, A.M.", "Petraglia, M."],
    title: "Before the Holocene humid period: Life-sized camel engravings and early occupations on the southern edge of the Nefud desert",
    journal: "Archaeological Research in Asia",
    details: "36, 100483",
    doi: "10.1016/j.ara.2023.100483",
    cover: "assets/covers/archaeological-research-in-asia.jpg"
  },
  {
    id: 18,
    type: "journal",
    year: 2023,
    authors: ["Dhiman, H.", "Verma, V.", "Singh, L.R.", "Miglani, V.", "Jha, D.K.", "Sanyal, P.", "Tandon, S.K.", "Prasad, G.V.R."],
    title: "New Late Cretaceous titanosaur sauropod dinosaur egg clutches from lower Narmada valley, India: Palaeobiology and taphonomy",
    journal: "PLOS ONE",
    details: "18(1), e0278242",
    doi: "10.1371/JOURNAL.PONE.0278242",
    cover: "assets/covers/plos-one.jpg"
  },
  {
    id: 19,
    type: "journal",
    year: 2023,
    authors: ["Kulkarni, C.", "Jara, I.", "Chevalier, M.", "Isa, A.", "Alinezhad, K.", "Brugger, S.", "Bunbury, M.", "Cordero-Oviedo, C.", "Courtney-Mustaphi, C.", "Echeverría-Galindo, P.", "Moghaddam, T.E.", "Ferrara, V.", "Garcia-Rodriguez, F.", "Gitau, P.", "Hannaford, M.", "Herbert, A.", "Hernández, A.", "Jalali, B.", "Jha, D.K.", "Kinyanjui, R.", "Koren, G.", "Mackay, H.", "Mansilla, C.", "Margalef, O.", "Mukhopadhyay, S.", "Onafeso, O.", "Riris, P.", "Rodriguez-Abaunza, A.", "Rodríguez-Zorro, P.", "Saeidi, S.", "Ratnayake, A.S.", "Seitz, C.", "Spate, M.", "Vásquez, C.", "Benito, X."],
    title: "pSESYNTH project: Community mobilization for a multi-disciplinary paleo database of the Global South",
    journal: "Past Global Changes Magazine",
    details: "31(1), 30-31",
    doi: "10.22498/pages.31.1.30",
    cover: "assets/covers/past-global-changes-magazine.jpg"
  },
  {
    id: 20,
    type: "journal",
    year: 2023,
    authors: ["Kumar, A.", "Basu, S.", "Ajay, A.", "Jha, D.K.", "Sanyal, P."],
    title: "Quantitative delineation of water sources in the river Ganga using stable water isotopes",
    journal: "River Research and Applications",
    details: "40(2), 177-190",
    doi: "10.1002/rra.4230",
    cover: "assets/covers/river-research-and-applications.jpg"
  },
  {
    id: 21,
    type: "journal",
    year: 2023,
    authors: ["Huber, B.", "Hammann, S.", "Loeben, C.E.", "Jha, D.K.", "Vassão, D.G.", "Larsen, T.", "Spengler, R.N.", "Fuller, D.Q.", "Roberts, P.", "Devièse, T.", "Boivin, N."],
    title: "Biomolecular characterization of 3500-year-old ancient Egyptian mummification balms from the Valley of the Kings",
    journal: "Scientific Reports",
    details: "13(1)",
    doi: "10.1038/s41598-023-39393-y",
    cover: "assets/covers/scientific-reports.jpg"
  },
  {
    id: 22,
    type: "conference",
    year: 2022,
    authors: [],
    title: "The 30,000 years record of fire reconstruction, rainfall fluctuation and vegetation change from northern India",
    journal: "AGU Fall Meeting (Abstract)",
    details: "",
    doi: "",
    cover: "assets/covers/agu-fall-meeting-abstract.jpg"
  },
  {
    id: 23,
    type: "journal",
    year: 2022,
    authors: [],
    title: "How to deal with an elephant in the room? Understanding “non-flint” raw materialscharacterisation and technological organisation",
    journal: "ArkeoGazte: Revista de Arqueología",
    details: "",
    doi: "",
    cover: "assets/covers/arkeogazte-revista-de-arqueolog-a.jpg"
  },
  {
    id: 24,
    type: "conference",
    year: 2021,
    authors: ["Jha, D.", "Sanyal, P."],
    title: "Decoding the role of Late Quaternary climate and vegetation in the evolution of Indo-Gangetic plain, India",
    journal: "",
    details: "",
    doi: "",
    cover: ""
  },
  {
    id: 25,
    type: "thesis",
    year: 2021,
    authors: [],
    title: "Reconstruction of Late Quaternary climate, vegetation, fire and sediment provenance of Indo-Gangetic floodplains and its implication for the Paleolithic to Neolithic phases of the Indian subcontinent",
    journal: "",
    details: "",
    doi: "",
    cover: ""
  },
  {
    id: 26,
    type: "journal",
    year: 2021,
    authors: ["Mishra, B.B."],
    title: "Hypoglycemic and Antioxidative Potential of Coriandrum sativum seed Extract in Alloxan Induced Diabetic Rats.",
    journal: "Bioscience Biotechnology Research Communications",
    details: "14(1), 275-281",
    doi: "10.21786/BBRC/14.1/39",
    cover: "assets/covers/bioscience-biotechnology-research-communications.jpg"
  },
  {
    id: 27,
    type: "conference",
    year: 2021,
    authors: ["Jha, D.", "Sanyal, P."],
    title: "Decoding the role of Late Quaternary climate and vegetation in the evolution of Indo-Gangetic plain, India",
    journal: "Goldschmidt 2021 (Abstract)",
    details: "",
    doi: "10.7185/GOLD2021.3386",
    cover: "assets/covers/goldschmidt-2021-abstract.jpg"
  },
  {
    id: 28,
    type: "journal",
    year: 2021,
    authors: ["Jha, D.K.", "Samrat, R.", "Sanyal, P."],
    title: "The first evidence of controlled use of fire by prehistoric humans during the Middle Paleolithic phase from the Indian subcontinent",
    journal: "Palaeogeography, Palaeoclimatology, Palaeoecology",
    details: "562, 110151",
    doi: "10.1016/j.palaeo.2020.110151",
    cover: "assets/covers/palaeogeography-palaeoclimatology-palaeoecology.jpg"
  },
  {
    id: 29,
    type: "journal",
    year: 2021,
    authors: ["Singh, A.", "Muhammad, R.F.B.H.", "Taib, N.I.", "Jha, D.K.", "Srivastava, A.K."],
    title: "Surface texture, mineralogy and stable isotope studies of nodular calcretes preserved in the YTT ash of Padang Terap river basin and lenggong valley, peninsular Malaysia: Implications in its origin and paleoclimatic reconstruction",
    journal: "Rhizosphere",
    details: "19, 100380",
    doi: "10.1016/J.RHISPH.2021.100380",
    cover: "assets/covers/rhizosphere.jpg"
  },
  {
    id: 30,
    type: "journal",
    year: 2020,
    authors: ["Jha, D.K.", "Samrat, R.", "Sanyal, P."],
    title: "First evidence of prehistoric humans-induced fire in India: clues from macro-charcoal, biomarkers distribution and compound-specific stable isotopes",
    journal: "",
    details: "",
    doi: "10.5194/EGUSPHERE-EGU2020-788",
    cover: ""
  },
  {
    id: 31,
    type: "journal",
    year: 2020,
    authors: [],
    title: "Effects of Postharvest Ozone Fumigation on Post-Harvest Physiology, Storability and Primary Metabolism of Tomato Fruit",
    journal: "HortScience",
    details: "",
    doi: "",
    cover: "assets/covers/hortscience.jpg"
  },
  {
    id: 32,
    type: "journal",
    year: 2020,
    authors: ["Jha, D.K.", "Sanyal, P.", "Philippe, A."],
    title: "Multi-proxy evidence of Late Quaternary climate and vegetational history of north-central India: Implication for the Paleolithic to Neolithic phases",
    journal: "Quaternary Science Reviews",
    details: "229, 106121",
    doi: "10.1016/j.quascirev.2019.106121",
    cover: "assets/covers/quaternary-science-reviews.jpg"
  },
  {
    id: 33,
    type: "journal",
    year: 2019,
    authors: ["Jha, D.K.", "Sayrav, K.", "Mishra, G.P.", "Mishra, B.B.", "Kumari, A.", "Kumar, A.", "Khan, P.K."],
    title: "Risk assessment of low arsenic exposure using biomarkers of oxidative and genotoxic stress in a piscine model",
    journal: "Ecotoxicology",
    details: "28(6), 669-679",
    doi: "10.1007/S10646-019-02060-Y",
    cover: "assets/covers/ecotoxicology.jpg"
  },
  {
    id: 34,
    type: "journal",
    year: 2017,
    authors: ["Ankit, Y.", "Mishra, P.K.", "Kumar, P.", "Jha, D.K.", "Kumar, V.V.", "Ambili, V.", "Anoop, A."],
    title: "Molecular distribution and carbon isotope of n-alkanes from Ashtamudi Estuary, South India: Assessment of organic matter sources and paleoclimatic implications",
    journal: "Marine Chemistry",
    details: "196, 62-70",
    doi: "10.1016/J.MARCHEM.2017.08.002",
    cover: "assets/covers/marine-chemistry.jpg"
  },
  {
    id: 35,
    type: "journal",
    year: 2017,
    authors: ["Pillai, A.A.", "Anoop, A.", "Sankaran, M.", "Sanyal, P.", "Jha, D.K.", "Ratnam, J."],
    title: "Mid-late Holocene vegetation response to climatic drivers and biotic disturbances in the Banni grasslands of western India",
    journal: "Palaeogeography, Palaeoclimatology, Palaeoecology",
    details: "485, 869-878",
    doi: "10.1016/J.PALAEO.2017.07.036",
    cover: "assets/covers/palaeogeography-palaeoclimatology-palaeoecology.jpg"
  }
];
