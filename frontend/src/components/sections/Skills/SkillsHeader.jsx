import skillsData from "../../../data/skillsData";

import styles from "./Skills.module.css";

const SkillsHeader = () => {
  const { header } = skillsData;

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

export default SkillsHeader;