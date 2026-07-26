import { LuSparkles } from "react-icons/lu";

import aboutData from "../../../data/aboutData";

import styles from "./About.module.css";

const AboutJourney = () => {
  const { journey } = aboutData;

  return (
    <div className={styles.journey}>
      <div className={styles.journeyHeader}>
        <span className={styles.journeyEyebrow}>
          {journey.eyebrow}
        </span>

        <h3 className={styles.journeyHeading}>
          {journey.heading}
        </h3>
      </div>

      <div className={styles.journeyStory}>
        {journey.paragraphs.map(
          (paragraph) => (
            <p key={paragraph.id}>
              {paragraph.parts.map(
                (part, index) =>
                  part.highlight ? (
                    <strong
                      className={
                        styles.journeyHighlight
                      }
                      key={index}
                    >
                      {part.text}
                    </strong>
                  ) : (
                    <span key={index}>
                      {part.text}
                    </span>
                  )
              )}
            </p>
          )
        )}
      </div>

      <div className={styles.philosophyCard}>
        <div
          className={styles.philosophyIcon}
          aria-hidden="true"
        >
          <LuSparkles />
        </div>

        <div className={styles.philosophyContent}>
          <span
            className={styles.philosophyLabel}
          >
            {journey.philosophy.label}
          </span>

          <p>
            {journey.philosophy.quote}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutJourney;