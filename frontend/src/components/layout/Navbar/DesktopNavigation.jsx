import navigation from "../../../data/navigation";

import styles from "./Navbar.module.css";

const DesktopNavigation = ({
  activeSection,
}) => {
  const handleNavigationClick = (
    event,
    targetId
  ) => {
    event.preventDefault();

    const section =
      document.getElementById(targetId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(
      null,
      "",
      `#${targetId}`
    );
  };

  return (
    <ul className={styles.navLinks}>
      {navigation.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            onClick={(event) =>
              handleNavigationClick(
                event,
                item.id
              )
            }
            className={
              activeSection === item.id
                ? styles.activeLink
                : ""
            }
            aria-current={
              activeSection === item.id
                ? "page"
                : undefined
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