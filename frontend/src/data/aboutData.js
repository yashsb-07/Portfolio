import {
  FaReact,
  FaPython,
  FaAws,
} from "react-icons/fa";

import {
  LuGraduationCap,
  LuBriefcase,
} from "react-icons/lu";

const aboutData = {
  hero: {
    tag: "ABOUT ME",

    title: "Building software that solves real-world problems.",

    subtitle:
      "I'm Yash, a Full Stack Developer passionate about building scalable web applications, learning modern technologies, and creating software that delivers real value.",
  },

  journey: {
    heading: "My Journey",

    description:
      "My journey into software development started with curiosity and has grown into a passion for solving real-world problems through technology. Every project I build strengthens my understanding of clean architecture, modern development practices, and cloud technologies.",
  },

  highlights: [
    {
      icon: LuBriefcase,
      title: "Current Role",
      value: "Full Stack Developer",
    },

    {
      icon: LuGraduationCap,
      title: "Education",
      value: "MCA Student",
    },

    {
      icon: FaAws,
      title: "Learning",
      value: "AWS Cloud",
    },

    {
      icon: FaReact,
      title: "Frontend",
      value: "React Ecosystem",
    },
  ],

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
      number: 10,
      suffix: "+",
      label: "Projects",
    },

    {
      number: 15,
      suffix: "+",
      label: "Technologies",
    },

    {
      number: 100,
      suffix: "%",
      label: "Learning Mindset",
    },

    {
      number: 1,
      suffix: "",
      label: "Mission",
    },
  ],
};

export default aboutData;