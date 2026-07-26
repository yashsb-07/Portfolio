import aboutData from "../../../data/aboutData";

import { MotionFade } from "../../ui/Motion";

import styles from "./About.module.css";

const AboutHighlights = () => {
  return (
    <div
      className={styles.highlights}
      aria-label="Developer highlights"
    >
      {aboutData.highlights.map(
        (item, index) => {
          const Icon = item.icon;

          return (
            <MotionFade
              key={item.title}
              direction="up"
              distance={25}
              delay={index * 0.1}
              duration={0.55}
              className={
                styles.highlightMotionWrapper
              }
            >
              <article
                className={styles.highlightCard}
              >
                <div
                  className={styles.highlightIcon}
                  aria-hidden="true"
                >
                  <Icon />
                </div>

                <div
                  className={styles.highlightContent}
                >
                  <span
                    className={
                      styles.highlightLabel
                    }
                  >
                    {item.title}
                  </span>

                  <h4>{item.value}</h4>

                  <p>
                    {item.description}
                  </p>
                </div>
              </article>
            </MotionFade>
          );
        }
      )}
    </div>
  );
};

export default AboutHighlights;