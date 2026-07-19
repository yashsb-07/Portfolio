import AchievementsHeader from "./AchievementsHeader";
import AchievementGrid from "./AchievementGrid";

import styles from "./Achievements.module.css";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className={styles.achievements}
    >
      <div
        className={styles.backgroundGlow}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <AchievementsHeader />

        <AchievementGrid />
      </div>
    </section>
  );
};

export default Achievements;