import SkillItem from "./SkillItem";

import styles from "./Skills.module.css";

const SkillCard = ({
  title,
  description,
  icon: Icon,
  skills,
}) => {
  return (
    <article className={styles.skillCard}>
      <div className={styles.cardHeader}>
        <div
          className={styles.categoryIcon}
          aria-hidden="true"
        >
          <Icon />
        </div>

        <div className={styles.cardHeading}>
          <h3 className={styles.cardTitle}>
            {title}
          </h3>

          <p className={styles.cardDescription}>
            {description}
          </p>
        </div>
      </div>

      <ul
        className={styles.skillList}
        aria-label={`${title} skills`}
      >
        {skills.map((skill) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
          />
        ))}
      </ul>
    </article>
  );
};

export default SkillCard;