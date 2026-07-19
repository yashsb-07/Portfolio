import SkillItem from "./SkillItem";

import { MotionFade } from "../../ui/Motion";

import styles from "./Skills.module.css";

const SkillCard = ({
  id,
  title,
  description,
  icon: Icon,
  skills,
}) => {
  const isLearning = id === "learning";

  return (
    <article
      className={`${styles.skillCard} ${
        isLearning
          ? styles.learningCard
          : ""
      }`}
    >
      <div
        className={styles.cardGlow}
        aria-hidden="true"
      />

      <div className={styles.cardHeader}>
        <div
          className={styles.categoryIcon}
          aria-hidden="true"
        >
          <Icon />
        </div>

        <div className={styles.cardHeading}>
          <div className={styles.titleRow}>
            <h3 className={styles.cardTitle}>
              {title}
            </h3>

            {isLearning && (
              <span
                className={
                  styles.learningBadge
                }
              >
                In Progress
              </span>
            )}
          </div>

          <p className={styles.cardDescription}>
            {description}
          </p>
        </div>
      </div>

      <ul
        className={styles.skillList}
        aria-label={`${title} skills`}
      >
        {skills.map((skill, index) => (
          <MotionFade
            key={skill.name}
            direction="left"
            distance={15}
            delay={index * 0.06}
            duration={0.45}
          >
            <SkillItem
              name={skill.name}
              icon={skill.icon}
              level={skill.level}
            />
          </MotionFade>
        ))}
      </ul>
    </article>
  );
};

export default SkillCard;