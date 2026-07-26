import { FiDownload } from "react-icons/fi";

import styles from "./About.module.css";

const AboutCTA = () => {
  return (
    <div className={styles.cta}>
      <a
        href="/Yash-Bansode-Resume.pdf"
        download="Yash-Bansode-Resume.pdf"
        className={styles.resumeButton}
        aria-label="Download Yash Bansode resume as PDF"
      >
        <FiDownload aria-hidden="true" />

        <span>Download Resume</span>
      </a>
    </div>
  );
};

export default AboutCTA;