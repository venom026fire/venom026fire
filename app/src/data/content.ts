import occAerial from "../assets/occ/aerial-view.webp";
import occAerial2 from "../assets/occ/aerial-view-2.webp";
import occArchives from "../assets/occ/archives.webp";
import occAuditorium from "../assets/occ/auditorium.webp";
import occCinema from "../assets/occ/cinema.webp";
import occFlexibleTheatre from "../assets/occ/flexible-theatre.webp";
import occLibrary from "../assets/occ/library.webp";
import occPlaza01 from "../assets/occ/plaza-01.webp";
import occPlaza02 from "../assets/occ/plaza-02.webp";
import occTheatreFoyer from "../assets/occ/theatre-foyer.webp";

export const navLinks = [
  { path: "/", label: "Home", code: "00" },
  { path: "/about", label: "About", code: "01" },
  { path: "/experience", label: "Experience", code: "02" },
  { path: "/projects", label: "Projects", code: "03" },
  { path: "/skills", label: "Skills", code: "04" },
  { path: "/contact", label: "Contact", code: "05" },
];

export const profile = {
  name: "Prithijit Majumder",
  initials: "PM",
  role: "Lead BIM Manager & Virtual Design–Construction Specialist",
  tagline:
    "Streamlining BIM processes across design consultancies and on-site construction — from concept to as-built, across six countries.",
  yearsExperience: "15+",
  location: "Muscat, Oman",
  hometown: "Kharagpur, West Bengal, India",
  basedCountries: ["Oman", "Saudi Arabia", "India", "Singapore", "Vietnam", "Thailand"],
  email: "prithijit.majumder@gmail.com",
  phones: [
    { label: "Oman", number: "+968 9954 1726", href: "tel:+96899541726" },
    { label: "India", number: "+91 89102 59729", href: "tel:+918910259729" },
  ],
  domain: "prithijit.com",
  resumeFile: "/files/resume.pdf",
  portfolioFile: "/files/professional-projects-portfolio.pdf",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/prithijitmajumder/", icon: "linkedin" },
    { label: "X", href: "https://x.com/venom_026", icon: "twitter" },
    { label: "Facebook", href: "https://www.facebook.com/rony.majumder026/", icon: "facebook" },
    { label: "YouTube", href: "https://www.youtube.com/@RonyMajumder_VeNoM026", icon: "youtube" },
    { label: "Discord", href: "https://discord.gg/BMRWUCgDDK", icon: "discord" },
  ],
};

export const bio = [
  "During architecture school, I was fascinated by digital tools that let me create a model and explore a space in three dimensions. As architects, we need to picture how a place will look, feel and work. A 3D environment gave me another way to test that understanding beyond a set of 2D drawings. I learned AutoCAD quickly when it was taught in college, then began learning Autodesk Revit on my own.",
  "While I was still studying, I took on freelance BIM modelling for live projects to learn Revit through real work. I began to see how a model could help teams develop a design, coordinate disciplines and prepare for construction. After my internship, I joined a design firm in Kolkata as a trainee architect, supporting its team with 3D models and BIM-based coordination. I later joined a Bengaluru design firm, where I applied my 3D modelling and visualisation skills to architectural projects.",
  "I have always enjoyed difficult modelling challenges. In 2014, that interest took me to work on the Grand Théâtre de Rabat in Morocco, a landmark project designed by Zaha Hadid Architects. Its complex geometry strengthened my commitment to finding practical ways to carry ambitious architectural ideas through design and construction using BIM based workflows.",
  "As I worked with more teams and project types, I learned that BIM's value continues after construction. Reliable models and structured asset information can help the people who operate and maintain a facility. That wider view shaped my growth as a BIM Implementation Specialist: establishing useful workflows, improving multidisciplinary coordination and keeping the next stage of a building's life in mind.",
  "My approach to solving project challenges led to an assignment through UniBIM Services with Autodesk Consulting as an AEC Technical Consultant. I supported BIM implementation for projects in Thailand, Vietnam and Singapore, helping international teams put shared processes and digital tools into practice.",
  "Today, I bring more than 15 years of experience across architecture, BIM Management and Digital Delivery. As Lead BIM Manager with Dar Al-Handasah, deputed to Oman's Ministry of Culture, Sports & Youth as Client BIM Manager for the Sayyid Tarik bin Taimur Cultural Complex, I work across design coordination, construction models, as-built information and readiness for facility operations. The curiosity that drew me to 3D modelling in college still guides my work: use the model to understand the space, resolve problems together and leave information that remains useful long after handover.",
];

export const capabilities = [
  {
    icon: "boxes",
    title: "BIM & Digital Twin Integration",
    description:
      "Connecting static BIM models with real-time data for dynamic asset and facility management.",
  },
  {
    icon: "landmark",
    title: "Architectural Design Delivery",
    description:
      "Leading production of construction documentation, drawings and multidisciplinary coordination.",
  },
  {
    icon: "layers",
    title: "BIM Process Implementation",
    description:
      "Standing up BIM workflows and standards inside design consultancies and on-site construction teams.",
  },
  {
    icon: "check-check",
    title: "QA/QC & Clash Resolution",
    description:
      "Running clash detection, model QA/QC and technical query resolution across LOD 100 to LOD 500.",
  },
];

export const process = [
  {
    stage: "LOD 100",
    label: "Concept",
    description: "Massing and generative-design options — budget and feasibility comparisons for the client.",
  },
  {
    stage: "LOD 200–300",
    label: "Design Development",
    description: "Detailed geometry with discipline coordination, standards and modelling protocols locked in.",
  },
  {
    stage: "LOD 350",
    label: "Coordination",
    description: "Cross-discipline clash detection, resolution reporting and GFC (good-for-construction) sign-off.",
  },
  {
    stage: "LOD 400",
    label: "Construction",
    description: "Fabrication-ready models coordinated on-site with contractor BIM teams.",
  },
  {
    stage: "LOD 500",
    label: "As-Built",
    description: "As-built capture — often via LiDAR scan-to-BIM — handed off for facility management.",
  },
];

export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  current?: boolean;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Lead BIM Manager",
    company: "Dar Al-Handasah",
    location: "Muscat, Oman",
    period: "Feb 2025 — Present",
    duration: "1 yr 8 mos",
    current: true,
    bullets: [
      "Deputed client-side to Oman's Ministry of Culture, Sports & Youth as Client BIM Manager for the Sayyid Tarik bin Taimur Cultural Complex.",
      "Streamlining BIM processes across design consultancy workflows and on-site construction delivery.",
    ],
  },
  {
    title: "BIM Manager — All Trades & Disciplines",
    company: "Saudi Icon Company",
    location: "Red Sea Global, Saudi Arabia",
    period: "Mar 2024 — Dec 2024",
    duration: "10 months",
    bullets: [
      "Managed BIM delivery for 200+ site buildings and interior fit-outs on the Red Sea Global Project's Shura Island, covering LOD 400 construction models and LOD 500 as-built models.",
      "Coordinated across contractors, vendors, client BIM teams and site execution teams to resolve design and construction interfaces.",
      "Led model QA/QC, clash review and technical issue resolution before client submissions.",
    ],
  },
  {
    title: "BIM Manager, GID/CPA",
    company: "Jacobs Engineering India Consulting",
    location: "Gurgaon, India",
    period: "Dec 2022 — Jan 2024",
    duration: "1 yr 1 mo",
    bullets: [
      "Managed multidisciplinary BIM delivery for 31 site buildings at NEOM Oxagon Port City, Saudi Arabia, across architectural, structural and MEPF disciplines at LOD 350.",
      "Guided modelling teams through technical queries, model reviews and clash resolution.",
      "Reviewed model quality and coordination reports to support complete, consistent submissions.",
    ],
  },
  {
    title: "BIM Manager, EDC",
    company: "Egis India Consulting Engineers",
    location: "Gurgaon, India",
    period: "Nov 2019 — Dec 2022",
    duration: "3 yrs 2 mos",
    bullets: [
      "Led BIM delivery across rail, aviation and aerospace projects, coordinating design teams and multidisciplinary models from concept development through construction and as-built stages.",
      "Managed model production for Delhi Metro Phase IV's 40 elevated stations across three corridors, alongside BIM work for Dhaka Metro Line 5 and Bengaluru's Airport Terminal metro station.",
      "Directed construction and as-built BIM delivery for the Pune, Lucknow and Trichy airport terminals and supported facility-management-focused modelling for the Dassault Reliance Aerospace development in Nagpur.",
    ],
  },
  {
    title: "Project Manager, Architecture",
    company: "Intec Infra-Technologies",
    location: "Gurgaon, India",
    period: "Feb 2018 — Nov 2019",
    duration: "1 yr 9 mos",
    bullets: [
      "Managed architectural and BIM outsourcing work for projects in the US, UK, Middle East, Australia and Southeast Asia, aligning teams and resources with delivery schedules.",
      "Served on a six-month deputation to AECOM Kolkata as Consultant BIM Manager for Riyadh Metro Lines 1 and 2.",
      "Oversaw BIM delivery and resource planning for elevated stations, cut & cover facilities and emergency egress works, supporting a team of more than 30 members.",
    ],
  },
  {
    title: "Technical Consultant, BIM Implementation",
    company: "Autodesk Consulting · via UniBIM Services",
    location: "Thailand, Vietnam, Singapore and India",
    period: "Oct 2015 — Dec 2017",
    duration: "2 yrs 3 mos",
    bullets: [
      "Deputed through UniBIM Services to Autodesk Consulting to support BIM implementation on international residential, rail and industrial energy projects.",
      "Helped establish BIM execution, multidisciplinary coordination, model QA/QC and information-sharing workflows for Ananda Development's residential towers in Bangkok, Dung Quất Refinery in Vietnam and a Singapore Metro extension.",
      "Worked with large international project teams, providing technical guidance, training and practical solutions to modelling and coordination challenges — including a heritage Scan-to-BIM initiative in Rajasthan, converting laser-scan data into detailed as-built models.",
    ],
  },
  {
    title: "BIM Architect, with BIM Manager Responsibilities",
    company: "WS Atkins",
    location: "Gurgaon & Bengaluru, India",
    period: "Feb 2015 — Oct 2015",
    duration: "9 months · Contract",
    bullets: [
      "Supported BIM implementation within the design process for Riyadh Metro Lines 4 and 6, covering elevated and shallow underground stations and Park & Ride facilities.",
      "Managed BIM-based design delivery and coordination across architectural, structural and MEP disciplines, helping teams resolve spatial interfaces and apply consistent modelling standards.",
    ],
  },
  {
    title: "Team Lead BIM, Architecture",
    company: "Intec Infra-Technologies",
    location: "Gurgaon, India",
    period: "Nov 2013 — Jan 2015",
    duration: "1 yr 3 mos",
    bullets: [
      "Led architectural BIM modelling and design coordination for international projects, including the Grand Théâtre de Rabat in Morocco, designed by Zaha Hadid Architects.",
      "Addressed complex geometry and multidisciplinary interfaces across design and construction-stage work, translating ambitious design intent into coordinated BIM models.",
      "Also supported projects including King Abdullah International Gardens, King Fahad Medical City, the National Bank of Kuwait headquarters and Sainsbury's Nine Elms redevelopment.",
    ],
  },
  {
    title: "Junior Architect",
    company: "Office of Sanjay & Sridevi Adhlakha (OSSA Architects)",
    location: "Bangalore, India",
    period: "Nov 2012 — Oct 2013",
    duration: "1 yr",
    bullets: [
      "Worked across architectural design, detailing and BIM modelling for the Omicron Office and Workshop project, including its external architecture and interior fit-outs.",
      "Supported design and construction-stage coordination, worked with the technical modelling team and participated in regular client progress discussions.",
    ],
  },
  {
    title: "Trainee Architect & Junior Architect",
    company: "Studio for Architecture Landscape Interior Enterprise (SALIENT)",
    location: "Kolkata, India",
    period: "Nov 2010 — Oct 2012",
    duration: "2 yrs",
    bullets: [
      "Supported architectural design, detailing and BIM coordination for City Center developments in Siliguri, Patna and Raipur.",
      "Contributed BIM and design-integration support to Benubana Chhaya Park in Kolkata, working across architecture and landscape interfaces.",
      "These early projects established my approach to using 3D models to communicate design decisions and coordinate the work of different disciplines.",
    ],
  },
];

export type SubBuilding = {
  name: string;
  description: string;
  images?: string[];
};

export type Project = {
  slug: string;
  name: string;
  formerName?: string;
  credit: string;
  location: string;
  category: string;
  status?: "ongoing" | "completed";
  summary: string;
  description: string;
  role?: string;
  scale?: string;
  lod?: string;
  team?: string;
  tools?: string;
  featured?: boolean;
  coverImage?: string;
  renderCredit?: string;
  subBuildings?: SubBuilding[];
  sources?: { label: string; href: string }[];
};

export const projectCategories = [
  "All",
  "Rail & Transit",
  "Aviation",
  "Cultural & Landmark",
  "Commercial",
  "Residential",
  "Ports & Marine",
  "Roads & Infrastructure",
  "Energy",
  "Landscape",
  "Healthcare",
  "Hospitality",
  "Heritage",
];

export const projects: Project[] = [
  {
    slug: "sayyid-tarik-bin-taimur-cultural-complex",
    name: "Sayyid Tarik bin Taimur Cultural Complex",
    formerName: "Oman Cultural Complex",
    credit: "Ministry of Culture, Sports & Youth, Oman",
    location: "Muscat, Oman",
    category: "Cultural & Landmark",
    status: "ongoing",
    summary:
      "A 400,000 sqm national cultural landmark — theatre, library, archive and central plaza — under construction opposite Muscat International Airport.",
    description:
      "Currently his flagship assignment: a national cultural landmark commissioned by Oman's Ministry of Culture, Sports & Youth on a 400,000 sqm site at Airport Heights, Muscat, with roughly 80,200 sqm of built-up area. Renamed by royal order from the Oman Cultural Complex to honour Sayyid Tarik bin Taimur — Oman's first Prime Minister during the Renaissance era — the complex is designed around a steel canopy inspired by Omani mashrabiya screens, echoing the surrounding dunes and coastline. As Client BIM Manager deputed to the Ministry, Prithijit manages, implements and delivers BIM models for the site's asset buildings from RIBA Stage 3 (LOD 200, Schematic Design) through RIBA Stage 6 (LOD 500, As-Built), alongside 4D construction sequencing, 5D quantification, 7D asset information management and Digital Twin integration.",
    role: "Client BIM Manager, deputed to the Ministry of Culture, Sports & Youth",
    scale: "400,000 sqm site · ~80,200 sqm built-up area · 6 asset-building groups",
    lod: "RIBA Stage 3 (LOD 200) → RIBA Stage 6 (LOD 500 As-Built)",
    tools: "4D sequencing · 5D quantification · 7D AIM · Digital Twin integration",
    featured: true,
    coverImage: occAerial,
    renderCredit: "Architectural visualization — project design team",
    subBuildings: [
      {
        name: "National Theatre",
        description:
          "A 1,000-seat main auditorium alongside a 250–300 seat experimental theatre, a 250-seat cinema hall and 25+ dressing and rehearsal spaces, built around advanced stage, sound and lighting systems with VR/AR-driven audience enhancements.",
        images: [occAuditorium, occTheatreFoyer, occCinema, occFlexibleTheatre],
      },
      {
        name: "National Library",
        description:
          "A five-storey research and literary hub with reading rooms, a children's library, exhibition space for rare manuscripts, and dedicated IT and lecture halls.",
        images: [occLibrary],
      },
      {
        name: "National Archive",
        description:
          "A four-storey, 15,300 sqm facility holding roughly 20 km of archival shelving, with conservation workshops, public reading rooms and climate-controlled manuscript storage.",
        images: [occArchives],
      },
      {
        name: "Central Plaza & Facility Buildings",
        description:
          "A mashrabiya-canopied civic space with water features and over 2,000 trees, tying the theatre, library and archive together with cafés and space for public exhibitions and festivals.",
        images: [occPlaza01, occPlaza02],
      },
      {
        name: "Energy Building & Data Center",
        description:
          "Powers and secures the complex's operations — backup utilities, a high-security data center, and the connectivity backbone for the site's Digital Twin and smart facility-management systems.",
        images: [],
      },
      {
        name: "Landscape & Infrastructure",
        description:
          "External public space threaded with dry and wet falaj water channels, lawns and tree plantations, plus multiple parking zones — built to host public events such as Muscat Nights.",
        images: [occAerial2],
      },
    ],
    sources: [
      {
        label: "Oman Observer — All you need to know about the complex",
        href: "https://www.omanobserver.om/article/1148508/oman/tourism/all-you-need-to-know-about-oman-cultural-complex",
      },
      {
        label: "Oman Observer — HM names the complex after Sayyid Tarik bin Taimur",
        href: "https://www.omanobserver.om/article/1180000/oman/his-majesty/hm-names-oman-cultural-complex-after-sayyid-tarik-bin-taimur",
      },
      {
        label: "Ministry of Heritage & Tourism — official project page",
        href: "https://www.fm.gov.om/en/992/",
      },
      {
        label: "The Arabian Stories — construction progress, May 2026",
        href: "https://www.thearabianstories.com/2026/05/24/sayyid-tarik-cultural-complex-reaches-49-completion-as-oman-unveils-900-cultural-projects/",
      },
    ],
  },
  {
    slug: "neom-oxagon-port-city",
    name: "NEOM Oxagon Port City",
    credit: "NEOM",
    location: "Saudi Arabia",
    category: "Ports & Marine",
    summary: "31 site buildings across every ASMEPF discipline, delivered at LOD 350.",
    description:
      "Managed BIM delivery of 31 site buildings across all ASMEPF disciplines, running clash detection, resolution and QA/QC review before every submission and resolving technical queries for the modelling teams to keep deliveries on schedule.",
    role: "BIM Manager",
    scale: "31 site buildings, all ASMEPF disciplines",
    lod: "LOD 350",
    featured: true,
  },
  {
    slug: "red-sea-project",
    name: "The Red Sea Project — Shura Island",
    credit: "Red Sea Global · On-Site",
    location: "Saudi Arabia",
    category: "Hospitality",
    summary: "200+ site buildings taken from construction to as-built, on-site.",
    description:
      "Delivered BIM models for 200+ site buildings with interior fit-outs, progressing from LOD 400 construction through LOD 500 as-built. Coordinated clash resolution against other contractors' BIM models directly with client BIM teams and the site execution team.",
    role: "BIM Manager (On-Site)",
    scale: "200+ site buildings with interior fit-outs",
    lod: "LOD 400 → LOD 500 (As-Built)",
    featured: true,
  },
  {
    slug: "riyadh-metro-line-1-2",
    name: "Riyadh Metro — Line 1 & 2",
    credit: "BACS Consortium",
    location: "Riyadh, Saudi Arabia",
    category: "Rail & Transit",
    summary: "Elevated stations and Park & Ride delivery for a 30+ member team.",
    description:
      "BIM Manager overseeing project delivery and resource allocation against the programme timeline for elevated stations, Park & Ride facilities and metro station emergency egress design, supporting staff to resolve technical queries across a 30+ member team.",
    role: "BIM Manager",
    scale: "Elevated stations, Park & Ride, emergency egress",
    team: "30+ members",
    featured: true,
  },
  {
    slug: "riyadh-metro-line-4-6",
    name: "Riyadh Metro — Line 4 & 6",
    credit: "Atkins + Typsa",
    location: "Riyadh, Saudi Arabia",
    category: "Rail & Transit",
    summary: "Elevated and shallow-underground stations with integrated Park & Ride.",
    description: "BIM delivery for elevated and shallow-underground stations with integrated Park & Ride facilities.",
    role: "BIM Delivery",
    scale: "Elevated & shallow-underground stations",
  },
  {
    slug: "delhi-metro-phase-4",
    name: "Delhi Metro Rail Corporation — Phase 4",
    credit: "DMRC",
    location: "Delhi, India",
    category: "Rail & Transit",
    summary: "52.31 km, 40 elevated stations across 3 corridors.",
    description:
      "Managed the production and delivery of BIM models across three corridors — Rithala–Bawana–Narela (21.73 km, 20 stations), Janakpuri–Majlis Park (18.04 km, 10 stations) and Majlis Park–Maujpur (12.54 km, 10 stations) — coordinating delivery between every design discipline for a combined 52.31 km and 40 elevated stations, each with concourse and platform levels.",
    role: "BIM Coordination Manager",
    scale: "52.31 km · 40 elevated stations · 3 corridors",
    featured: true,
  },
  {
    slug: "singapore-metro-line-extension",
    name: "Singapore Metro Line Extension",
    credit: "Land Transport Authority",
    location: "Singapore",
    category: "Rail & Transit",
    summary: "Underground stations, led as Technical Consultant for a 200+ member team.",
    description:
      "Technical Consultant imparting BIM expertise for an extension line with underground and shallow-underground stations and full station facilities, leading a delivery team of 200+ members.",
    role: "Technical Consultant",
    scale: "Underground & shallow-underground stations",
    team: "200+ members",
  },
  {
    slug: "bengaluru-metro-airport-terminal",
    name: "Bengaluru Metro Airport Terminal Station",
    credit: "BMRCL",
    location: "Bengaluru, India",
    category: "Rail & Transit",
    summary: "Shallow-underground terminal station, modelled to LOD 350 (GFC).",
    description: "Worked with the design team to create the BIM model of the airport terminal's shallow-underground station at LOD 350 (GFC).",
    role: "BIM Coordination",
    lod: "LOD 350 (GFC)",
  },
  {
    slug: "dhaka-metro-line-5",
    name: "Dhaka Metro Line 5 — North & South",
    credit: "DMTCL",
    location: "Dhaka, Bangladesh",
    category: "Rail & Transit",
    summary: "Concept-to-detail design with generative-design workflows.",
    description:
      "Designed concept design option presentations in BIM platforms to showcase budget-comparison scenarios to the client, using generative design and AI via Revit Dynamo. Progressed elevated and underground station designs from concept (LOD 100) to detailed design (LOD 300).",
    role: "Design Lead",
    lod: "LOD 100 → LOD 300",
    tools: "Revit Dynamo (generative design)",
  },
  {
    slug: "pune-airport-terminal",
    name: "Pune Airport (PNQ) — New Integrated Terminal",
    credit: "Egis Design Center",
    location: "Pune, India",
    category: "Aviation",
    summary: "New integrated terminal building, taken from construction to as-built.",
    description:
      "Directed the Gurgaon EDC BIM team to deliver LOD 400 construction models and LOD 500 as-built operational models for Pune Airport's new integrated terminal building.",
    role: "BIM Manager, EDC",
    lod: "LOD 400 → LOD 500",
  },
  {
    slug: "lucknow-airport-terminal-3",
    name: "Lucknow Airport (LKO) — Terminal 3",
    credit: "Egis Design Center",
    location: "Lucknow, India",
    category: "Aviation",
    summary: "Structural and MEP BIM for baggage-handling systems within an updated master plan.",
    description:
      "Led comprehensive BIM modelling for structural and MEP disciplines at Lucknow Airport's Terminal 3, resolving clashes to accommodate advanced baggage-handling systems within the updated master-plan footprint.",
    role: "BIM Manager, EDC",
    lod: "LOD 400 / LOD 500",
  },
  {
    slug: "trichy-international-airport",
    name: "Trichy International Airport (TRZ) — Integrated Terminal",
    credit: "Egis Design Center",
    location: "Tiruchirappalli, India",
    category: "Aviation",
    summary: "Terminal geometry taken from fabrication-ready to operational as-built.",
    description:
      "Managed the transition of Trichy International Airport's terminal design geometry into fabrication-ready LOD 400 models and operational LOD 500 digital assets.",
    role: "BIM Manager, EDC",
    lod: "LOD 400 / LOD 500",
  },
  {
    slug: "doha-international-airport",
    name: "Doha International Airport",
    credit: "Buro Happold",
    location: "Doha, Qatar",
    category: "Aviation",
    summary: "New terminal building.",
    description: "BIM delivery support for the airport's new terminal building.",
    role: "BIM Support",
  },
  {
    slug: "national-bank-of-kuwait-hq",
    name: "National Bank of Kuwait HQ",
    credit: "Foster + Partners",
    location: "Kuwait City, Kuwait",
    category: "Commercial",
    summary: "BIM coordination for the NBK headquarters tower.",
    description: "BIM coordination support for the National Bank of Kuwait headquarters tower.",
    role: "BIM Coordination",
  },
  {
    slug: "grand-theatre-de-rabat",
    name: "Grand Théâtre de Rabat",
    credit: "Zaha Hadid Architects",
    location: "Rabat, Morocco",
    category: "Cultural & Landmark",
    summary: "BIM support for the landmark cultural venue.",
    description: "BIM support for the design delivery of this landmark cultural venue.",
    role: "BIM Support",
  },
  {
    slug: "hinkley-point-c",
    name: "Hinkley Point C Nuclear Power Station",
    credit: "EDF Energy",
    location: "Somerset, UK",
    category: "Energy",
    summary: "3,200 MWe twin-EPR nuclear power station.",
    description: "BIM delivery support for a 3,200 MWe nuclear power station built around two EPR reactors.",
    role: "BIM Support",
    scale: "3,200 MWe · twin-EPR reactors",
  },
  {
    slug: "ashton-asoke-ideo-mobi-sukhumvit-66",
    name: "Ashton Asoke & Ideo Mobi Sukhumvit 66",
    credit: "Ananda Development · A49 + DWP + Qbic + EEC",
    location: "Bangkok, Thailand",
    category: "Residential",
    summary: "Two flagship luxury towers, a 326-person team across eight countries.",
    description:
      "Spearheaded enterprise-level BIM implementation for two flagship luxury residential towers, developing and enforcing a unified BEP that drove LOD 200 schematic design through LOD 400 construction-ready geometry. Led 3D spatial coordination and Navisworks clash detection between A49 (architecture), Qbic (structure), EEC (MEPF) and DWP (interior fit-out), and implemented standardised CDE protocols across a decentralised 326-member team spanning Bangkok, India, Singapore, Vietnam, South Korea, Japan, Australia and the US.",
    role: "AEC Technical Consultant",
    scale: "2 towers · 1,081 residential units combined",
    lod: "LOD 200 → LOD 400",
    team: "326 members across 8 countries",
    tools: "Navisworks clash detection · CDE protocols",
    featured: true,
    subBuildings: [
      {
        name: "Ashton Asoke",
        description:
          "A 50-storey, 783-unit ultra-luxury tower at the prime Asoke intersection, with a complex iconic curved-glass facade.",
      },
      {
        name: "Ideo Mobi Sukhumvit 66",
        description:
          "A 28-storey, 298-unit premium high-rise focused on smart living, maximising spatial efficiency and modern amenities.",
      },
    ],
  },
  {
    slug: "dung-quat-refinery",
    name: "Dung Quất Refinery",
    credit: "Petrovietnam",
    location: "Quảng Ngãi, Vietnam",
    category: "Energy",
    summary: "Vietnam's first oil refinery — 6.5 Mt/yr, modelled to LOD 350/400/500.",
    description:
      "Drove enterprise-level BIM implementation for Vietnam's first oil refinery, a heavy industrial and petrochemical facility processing 6.5 million tons per year. Scope covered intelligent 3D modelling for process utility facilities, crude tank farms and interconnecting pipeline networks — establishing LOD 350/400/500 standards for piping, structural steel and mechanical equipment, and running Navisworks clash detection across dense mechanical nodes ahead of fabrication.",
    role: "AEC Technical Consultant",
    scale: "6.5 million tons/year processing capacity",
    lod: "LOD 350 · 400 · 500",
    tools: "Navisworks clash detection",
  },
  {
    slug: "sainsburys-nine-elms-redevelopment",
    name: "Sainsbury's Nine Elms Redevelopment",
    credit: "Broadway Malyan",
    location: "London, United Kingdom",
    category: "Residential",
    summary: "Retail and luxury residential BIM across design and construction.",
    description:
      "Managed end-to-end BIM modelling and coordination across both design and construction stages for an urban regeneration project combining retail and luxury residential space.",
    role: "BIM Coordination",
  },
  {
    slug: "ireo-grand-arch",
    name: "Ireo Grand Arch",
    credit: "Ireo Developers",
    location: "Gurgaon, India",
    category: "Residential",
    summary: "BIM delivery for a large-scale residential complex.",
    description: "BIM delivery for a large-scale residential complex in Gurgaon.",
    role: "BIM Delivery",
  },
  {
    slug: "king-fahad-medical-city",
    name: "King Fahad Medical City",
    credit: "HKS",
    location: "Riyadh, Saudi Arabia",
    category: "Healthcare",
    summary: "BIM coordination for the Central Service Building.",
    description: "BIM coordination for the Central Service Building at King Fahad Medical City.",
    role: "BIM Coordination",
  },
  {
    slug: "king-abdullah-international-gardens",
    name: "King Abdullah International Gardens",
    credit: "Barton Willmore",
    location: "Riyadh, Saudi Arabia",
    category: "Landscape",
    summary: "A series of gardens and landscaping across the Riyadh site.",
    description: "BIM and landscape-coordination support for a series of gardens and landscaping across the Riyadh site.",
    role: "BIM Coordination",
  },
  {
    slug: "scan-to-bim-heritage-forts",
    name: "Heritage Forts & Palaces — Rajasthan Scan-to-BIM",
    credit: "Heritage Conservation",
    location: "Rajasthan, India",
    category: "Heritage",
    summary: "As-built LOD 500 heritage modelling from LiDAR point clouds, across five monuments.",
    description:
      "Led an 18-month digital-preservation programme transforming LiDAR point-cloud data into highly detailed as-built models of five of India's iconic monuments — Amer Fort (Jaipur), City Palace, Albert Hall, Udaipur Fort and Kumbhalgarh Fort — at LOD 500, capturing the non-linear geometries of ancient architecture (ornate carvings, structural deformations, historical masonry) to support conservation, structural analysis and future facility management. Directed a team of 65 modelers and 15 architects, running QA/QC to verify Revit models against the raw point-cloud data.",
    role: "Project Manager",
    lod: "LOD 500 (As-Built)",
    team: "65 modelers + 15 architects",
    tools: "LiDAR scan-to-BIM",
    featured: true,
  },
  {
    slug: "a30-carblake-improvement",
    name: "A30 Temple to Higher Carblake Improvement",
    credit: "KIER",
    location: "Cornwall, UK",
    category: "Roads & Infrastructure",
    summary: "Highway dualing connecting Cornwall to the wider UK network.",
    description: "BIM support for dualing of the carriageway, connecting Cornwall to the wider UK highway network.",
    role: "BIM Support",
  },
  {
    slug: "dassault-reliance-aerospace",
    name: "Dassault Reliance Aerospace — Phase 1.2",
    credit: "Dassault Reliance Aerospace Ltd.",
    location: "Nagpur, India",
    category: "Aviation",
    summary: "2 hangars and 3 ancillary/parking areas at LOD 450.",
    description:
      "BIM modelling of 2 hangar facilities and 3 ancillary/parking areas at LOD 450, built with an intent of downstream facility management.",
    role: "BIM Modeler",
    scale: "2 hangar facilities · 3 ancillary/parking areas",
    lod: "LOD 450",
  },
  {
    slug: "omicron-office-and-workshop",
    name: "Omicron Office and Workshop",
    credit: "OSSA Architects",
    location: "Bengaluru, India",
    category: "Commercial",
    summary: "External architecture and interior fit-outs for an office and workshop development.",
    description:
      "Worked across architectural design, detailing and BIM modelling for the Omicron Office and Workshop project, covering its external architecture and interior fit-outs. Supported design and construction-stage coordination alongside the technical modelling team, with regular client progress discussions.",
    role: "Junior Architect",
  },
  {
    slug: "city-centre-siliguri",
    name: "City Centre, Siliguri",
    credit: "Ambuja Neotia",
    location: "Siliguri, West Bengal, India",
    category: "Commercial",
    summary: "Architectural design, detailing and BIM coordination for a retail development.",
    description:
      "Supported architectural design, detailing and BIM coordination for the City Center retail development in Siliguri, an early project that established an approach to using 3D models to communicate design decisions and coordinate the work of different disciplines.",
    role: "Trainee Architect & Junior Architect",
  },
  {
    slug: "city-centre-patna",
    name: "City Centre, Patna",
    credit: "Ambuja Neotia",
    location: "Patna, Bihar, India",
    category: "Commercial",
    summary: "Architectural design, detailing and BIM coordination for a retail development.",
    description:
      "Supported architectural design, detailing and BIM coordination for the City Center retail development in Patna, an early project that established an approach to using 3D models to communicate design decisions and coordinate the work of different disciplines.",
    role: "Trainee Architect & Junior Architect",
  },
  {
    slug: "city-centre-raipur",
    name: "City Centre, Raipur",
    credit: "Ambuja Neotia",
    location: "Raipur, Chhattisgarh, India",
    category: "Commercial",
    summary: "Architectural design, detailing and BIM coordination for a retail development.",
    description:
      "Supported architectural design, detailing and BIM coordination for the City Center retail development in Raipur, an early project that established an approach to using 3D models to communicate design decisions and coordinate the work of different disciplines.",
    role: "Trainee Architect & Junior Architect",
  },
  {
    slug: "benubana-chhaya-park",
    name: "Benubana Chhaya Park",
    credit: "Kolkata Municipal Development Authority (KMDA)",
    location: "Kolkata, India",
    category: "Landscape",
    summary: "Design-integration support across architecture and landscape interfaces.",
    description:
      "Contributed BIM and design-integration support to Benubana Chhaya Park in Kolkata, working across architecture and landscape interfaces alongside the wider design team.",
    role: "Trainee Architect & Junior Architect",
  },
];

export const skillGroups = [
  {
    title: "BIM Leadership & Strategy",
    skills: [{ name: "BIM Implementation", level: 10 }],
  },
  {
    title: "Authoring & Modelling",
    skills: [
      { name: "Autodesk Forma", level: 10 },
      { name: "Autodesk Revit", level: 9 },
      { name: "Autodesk 3ds Max", level: 5 },
      { name: "Autodesk Civil 3D", level: 5 },
    ],
  },
  {
    title: "Coordination & Reality Capture",
    skills: [
      { name: "Autodesk Navisworks", level: 9 },
      { name: "Autodesk ReCap", level: 7 },
    ],
  },
  {
    title: "Visualization & Delivery Analytics",
    skills: [
      { name: "Enscape", level: 7 },
      { name: "Power BI", level: 6 },
      { name: "Primavera", level: 6 },
    ],
  },
];

export const education = [
  {
    title: "Bachelor of Architecture",
    institution: "Shri Mata Vaishno Devi University",
    location: "Katra, Jammu & Kashmir",
    period: "2007 — 2012",
  },
  {
    title: "Autodesk Certified Revit Professional",
    institution: "Autodesk",
    location: "Certification",
    period: "Jan 2014",
  },
];

export const quote = {
  text: "Architecture is the will of an epoch translated into space.",
  author: "Ludwig Mies van der Rohe",
};
