import styles from "./Skills.module.css";

const SkillItem = ({
  name,
  icon: Icon,
  level,
}) => {
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

        <span className={styles.skillLevel}>
          {level}
        </span>
      </div>
    </li>
  );
};

export default SkillItem;