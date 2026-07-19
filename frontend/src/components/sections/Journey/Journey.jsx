import journeyData from "../../../data/journeyData";

import JourneyHeader from "./JourneyHeader";
import JourneyTimeline from "./JourneyTimeline";

import { MotionFade } from "../../ui/Motion";

import styles from "./Journey.module.css";

const Journey = () => {
  return (
    <section
      id="experience"
      className={styles.journey}
    >
      <div
        className={styles.backgroundGlow}
        aria-hidden="true"
      />

      <div
        className={styles.backgroundGlowSecondary}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <MotionFade
          direction="up"
          distance={30}
          duration={0.7}
        >
          <JourneyHeader />
        </MotionFade>

        <div className={styles.journeyGrid}>
          {journeyData.groups.map(
            (group, index) => (
              <MotionFade
                key={group.id}
                direction="up"
                distance={35}
                delay={index * 0.12}
                duration={0.65}
                className={
                  styles.timelineMotionWrapper
                }
              >
                <JourneyTimeline
                  id={group.id}
                  label={group.label}
                  icon={group.icon}
                  entries={group.entries}
                />
              </MotionFade>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Journey;