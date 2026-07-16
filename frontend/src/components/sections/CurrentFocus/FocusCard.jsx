import styles from "./CurrentFocus.module.css";

const FocusCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <article className={styles.card}>
      <div className={styles.icon}>
        <Icon />
      </div>

      <h3>{item.title}</h3>

      <p>{item.description}</p>
    </article>
  );
};

export default FocusCard;