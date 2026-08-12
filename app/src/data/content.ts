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
    "Streamlining BIM processes across design consultancies and on-site construction — from concept to as-built, on four continents.",
  yearsExperience: "15+",
  location: "Muscat, Oman",
  hometown: "Kharagpur, West Bengal, India",
  basedCountries: ["India", "Saudi Arabia", "Thailand", "Singapore", "Oman"],
  email: "info@prithijit.com",
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
  "Prithijit grew up in Kharagpur, West Bengal, and began his career as an architect in Kolkata and Bangalore before moving into BIM leadership in 2013. Since then, he has directed model delivery, clash resolution and digital-twin workflows for metro systems, airports, nuclear power stations and heritage restorations — working from India, Saudi Arabia, Thailand and Singapore to his current base in Muscat.",
  "As a Contractual Technical Consultant with Autodesk Consulting, he implemented BIM-integrated solutions for a real-estate developer in Bangkok and the Singapore Metro Line Extension for the Land Transport Authority — leading teams of 200+ specialists across multiple countries. At his peak, he has directed distributed modelling teams of over 300 people spanning six countries on a single tower.",
  "His approach treats BIM as a coordination discipline first and a software discipline second: standards and LOD targets are agreed before a single wall is modelled, clash reports drive weekly discipline sync-ups rather than end-of-phase surprises, and every model is built with the next lifecycle stage — construction, then facility management — already in mind.",
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
    duration: "1 yr 10 mos",
    current: true,
    bullets: [
      "Deputed client-side to Oman's Ministry of Culture, Sports & Youth as Client BIM Manager for the Sayyid Tarik bin Taimur Cultural Complex.",
      "Streamlining BIM processes across design consultancy workflows and on-site construction delivery.",
    ],
  },
  {
    title: "BIM Manager — All Trades & Disciplines",
    company: "Saudi Icon Company",
    location: "Riyadh, Saudi Arabia",
    period: "Mar 2024 — Dec 2024",
    duration: "10 months",
    bullets: ["Directed BIM delivery across all trades and disciplines on Saudi-based construction projects."],
  },
  {
    title: "BIM Manager, GID/CPA",
    company: "Jacobs Engineering India Consulting",
    location: "Gurgaon, India",
    period: "Dec 2022 — Jan 2024",
    duration: "1 yr 1 mo",
    bullets: ["Managed BIM production for the Global Infrastructure Design / CPA portfolio."],
  },
  {
    title: "BIM Manager, EDC",
    company: "Egis India Consulting Engineers",
    location: "Gurgaon, India",
    period: "Nov 2019 — Dec 2022",
    duration: "3 yrs 2 mos",
    bullets: ["Ran the Egis Design Center's BIM operations across multidisciplinary infrastructure projects."],
  },
  {
    title: "Project Manager, Architecture",
    company: "Intec Infra-Technologies",
    location: "Gurgaon, India",
    period: "Feb 2018 — Nov 2019",
    duration: "1 yr 9 mos",
    bullets: [
      "Consultant BIM Manager for Riyadh Metro, deputed to AECOM Kolkata (6 months).",
      "Project Manager for BIM outsourcing projects across the US, UK, Middle East, Australia and South-East Asia.",
    ],
  },
  {
    title: "Technical Consultant, BIM Implementation",
    company: "Autodesk Consulting · via UniBIM Services",
    location: "Bangkok, Thailand & Singapore",
    period: "Oct 2015 — Dec 2017",
    duration: "2 yrs 3 mos",
    bullets: [
      "BIM implementation for a real estate developer in Bangkok, Thailand (1 yr 3 mos).",
      "BIM implementation for the Singapore Metro Line Extension with the Land Transport Authority (1 yr).",
    ],
  },
  {
    title: "BIM Manager (Contractual)",
    company: "WS Atkins",
    location: "Gurgaon & Bengaluru, India",
    period: "Feb 2015 — Oct 2015",
    duration: "9 months",
    bullets: ["Implemented BIM within Atkins' existing architectural design process."],
  },
  {
    title: "Team Lead BIM, Architecture",
    company: "Intec Infra-Technologies",
    location: "Gurgaon, India",
    period: "Nov 2013 — Jan 2015",
    duration: "1 yr 3 mos",
    bullets: ["Led the BIM/architecture team on outsourced modelling projects."],
  },
  {
    title: "Jr. Architect",
    company: "Office of Sanjay & Sridevi Adhlakha (OSSA Architects)",
    location: "Bangalore, India",
    period: "Nov 2012 — Oct 2013",
    duration: "1 yr",
    bullets: [],
  },
  {
    title: "Jr. Architect",
    company: "Studio for Architecture Landscape Interior Enterprise (SALIENT)",
    location: "Kolkata, India",
    period: "Nov 2010 — Oct 2012",
    duration: "2 yrs",
    bullets: [],
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
  "Residential",
  "Heritage",
  "Energy & Industrial",
  "Landscape & Healthcare",
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
      "A 400,000 sqm national cultural landmark — theatre, library, archive and civic plaza — under construction opposite Muscat International Airport.",
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
    category: "Energy & Industrial",
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
    name: "The Red Sea Project",
    credit: "Red Sea Global · On-Site",
    location: "Saudi Arabia",
    category: "Landscape & Healthcare",
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
    summary: "52.31 km, 37 elevated stations across 3 corridors.",
    description:
      "Managed the production and delivery of BIM models across three corridors — Rithala–Bawana–Narela (21.73 km, 20 stations), Janakpuri–Majlis Park (18.04 km, 10 stations) and Majlis Park–Maujpur (12.54 km, 10 stations) — coordinating delivery between every design discipline for a combined 52.31 km and 37 elevated stations, each with concourse and platform levels.",
    role: "BIM Coordination Manager",
    scale: "52.31 km · 37 elevated stations · 3 corridors",
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
    category: "Cultural & Landmark",
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
    category: "Energy & Industrial",
    summary: "3,200 MWe twin-EPR nuclear power station.",
    description: "BIM delivery support for a 3,200 MWe nuclear power station built around two EPR reactors.",
    role: "BIM Support",
    scale: "3,200 MWe · twin-EPR reactors",
  },
  {
    slug: "high-end-residential-bangkok",
    name: "High-End Residential Tower",
    credit: "A49 + DWP + Qbic + EEC",
    location: "Bangkok, Thailand",
    category: "Residential",
    summary: "40 floors, 650+ units, a 326-person team across six countries.",
    description:
      "Technical Consultant imparting BIM expertise on a 40-floor, 650+ dwelling-unit residential tower, managing a distributed team of 326 members from Bangkok and India spanning Singapore, Vietnam, South Korea, Japan, Australia and the US.",
    role: "Technical Consultant",
    scale: "40 floors · 650+ dwelling units",
    team: "326 members across 6 countries",
    featured: true,
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
    category: "Landscape & Healthcare",
    summary: "BIM coordination for the Central Service Building.",
    description: "BIM coordination for the Central Service Building at King Fahad Medical City.",
    role: "BIM Coordination",
  },
  {
    slug: "king-abdullah-international-gardens",
    name: "King Abdullah International Gardens",
    credit: "Barton Willmore",
    location: "Riyadh, Saudi Arabia",
    category: "Landscape & Healthcare",
    summary: "A series of gardens and landscaping across the Riyadh site.",
    description: "BIM and landscape-coordination support for a series of gardens and landscaping across the Riyadh site.",
    role: "BIM Coordination",
  },
  {
    slug: "scan-to-bim-heritage-forts",
    name: "Scan-to-BIM: Amer Fort & Kumbhalgarh Fort",
    credit: "Heritage Conservation",
    location: "Rajasthan, India",
    category: "Heritage",
    summary: "As-built LOD 500 heritage modelling from LiDAR point clouds.",
    description:
      "Led a team of 65 modelers and 15 architects to model both heritage forts at LOD 500 (as-built), working from laser-scanned point-cloud data captured on site by LiDAR scanners.",
    role: "Team Lead",
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
    category: "Energy & Industrial",
    summary: "Highway dualing connecting Cornwall to the wider UK network.",
    description: "BIM support for dualing of the carriageway, connecting Cornwall to the wider UK highway network.",
    role: "BIM Support",
  },
  {
    slug: "dassault-reliance-aerospace",
    name: "Dassault Reliance Aerospace — Phase 1.2",
    credit: "Dassault Reliance Aerospace Ltd.",
    location: "Nagpur, India",
    category: "Energy & Industrial",
    summary: "2 hangars and 3 ancillary/parking areas at LOD 450.",
    description:
      "BIM modelling of 2 hangar facilities and 3 ancillary/parking areas at LOD 450, built with an intent of downstream facility management.",
    role: "BIM Modeler",
    scale: "2 hangar facilities · 3 ancillary/parking areas",
    lod: "LOD 450",
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
      { name: "Autodesk FormIt", level: 6 },
      { name: "Autodesk 3ds Max", level: 5 },
      { name: "Autodesk Civil 3D", level: 5 },
      { name: "Autodesk Inventor", level: 5 },
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
  author: "Le Corbusier",
};
