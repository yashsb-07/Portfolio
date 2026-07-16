import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import styles from "./Navbar.module.css";

const HamburgerButton = ({ isOpen, onToggle }) => {
  return (
    <button
      type="button"
      className={styles.menuButton}
      onClick={onToggle}
      aria-label={
        isOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      }
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          transition: "transform 0.25s ease",
          transform: isOpen
            ? "rotate(180deg)"
            : "rotate(0deg)",
        }}
      >
        {isOpen ? (
          <HiOutlineX size={28} />
        ) : (
          <HiOutlineMenu size={28} />
        )}
      </span>
    </button>
  );
};

export default HamburgerButton;