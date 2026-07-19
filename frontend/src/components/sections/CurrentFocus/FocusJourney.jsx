import { LuRoute } from "react-icons/lu";

import currentFocusData from "../../../data/currentFocusData";

import { MotionFade } from "../../ui/Motion";

import styles from "./CurrentFocus.module.css";

const FocusJourney = () => {
  const { journey } = currentFocusData;

  return (
    <MotionFade
      direction="up"
      distance={35}
      delay={0.1}
      duration={0.7}
    >
      <div className={styles.journey}>
        <div
          className={styles.journeyIcon}
          aria-hidden="true"
        >
          <LuRoute />
        </div>

        <div className={styles.journeyContent}>
          <span className={styles.journeyLabel}>
            {journey.label}
          </span>

          <h3 className={styles.journeyTitle}>
            {journey.title}
          </h3>

          <p className={styles.journeyDescription}>
            {journey.description}
          </p>
        </div>

        <div
          className={styles.journeyAccent}
          aria-hidden="true"
        />
      </div>
    </MotionFade>
  );
};

export default FocusJourney;