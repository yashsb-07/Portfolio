import Container from "../../common/Container/Container";

import heroData from "../../../data/hero";

import HeroContent from "./HeroContent";
import HeroProfileCard from "./HeroProfileCard";

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
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.wrapper}>
          <HeroContent
            heroData={heroData}
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />

          <HeroProfileCard
            profile={heroData.profile}
            profileVariants={profileVariants}
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;