import JourneyCard from "./JourneyCard";

import styles from "./Journey.module.css";

const JourneyTimeline = ({
  label,
  icon: Icon,
  entries,
}) => {
  return (
    <div className={styles.timelineGroup}>
      <div className={styles.groupHeader}>
        <div
          className={styles.groupIcon}
          aria-hidden="true"
        >
          <Icon />
        </div>

        <h3 className={styles.groupTitle}>
          {label}
        </h3>
      </div>

      <div className={styles.timeline}>
        {entries.map((entry) => (
          <JourneyCard
            key={entry.id}
            period={entry.period}
            title={entry.title}
            organization={
              entry.organization
            }
            location={entry.location}
            description={
              entry.description
            }
            highlights={
              entry.highlights
            }
            current={entry.current}
          />
        ))}
      </div>
    </div>
  );
};

export default JourneyTimeline;