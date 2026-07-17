import aboutData from "../../../data/aboutData";
import styles from "./About.module.css";

const AboutJourney = () => {
  return (
    <div className={styles.journey}>
      <h3>{aboutData.journey.heading}</h3>

      <p>
        {aboutData.journey.description}
      </p>
    </div>
  );
};

export default AboutJourney;