import AchievementsHeader from "./AchievementsHeader";
import AchievementGrid from "./AchievementGrid";

import { MotionFade } from "../../ui/Motion";

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

      <div
        className={styles.backgroundGlowSecondary}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <MotionFade
          direction="up"
          distance={30}
          duration={0.7}
        >
          <AchievementsHeader />
        </MotionFade>

        <AchievementGrid />
      </div>
    </section>
  );
};

export default Achievements;