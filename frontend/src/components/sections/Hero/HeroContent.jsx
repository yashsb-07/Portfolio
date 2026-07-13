import { motion } from "framer-motion";

import Button from "../../ui/Button/Button";
import HeroTechStack from "./HeroTechStack";
import HeroSocialLinks from "./HeroSocialLinks";

import styles from "./Hero.module.css";

const HeroContent = ({
  heroData,
  containerVariants,
  itemVariants,
}) => {
  const {
    badge,
    title,
    subtitle,
    description,
    cta,
    technologies,
    socialLinks,
  } = heroData;

  return (
    <motion.div
      className={styles.left}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.span
        className={styles.badge}
        variants={itemVariants}
      >
        {badge}
      </motion.span>

      <motion.h1
        className={styles.title}
        variants={itemVariants}
      >
        {title.first}

        <span className={styles.highlight}>
          {" "}
          {title.highlight}
        </span>
      </motion.h1>

      <motion.h2
        className={styles.subtitle}
        variants={itemVariants}
      >
        {subtitle}
      </motion.h2>

      <motion.p
        className={styles.description}
        variants={itemVariants}
      >
        {description}
      </motion.p>

      <motion.div
        className={styles.buttonGroup}
        variants={itemVariants}
      >
        <Button>{cta.primary.text}</Button>

        <Button variant="secondary">
          {cta.secondary.text}
        </Button>
      </motion.div>

      <HeroSocialLinks
        socialLinks={socialLinks}
        itemVariants={itemVariants}
      />

      <HeroTechStack
        technologies={technologies}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
    </motion.div>
  );
};

export default HeroContent;