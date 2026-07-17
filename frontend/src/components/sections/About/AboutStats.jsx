import aboutData from "../../../data/aboutData";

import AboutStatsCard from "./AboutStatsCard";

import styles from "./About.module.css";

const AboutStats = () => {
  return (
    <div className={styles.statsGrid}>
      {aboutData.stats.map((item) => (
        <AboutStatsCard
          key={item.label}
          number={item.number}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default AboutStats;