import { motion } from "framer-motion";

import Button from "../../ui/Button/Button";
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
    socialLinks,
  } = heroData;

  const handleProjectsClick = () => {
    const section =
      document.getElementById("projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleResumeClick = () => {
    window.open(
      cta.secondary.href,
      "_blank",
      "noopener,noreferrer",
    );
  };

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
        <Button onClick={handleProjectsClick}>
          {cta.primary.text}
        </Button>

        <Button
          variant="secondary"
          onClick={handleResumeClick}
        >
          {cta.secondary.text}
        </Button>
      </motion.div>

      <HeroSocialLinks
        socialLinks={socialLinks}
        itemVariants={itemVariants}
      />
    </motion.div>
  );
};

export default HeroContent;