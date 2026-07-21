import profileImage from "../assets/images/profile-placeholder.png";
import resumeFile from "../assets/documents/resume.pdf";

const heroData = {
  badge: "👋 Welcome to my portfolio",

  title: {
    first: "Building Modern",
    highlight: "Web Experiences",
  },

  subtitle: "Python Full Stack Developer • Cloud Learner",

  description:
    "I'm Yash, an BCA student passionate about building scalable web applications using React, Django and PostgreSQL while continuously improving my skills in AWS Cloud Engineering and Data Structures & Algorithms.",

  profile: {
    name: "Yash Bansode",
    role: "BCA Student",
    status: "Open to Opportunities",
    image: profileImage,
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

  technologies: [
    "React",
    "JavaScript",
    "Python",
    "Django",
    "PostgreSQL",
    "AWS",
  ],

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