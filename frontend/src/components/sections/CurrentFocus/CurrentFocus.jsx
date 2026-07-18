import CurrentFocusHeader from "./CurrentFocusHeader";
import FocusJourney from "./FocusJourney";
import FocusGrid from "./FocusGrid";
import FocusVision from "./FocusVision";

import styles from "./CurrentFocus.module.css";

const CurrentFocus = () => {
  return (
    <section
      id="mission"
      className={styles.currentFocus}
    >
      <div
        className={styles.backgroundGlow}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <CurrentFocusHeader />

        <FocusJourney />

        <FocusGrid />

        <FocusVision />
      </div>
    </section>
  );
};

export default CurrentFocus;