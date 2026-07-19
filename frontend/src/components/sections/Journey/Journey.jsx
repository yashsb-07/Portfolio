import journeyData from "../../../data/journeyData";

import JourneyHeader from "./JourneyHeader";
import JourneyTimeline from "./JourneyTimeline";

import styles from "./Journey.module.css";

const Journey = () => {
  return (
    <section
      id="journey"
      className={styles.journey}
    >
      <div
        className={styles.backgroundGlow}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <JourneyHeader />

        <div className={styles.journeyGrid}>
          {journeyData.groups.map(
            (group) => (
              <JourneyTimeline
                key={group.id}
                label={group.label}
                icon={group.icon}
                entries={group.entries}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Journey;