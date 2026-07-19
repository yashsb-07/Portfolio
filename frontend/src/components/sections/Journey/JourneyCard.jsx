import {
  LuCalendarDays,
  LuMapPin,
} from "react-icons/lu";

import styles from "./Journey.module.css";

const JourneyCard = ({
  period,
  title,
  organization,
  location,
  description,
  highlights,
  current,
}) => {
  return (
    <article className={styles.journeyCard}>
      <div
        className={styles.timelineDot}
        aria-hidden="true"
      />

      <div className={styles.cardTop}>
        <div className={styles.period}>
          <LuCalendarDays
            aria-hidden="true"
          />

          <span>{period}</span>
        </div>

        {current && (
          <span className={styles.currentBadge}>
            <span
              className={styles.currentDot}
              aria-hidden="true"
            />

            Current
          </span>
        )}
      </div>

      <h3 className={styles.cardTitle}>
        {title}
      </h3>

      <p className={styles.organization}>
        {organization}
      </p>

      {location && (
        <div className={styles.location}>
          <LuMapPin aria-hidden="true" />

          <span>{location}</span>
        </div>
      )}

      <p className={styles.description}>
        {description}
      </p>

      {highlights?.length > 0 && (
        <ul
          className={styles.highlights}
          aria-label={`${title} key areas`}
        >
          {highlights.map((highlight) => (
            <li key={highlight}>
              {highlight}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default JourneyCard;