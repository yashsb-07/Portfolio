import styles from "./CurrentFocus.module.css";

const FocusCard = ({
  icon: Icon,
  technologyIcon: TechnologyIcon,
  category,
  title,
  description,
  status,
}) => {
  return (
    <article className={styles.focusCard}>
      <div
        className={styles.cardGlow}
        aria-hidden="true"
      />

      <div className={styles.cardTop}>
        <div
          className={styles.iconWrapper}
          aria-hidden="true"
        >
          <Icon />
        </div>

        <div className={styles.status}>
          <span
            className={styles.statusDot}
            aria-hidden="true"
          />

          <span>{status}</span>
        </div>
      </div>

      <div className={styles.cardContent}>
        <span className={styles.category}>
          {category}
        </span>

        <h3 className={styles.cardTitle}>
          {title}
        </h3>

        <p className={styles.cardDescription}>
          {description}
        </p>
      </div>

      <div
        className={styles.technologyIcon}
        aria-hidden="true"
      >
        <TechnologyIcon />
      </div>
    </article>
  );
};

export default FocusCard;