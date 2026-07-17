import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import AboutStats from "./AboutStats";

import styles from "./About.module.css";

const About = () => {
  return (
    <section
      id="about"
      className={styles.about}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <AboutImage />
        </div>

        <div className={styles.right}>
          <AboutContent />

          <div className={styles.stats}>
            <AboutStats />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;   