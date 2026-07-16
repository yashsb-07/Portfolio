import Button from "../../ui/Button/Button";

import useMobileMenu from "../../../hooks/useMobileMenu";

import NavbarLogo from "./NavbarLogo";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenuButton from "./MobileMenuButton";
import MobileNavigation from "./MobileNavigation";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const {
    isOpen,
    toggleMenu,
    closeMenu,
  } = useMobileMenu();

  return (
    <>
      <header className={styles.header}>
        <nav
          className={styles.navbar}
          aria-label="Primary Navigation"
        >
          <NavbarLogo />

          <DesktopNavigation />

          <div className={styles.actions}>
            <Button variant="secondary">
              Resume
            </Button>

            <MobileMenuButton
              onClick={toggleMenu}
              isOpen={isOpen}
            />
          </div>
        </nav>
      </header>

      <MobileNavigation
        isOpen={isOpen}
        closeMenu={closeMenu}
      />
    </>
  );
};

export default Navbar;