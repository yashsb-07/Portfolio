import {
  LuBriefcaseBusiness,
  LuGraduationCap,
} from "react-icons/lu";

const journeyData = {
  header: {
    eyebrow: "MY JOURNEY",

    title: "Experience & Education",

    description:
      "A look at the professional experiences and academic foundations that continue to shape my journey as a developer and aspiring cloud engineer.",
  },

  groups: [
    {
      id: "experience",

      label: "Experience",

      icon: LuBriefcaseBusiness,

      entries: [
        {
          id: "python-backend-internship",

          period: "Internship",

          title: "Python Backend Developer Intern",

          organization:
            "Add Your Company Name",

          location: "",

          description:
            "Worked on backend development and strengthened my understanding of Python-based application development, APIs, databases, and real-world development workflows.",

          highlights: [
            "Backend Development",
            "Python",
            "API Development",
            "Database Integration",
          ],

          current: false,
        },
      ],
    },

    {
      id: "education",

      label: "Education",

      icon: LuGraduationCap,

      entries: [
        {
          id: "mca",

          period: "Present",

          title:
            "Master of Computer Applications (MCA)",

          organization:
            "Add Your Institution Name",

          location: "",

          description:
            "Currently pursuing postgraduate studies in computer applications while continuing to strengthen my software development, problem-solving, and cloud engineering knowledge.",

          highlights: [
            "Computer Applications",
            "Software Development",
            "Problem Solving",
          ],

          current: true,
        },

        {
          id: "bca",

          period: "Completed",

          title:
            "Bachelor of Computer Applications (BCA)",

          organization:
            "Add Your Institution Name",

          location: "",

          description:
            "Built a foundation in computer applications, programming, software development, and core technical concepts that supported my transition into full-stack development.",

          highlights: [
            "Programming Fundamentals",
            "Web Development",
            "Database Concepts",
          ],

          current: false,
        },
      ],
    },
  ],
};

export default journeyData;