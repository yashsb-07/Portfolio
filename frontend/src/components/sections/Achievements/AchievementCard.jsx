import {
  LuArrowUpRight,
  LuCalendarDays,
} from "react-icons/lu";

import styles from "./Achievements.module.css";

const AchievementCard = ({
  type,
  status,
  icon: Icon,
  title,
  issuer,
  date,
  description,
  tags,
  credentialUrl,
}) => {
  const isInProgress =
    status === "in-progress";

  return (
    <article
      className={`${styles.achievementCard} ${
        isInProgress
          ? styles.inProgressCard
          : ""
      }`}
    >
      <div className={styles.cardHeader}>
        <div
          className={styles.iconWrapper}
          aria-hidden="true"
        >
          <Icon />
        </div>

        <div className={styles.cardMeta}>
          <span className={styles.type}>
            {type}
          </span>

          <div className={styles.date}>
            <LuCalendarDays
              aria-hidden="true"
            />

            <span>{date}</span>
          </div>
        </div>
      </div>

      <div className={styles.titleRow}>
        <h3 className={styles.cardTitle}>
          {title}
        </h3>

        {isInProgress && (
          <span
            className={
              styles.progressBadge
            }
          >
            <span
              className={
                styles.progressDot
              }
              aria-hidden="true"
            />

            In Progress
          </span>
        )}
      </div>

      {issuer && (
        <p className={styles.issuer}>
          {issuer}
        </p>
      )}

      <p className={styles.description}>
        {description}
      </p>

      {tags?.length > 0 && (
        <ul
          className={styles.tags}
          aria-label={`${title} related topics`}
        >
          {tags.map((tag) => (
            <li key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      )}

      {credentialUrl && (
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.credentialLink}
        >
          View Credential

          <LuArrowUpRight
            aria-hidden="true"
          />
        </a>
      )}
    </article>
  );
};

export default AchievementCard;