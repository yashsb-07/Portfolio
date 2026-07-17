import Button from "../../ui/Button/Button";
import aboutData from "../../../data/aboutData";

import styles from "./About.module.css";

const AboutContent = () => {
  return (
    <div className={styles.content}>
      <span className={styles.sectionTag}>
        WHO I AM
      </span>

      <h2 className={styles.heading}>
        {aboutData.heading}
      </h2>

      <h3 className={styles.subHeading}>
        {aboutData.subHeading}
      </h3>

      <p className={styles.description}>
        {aboutData.description}
      </p>

      <Button>
        {aboutData.buttonText}
      </Button>
    </div>
  );
};

export default AboutContent;