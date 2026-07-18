import aboutData from "../../../data/aboutData";

import AboutStatsCard from "./AboutStatsCard";

import { MotionFade } from "../../ui/Motion";

import styles from "./About.module.css";

const AboutStats = () => {
  return (
    <div className={styles.statsGrid}>
      {aboutData.stats.map(
        (item, index) => (
          <MotionFade
            key={item.id}
            direction="up"
            distance={30}
            delay={index * 0.1}
            duration={0.6}
            className={styles.statMotionWrapper}
          >
            <AboutStatsCard
              number={item.number}
              suffix={item.suffix}
              label={item.label}
              description={
                item.description
              }
            />
          </MotionFade>
        )
      )}
    </div>
  );
};

export default AboutStats;