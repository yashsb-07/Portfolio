import {
  LuGithub,
  LuLinkedin,
  LuMail,
} from "react-icons/lu";

const contactData = {
  eyebrow: "LET'S CONNECT",

  title: "Have an opportunity or idea in mind?",

  description:
    "I'm always open to meaningful conversations, new opportunities, collaborative projects, and connecting with people who are passionate about technology and building impactful digital experiences.",

  availability: {
    available: true,

    label:
      "Open to opportunities and collaborations",
  },

  primaryAction: {
    label: "Send Me an Email",

    href: "mailto:yashsbansode07@gmail.com",

    icon: LuMail,
  },

  links: [
    {
      id: "email",

      label: "Email",

      value: "yashsbansode07@gmail.com",

      href: "mailto:yashsbansode07@gmail.com",

      icon: LuMail,

      external: false,
    },

    {
      id: "linkedin",

      label: "LinkedIn",

      value: "Connect with me",

      href: "https://www.linkedin.com/in/yashsb07/",

      icon: LuLinkedin,

      external: true,
    },

    {
      id: "github",

      label: "GitHub",

      value: "Explore my work",

      href: "https://github.com/yashsb-07",

      icon: LuGithub,

      external: true,
    },
  ],
};

export default contactData;