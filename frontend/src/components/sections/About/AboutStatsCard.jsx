import AnimatedCounter from "../../ui/AnimatedCounter/AnimatedCounter";
import styles from "./About.module.css";

const AboutStatsCard = ({
  number,
  suffix,
  label,
  description,
}) => {
  return (
    <article className={styles.statCard}>
      <div className={styles.statTop}>
        <AnimatedCounter
          start={0}
          end={number}
          duration={2000}
          suffix={suffix}
        />
      </div>

      <h3 className={styles.statHeading}>
        {label}
      </h3>

      <p className={styles.statDescription}>
        {description}
      </p>
    </article>
  );
};

export default AboutStatsCard;