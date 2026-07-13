import styles from "./Hero.module.css";

const HeroScrollIndicator = ({ targetId }) => {
  const handleScroll = () => {
    const section = document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      type="button"
      className={styles.scrollIndicator}
      onClick={handleScroll}
      aria-label="Scroll to next section"
    >
      <span className={styles.mouse}>
        <span className={styles.wheel}></span>
      </span>

      <span className={styles.scrollText}>
        Scroll Down
      </span>
    </button>
  );
};

export default HeroScrollIndicator;