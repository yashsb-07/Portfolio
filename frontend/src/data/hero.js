import { FaAws, FaGitAlt, FaPython, FaReact, } from "react-icons/fa";

import { SiDjango, SiJavascript, SiPostgresql, SiTailwindcss, } from "react-icons/si";

import resumeFile from "../assets/documents/resume.pdf";

const heroData = {
  badge: "👋 Welcome to my portfolio",

  title: {
    first: "Building Scalable",
    highlight: "Web Experiences",
  },

  subtitle: "Python Full-Stack Developer",

  description:
  "I build responsive, full-stack web applications with React, Django, and PostgreSQL, with a focus on clean architecture, practical problem-solving, and reliable user experiences. Currently expanding my skills in AWS and DSA.",

  profile: {
    fileName: "yash.tsx",

    variableName: "yash",

    role: "Python Full-Stack Dev",

    stack: [
      "React",
      "Django",
      "PostgreSQL",
    ],

    learning: [
      "AWS",
      "DSA",
    ],

    mindset: "Ship. Learn. Repeat.",

    technologies: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Django",
        icon: SiDjango,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "Python",
        icon: FaPython,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "AWS",
        icon: FaAws,
      },
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },

  cta: {
    primary: {
      text: "View Projects",
      href: "#projects",
    },

    secondary: {
      text: "Download Resume",
      href: resumeFile,
    },
  },

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/yashsb-07",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yashsb07/",
    },
    {
      name: "Email",
      url: "mailto:yashsbansode07@email.com",
    },
  ],

  scrollTarget: "mission",
};

export default heroData;
