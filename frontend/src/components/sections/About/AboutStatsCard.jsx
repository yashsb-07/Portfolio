import AnimatedCounter from "../../ui/AnimatedCounter/AnimatedCounter";
import styles from "./About.module.css";

const AboutStatsCard = ({
  number,
  suffix,
  label,
}) => {
  return (
    <div className={styles.statCard}>
      <h3 className={styles.statNumber}>
        <AnimatedCounter
          start={0}
          end={number}
          duration={2000}
          suffix={suffix}
        />
      </h3>

      <p className={styles.statLabel}>
        {label}
      </p>
    </div>
  );
};

export default AboutStatsCard;