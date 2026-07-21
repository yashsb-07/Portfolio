import Button from "../../ui/Button/Button";

import useMobileMenu from "../../../hooks/useMobileMenu";
import useActiveSection from "../../../hooks/useActiveSection";
import useNavbarScroll from "../../../hooks/useNavbarScroll";

import navigation from "../../../data/navigation";

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

  const activeSection =
    useActiveSection(navigation);

  const isScrolled =
    useNavbarScroll();

  return (
    <>
      <header
        className={`${styles.header} ${
          isScrolled
            ? styles.scrolled
            : ""
        }`}
      >
        <nav
          className={styles.navbar}
          aria-label="Primary Navigation"
        >
          <div className={styles.left}>
            <NavbarLogo />
          </div>

          <div className={styles.center}>
            <DesktopNavigation
              activeSection={activeSection}
            />
          </div>

          <div className={styles.right}>
            <Button variant="navbar">
              <span>↓</span>

              <span>Resume</span>
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
        activeSection={activeSection}
      />
    </>
  );
};

export default Navbar;