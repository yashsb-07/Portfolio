import styles from "./About.module.css";

const AboutImage = () => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.imageCard}>
        <div className={styles.imagePlaceholder}>
          <span>Your Photo</span>
        </div>
      </div>
    </div>
  );
};

export default AboutImage;