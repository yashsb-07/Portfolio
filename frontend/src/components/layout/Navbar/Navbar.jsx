import { useState } from "react";

import Container from "../../common/Container/Container";
import Button from "../../ui/Button/Button";

import DesktopNavigation from "./DesktopNavigation";
import HamburgerButton from "./HamburgerButton";
import MobileNavigation from "./MobileNavigation";
import Logo from "./Logo";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
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