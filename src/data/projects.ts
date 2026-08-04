export type ProjectCategory = "dashboards" | "apps" | "clones" | "operations" | "websites";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  live: string;
  github: string;
  category: ProjectCategory;
};

export const projects: Project[] = [
  {
  title: "Reno AutoWorks",
  description:
    "A responsive React and TypeScript automotive service website featuring preliminary estimates, appointment scheduling, multi-vehicle service tracking, maintenance reminders, and persistent customer records.",
  tech: [
    "React",
    "TypeScript",
    "Vite",
    "CSS",
    "Lucide React",
    "localStorage",
    "Responsive Design",
    "Accessibility",
  ],
  image: "/reno-autoworks.png",
  live: "https://reno-autoworks.vercel.app/",
  github: "https://github.com/momycani/reno-autoworks",
  category: "websites",
},
  {
  title: "OpsPilot AI",
  description:
    "An AI-powered React and TypeScript project coordination dashboard that analyzes project updates, identifies risks and action items, drafts follow-up communications, supports human review, and generates executive reports.",
  tech: [
    "React",
    "TypeScript",
    "Vite",
    "CSS",
    "OpenAI API",
    "Vercel Functions",
    "Responsive Design",
    "Accessibility",
  ],
  image: "/opspilot-ai.png",
  live: "https://opspilot-ai-sable.vercel.app/",
  github: "https://github.com/momycani/opspilot-ai",
  category: "apps",
},
  {
  title: "Juniper House Inn",
  description:
    "A responsive React and TypeScript website for a fictional Northern Nevada boutique inn, featuring interactive room galleries, seasonal activity filters, amenities, reservation planning, and live stay estimates.",
  tech: ["React", "TypeScript", "Vite", "CSS", "Responsive Design", "Accessibility"],
  image: "/juniper-house-inn.png",
  live: "https://juniper-house-inn.vercel.app/",
  github: "https://github.com/momycani/juniper-house-inn",
  category: "websites",
},
  {
  title: "Sierra Facility Services",
  description:
    "A responsive React and TypeScript website for a commercial facility services company, presenting property maintenance, inspections, vendor coordination, project closeout, and service request information.",
  tech: ["React", "TypeScript", "React Router", "Vite", "CSS", "Responsive Design", "Accessibility"],
  image: "/sierra-facility-services.png",
  live: "https://sierra-facility-services.vercel.app/",
  github: "https://github.com/momycani/sierra-facility-services",
  category: "websites",
},
  {
  title: "CloseoutFlow Project Closeout Dashboard",
  description:
    "A React and TypeScript project closeout dashboard for tracking handoff requirements, document status, vendor follow-up, inspections, approvals, outstanding items, and completion progress.",
  tech: ["React", "TypeScript", "Vite", "CSS", "localStorage", "Responsive Design"],
  image: "/closeout-projects.png",
  live: "https://closeoutflow.vercel.app/",
  github: "https://github.com/momycani/closeoutflow",
  category: "dashboards",
},
{
  title: "StateSync Operations Dashboard",
  description:
    "A React and TypeScript operations dashboard for tracking work items, priorities, department workloads, deadlines, team activity, and completion status through searchable and filterable workflows.",
  tech: ["React", "TypeScript", "Context API", "Vite", "CSS", "localStorage", "Responsive Design"],
  image: "/statesync-dashboard.png",
  live: "https://statesync-operations-dashboard.vercel.app/",
  github: "https://github.com/momycani/statesync-operations-dashboard",
  category: "dashboards",
},
{
  title: "JobSearch To Do",
  description:
    "A TypeScript job-search task manager for organizing weekly goals, applications, networking, follow-ups, deadlines, and completed activities with persistent local storage.",
  tech: ["TypeScript", "Vite", "CSS", "localStorage", "Responsive Design"],
  image: "/jobsearch-todo.png",
  live: "https://job-search-todo.vercel.app/",
  github: "https://github.com/momycani/job-search-todo",
  category: "dashboards",
},
{
  title: "PropFlow Property Operations Dashboard",
  description:
    "A React and TypeScript property operations dashboard for tracking maintenance requests, vendor coordination, inspections, compliance follow-ups, and priorities across multiple property types.",
  tech: ["React", "TypeScript", "Vite", "CSS", "Responsive Design"],
  image: "/propflow-dashboard.png",
  live: "https://propflow-property-operations-dashbo.vercel.app/",
  github: "https://github.com/momycani/propflow-property-operations-dashboard",
  category: "dashboards",
},
{
  title: "SearchOps Executive Search Dashboard",
  description:
    "A React and TypeScript executive search operations dashboard for tracking active searches, candidate pipelines, interview scheduling, document status, client updates, and priority follow-ups.",
  tech: ["React", "TypeScript", "Vite", "CSS", "Responsive Design"],
  image: "/searchops-dashboard.png",
  live: "https://searchops-executive-search-dashboar.vercel.app/",
  github: "https://github.com/momycani/searchops-executive-search-dashboard",
  category: "dashboards",
},
  {
  title: "Legal Operations Case Management Dashboard",
  description:
  "Excel-based operations dashboard using simulated legal service case data to track case volume, open work, SLA risk, escalations, average days open, department volume, and recommended follow-up actions. Built with formulas, XLOOKUP, PivotTables, PivotCharts, conditional formatting, and dashboard summaries to support operations reporting and process improvement.",
  tech: [
  "Excel",
  "PivotTables",
  "PivotCharts",
  "XLOOKUP",
  "COUNTIFS",
  "SUMIFS",
  "AVERAGEIF",
  "Conditional Formatting",
  "Dashboard Reporting",
  "Operations Analysis"
  ],
  image: "/legal-operations-dashboard.png",
  live: "/legal-operations-dashboard.pdf",
  github: "",
  category: "operations",
  },
  {
  title: "AdminFlow Office Operations Dashboard",
  description:
    "A React and TypeScript administrative operations dashboard for tracking work orders, vendor contacts, office equipment, service plans, supply inventory, renewal alerts, and follow-up workflows.",
  tech: ["React", "TypeScript", "Vite", "CSS", "Responsive Design"],
  image: "/adminflow-operations.png",
  live: "https://adminflow-office-operations-dashboa.vercel.app/",
  github: "https://github.com/momycani/adminflow-office-operations-dashboard",
  category: "dashboards",
},
  {
  title: "Gramma’s Garden",
  description:
    "A colorful React and TypeScript garden-themed project featuring playful character visuals, responsive layouts, polished component styling, and a cheerful user interface as part of the Gramma’s Place project series.",
  tech: ["React", "TypeScript", "Vite", "CSS", "Responsive Design"],
  image: "/grammas-garden.png",
  live: "https://grammas-garden.vercel.app/",
  github: "https://github.com/momycani/grammas-garden",
  category: "websites",
},
  {
    title: "CredentialFlow Dashboard",
    description:
      "A React and TypeScript healthcare operations project inspired by Medical Staff Office credentialing workflows with mock provider data, search, filters, risk indicators, and review notes.",
    tech: ["React", "TypeScript", "Vite", "Mock Data", "Healthcare Workflow"],
    image: "/credentialflow.png",
    live: "https://credentialflow-dashboard.vercel.app/",
    github: "https://github.com/momycani/credentialflow-dashboard",
    category: "dashboards",
  },
  {
    title: "EnablementOps Content Dashboard",
    description:
      "A sales enablement operations dashboard tracking content approvals, seller training readiness, outdated assets, and CRM-style recommendations for go-to-market teams.",
    tech: ["React", "TypeScript", "Vite", "CSS", "React Icons"],
    image: "/enablementops.png",
    live: "https://enablementops-content-dashboard.vercel.app/",
    github: "https://github.com/momycani/enablementops-content-dashboard",
    category: "dashboards",
  },
  {
    title: "Client Onboarding Workflow Dashboard",
    description:
      "An onboarding operations dashboard simulating real-world client implementation with health tracking, milestone management, risk escalation, and persistent local-storage state.",
    tech: ["React", "TypeScript", "React Router", "Local Storage", "CSS"],
    image: "/clientonboarding.png",
    live: "https://client-onboarding-workflow-dashboar.vercel.app/",
    github: "https://github.com/momycani/client-onboarding-workflow-dashboard",
    category: "dashboards",
  },
  {
    title: "DocuFlow Template Manager",
    description:
      "A workflow dashboard simulating the lifecycle of insurance document templates with schema mapping, QA test plans, request triage, rollout tracking, and debugging runbooks.",
    tech: ["React", "TypeScript", "React Router", "JSON", "CSS"],
    image: "/docuflow.png",
    live: "https://docuflow-template-manager.vercel.app/",
    github: "https://github.com/momycani/docuflow-template-manager",
    category: "dashboards",
  },
  {
    title: "ProjectOps Dashboard",
    description:
      "A project-management case study app that simulates end-to-end delivery tracking for a website redesign and client portal launch.",
    tech: ["React", "TypeScript", "Recharts", "React Router", "CSS"],
    image: "/projectops.png",
    live: "https://projectops-dashboard.vercel.app/",
    github: "https://github.com/momycani/projectops-dashboard",
    category: "dashboards",
  },
  {
    title: "Skinstric Internship",
    description:
      "A responsive React and TypeScript app for AI-powered skin analysis with image upload/capture flow, dynamic routing, and optimized component structure.",
    tech: ["React", "TypeScript", "REST APIs", "CSS", "React Router"],
    image: "/skinstric-cover.jpg",
    live: "https://beth-skinstric-internship.vercel.app/",
    github: "https://github.com/momycani/skinstric-internship",
    category: "apps",
  },
  {
    title: "Summarist",
    description:
      "A responsive book-summary platform with authentication, subscription gating, audio playback, Firebase user flows, client-side routing, and reusable components.",
    tech: ["React", "TypeScript", "Firebase", "CSS", "React Router"],
    image: "/summarist-home.png",
    live: "https://beth-summarist-app.vercel.app/",
    github: "https://github.com/momycani/summarist-app",
    category: "apps",
  },
  {
    title: "Movie Explorer",
    description:
      "A React app for discovering and exploring movies using real-time data from external REST APIs with search, dynamic content rendering, and reusable components.",
    tech: ["React", "JavaScript", "REST APIs", "CSS"],
    image: "/3593-v2.jpg",
   live: "https://beth-movie-explorer.vercel.app/",
    github: "https://github.com/momycani/movie-explorer",
    category: "apps",
  },
  {
    title: "Netflix Clone",
    description:
      "A responsive React app for browsing, searching, and exploring movies using real-time REST API data with reusable components and dynamic rendering.",
    tech: ["React", "JavaScript", "REST APIs", "CSS"],
    image: "/netflix-logo.png",
    live: "https://beth-netflix-clone.vercel.app/",
    github: "https://github.com/momycani/netflix-clone",
    category: "clones",
  },
];