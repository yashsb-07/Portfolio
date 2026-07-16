import Container from "../../common/Container/Container";
import Button from "../../ui/Button/Button";

import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import HamburgerButton from "./HamburgerButton";
import MobileNavigation from "./MobileNavigation";

import useMobileMenu from "../../../hooks/useMobileMenu";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const {
    isMenuOpen,
    toggleMenu,
    closeMenu,
  } = useMobileMenu();

  return (
    <header className={styles.header}>
      <Container>
        <nav
          className={styles.nav}
          aria-label="Main Navigation"
        >
          <Logo />

          <DesktopNavigation />

          <div className={styles.desktopButton}>
            <Button>Resume</Button>
          </div>

          <HamburgerButton
            isOpen={isMenuOpen}
            onToggle={toggleMenu}
          />
        </nav>
      </Container>

      <MobileNavigation
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />
    </header>
  );
};

export default Navbar;