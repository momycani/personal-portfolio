import summaristLogo from "../assets/summarist-logo.png";
import UndrawBooks from "../assets/Undraw_Books.svg";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  live: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: "CredentialFlow Dashboard",
    description: "CredentialFlow Dashboard is a React and TypeScript healthcare operations project inspired by Medical Staff Office credentialing workflows, featuring mock provider data, search/filter/sort functionality, risk indicators, priority queue logic, smart review notes, and responsive dashboard design..",
    tech: ["React", "TypeScript", "Vite", "Mock Data", " Healthcare Workflow", "Responsive Dashboard"],
    image: "/credentialflow.png",
    live: "https://credentialflow-dashboard.vercel.app/",
    github: "https://github.com/momycani/credentialflow-dashboard",
  },
  {
    title: "EnablementOps Content Dashboard",
    description: "A Seismic-inspired sales enablement operations dashboard that tracks content approvals, seller training readiness, outdated assets, and CRM-style content recommendations. Built to demonstrate content governance, workflow visibility, operational tracking, and reporting for go-to-market teams.",
    tech: ["React", "TypeScript", "Vite", "CSS", "React Icons", "Vercel"],
    image: "/enablementops.png",
    live: "https://enablementops-content-dashboard.vercel.app/",
    github: "https://github.com/momycani/enablementops-content-dashboard",
  },
  {
    title: "Client Onboarding Workflow Dashboard",
    description: "Built a React + TypeScript onboarding operations dashboard that simulates real-world client implementation workflows, including automated project health tracking, milestone and task management, risk escalation workflows, onboarding portfolio views, and dynamic progress calculations with persistent local storage state management.",
    tech: ["React", "TypeScript", "Vite", "React Router", "JavaScript (ES6+)", "HTML5", "CSS3", "Local Storage API", "Git", "GitHub", "Vercel"],
    image: "/clientonboarding.png",
    live: "https://client-onboarding-workflow-dashboar.vercel.app/",
    github: "https://github.com/momycani/client-onboarding-workflow-dashboard",
  },
  {
    title: "DocuFlow Template Manager",
    description: "Built a React + TypeScript workflow dashboard that simulates the lifecycle of insurance document templates, including schema field mapping, QA test plans, Jira-style request triage, rollout tracking, and debugging runbooks.",
    tech: ["React", "TypeScript", "Vite", "React Router", "JavaScript (ES6+)", "HTML5", "CSS3", "JSON (schema-driven data)", "Git", "GitHub", "Vercel"],
    image: "/docuflow_template.png",
    live: "https://docuflow-template-manager.vercel.app/",
    github: "https://github.com/momycani/docuflow-template-manager",
  },
  {
    title: "ProjectOps Dashboard",
    description: "A project management case study application built with React and TypeScript that simulates end-to-end delivery tracking for a website redesign and client portal launch.",
    tech: ["React", "TypeScript", "Recharts", "React Router", "CSS", "Vercel"],
    image: "/projectops.png",
    live: "https://projectops-dashboard.vercel.app/",
    github: "https://github.com/momycani/projectops-dashboard",
  },
  {
    title: "Skinstric Internship",
    description:
      "Built a responsive React + TypeScript application for AI-powered skin analysis, allowing users to upload or capture images and receive real-time results. Integrated REST APIs, implemented dynamic routing with React Router, and enhanced user experience with responsive custom CSS and optimized component structure.",
    tech: ["React", "TypeScript", "REST APIs", "CSS", "React Router", "Vite"],
    image: "/skinstric_cover.jpg",
    live: "https://beth-skinstric-internship.vercel.app/",
    github: "https://github.com/momycani/skinstric-internship",
  },
  {
    title: "Summarist",
    description:
      "Built a responsive React + TypeScript book summary platform with authentication, subscription gating, audio playback, and dynamic book data. Implemented Firebase-based user flows, client-side routing, and reusable components to create a polished reading and listening experience.",
    tech: ["React", "TypeScript", "Firebase", "CSS", "React Router", "React Icons"],
    image: summaristLogo,
    live: "https://beth-summarist-app.vercel.app/",
    github: "https://github.com/momycani/summarist-app",
  },
  {
    title: "Ultraverse Market",
    description:
      "Developed a responsive React application for exploring digital art collections and artist profiles. Implemented dynamic routing between pages, integrated REST APIs for real-time data, and built reusable components to display artwork and metadata in a clean, user-friendly interface.",
    tech: ["React", "JavaScript", "REST APIs", "CSS", "React Router"],
    image: "/nft.png",
    live: "https://beth-ultraverse-market.vercel.app/",
    github: "https://github.com/momycani/ultraverse-market",
  },
  {
    title: "Movie Explorer",
    description:
      "Built a responsive React application for discovering and exploring movies using real-time data from external REST APIs. Implemented search functionality, dynamic content rendering, and reusable components to deliver an engaging and intuitive user experience.",
    tech: ["React", "JavaScript", "REST APIs", "CSS"],
    image: "/3593-v2.jpg",
    live: "https://beth-movie-explorer.vercel.app/",
    github: "https://github.com/momycani/movie-explorer",
  },
  {
    title: "Netflix Clone",
    description:
      "Developed a responsive React application for browsing, searching, and exploring movies using real-time data from external REST APIs. Built reusable components and dynamic rendering patterns to recreate a familiar streaming-style user experience.",
    tech: ["React", "JavaScript", "REST APIs", "CSS"],
    image: "/netflix-logo.png",
    live: "https://beth-netflix-clone.vercel.app/",
    github: "https://github.com/momycani/netflix-clone",
  },
  {
    title: "Library",
    description:
      "Developed a responsive React application for browsing and managing a digital book library. Implemented dynamic data fetching from external REST APIs, reusable component architecture, and client-side routing for seamless navigation, then deployed the application to Vercel for production.",
    tech: ["React", "JavaScript", "REST APIs", "CSS", "React Router"],
    image: UndrawBooks,
    live: "https://beth-library.vercel.app/",
    github: "https://github.com/momycani/library",
  },
];