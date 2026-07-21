import {
  LuActivity,
  LuBuilding2,
  LuLayoutDashboard,
  LuShoppingBag,
  LuSparkles,
  LuStethoscope,
} from "react-icons/lu";

const projectsData = {
  header: {
    eyebrow: "SELECTED WORK",

    title: "Projects I've Built",

    description:
      "A collection of projects where I apply what I learn, solve practical problems, and continuously improve my skills across frontend, backend, databases, and software architecture.",
  },

  projects: [
    {
      id: "smart-attendance-system",

      title: "Smart Attendance System",

      category: "Full Stack Application",

      description:
        "A full-stack attendance management system designed to simplify attendance workflows with role-based access, secure authentication, and a scalable application architecture.",

      technologies: [
        "React",
        "Django REST Framework",
        "PostgreSQL",
        "JWT",
        "OpenCV",
      ],

      icon: LuActivity,

      featured: true,

      flagship: true,

      status: "In Development",

      githubUrl: "",

      liveUrl: "",
    },

    {
      id: "shopease",

      title: "ShopEase",

      category: "Frontend Application",

      description:
        "A modern e-commerce frontend focused on reusable React components, responsive layouts, product experiences, and clean user interface architecture.",

      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "Vite",
      ],

      icon: LuShoppingBag,

      featured: true,

      flagship: false,

      status: "In Development",

      githubUrl: "",

      liveUrl: "",
    },

    {
      id: "amazon-clone",

      title: "Amazon Clone UI",

      category: "Frontend Project",

      description:
        "A responsive e-commerce interface inspired by Amazon, built to strengthen frontend development skills and recreate complex real-world layouts.",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],

      icon: LuLayoutDashboard,

      featured: false,

      flagship: false,

      status: "Completed",

      githubUrl: "https://github.com/yashsb-07/amazon_clone",

      liveUrl: "",
    },

    {
      id: "embroidery-factory",

      title: "Embroidery Factory Website",

      category: "Frontend Project",

      description:
        "A responsive business website concept designed to present embroidery services, company information, and a professional digital presence.",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],

      icon: LuSparkles,

      featured: false,

      flagship: false,

      status: "Completed",

      githubUrl: "https://github.com/yashsb-07/embroidery-factory-website",

      liveUrl: "https://embroidery-factory-website.vercel.app/",
    },

    {
      id: "dental-clinic",

      title: "Dental Clinic Website",

      category: "Client Demo",

      description:
        "A professional clinic website concept focused on presenting dental services through a clean, accessible, and responsive user experience.",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],

      icon: LuStethoscope,

      featured: false,

      flagship: false,

      status: "Completed",

      githubUrl: "",

      liveUrl: "",
    },

    {
      id: "saas-landing-page",

      title: "SaaS Landing Page",

      category: "Frontend Project",

      description:
        "A modern SaaS landing page created to practice visual hierarchy, reusable sections, responsive design, and conversion-focused interfaces.",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],

      icon: LuBuilding2,

      featured: false,

      flagship: false,

      status: "Completed",

      githubUrl: "https://github.com/yashsb-07/taskflow-landing",

      liveUrl: "https://taskflow-landing-alpha.vercel.app/",
    },
  ],
};

export default projectsData;