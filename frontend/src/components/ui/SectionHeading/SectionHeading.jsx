import styles from "./SectionHeading.module.css";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className={styles.heading}>
      <p className={styles.subtitle}>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeading;