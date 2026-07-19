import {
  FaAws,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
} from "react-icons/fa";

import {
  SiDjango,
  SiPostgresql,
  SiVite,
} from "react-icons/si";

import {
  LuBrainCircuit,
  LuCloud,
  LuCode,
  LuDatabase,
  LuServer,
  LuSettings,
} from "react-icons/lu";

const skillsData = {
  header: {
    eyebrow: "TECH STACK",

    title: "Tools I Use to Build",

    description:
      "The technologies and tools I use to turn ideas into working applications—from responsive frontend interfaces to backend systems, databases, version control, and my growing cloud engineering knowledge.",
  },

  categories: [
    {
      id: "frontend",

      title: "Frontend Development",

      description:
        "Building responsive, reusable, and user-focused web interfaces.",

      icon: LuCode,

      skills: [
        {
          name: "HTML",
          icon: FaHtml5,
          level: "Comfortable",
        },

        {
          name: "CSS",
          icon: FaCss3Alt,
          level: "Comfortable",
        },

        {
          name: "JavaScript",
          icon: FaJs,
          level: "Comfortable",
        },

        {
          name: "React",
          icon: FaReact,
          level: "Comfortable",
        },

        {
          name: "Vite",
          icon: SiVite,
          level: "Working Knowledge",
        },
      ],
    },

    {
      id: "backend",

      title: "Backend Development",

      description:
        "Developing application logic, APIs, authentication, and scalable backend foundations.",

      icon: LuServer,

      skills: [
        {
          name: "Python",
          icon: FaPython,
          level: "Comfortable",
        },

        {
          name: "Django",
          icon: SiDjango,
          level: "Working Knowledge",
        },

        {
          name: "Django REST Framework",
          icon: SiDjango,
          level: "Working Knowledge",
        },
      ],
    },

    {
      id: "database",

      title: "Database",

      description:
        "Working with relational databases and integrating persistent data into applications.",

      icon: LuDatabase,

      skills: [
        {
          name: "PostgreSQL",
          icon: SiPostgresql,
          level: "Working Knowledge",
        },
      ],
    },

    {
      id: "cloud",

      title: "Cloud Engineering",

      description:
        "Building cloud fundamentals and learning how modern applications are deployed and operated.",

      icon: LuCloud,

      skills: [
        {
          name: "AWS",
          icon: FaAws,
          level: "Learning",
        },
      ],
    },

    {
      id: "tools",

      title: "Developer Tools",

      description:
        "Tools I use for version control, collaboration, and modern development workflows.",

      icon: LuSettings,

      skills: [
        {
          name: "Git",
          icon: FaGitAlt,
          level: "Comfortable",
        },

        {
          name: "GitHub",
          icon: FaGithub,
          level: "Comfortable",
        },

        {
          name: "Vite",
          icon: SiVite,
          level: "Working Knowledge",
        },
      ],
    },

    {
      id: "learning",

      title: "Currently Learning",

      description:
        "Areas I'm actively strengthening as part of my long-term engineering growth.",

      icon: LuBrainCircuit,

      skills: [
        {
          name: "AWS Cloud",
          icon: FaAws,
          level: "Learning",
        },

        {
          name: "Data Structures & Algorithms",
          icon: LuBrainCircuit,
          level: "Learning",
        },
      ],
    },
  ],
};

export default skillsData;