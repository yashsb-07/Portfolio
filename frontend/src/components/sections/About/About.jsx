import AboutHero from "./AboutHero";
import AboutImage from "./AboutImage";
import AboutJourney from "./AboutJourney";
import AboutHighlights from "./AboutHighlights";
import AboutStats from "./AboutStats";
import AboutCTA from "./AboutCTA";

import { MotionFade } from "../../ui/Motion";

import styles from "./About.module.css";

const About = () => {
  return (
    <section
      id="about"
      className={styles.about}
    >
      <div
        className={styles.blurOne}
        aria-hidden="true"
      />

      <div
        className={styles.blurTwo}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <MotionFade
          direction="up"
          distance={30}
          duration={0.7}
        >
          <AboutHero />
        </MotionFade>

        <div className={styles.content}>
          <MotionFade
            direction="right"
            distance={50}
            duration={0.8}
            className={styles.imageMotionWrapper}
          >
            <AboutImage />
          </MotionFade>

          <div className={styles.right}>
            <MotionFade
              direction="left"
              distance={50}
              delay={0.1}
              duration={0.8}
            >
              <AboutJourney />
            </MotionFade>

            <AboutHighlights />
          </div>
        </div>

        <AboutStats />

        <MotionFade
          direction="up"
          distance={20}
          scale
          duration={0.6}
        >
          <AboutCTA />
        </MotionFade>
      </div>
    </section>
  );
};

export default About;