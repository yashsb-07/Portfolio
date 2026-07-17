import aboutData from "../../../data/aboutData";
import styles from "./About.module.css";

const AboutHighlights = () => {
  return (
    <div className={styles.highlights}>
      {aboutData.highlights.map((item) => (
        <div
          className={styles.highlightCard}
          key={item.title}
        >
          <span>{item.icon}</span>

          <h4>{item.title}</h4>

          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutHighlights;