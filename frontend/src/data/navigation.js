const navigation = [
  {
    id: "home",
    label: "Home",
    href: "#home",
  },
  {
    id: "about",
    label: "About",
    href: "#about",
  },
  {
    id: "mission",
    label: "Mission",
    href: "#mission",
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
  },
  {
    id: "experience",
    label: "Experience",
    href: "#experience",
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
  },
];

export default navigation;

export const createFadeVariant = ({
  direction = "up",
  distance = 40,
  scale = false,
} = {}) => {
  const directionOffsets = {
    up: {
      x: 0,
      y: distance,
    },

    down: {
      x: 0,
      y: -distance,
    },

    left: {
      x: distance,
      y: 0,
    },

    right: {
      x: -distance,
      y: 0,
    },
  };

  const offset =
    directionOffsets[direction] ??
    directionOffsets.up;

  return {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      scale: scale ? 0.96 : 1,
    },

    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
  };
};