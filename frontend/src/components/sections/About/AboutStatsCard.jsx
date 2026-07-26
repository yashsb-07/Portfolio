import AnimatedCounter from "../../ui/AnimatedCounter/AnimatedCounter";

import styles from "./About.module.css";

const AboutStatsCard = ({ item }) => {
  if (item.type === "insight") {
    const Icon = item.icon;

    return (
      <article
        className={`${styles.statCard} ${styles.insightCard}`}
      >
        <div className={styles.insightHeader}>
          <div
            className={styles.insightIcon}
            aria-hidden="true"
          >
            <Icon />
          </div>

          <span className={styles.insightEyebrow}>
            {item.eyebrow}
          </span>
        </div>

        <h3 className={styles.insightTitle}>
          {item.title}
        </h3>

        <ul className={styles.insightList}>
          {item.items.map((text) => (
            <li key={text}>
              <span
                className={styles.insightDot}
                aria-hidden="true"
              />

              <span>{text}</span>
            </li>
          ))}
        </ul>
      </article>
    );
  }

  return (
    <article
      className={`${styles.statCard} ${styles.metricCard}`}
    >
      <div className={styles.metricTop}>
        <AnimatedCounter
          start={0}
          end={item.number}
          duration={2000}
          suffix={item.suffix}
        />
      </div>

      <h3 className={styles.statHeading}>
        {item.label}
      </h3>

      <p className={styles.statDescription}>
        {item.description}
      </p>

      <div
        className={styles.metricAccent}
        aria-hidden="true"
      />
    </article>
  );
};

export default AboutStatsCard;