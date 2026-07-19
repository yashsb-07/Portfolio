import achievementsData from "../../../data/achievementsData";

import styles from "./Achievements.module.css";

const AchievementsHeader = () => {
  const { header } = achievementsData;

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

export default AchievementsHeader;