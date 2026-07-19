import { LuArrowUpRight } from "react-icons/lu";

import currentFocusData from "../../../data/currentFocusData";

import { MotionFade } from "../../ui/Motion";

import styles from "./CurrentFocus.module.css";

const FocusVision = () => {
  const { vision } = currentFocusData;

  return (
    <MotionFade
      direction="up"
      distance={40}
      duration={0.75}
    >
      <div className={styles.vision}>
        <div
          className={styles.visionGlow}
          aria-hidden="true"
        />

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
          {vision.highlights.map(
            (highlight, index) => (
              <MotionFade
                key={highlight}
                direction="left"
                distance={20}
                delay={index * 0.08}
                duration={0.5}
              >
                <li>
                  <span
                    className={styles.visionIcon}
                    aria-hidden="true"
                  >
                    <LuArrowUpRight />
                  </span>

                  <span>{highlight}</span>
                </li>
              </MotionFade>
            )
          )}
        </ul>
      </div>
    </MotionFade>
  );
};

export default FocusVision;