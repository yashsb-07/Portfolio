import styles from "./About.module.css";

const AboutImage = () => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.imageGlow}></div>

      <div className={styles.imageCard}>
        <div className={styles.imagePlaceholder}>
          <span>Your Photo</span>
        </div>

        <div className={styles.profileInfo}>
          <h3>Yash Bansode</h3>

          <p>Full Stack Developer</p>

          <span>Open to Opportunities</span>
        </div>
      </div>
    </div>
  );
};

export default AboutImage;