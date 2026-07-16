import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import styles from "./Navbar.module.css";

const HamburgerButton = ({ isOpen, onToggle }) => {
  return (
    <button
      type="button"
      className={styles.menuButton}
      onClick={onToggle}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
    >
      {isOpen ? (
        <HiOutlineX size={28} />
      ) : (
        <HiOutlineMenu size={28} />
      )}
    </button>
  );
};

export default HamburgerButton;