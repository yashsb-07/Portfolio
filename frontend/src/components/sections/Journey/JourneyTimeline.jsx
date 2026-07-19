import JourneyCard from "./JourneyCard";

import { MotionFade } from "../../ui/Motion";

import styles from "./Journey.module.css";

const JourneyTimeline = ({
  id,
  label,
  icon: Icon,
  entries,
}) => {
  return (
    <div
      className={`${styles.timelineGroup} ${
        id === "experience"
          ? styles.experienceGroup
          : styles.educationGroup
      }`}
    >
      <div className={styles.groupHeader}>
        <div
          className={styles.groupIcon}
          aria-hidden="true"
        >
          <Icon />
        </div>

        <div className={styles.groupHeadingContent}>
          <span className={styles.groupEyebrow}>
            My {label}
          </span>

          <h3 className={styles.groupTitle}>
            {label}
          </h3>
        </div>
      </div>

      <div className={styles.timeline}>
        {entries.map((entry, index) => (
          <MotionFade
            key={entry.id}
            direction="up"
            distance={25}
            delay={index * 0.1}
            duration={0.55}
            className={
              styles.cardMotionWrapper
            }
          >
            <JourneyCard
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
          </MotionFade>
        ))}
      </div>
    </div>
  );
};

export default JourneyTimeline;