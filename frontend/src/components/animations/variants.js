export const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const slideInRight = {
  hidden: {
    opacity: 0,
    x: 60,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/*
 * Creates reusable fade-and-slide animation variants.
 *
 * Supported directions:
 * - up
 * - down
 * - left
 * - right
 *
 * The optional scale setting adds a subtle
 * scale animation to the entrance effect.
 */
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