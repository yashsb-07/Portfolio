import {
  FaReact,
  FaPython,
  FaAws,
} from "react-icons/fa";

import {
  LuGraduationCap,
  LuBriefcase,
  LuCode,
  LuCloud,
} from "react-icons/lu";

const aboutData = {
  hero: {
    tag: "ABOUT ME",

    title:
      "Turning ideas into reliable, real-world software.",

    subtitle:
      "I'm Yash, a Python Full Stack Developer focused on building reliable, user-focused web applications. I enjoy working across the stack with React, Django, REST APIs, and PostgreSQL while continuously strengthening my cloud and problem-solving skills.",
  },

  journey: {
    eyebrow: "MY JOURNEY",

    heading:
      "Learning by building, improving by solving.",

    paragraphs: [
      {
        id: 1,

        parts: [
          {
            text:
              "My development journey has grown through ",
          },

          {
            text: "hands-on projects",
            highlight: true,
          },

          {
            text:
              " and backend development experience, where I've worked with APIs, application logic, testing, and documentation.",
          },
        ],
      },

      {
        id: 2,

        parts: [
          {
            text:
              "Today, I'm focused on writing ",
          },

          {
            text: "cleaner code",
            highlight: true,
          },

          {
            text:
              ", understanding scalable architecture, and building ",
          },

          {
            text: "production-ready applications",
            highlight: true,
          },

          {
            text:
              " that solve meaningful problems.",
          },
        ],
      },
    ],

    philosophy: {
      label: "Developer Philosophy",

      quote:
        "Build with purpose. Learn continuously. Improve with every iteration.",
    },
  },

  highlights: [
    {
      icon: LuBriefcase,
      title: "Developer Focus",
      value: "Python Full Stack",
      description:
        "Building across frontend and backend",
    },

    {
      icon: LuGraduationCap,
      title: "Education",
      value: "BCA",
      description:
        "Strengthening computer science foundations",
    },

    {
      icon: LuCloud,
      title: "Growing Into",
      value: "Cloud Engineering",
      description:
        "Expanding toward scalable cloud systems",
    },

    {
      icon: LuCode,
      title: "Core Stack",
      value: "React + Django",
      description:
        "Creating modern full-stack applications",
    },
  ],

  profile: {
    name: "Yash Bansode",

    role: "Python Full Stack Developer",

    availability: "Open to Opportunities",

    location: "India",

    education: "BCA",

    focus: [
      "Full Stack",
      "Cloud",
      "Problem Solving",
    ],
  },

  technologies: [
    {
      name: "React",
      icon: FaReact,
    },

    {
      name: "Python",
      icon: FaPython,
    },

    {
      name: "AWS",
      icon: FaAws,
    },
  ],

  stats: [
    {
      id: 1,
      number: 10,
      suffix: "+",
      label: "Projects Built",
      description:
        "Hands-on applications across frontend and backend",
    },

    {
      id: 2,
      number: 15,
      suffix: "+",
      label: "Technologies",
      description:
        "Tools explored across full stack and cloud",
    },

    {
      id: 3,
      number: 3,
      suffix: "",
      label: "Core Focus Areas",
      description:
        "Full Stack, Cloud & Problem Solving",
    },

    {
      id: 4,
      number: 1,
      suffix: "",
      label: "Developer Mindset",
      description:
        "Build, learn, improve, and repeat",
    },
  ],
};

export default aboutData;