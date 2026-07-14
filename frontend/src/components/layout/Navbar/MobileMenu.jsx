import navigation from "../../../data/navigation";
import styles from "./Navbar.module.css";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${styles.mobileMenu} ${
        isOpen ? styles.mobileMenuOpen : ""
      }`}
    >
      <ul className={styles.mobileNavLinks}>
        {navigation.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={styles.mobileNavLink}
              onClick={onClose}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;