import navigation from "../../../data/navigation";
import styles from "./Navbar.module.css";

const DesktopNavigation = () => {
  return (
    <ul className={styles.navLinks}>
      {navigation.map((item) => (
        <li key={item.id}>
          <a href={item.href}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNavigation;