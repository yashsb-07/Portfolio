import aboutData from "../../../data/aboutData";
import AboutStatsCard from "./AboutStatsCard";

import styles from "./About.module.css";

const AboutStats = () => {
  return (
    <div className={styles.stats}>
      {aboutData.stats.map((item) => (
        <AboutStatsCard
          key={item.label}
          number={item.number}
          suffix={item.suffix}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default AboutStats;