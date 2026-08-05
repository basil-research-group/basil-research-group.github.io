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
    details: "113556",
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
    details: "100098",
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
    details: "99(406), 1-9",
    doi: "10.15184/aqy.2025.20",
    cover: "assets/covers/antiquity.jpg"
  },
  {
    id: 4,
    type: "journal",
    year: 2025,
    authors: ["Jha, G.", "Costa, M.", "Tsoupra, A.", "Dias, C.B.", "Kwiecien, O.", "Longman, J.", "Breitenbach, S.F.M.", "Ditchfield, P.", "Jha, D.K.", "Rudd, R.", "Anil, D.", "Paladugu, R.", "Shree, S.", "Achyuthan, H.", "Raj, R.", "Krishnan, K.", "Boivin, N.", "Roberts, P.", "Petraglia, M."],
    title: "Seasonally resolved stratigraphy at Jwalapuram, India shows regional surface warming after the Toba volcanic super-eruption",
    journal: "PNAS Nexus",
    details: "4(4), pgaf109",
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
    type: "conference",
    year: 2025,
    authors: ["Jha, D.K."],
    title: "Plant wax biomarkers and their isotopes: understanding past human-environment interactions",
    journal: "Beijing Normal University, Zhuhai Campus, China",
    details: "Invited talk, 25-28 May",
    doi: "",
    cover: ""
  },
  {
    id: 9,
    type: "conference",
    year: 2025,
    authors: ["Jha, D.K.", "Miyash, N.", "Gupta, P.", "Rudd, R.", "Singh, S.P.", "Roberts, P."],
    title: "Plant biomarkers in arid ecosystems: molecular and isotopic insights from the Thar Desert",
    journal: "EGU General Assembly, Vienna, Austria",
    details: "",
    doi: "",
    cover: ""
  },
  {
    id: 10,
    type: "conference",
    year: 2025,
    authors: ["Rudd, R.", "Patalano, R.", "Jha, D.K.", "Schalkwyk, J.V.", "Schwalkwyk, L.V.", "Mokhachane, R.", "Stewart, B.A.", "Roberts, P."],
    title: "Plant wax n-alkanes track C3-C4 vegetation transitions and hydrological responses along elevation gradients in Lesotho, Southern Africa",
    journal: "EGU General Assembly, Vienna, Austria",
    details: "",
    doi: "",
    cover: ""
  },
  {
    id: 11,
    type: "conference",
    year: 2025,
    authors: ["Jha, D.K."],
    title: "Quaternary human-environment interactions in South Asia",
    journal: "Institute of Geology and Geophysics, Chinese Academy of Sciences, Beijing, China",
    details: "Invited talk, 29-31 May",
    doi: "",
    cover: ""
  },
  {
    id: 12,
    type: "conference",
    year: 2025,
    authors: ["Jha, D.K."],
    title: "Environmental and ecological impacts of European colonialism in South Asia",
    journal: "PAGES Young Scientists Meeting & Open Science Meeting, Shanghai, China",
    details: "Flash talk and poster, 18-25 May",
    doi: "",
    cover: ""
  },
  {
    id: 13,
    type: "journal",
    year: 2024,
    authors: ["Sanyal, P.", "Adhya, S.P.", "Mandal, R.", "Roy, B.", "Dasgupta, B.", "Samantaray, S.", "Sen, R.", "Sarangi, V.", "Kumar, A.", "Jha, D.K.", "Ajay, A."],
    title: "The geologic history of plants and climate in India",
    journal: "Annual Review of Earth and Planetary Sciences",
    details: "52, 639-661",
    doi: "10.1146/ANNUREV-EARTH-040722-102442",
    cover: "assets/covers/annual-review-of-earth-and-planetary-sciences.jpg"
  },
  {
    id: 14,
    type: "journal",
    year: 2024,
    authors: ["Roberts, P.", "Caetano-Andrade, V.L.", "Fisher, M.", "Hamilton, R.", "Rudd, R.", "Stokes, F.", "Amano, N.", "Antonosyan, M.", "Dugmore, A.", "Findley, D.M.", "Zuccarelli Freire, V.", "Pereira Furquim, L.", "Fletcher, M.S.", "Hambrecht, G.", "Heddell-Stevens, P.", "Iminjili, V.", "Jha, D.K.", "Jha, G.", "Kinyanjui, R.N.", "Maezumi, S.Y.", "Morrison, K.D.", "Renn, J.", "Stevenson, J.", "Winkelmann, R.", "Ziegler, M.", "Scarborough, V.L.", "White, S.", "Degroot, D.", "Green, A.S.", "Isendahl, C."],
    title: "Uncovering environmental legacies of past human societies on the Earth system at the global scale",
    journal: "Annual Review of Environment and Resources",
    details: "49, 21-50",
    doi: "",
    cover: "assets/covers/annual-review-of-environment-and-resources.jpg"
  },
  {
    id: 15,
    type: "journal",
    year: 2024,
    authors: ["ECHOES", "Zuccarelli Freire, V.", "Ziegler, M.J.", "Caetano-Andrade, V.", "Iminjili, V.", "Lellau, R.", "Rudd, R.", "Stokes, F.", "Heberle Viegas, D.", "Maezumi, S.Y.", "Jha, G.", "Antonosyan, M.", "Jha, D.K.", "Winkelmann, R.", "Roberts, P.", "Furquim, L."],
    title: "Addressing the Anthropocene from the Global South: integrating paleoecology, archaeology and traditional knowledge for COP engagement",
    journal: "Frontiers in Earth Science",
    details: "12",
    doi: "10.3389/feart.2024.1470577",
    cover: "assets/covers/frontiers-in-earth-science.jpg"
  },
  {
    id: 16,
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
    id: 17,
    type: "journal",
    year: 2024,
    authors: ["Ramirez-Pedraza, I.", "Tornero, C.", "Aouraghe, H.", "Rivals, F.", "Patalano, R.", "Haddoumi, H.", "Exposito, I.", "Rodriguez-Hidalgo, A.", "Mischke, S.", "van der Made, J.", "Pinero, P.", "Blain, H.-A.", "Roberts, P.", "Jha, D.K.", "Agusti, J.", "Sanchez-Bandera, C.", "Lemjidi, A.", "Benito-Calvo, A.", "Moreno-Ribas, E.", "Oujaa, A.", "Mhamdi, H.", "Souhir, M.", "Aissa, A.M.", "Chacon, M.G.", "Sala-Ramos, R."],
    title: "Arid, mosaic environments during the Plio-Pleistocene transition and early hominin dispersals in northern Africa",
    journal: "Nature Communications",
    details: "15, 8393",
    doi: "10.1038/S41467-024-52672-0",
    cover: "assets/covers/nature-communications.jpg"
  },
  {
    id: 18,
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
    id: 19,
    type: "journal",
    year: 2024,
    authors: ["Jha, G.", "Sinha, D.K.", "Jha, D.K.", "Ajithprasad, P."],
    title: "Coasting into India? Assessing lithostratigraphic context of Middle Palaeolithic occupation in Saurashtra Peninsula",
    journal: "Quaternary Environments and Humans",
    details: "100034",
    doi: "10.1016/j.qeh.2024.100034",
    cover: "assets/covers/quaternary-environments-and-humans.jpg"
  },
  {
    id: 20,
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
    id: 21,
    type: "journal",
    year: 2024,
    authors: ["Kumar, A.", "Basu, S.", "Ajay, A.", "Jha, D.K.", "Sanyal, P."],
    title: "Quantitative delineation of water sources in the river Ganga using stable water isotopes",
    journal: "River Research and Applications",
    details: "40(2), 177-190",
    doi: "10.1002/rra.4230",
    cover: "assets/covers/river-research-and-applications.jpg"
  },
  {
    id: 22,
    type: "conference",
    year: 2024,
    authors: ["Jha, D.K.", "Blinkhorn, J.", "Schwab-Lavric, V.", "Zuccarelli Freire, V.", "Ilgner, J.", "Achyuthan, H.", "Boivin, N.", "Devra, R.", "Maezumi, S.Y.", "Gleixner, G.", "Roberts, P."],
    title: "Plant-wax biomarkers and their isotopes reveal complex relationships between climate, vegetation and fire during collapse of the Indus Valley Civilization",
    journal: "EGU General Assembly, Vienna, Austria",
    details: "",
    doi: "10.5194/EGUSPHERE-EGU24-20312",
    cover: ""
  },
  {
    id: 23,
    type: "conference",
    year: 2024,
    authors: ["Jha, D.K.", "Jha, G."],
    title: "Rethinking the environmental context of hominin evolution in India",
    journal: "Human Evolution Workshop, ARCHE, Griffith University, Australia",
    details: "Invited talk",
    doi: "",
    cover: ""
  },
  {
    id: 24,
    type: "conference",
    year: 2024,
    authors: ["Jha, D.K."],
    title: "Understanding human-environment interactions across time and space",
    journal: "Humboldt Scholars, Max Planck Institute of Geoanthropology, Germany",
    details: "Invited talk",
    doi: "",
    cover: ""
  },
  {
    id: 25,
    type: "conference",
    year: 2024,
    authors: ["Jha, D.K."],
    title: "Stable isotopes and biomarker analyses: understanding human-environment interactions across time and space",
    journal: "Paleoschool, Paleoher Foundation, India",
    details: "Invited talk",
    doi: "",
    cover: ""
  },
  {
    id: 26,
    type: "journal",
    year: 2023,
    authors: ["Guagnin, M.", "Shipton, C.", "Stileman, F.", "Jibreen, F.", "AlSulaimi, M.", "Breeze, P.S.", "Stewart, M.", "Hatton, A.", "Drake, N.", "Jha, D.K.", "Al-Tamimi, F.", "Al-Shamry, M.", "Al-Shammari, M.", "Kay, A.", "Groucutt, H.S.", "Alsharekh, A.M.", "Petraglia, M.D."],
    title: "Before the Holocene humid period: Life-sized camel engravings and early occupations on the southern edge of the Nefud Desert",
    journal: "Archaeological Research in Asia",
    details: "36, 100483",
    doi: "10.1016/j.ara.2023.100483",
    cover: "assets/covers/archaeological-research-in-asia.jpg"
  },
  {
    id: 27,
    type: "journal",
    year: 2023,
    authors: ["Dhiman, H.", "Verma, V.", "Singh, L.R.", "Miglani, V.", "Jha, D.K.", "Sanyal, P.", "Tandon, S.K.", "Prasad, G.V."],
    title: "New Late Cretaceous titanosaur sauropod dinosaur egg clutches from lower Narmada valley, India: Palaeobiology and taphonomy",
    journal: "PLOS ONE",
    details: "18(1), e0278242",
    doi: "10.1371/JOURNAL.PONE.0278242",
    cover: "assets/covers/plos-one.jpg"
  },
  {
    id: 28,
    type: "journal",
    year: 2023,
    authors: ["Kulkarni, C.", "Jara, I.A.", "Chevalier, M.", "Jha, D.K."],
    title: "pSESYNTH project: Community mobilization for a multi-disciplinary paleo database of the Global South",
    journal: "Past Global Changes Magazine",
    details: "31(1), 30-31",
    doi: "10.22498/pages.31.1.30",
    cover: "assets/covers/past-global-changes-magazine.jpg"
  },
  {
    id: 29,
    type: "journal",
    year: 2023,
    authors: ["Huber, B.", "Hammann, S.", "Loeben, C.E.", "Jha, D.K."],
    title: "Biomolecular characterization of 3500-year-old ancient Egyptian mummification balms from the Valley of the Kings",
    journal: "Scientific Reports",
    details: "13, 12477",
    doi: "10.1038/s41598-023-39393-y",
    cover: "assets/covers/scientific-reports.jpg"
  },
  {
    id: 30,
    type: "conference",
    year: 2023,
    authors: ["Jha, D.K."],
    title: "Late Quaternary human-environment relationship in India: perspective from plant lipids and multi-isotope analyses",
    journal: "Max Planck Institute of Geoanthropology, Germany",
    details: "Invited talk",
    doi: "",
    cover: ""
  },
  {
    id: 31,
    type: "conference",
    year: 2023,
    authors: ["Jha, D.K."],
    title: "Plant wax and PAH biomarkers: tracing anthropogenic signature",
    journal: "PANTHROPOCENE Workshop, University of the Philippines",
    details: "Invited talk",
    doi: "",
    cover: ""
  },
  {
    id: 32,
    type: "conference",
    year: 2023,
    authors: ["Jha, D.K.", "Roberts, P."],
    title: "Plant-wax biomarkers and their isotopes: understanding past human-environment interactions",
    journal: "School of Archaeology, University of the Philippines",
    details: "Invited talk",
    doi: "",
    cover: ""
  },
  {
    id: 33,
    type: "conference",
    year: 2023,
    authors: ["Jha, D.K."],
    title: "Plant wax biomarkers and their isotopes: understanding past human-environment interactions",
    journal: "University of Cologne, Germany",
    details: "Invited talk",
    doi: "",
    cover: ""
  },
  {
    id: 34,
    type: "conference",
    year: 2023,
    authors: ["Jha, D.K."],
    title: "Late Quaternary human-environment relationship in India: insights from plant biomarkers, compound-specific isotopes and macro-charcoal",
    journal: "University of Liverpool, UK",
    details: "Invited talk",
    doi: "",
    cover: ""
  },
  {
    id: 35,
    type: "conference",
    year: 2023,
    authors: ["Jha, D.K.", "Patalano, R.", "Roberts, P.", "Petraglia, M."],
    title: "Plant-wax biomarkers in the Quaternary sediments of deserts: implications for human-environment reconstructions",
    journal: "XXI INQUA Congress, Rome, Italy",
    details: "",
    doi: "",
    cover: ""
  },
  {
    id: 36,
    type: "conference",
    year: 2023,
    authors: ["Jha, G.", "Jha, D.K.", "Patalano, R.", "Roberts, P.", "Krishnan, K.", "Boivin, N.", "Petraglia, M."],
    title: "One Toba, different tales: assessing variability in environmental impact of the ~74 ka Toba super-eruption on the South Asian mosaic",
    journal: "XXI INQUA Congress, Rome, Italy",
    details: "",
    doi: "",
    cover: ""
  },
  {
    id: 37,
    type: "conference",
    year: 2023,
    authors: ["Ramirez-Pedraza, I.", "Patalano, R.", "Aouraghe, H.", "Rivals, F.", "Tornero, C.", "Jha, D.K.", "Roberts, P.", "Haddoumi, H.", "Rodriguez-Hidalgo, A.", "Aissa, A.M.", "Chacon, G.", "Sala-Ramos, R."],
    title: "Plant wax biomarker record from the Plio-Pleistocene site Guefait-4.2, eastern Morocco",
    journal: "XXI INQUA Congress, Rome, Italy",
    details: "",
    doi: "",
    cover: ""
  },
  {
    id: 38,
    type: "conference",
    year: 2023,
    authors: ["Patalano, R.", "Miller, J.", "Carleton, W.C.", "Gayantha, K.", "Gleixner, G.", "Jha, D.K.", "Ilgner, J.", "Lucas, M.", "Scott, E.", "Roberts, P.", "Ndiema, E.", "Boivin, N.", "Petraglia, M."],
    title: "Isotopic evidence for human microhabitat use within and across an ecological refugium, Panga ya Saidi, Kenya",
    journal: "XXI INQUA Congress, Rome, Italy",
    details: "",
    doi: "",
    cover: ""
  },
  {
    id: 39,
    type: "journal",
    year: 2022,
    authors: ["Prieto, A.", "Aldea-Moreira, X.", "Arzarello, M.", "Berruti, G.L.F.", "Caracausi, S.", "Daffara, S.", "de la Pena, P.", "Favreau, J.", "Garcia-Rojas, M.", "Huysecom, E.", "Janardhana, B.", "Jha, D.K."],
    title: "How to deal with an elephant in the room? Understanding non-flint raw materials: characterization and technological organization",
    journal: "Revista ArkeoGazte",
    details: "12, 73-98",
    doi: "",
    cover: "assets/covers/arkeogazte-revista-de-arqueolog-a.jpg"
  },
  {
    id: 40,
    type: "journal",
    year: 2021,
    authors: ["Jha, D.K.", "Samrat, R.", "Sanyal, P."],
    title: "The first evidence of controlled use of fire by prehistoric humans during the Middle Palaeolithic phase from the Indian subcontinent",
    journal: "Palaeogeography, Palaeoclimatology, Palaeoecology",
    details: "562, 110151",
    doi: "10.1016/j.palaeo.2020.110151",
    cover: "assets/covers/palaeogeography-palaeoclimatology-palaeoecology.jpg"
  },
  {
    id: 41,
    type: "journal",
    year: 2021,
    authors: ["Singh, A.", "Muhammad, R.F.", "Taib, I.", "Jha, D.K.", "Srivastava, A.K."],
    title: "Surface texture, mineralogy and stable isotope studies of nodular calcretes preserved in the YTT ash of Padang Terap river basin and Lenggong valley, Peninsular Malaysia: implications in its origin and paleoclimatic reconstruction",
    journal: "Rhizosphere",
    details: "100380",
    doi: "10.1016/J.RHISPH.2021.100380",
    cover: "assets/covers/rhizosphere.jpg"
  },
  {
    id: 42,
    type: "thesis",
    year: 2021,
    authors: ["Jha, D.K."],
    title: "Reconstruction of Late Quaternary climate, vegetation, fire and sediment provenance of Indo-Gangetic floodplains and its implication for the Palaeolithic to Neolithic phases of the Indian subcontinent",
    journal: "Doctoral dissertation, IISER Kolkata",
    details: "",
    doi: "",
    cover: ""
  },
  {
    id: 43,
    type: "conference",
    year: 2021,
    authors: ["Jha, D.K.", "Sanyal, P."],
    title: "Decoding the role of Late Quaternary climate and vegetation in the evolution of the Indo-Gangetic plain, India",
    journal: "Goldschmidt Conference, Lyon, France",
    details: "Poster",
    doi: "",
    cover: ""
  },
  {
    id: 44,
    type: "conference",
    year: 2021,
    authors: ["Jha, D.K."],
    title: "Reconstruction of Late Quaternary climate, vegetation and fire events from archaeological sites of Belan valley, north-central India",
    journal: "ROCEEH Working Group Meeting, University of Tuebingen, Germany",
    details: "Spotlight talk",
    doi: "",
    cover: ""
  },
  {
    id: 45,
    type: "journal",
    year: 2020,
    authors: ["Jha, D.K.", "Sanyal, P.", "Philippe, A."],
    title: "Multi-proxy evidence of Late Quaternary climate and vegetational history of north-central India: Implication for the Palaeolithic to Neolithic phases",
    journal: "Quaternary Science Reviews",
    details: "229, 106121",
    doi: "10.1016/j.quascirev.2019.106121",
    cover: "assets/covers/quaternary-science-reviews.jpg"
  },
  {
    id: 46,
    type: "conference",
    year: 2020,
    authors: ["Jha, D.K."],
    title: "Reconstruction of Late Quaternary climate, vegetation and fire events from archaeological sites of Belan valley, north-central India",
    journal: "IISER Mohali, India",
    details: "Oral talk",
    doi: "",
    cover: ""
  },
  {
    id: 47,
    type: "conference",
    year: 2020,
    authors: ["Jha, D.K."],
    title: "Role of Late Quaternary climate and vegetation composition in the evolution of prehistoric humans in India",
    journal: "Paleopercs online seminar series",
    details: "Invited oral talk",
    doi: "",
    cover: ""
  },
  {
    id: 48,
    type: "conference",
    year: 2019,
    authors: ["Samrat, R.", "Jha, D.K.", "Sanyal, P."],
    title: "Evidence of early human-induced palaeofire events in Belan valley, north-central India",
    journal: "EGU General Assembly, Vienna, Austria",
    details: "",
    doi: "",
    cover: ""
  },
  {
    id: 49,
    type: "conference",
    year: 2019,
    authors: ["Jha, D.K.", "Samrat, R.", "Sanyal, P."],
    title: "Reconstructing human-induced fire from archaeological sites of Belan valley, north-central India",
    journal: "INQUA Congress, Dublin, Ireland",
    details: "",
    doi: "",
    cover: ""
  },
  {
    id: 50,
    type: "conference",
    year: 2019,
    authors: ["Jha, D.K.", "Samrat, R.", "Sanyal, P."],
    title: "Late-Pleistocene climate and vegetation of north-central India: clues from sedimentology, molecular distribution of n-alkanes and stable isotopes",
    journal: "INQUA Congress, Dublin, Ireland",
    details: "",
    doi: "",
    cover: ""
  },
  {
    id: 51,
    type: "conference",
    year: 2019,
    authors: ["Jha, D.K.", "Samrat, R.", "Sanyal, P."],
    title: "Climate, vegetation and fire history of the last ~100 ka from archaeological sites of Belan valley, north-central India",
    journal: "JpGU Meeting, Japan",
    details: "",
    doi: "",
    cover: ""
  },
  {
    id: 52,
    type: "conference",
    year: 2018,
    authors: ["Jha, D.K.", "Sanyal, P."],
    title: "Late Quaternary climate variability and civilisation history of Belan valley, India",
    journal: "EGU General Assembly, Vienna, Austria",
    details: "",
    doi: "",
    cover: ""
  },
  {
    id: 53,
    type: "journal",
    year: 2017,
    authors: ["Yadav, A.", "Mishra, P.K.", "Kumar, P.", "Jha, D.K.", "Kumar, V.V.", "Ambili, V.", "Anoop, A."],
    title: "Molecular distribution and carbon isotope of n-alkanes from Ashtamudi Estuary, South India: Assessment of organic matter sources and paleoclimatic implications",
    journal: "Marine Chemistry",
    details: "196, 62-70",
    doi: "10.1016/J.MARCHEM.2017.08.002",
    cover: "assets/covers/marine-chemistry.jpg"
  },
  {
    id: 54,
    type: "journal",
    year: 2017,
    authors: ["Pillai, A.A.S.", "Anoop, A.", "Sankaran, M.", "Sanyal, P.", "Jha, D.K.", "Ratnam, J."],
    title: "Mid-late Holocene vegetation response to climatic drivers and biotic disturbances in the Banni grasslands of western India",
    journal: "Palaeogeography, Palaeoclimatology, Palaeoecology",
    details: "485, 869-878",
    doi: "10.1016/J.PALAEO.2017.07.036",
    cover: "assets/covers/palaeogeography-palaeoclimatology-palaeoecology.jpg"
  },
  {
    id: 55,
    type: "conference",
    year: 2017,
    authors: ["Jha, D.K.", "Ghosh, S.", "Hirave, P.", "Sanyal, P."],
    title: "Isotopic response of angiosperm and gymnosperm species along a climate gradient: a case study from NW Himalaya",
    journal: "Advances in Modern Earth System Sciences, IISER Kolkata, India",
    details: "",
    doi: "",
    cover: ""
  },
  {
    id: 56,
    type: "conference",
    year: 2017,
    authors: ["Kumar, P.", "Ankit, Y.", "Mishra, P.K.", "Jha, D.K.", "Anoop, A."],
    title: "Characterisation of organic matter source and sediment distribution in Ashtamudi Estuary, southern India",
    journal: "EGU General Assembly, Vienna, Austria",
    details: "",
    doi: "",
    cover: ""
  },
  {
    id: 57,
    type: "conference",
    year: 2016,
    authors: ["Jha, D.K.", "Sanyal, P."],
    title: "Palaeohydrological and vegetational history of Quaternary Belan valley, north-central India: multi-proxy evidence from an archaeological site",
    journal: "Annual General Meeting of the Geological Society of India, IIT Kharagpur, India",
    details: "",
    doi: "",
    cover: ""
  }
];
