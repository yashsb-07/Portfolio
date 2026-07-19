import styles from "./Skills.module.css";

const SkillItem = ({
  name,
  icon: Icon,
  level,
}) => {
  const levelClass =
    level === "Learning"
      ? styles.levelLearning
      : level === "Working Knowledge"
        ? styles.levelWorking
        : styles.levelComfortable;

  return (
    <li className={styles.skillItem}>
      <div
        className={styles.skillIcon}
        aria-hidden="true"
      >
        <Icon />
      </div>

      <div className={styles.skillContent}>
        <span className={styles.skillName}>
          {name}
        </span>

        <span
          className={`${styles.skillLevel} ${levelClass}`}
        >
          <span
            className={styles.levelDot}
            aria-hidden="true"
          />

          <span>{level}</span>
        </span>
      </div>
    </li>
  );
};

export default SkillItem;