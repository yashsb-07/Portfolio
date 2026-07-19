import journeyData from "../../../data/journeyData";

import styles from "./Journey.module.css";

const JourneyHeader = () => {
  const { header } = journeyData;

  return (
    <header className={styles.header}>
      <span className={styles.eyebrow}>
        {header.eyebrow}
      </span>

      <h2 className={styles.heading}>
        {header.title}
      </h2>

      <p className={styles.headerDescription}>
        {header.description}
      </p>
    </header>
  );
};

export default JourneyHeader;