import aboutData from "../../../data/aboutData";
import AboutStatsCard from "./AboutStatsCard";

const AboutStats = () => {
  return (
    <>
      {aboutData.stats.map((item) => (
        <AboutStatsCard
          key={item.label}
          number={item.number}
          label={item.label}
        />
      ))}
    </>
  );
};

export default AboutStats;