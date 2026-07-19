import skillsData from "../../../data/skillsData";

import SkillCard from "./SkillCard";

import { MotionFade } from "../../ui/Motion";

import styles from "./Skills.module.css";

const SkillsGrid = () => {
  return (
    <div className={styles.skillsGrid}>
      {skillsData.categories.map(
        (category, index) => (
          <MotionFade
            key={category.id}
            direction="up"
            distance={35}
            delay={index * 0.08}
            duration={0.6}
            className={styles.skillMotionWrapper}
          >
            <SkillCard
              id={category.id}
              title={category.title}
              description={
                category.description
              }
              icon={category.icon}
              skills={category.skills}
            />
          </MotionFade>
        )
      )}
    </div>
  );
};

export default SkillsGrid;