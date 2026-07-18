import currentFocusData from "../../../data/currentFocusData";

import styles from "./CurrentFocus.module.css";

const FocusJourney = () => {
  const { journey } = currentFocusData;

  return (
    <div className={styles.journey}>
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
  );
};

export default FocusJourney;