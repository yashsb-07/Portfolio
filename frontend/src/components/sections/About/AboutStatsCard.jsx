import styles from "./About.module.css";

const AboutStatsCard = ({
  number,
  suffix,
  label,
}) => {
  return (
    <div className={styles.statCard}>
      <h3>
        {number}
        {suffix}
      </h3>

      <p>{label}</p>
    </div>
  );
};

export default AboutStatsCard;