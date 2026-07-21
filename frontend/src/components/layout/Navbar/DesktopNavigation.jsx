import useActiveSection from "../../../hooks/useActiveSection";

import navigation from "../../../data/navigation";

import NavigationLinks from "./NavigationLinks";

import styles from "./Navbar.module.css";

const DesktopNavigation = () => {
  const activeSection =
    useActiveSection(navigation);

  const handleNavigation = (
    event,
    targetId
  ) => {
    event.preventDefault();

    const section =
      document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <ul className={styles.navLinks}>
      <NavigationLinks
        activeSection={activeSection}
        onNavigate={handleNavigation}
      />
    </ul>
  );
};

export default DesktopNavigation;