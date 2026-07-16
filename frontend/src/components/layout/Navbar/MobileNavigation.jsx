import navigation from "../../../data/navigation";
import styles from "./Navbar.module.css";

const MobileNavigation = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${styles.mobileMenu} ${
        isOpen ? styles.mobileMenuOpen : ""
      }`}
    >
      <ul>
        {navigation.map((item) => (
          <li key={item.label}>
            <a href={item.href} onClick={onClose}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavigation;