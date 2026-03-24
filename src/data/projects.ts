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
    title: "Skinstric Internship",
    description:
      "Built a responsive React + TypeScript application for AI-powered skin analysis, allowing users to upload or capture images and receive real-time results. Integrated REST APIs, implemented dynamic routing with React Router, and enhanced user experience with responsive custom CSS and optimized component structure.",
    tech: ["React", "TypeScript", "REST APIs", "CSS", "React Router", "Vite"],
    image: "/skinstric_cover.jpg",
    live: "https://skinstric-internship-sandy.vercel.app/",
    github: "https://github.com/momycani/skinstric-internship",
  },
  {
    title: "Summarist",
    description:
      "Built a responsive React + TypeScript book summary platform with authentication, subscription gating, audio playback, and dynamic book data. Implemented Firebase-based user flows, client-side routing, and reusable components to create a polished reading and listening experience.",
    tech: ["React", "TypeScript", "Firebase", "CSS", "React Router", "React Icons"],
    image: summaristLogo,
    live: "https://beth-mod-10-internship.vercel.app/",
    github: "https://github.com/momycani/Beth-Mod-10-internship",
  },
  {
    title: "Ultraverse Market",
    description:
      "Developed a responsive React application for exploring digital art collections and artist profiles. Implemented dynamic routing between pages, integrated REST APIs for real-time data, and built reusable components to display artwork and metadata in a clean, user-friendly interface.",
    tech: ["React", "JavaScript", "REST APIs", "CSS", "React Router"],
    image: "/nft.png",
    live: "https://beth-kenward-internship-pr4z.vercel.app/",
    github: "https://github.com/momycani/Beth-Kenward---Internship",
  },
  {
    title: "Movie Explorer",
    description:
      "Built a responsive React application for discovering and exploring movies using real-time data from external REST APIs. Implemented search functionality, dynamic content rendering, and reusable components to deliver an engaging and intuitive user experience.",
    tech: ["React", "JavaScript", "REST APIs", "CSS"],
    image: "/3593-v2.jpg",
    live: "https://mod-6-final-project.vercel.app/",
    github: "https://github.com/momycani/MOD-6-FINAL-PROJECT",
  },
  {
    title: "Netflix Clone",
    description:
      "Developed a responsive React application for browsing, searching, and exploring movies using real-time data from external REST APIs. Built reusable components and dynamic rendering patterns to recreate a familiar streaming-style user experience.",
    tech: ["React", "JavaScript", "REST APIs", "CSS"],
    image: "/netflix-logo.png",
    live: "https://mod-6-netflix-clone.vercel.app/",
    github: "https://github.com/momycani/MOD-6-NETFLIX-CLONE",
  },
  {
    title: "Library",
    description:
      "Developed a responsive React application for browsing and managing a digital book library. Implemented dynamic data fetching from external REST APIs, reusable component architecture, and client-side routing for seamless navigation, then deployed the application to Vercel for production.",
    tech: ["React", "JavaScript", "REST APIs", "CSS", "React Router"],
    image: UndrawBooks,
    live: "https://library-app-beth-kenwards-projects.vercel.app/",
    github: "https://github.com/momycani/MOD-5-LIBRARY-REACT-TUTORIAL",
  },
];