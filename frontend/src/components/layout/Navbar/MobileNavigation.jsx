import navigation from "../../../data/navigation";

import styles from "./Navbar.module.css";

const MobileNavigation = ({ isOpen, onClose }) => {
  const handleNavigation = (id) => {
    onClose();

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
    <>
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${
          isOpen ? styles.mobileMenuOpen : ""
        }`}
        aria-hidden={!isOpen}
      >
        <ul className={styles.mobileNavLinks}>
          {navigation.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={styles.mobileNavLink}
                onClick={() =>
                  handleNavigation(item.id)
                }
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default MobileNavigation;