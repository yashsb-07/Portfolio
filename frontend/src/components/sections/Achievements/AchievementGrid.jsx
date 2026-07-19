import achievementsData from "../../../data/achievementsData";

import AchievementCard from "./AchievementCard";

import styles from "./Achievements.module.css";

const AchievementGrid = () => {
  return (
    <div className={styles.achievementGrid}>
      {achievementsData.items.map(
        (item) => (
          <AchievementCard
            key={item.id}
            type={item.type}
            status={item.status}
            icon={item.icon}
            title={item.title}
            issuer={item.issuer}
            date={item.date}
            description={
              item.description
            }
            tags={item.tags}
            credentialUrl={
              item.credentialUrl
            }
          />
        )
      )}
    </div>
  );
};

export default AchievementGrid;