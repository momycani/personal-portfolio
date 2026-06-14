export type ProjectCategory = "dashboards" | "apps" | "clones";

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
  category: "apps",
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