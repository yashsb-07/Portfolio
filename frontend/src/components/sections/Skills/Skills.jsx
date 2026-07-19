import SkillsHeader from "./SkillsHeader";
import SkillsGrid from "./SkillsGrid";

import { MotionFade } from "../../ui/Motion";

import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section
      id="skills"
      className={styles.skills}
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
          <SkillsHeader />
        </MotionFade>

        <SkillsGrid />
      </div>
    </section>
  );
};

export default Skills;