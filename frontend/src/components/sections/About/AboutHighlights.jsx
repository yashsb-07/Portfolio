import aboutData from "../../../data/aboutData";
import styles from "./About.module.css";

const AboutHighlights = () => {
  return (
    <div className={styles.highlights}>
      {aboutData.highlights.map((item) => {
        const Icon = item.icon;

        return (
          <div
            className={styles.highlightCard}
            key={item.title}
          >
            <div className={styles.highlightIcon}>
              <Icon />
            </div>

            <div className={styles.highlightContent}>
              <h4>{item.title}</h4>
              <p>{item.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutHighlights;