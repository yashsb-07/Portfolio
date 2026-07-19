import currentFocusData from "../../../data/currentFocusData";

import FocusCard from "./FocusCard";

import { MotionFade } from "../../ui/Motion";

import styles from "./CurrentFocus.module.css";

const FocusGrid = () => {
  return (
    <div className={styles.focusGrid}>
      {currentFocusData.focuses.map(
        (focus, index) => (
          <MotionFade
            key={focus.id}
            direction="up"
            distance={35}
            delay={index * 0.1}
            duration={0.6}
            className={styles.focusMotionWrapper}
          >
            <FocusCard
              icon={focus.icon}
              technologyIcon={
                focus.technologyIcon
              }
              category={focus.category}
              title={focus.title}
              description={focus.description}
              status={focus.status}
            />
          </MotionFade>
        )
      )}
    </div>
  );
};

export default FocusGrid;