import { motion } from "framer-motion";

import styles from "./Hero.module.css";

const HeroTechStack = ({
  technologies,
  containerVariants,
  itemVariants,
}) => {
  return (
    <motion.div
      className={styles.techStack}
      variants={containerVariants}
    >
      {technologies.map((tech) => (
        <motion.span
          key={tech}
          className={styles.techChip}
          variants={itemVariants}
        >
          {tech}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default HeroTechStack;