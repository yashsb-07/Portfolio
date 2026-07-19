import CurrentFocusHeader from "./CurrentFocusHeader";
import FocusJourney from "./FocusJourney";
import FocusGrid from "./FocusGrid";
import FocusVision from "./FocusVision";

import { MotionFade } from "../../ui/Motion";

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

      <div
        className={styles.backgroundGlowSecondary}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <MotionFade
          direction="up"
          distance={30}
          duration={0.7}
        >
          <CurrentFocusHeader />
        </MotionFade>

        <FocusJourney />

        <FocusGrid />

        <FocusVision />
      </div>
    </section>
  );
};

export default CurrentFocus;