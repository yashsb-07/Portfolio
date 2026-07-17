import { FiDownload } from "react-icons/fi";
import Button from "../../ui/Button/Button";
import styles from "./About.module.css";

const AboutCTA = () => {
  return (
    <div className={styles.cta}>
      <Button>
        <FiDownload />

        <span>Download Resume</span>
      </Button>
    </div>
  );
};

export default AboutCTA;