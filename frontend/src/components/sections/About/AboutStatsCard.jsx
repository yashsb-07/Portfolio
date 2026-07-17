import styles from "./About.module.css";

const AboutStatsCard = ({
  number,
  label,
}) => {
  return (
    <div className={styles.statCard}>
      <h3>{number}</h3>

      <p>{label}</p>
    </div>
  );
};

export default AboutStatsCard;