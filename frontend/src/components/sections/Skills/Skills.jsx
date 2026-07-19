import SkillsHeader from "./SkillsHeader";
import SkillsGrid from "./SkillsGrid";

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

      <div className={styles.container}>
        <SkillsHeader />

        <SkillsGrid />
      </div>
    </section>
  );
};

export default Skills;