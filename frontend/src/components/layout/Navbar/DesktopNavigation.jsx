import navigation from "../../../data/navigation";
import styles from "./Navbar.module.css";

const DesktopNavigation = () => {
  const handleScroll = (id) => {
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <ul className={styles.navLinks}>
      {navigation.map((item) => (
        <li key={item.id}>
          <button
            type="button"
            className={styles.navLink}
            onClick={() => handleScroll(item.id)}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNavigation;