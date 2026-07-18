import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { createFadeVariant } from "../../animations/variants";

const MotionFade = ({
  children,
  direction = "up",
  distance = 40,
  delay = 0,
  duration = 0.6,
  scale = false,
  once = true,
  amount = 0.25,
  className = "",
}) => {
  const shouldReduceMotion =
    useReducedMotion();

  const variants = createFadeVariant({
    direction,
    distance,
    scale,
  });

  const reducedMotionVariants = {
    hidden: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },

    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      className={className}
      variants={
        shouldReduceMotion
          ? reducedMotionVariants
          : variants
      }
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration: shouldReduceMotion
          ? 0
          : duration,
        delay: shouldReduceMotion
          ? 0
          : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionFade;