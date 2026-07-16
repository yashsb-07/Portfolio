import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import styles from "./Navbar.module.css";

const HamburgerButton = ({ isOpen, onToggle }) => {
  return (
    <button
      type="button"
      className={styles.menuButton}
      onClick={onToggle}
      aria-label="Toggle navigation menu"
      aria-expanded={isOpen}
    >
      {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
    </button>
  );
};

export default HamburgerButton;