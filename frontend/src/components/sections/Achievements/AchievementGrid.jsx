import achievementsData from "../../../data/achievementsData";

import AchievementCard from "./AchievementCard";

import { MotionFade } from "../../ui/Motion";

import styles from "./Achievements.module.css";

const AchievementGrid = () => {
  return (
    <div className={styles.achievementGrid}>
      {achievementsData.items.map(
        (item, index) => (
          <MotionFade
            key={item.id}
            direction="up"
            distance={35}
            delay={index * 0.08}
            duration={0.6}
            className={
              styles.cardMotionWrapper
            }
          >
            <AchievementCard
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
          </MotionFade>
        )
      )}
    </div>
  );
};

export default AchievementGrid;