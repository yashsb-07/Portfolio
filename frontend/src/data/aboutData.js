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
    heading: "My Journey",

    description:
      "My development journey has grown through hands-on projects and backend development experience, where I've worked with APIs, application logic, testing, and documentation. Today, I'm focused on writing cleaner code, understanding scalable architecture, and building production-ready applications that solve meaningful problems.",
  },

  highlights: [
    {
      icon: LuBriefcase,
      title: "Developer Focus",
      value: "Python Full Stack",
    },

    {
      icon: LuGraduationCap,
      title: "Education",
      value: "Pursuing MCA",
    },

    {
      icon: LuCloud,
      title: "Growing Into",
      value: "Cloud Engineering",
    },

    {
      icon: LuCode,
      title: "Core Stack",
      value: "React + Django",
    },
  ],

  profile: {
    name: "Yash Bansode",

    role: "Python Full Stack Developer",

    availability: "Open to Opportunities",

    location: "India",

    education: "MCA Student",

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