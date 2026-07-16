import { HiOutlineMenuAlt3 } from "react-icons/hi";
import styles from "./Navbar.module.css";

const MobileMenuButton = ({
  onClick,
}) => {
  return (
    <button
      type="button"
      className={styles.menuButton}
      aria-label="Open navigation menu"
      aria-expanded="false"
      onClick={onClick}
    >
      <HiOutlineMenuAlt3 />
    </button>
  );
};

export default MobileMenuButton;