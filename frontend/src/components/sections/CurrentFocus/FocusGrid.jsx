import currentFocusData from "../../../data/currentFocusData";

import FocusCard from "./FocusCard";

import styles from "./CurrentFocus.module.css";

const FocusGrid = () => {
  return (
    <div className={styles.focusGrid}>
      {currentFocusData.focuses.map((focus) => (
        <FocusCard
          key={focus.id}
          icon={focus.icon}
          technologyIcon={focus.technologyIcon}
          category={focus.category}
          title={focus.title}
          description={focus.description}
          status={focus.status}
        />
      ))}
    </div>
  );
};

export default FocusGrid;