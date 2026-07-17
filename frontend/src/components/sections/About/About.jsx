import AboutHero from "./AboutHero";
import AboutImage from "./AboutImage";
import AboutJourney from "./AboutJourney";
import AboutHighlights from "./AboutHighlights";
import AboutStats from "./AboutStats";
import AboutCTA from "./AboutCTA";

import styles from "./About.module.css";

const About = () => {
  return (
    <section
      id="about"
      className={styles.about}
    >
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>

      <div className={styles.container}>
        <AboutHero />

        <div className={styles.content}>
          <AboutImage />

          <div className={styles.right}>
            <AboutJourney />

            <AboutHighlights />
          </div>
        </div>

        <AboutStats />

        <AboutCTA />
      </div>
    </section>
  );
};

export default About;