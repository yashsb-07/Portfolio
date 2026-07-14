import styles from "./Hero.module.css";

const HeroBackground = () => {
  return (
    <>
      <div
        className={`${styles.glow} ${styles.glowPrimary}`}
        aria-hidden="true"
      />

      <div
        className={`${styles.glow} ${styles.glowSecondary}`}
        aria-hidden="true"
      />
    </>
  );
};

export default HeroBackground;