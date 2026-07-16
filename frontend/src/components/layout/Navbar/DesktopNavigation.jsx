import navigation from "../../../data/navigation";
import useActiveSection from "../../../hooks/useActiveSection";

import styles from "./Navbar.module.css";

const DesktopNavigation = () => {
  const activeSection = useActiveSection(navigation);

  const handleNavigation = (event, targetId) => {
    event.preventDefault();

    const section = document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <ul className={styles.navLinks}>
      {navigation.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            onClick={(event) =>
              handleNavigation(event, item.id)
            }
            className={
              activeSection === item.id
                ? styles.activeLink
                : ""
            }
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNavigation;