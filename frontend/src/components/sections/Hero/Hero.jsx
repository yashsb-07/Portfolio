import Container from "../../common/Container/Container";

import heroData from "../../../data/hero";

import HeroContent from "./HeroContent";
import HeroProfileCard from "./HeroProfileCard";
import HeroScrollIndicator from "./HeroScrollIndicator";
import HeroBackground from "./HeroBackground";

import styles from "./Hero.module.css";

import {
  staggerContainer,
  fadeUp,
  slideInRight,
} from "../../animations/variants";

const Hero = () => {
  const { scrollTarget } = heroData;

  return (
    <section
      id="home"
      className={styles.hero}
    >
      <HeroBackground />

      <Container>
        <div className={styles.wrapper}>
          <HeroContent
            heroData={heroData}
            containerVariants={staggerContainer}
            itemVariants={fadeUp}
          />

          <HeroProfileCard
            profile={heroData.profile}
            profileVariants={slideInRight}
          />
        </div>

        <HeroScrollIndicator
          targetId={scrollTarget}
        />
      </Container>
    </section>
  );
};

export default Hero;