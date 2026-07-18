import currentFocusData from "../../../data/currentFocusData";

import styles from "./CurrentFocus.module.css";

const CurrentFocusHeader = () => {
  const { header } = currentFocusData;

  return (
    <header className={styles.header}>
      <span className={styles.eyebrow}>
        {header.eyebrow}
      </span>

      <h2 className={styles.heading}>
        {header.title}
      </h2>

      <p className={styles.headerDescription}>
        {header.description}
      </p>
    </header>
  );
};

export default CurrentFocusHeader;