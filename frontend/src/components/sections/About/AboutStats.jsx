import aboutData from "../../../data/aboutData";

import AboutStatsCard from "./AboutStatsCard";

import { MotionFade } from "../../ui/Motion";

import styles from "./About.module.css";

const AboutStats = () => {
  return (
    <div
      className={styles.statsSection}
      aria-label="Developer overview"
    >
      <div className={styles.statsHeader}>
        <span className={styles.statsEyebrow}>
          BY THE NUMBERS
        </span>

        <h3 className={styles.statsTitle}>
          Building experience through consistent practice.
        </h3>

        <p className={styles.statsIntro}>
          A snapshot of the projects, technologies,
          and engineering areas shaping my development
          journey.
        </p>
      </div>

      <div className={styles.statsGrid}>
        {aboutData.stats.map(
          (item, index) => (
            <MotionFade
              key={item.id}
              direction="up"
              distance={30}
              delay={index * 0.08}
              duration={0.6}
              className={
                styles.statMotionWrapper
              }
            >
              <AboutStatsCard
                item={item}
              />
            </MotionFade>
          )
        )}
      </div>
    </div>
  );
};

export default AboutStats;