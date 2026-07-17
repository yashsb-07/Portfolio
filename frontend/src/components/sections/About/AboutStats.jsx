import aboutData from "../../../data/aboutData";
import AboutStatsCard from "./AboutStatsCard";

import styles from "./About.module.css";

const AboutStats = () => {
  return (
    <div className={styles.statsGrid}>
      {aboutData.stats.map((item) => (
        <AboutStatsCard
          key={item.id}
          number={item.number}
          suffix={item.suffix}
          label={item.label}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default AboutStats;