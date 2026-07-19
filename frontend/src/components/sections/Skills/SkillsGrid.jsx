import skillsData from "../../../data/skillsData";

import SkillCard from "./SkillCard";

import styles from "./Skills.module.css";

const SkillsGrid = () => {
  return (
    <div className={styles.skillsGrid}>
      {skillsData.categories.map(
        (category) => (
          <SkillCard
            key={category.id}
            title={category.title}
            description={
              category.description
            }
            icon={category.icon}
            skills={category.skills}
          />
        )
      )}
    </div>
  );
};

export default SkillsGrid;