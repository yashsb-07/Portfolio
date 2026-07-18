import {
  FaReact,
  FaPython,
  FaAws,
} from "react-icons/fa";

import {
  LuCode,
  LuCloud,
  LuBrainCircuit,
  LuRocket,
} from "react-icons/lu";

const currentFocusData = {
  header: {
    eyebrow: "CURRENT JOURNEY",

    title: "What I'm Building Toward",

    description:
      "I'm continuously strengthening my development skills by building real-world applications, learning modern engineering practices, and expanding into cloud technologies.",
  },

  journey: {
    label: "My Current Direction",

    title:
      "Growing from a Full Stack Developer into a well-rounded software engineer.",

    description:
      "My focus is not just on learning technologies individually. I'm working toward understanding how frontend, backend, databases, cloud infrastructure, and problem-solving come together to build complete production-ready software.",
  },

  focuses: [
    {
      id: "full-stack",
      icon: LuCode,
      technologyIcon: FaReact,
      category: "Development",
      title: "Full Stack Engineering",
      description:
        "Building modern frontend experiences with React while developing scalable backend systems using Python and Django.",
      status: "Building",
    },

    {
      id: "python",
      icon: FaPython,
      technologyIcon: FaPython,
      category: "Backend",
      title: "Python & Django",
      description:
        "Strengthening backend fundamentals, REST API development, authentication, database design, and clean application architecture.",
      status: "Improving",
    },

    {
      id: "cloud",
      icon: LuCloud,
      technologyIcon: FaAws,
      category: "Cloud",
      title: "AWS Cloud Engineering",
      description:
        "Learning cloud fundamentals and AWS services to understand how modern applications are deployed, scaled, and operated.",
      status: "Learning",
    },

    {
      id: "problem-solving",
      icon: LuBrainCircuit,
      technologyIcon: LuRocket,
      category: "Computer Science",
      title: "DSA & Problem Solving",
      description:
        "Building stronger problem-solving skills through data structures, algorithms, and consistent coding practice.",
      status: "Practicing",
    },
  ],

  vision: {
    eyebrow: "THE DIRECTION",

    title:
      "Build. Learn. Improve. Repeat.",

    description:
      "My goal is to become a strong Python Full Stack Developer with practical cloud knowledge—someone who can understand a product from the user interface all the way to deployment.",

    highlights: [
      "Production-ready applications",
      "Clean and scalable architecture",
      "Strong problem-solving fundamentals",
      "Cloud-ready engineering skills",
    ],
  },
};

export default currentFocusData;