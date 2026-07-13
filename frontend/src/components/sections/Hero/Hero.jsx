import { motion } from "framer-motion";

import Container from "../../common/Container/Container";
import Button from "../../ui/Button/Button";
import heroData from "../../../data/hero";

import styles from "./Hero.module.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
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

const profileVariants = {
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

const Hero = () => {
  const {
    badge,
    title,
    subtitle,
    description,
    profile,
    technologies,
    cta,
  } = heroData;

  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.wrapper}>
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
              <Button>
                {cta.primary.text}
              </Button>

              <Button variant="secondary">
                {cta.secondary.text}
              </Button>
            </motion.div>

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
          </motion.div>

          <motion.div
            className={styles.right}
            variants={profileVariants}
            initial="hidden"
            animate="visible"
          >
            <div className={styles.profileCard}>
              <div className={styles.avatar}>
                Your Photo
              </div>

              <h3>{profile.name}</h3>

              <p>{profile.role}</p>

              <div className={styles.status}>
                <span className={styles.dot}></span>

                {profile.status}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;