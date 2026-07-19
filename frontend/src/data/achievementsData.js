import {
  LuAward,
  LuBookOpen,
  LuCloud,
  LuCode,
} from "react-icons/lu";

const achievementsData = {
  header: {
    eyebrow: "GROWTH & LEARNING",

    title: "Achievements & Learning Journey",

    description:
      "A collection of meaningful milestones and the areas I'm actively exploring as I continue growing as a developer and building deeper knowledge in modern software and cloud technologies.",
  },

  items: [
    {
      id: "fullstack-development",

      type: "Learning Milestone",

      status: "completed",

      icon: LuCode,

      title: "Full-Stack Development Foundation",

      issuer: "",

      date: "Completed",

      description:
        "Built a practical foundation across frontend and backend development by working with modern web technologies and applying them through hands-on projects.",

      tags: [
        "React",
        "JavaScript",
        "Python",
        "Django",
        "REST APIs",
        "PostgreSQL",
      ],

      credentialUrl: "",
    },

    {
      id: "backend-development",

      type: "Professional Learning",

      status: "completed",

      icon: LuAward,

      title: "Python Backend Development Experience",

      issuer: "",

      date: "Completed",

      description:
        "Strengthened backend development knowledge through practical experience with Python-based application development, APIs, databases, and development workflows.",

      tags: [
        "Python",
        "Backend Development",
        "APIs",
        "Databases",
      ],

      credentialUrl: "",
    },

    {
      id: "aws-cloud-learning",

      type: "Currently Learning",

      status: "in-progress",

      icon: LuCloud,

      title: "AWS Cloud Engineering Journey",

      issuer: "",

      date: "In Progress",

      description:
        "Actively building cloud engineering fundamentals and developing an understanding of AWS services, infrastructure concepts, deployment, and modern cloud environments.",

      tags: [
        "AWS",
        "Cloud Fundamentals",
        "Infrastructure",
        "Deployment",
      ],

      credentialUrl: "",
    },

    {
      id: "dsa-learning",

      type: "Currently Learning",

      status: "in-progress",

      icon: LuBookOpen,

      title: "Data Structures & Algorithms",

      issuer: "",

      date: "In Progress",

      description:
        "Continuously improving problem-solving skills by studying data structures, algorithms, and structured approaches to technical problem solving.",

      tags: [
        "Python",
        "DSA",
        "Problem Solving",
        "Algorithms",
      ],

      credentialUrl: "",
    },
  ],
};

export default achievementsData;