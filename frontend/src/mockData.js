// Mock data for portfolio - will be replaced with backend integration later

export const profileData = {
  name: "Manish Kumar Rajak",
  title: "SAP ABAP/UI5 Consultant",
  location: "Bengaluru, Karnataka, India",
  email: "mani.rajak007@gmail.com",
  phone: "+91-9975143179",
  linkedin: "linkedin.com/in/manish-kumar-9841b154",
  profileImage: "/frontend/public/manish-profile.jpg", // Your professional business photo
  summary: "Lead Analyst with more than 10 years of professional experience in development and implementation of SAP ERP business applications.",
  yearsOfExperience: "10+"
};

export const skillsData = {
  technical: [
    "SAP ABAP",
    "SAPUI5/FIORI", 
    "ODATA Services",
    "CDS Data Modelling",
    "AMDP",
    "ABAP on HANA",
    "RESTful ABAP",
    "SAP Workflow",
    "Object Oriented ABAP",
    "ABAP 7.5"
  ],
  modules: [
    "SAP FICO",
    "SAP SD", 
    "SAP MM",
    "SAP PP",
    "SAP PM",
    "SAP DMS"
  ],
  leadership: [
    "Team Leadership",
    "Project Management", 
    "Technical Mentoring",
    "Offshore-Onsite Coordination",
    "Agile Methodology",
    "Code Reviews"
  ]
};

export const experienceData = [
  {
    id: 1,
    company: "CGI",
    position: "Lead Analyst",
    duration: "Nov 2018 - Present",
    period: "4+ years",
    location: "India",
    description: "Leading technical solutions for multinational Manufacturing clients, managing team of 5 developers for technical design, mentorship and assistance.",
    highlights: [
      "Developed responsive UI5 App for monitoring transactions in SAP FI module",
      "Enhanced Vendor invoice Workflow for FI module handling all vendor payments",
      "Created tracking and error rectification tool for SAP Workflows",
      "Developed new ODATA services and CDS Data Modelling views",
      "Handled subprojects, Rollout and GIT migration projects"
    ],
    technologies: ["ABAP", "SAPUI5/FIORI", "ODATA", "CDS Views", "Workflow", "AMDP"]
  },
  {
    id: 2,
    company: "Wipro",
    position: "Associate Consultant", 
    duration: "Apr 2017 - Sep 2018",
    period: "1.5 years",
    location: "India",
    description: "Worked with Australian Energy company as UI + Backend Developer, focusing on UI5, ODATA and Workflow solutions.",
    highlights: [
      "Developed responsive UI5 App for work order in SAP PM module",
      "Created Workflow for DMS module document approval process",
      "Built complex SAP classical Reports and OOPs ALV in PM and DMS",
      "Implemented Customer exits and enhancement framework",
      "Developed BaDI for DMS module triggering workflow approval"
    ],
    technologies: ["ABAP", "SAPUI5", "ODATA", "SAP PM", "DMS", "Workflow"]
  },
  {
    id: 3,
    company: "Infosys",
    position: "Senior System Engineer",
    duration: "Oct 2012 - Apr 2017", 
    period: "4.5 years",
    location: "India",
    description: "Worked with major Pharmaceutical company to analyze, design and develop software solutions with focus on automation and innovation.",
    highlights: [
      "Developed Security Tool for Automatic Assignment and generation of roles globally",
      "Built complex SAP Reports, ALV Reporting in FI, MM and SD modules",
      "Enhanced RFC Function modules for SAP and Non-SAP system communication",
      "Developed SAP Forms using SMARTFORMS and SAP Script",
      "Performance tuning and debugging of production issues"
    ],
    technologies: ["ABAP", "SAP FI", "SAP MM", "SAP SD", "SMARTFORMS", "RFC"]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "SAP FI Transaction Monitoring App",
    category: "SAPUI5 Development",
    description: "Responsive UI5 application for real-time monitoring of financial transactions with daily outstanding work tracking.",
    technologies: ["SAPUI5", "ODATA", "SAP FI", "Fiori"],
    features: [
      "Real-time transaction monitoring",
      "Daily outstanding work dashboard", 
      "Responsive design for mobile/desktop",
      "Integration with SAP FI module"
    ],
    client: "Multinational Manufacturing Company",
    status: "Completed"
  },
  {
    id: 2,
    title: "Vendor Invoice Workflow Enhancement",
    category: "SAP Workflow",
    description: "Enhanced workflow system for vendor invoice processing and payments with approval mechanisms.",
    technologies: ["SAP Workflow", "ABAP", "SAP FI"],
    features: [
      "Automated approval routing",
      "Vendor payment processing",
      "Error tracking and rectification",
      "Workflow monitoring tools"
    ],
    client: "CGI Manufacturing Client",
    status: "Completed"
  },
  {
    id: 3,
    title: "Work Order Management System",
    category: "SAP PM Module",
    description: "UI5 application for work order management in Plant Maintenance with daily work tracking capabilities.",
    technologies: ["SAPUI5", "SAP PM", "ODATA", "CDS Views"],
    features: [
      "Work order creation and tracking",
      "Daily work scheduling",
      "Mobile-responsive interface",
      "Integration with PM module"
    ],
    client: "Australian Energy Company",
    status: "Completed"
  },
  {
    id: 4,
    title: "Security Role Management Tool",
    category: "ABAP Development",
    description: "Automated tool for SAP role assignment and generation across multiple company codes globally.",
    technologies: ["ABAP", "SAP Security", "Authorization Objects"],
    features: [
      "Automated role generation",
      "Global company code support",
      "Security compliance tracking",
      "User access management"
    ],
    client: "Pharmaceutical Company",
    status: "Completed"
  }
];

export const awardsData = [
  {
    id: 1,
    title: "Key Contributor Award",
    organization: "CGI",
    date: "September 2020",
    description: "Award for CGI members who have shown commitment during a pandemic but have consistently gone over and beyond what has been asked of them"
  }
];

export const educationData = [
  {
    degree: "B.E. Production Engineering",
    institution: "B.I.T. Mesra, Ranchi",
    duration: "2008 - 2012", 
    grade: "6.91 CGPA"
  },
  {
    degree: "12th Standard",
    institution: "JAC, Ranchi",
    duration: "2004 - 2006",
    grade: "65%"
  }
];
