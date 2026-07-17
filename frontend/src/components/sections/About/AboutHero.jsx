import aboutData from "../../../data/aboutData";
import styles from "./About.module.css";

const AboutHero = () => {
  return (
    <div className={styles.hero}>
      <span className={styles.tag}>
        {aboutData.hero.tag}
      </span>

      <h2 className={styles.heading}>
        {aboutData.hero.title}
      </h2>

      <p className={styles.subtitle}>
        {aboutData.hero.subtitle}
      </p>
    </div>
  );
};

export default AboutHero;