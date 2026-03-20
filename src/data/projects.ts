import summaristLogo from "../assets/summarist-logo.png";

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
    title: "Summarist",
    description:
      "A book summary platform with authentication, subscriptions, and audio playback.",
    tech: ["React", "TypeScript", "Firebase"],
    image: summaristLogo,
    live: "https://beth-mod-10-internship.vercel.app/",
    github: "https://github.com/momycani/Beth-Mod-10-internship",
  },
  {
    title: "Movie Explorer",
    description:
      "A movie discovery application that allows users to browse, search, and explore films using real-time API data with responsice UI.",
    tech: ["React", "JavaScript", "API", "CSS"],
    image: "/3593-v2.jpg", // from public folder
    live: "https://mod-6-final-project.vercel.app/",
    github: "https://github.com/momycani/MOD-6-FINAL-PROJECT",
  },
];