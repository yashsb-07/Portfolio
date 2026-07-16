import Button from "../../ui/Button/Button";

import NavbarLogo from "./NavbarLogo";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenuButton from "./MobileMenuButton";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
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
            onClick={() => {}}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;