import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import Container from "../../common/Container/Container";
import Button from "../../ui/Button/Button";

import navigation from "../../../data/navigation";

import MobileMenu from "./MobileMenu";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

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
          <NavLink
            to="/"
            className={styles.logo}
            onClick={closeMenu}
          >
            Yash<span>.</span>
          </NavLink>

          <ul className={styles.navLinks}>
            {navigation.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Button>Resume</Button>

            <button
              type="button"
              className={styles.menuButton}
              onClick={toggleMenu}
              aria-label={
                isMenuOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <HiOutlineX />
              ) : (
                <HiOutlineMenuAlt3 />
              )}
            </button>
          </div>
        </nav>
      </Container>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />
    </header>
  );
};

export default Navbar;