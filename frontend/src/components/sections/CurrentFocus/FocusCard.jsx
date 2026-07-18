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
      <div className={styles.cardTop}>
        <div
          className={styles.iconWrapper}
          aria-hidden="true"
        >
          <Icon />
        </div>

        <span className={styles.status}>
          {status}
        </span>
      </div>

      <span className={styles.category}>
        {category}
      </span>

      <h3 className={styles.cardTitle}>
        {title}
      </h3>

      <p className={styles.cardDescription}>
        {description}
      </p>

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