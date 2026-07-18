import aboutData from "../../../data/aboutData";

import { MotionFade } from "../../ui/Motion";

import styles from "./About.module.css";

const AboutHighlights = () => {
  return (
    <div className={styles.highlights}>
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
              className={styles.highlightMotionWrapper}
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
                  className={
                    styles.highlightContent
                  }
                >
                  <h4>{item.title}</h4>

                  <p>{item.value}</p>
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