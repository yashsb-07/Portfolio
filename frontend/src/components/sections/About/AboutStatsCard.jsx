import AnimatedCounter from "../../ui/AnimatedCounter/AnimatedCounter";
import styles from "./About.module.css";

const AboutStatsCard = ({
  number,
  suffix,
  label,
}) => {
  return (
    <div className={styles.statCard}>
      <AnimatedCounter
        start={50}
        end={150}
        duration={3000}
      />

      <p className={styles.statLabel}>
        {label}
      </p>
    </div>
  );
};

export default AboutStatsCard;