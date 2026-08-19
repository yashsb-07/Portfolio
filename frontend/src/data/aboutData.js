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
  LuTrendingUp,
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
              "My development journey has grown through.",
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
              "Today, I'm focused on writing",
          },

          {
            text: "cleaner code",
            highlight: true,
          },

          {
            text:
              ", understanding scalable architecture, and building",
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
      value: "BCA Graduate",
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

    education: "BCA Graduate",

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
      id: "projects",
      type: "metric",

      number: 10,
      suffix: "+",

      label: "Projects Built",

      description:
        "Hands-on applications across frontend and backend development.",
    },

    {
      id: "technologies",
      type: "metric",

      number: 15,
      suffix: "+",

      label: "Technologies Explored",

      description:
        "Tools and technologies across frontend, backend, databases, and cloud.",
    },

    {
      id: "focus",
      type: "insight",

      icon: LuCode,

      eyebrow: "Core Focus",

      title: "What I'm building toward",

      items: [
        "Full Stack Development",
        "Cloud Engineering",
        "Problem Solving",
      ],
    },

    {
      id: "mindset",
      type: "insight",

      icon: LuTrendingUp,

      eyebrow: "Engineering Mindset",

      title: "How I approach growth",

      items: [
        "Build with purpose",
        "Learn continuously",
        "Improve every iteration",
      ],
    },
  ],
};

export default aboutData;
