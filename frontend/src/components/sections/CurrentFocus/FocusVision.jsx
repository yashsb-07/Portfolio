import { LuArrowUpRight } from "react-icons/lu";

import currentFocusData from "../../../data/currentFocusData";

import styles from "./CurrentFocus.module.css";

const FocusVision = () => {
  const { vision } = currentFocusData;

  return (
    <div className={styles.vision}>
      <div className={styles.visionContent}>
        <span className={styles.visionEyebrow}>
          {vision.eyebrow}
        </span>

        <h3 className={styles.visionTitle}>
          {vision.title}
        </h3>

        <p className={styles.visionDescription}>
          {vision.description}
        </p>
      </div>

      <ul className={styles.visionHighlights}>
        {vision.highlights.map((highlight) => (
          <li key={highlight}>
            <span
              className={styles.visionIcon}
              aria-hidden="true"
            >
              <LuArrowUpRight />
            </span>

            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FocusVision;