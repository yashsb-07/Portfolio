import Button from "../../ui/Button/Button";

import styles from "./About.module.css";

const AboutCTA = () => {
  return (
    <div className={styles.cta}>
      <Button>
        Download Resume
      </Button>
    </div>
  );
};

export default AboutCTA;