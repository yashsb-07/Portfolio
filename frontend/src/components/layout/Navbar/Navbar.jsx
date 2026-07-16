import { HiOutlineMenuAlt3 } from "react-icons/hi";

import navigation from "../../../data/navigation";

import Button from "../../ui/Button/Button";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav
        className={styles.navbar}
        aria-label="Primary Navigation"
      >
        <a
          href="/"
          className={styles.logo}
        >
          Yash
        </a>

        <ul className={styles.navLinks}>
          {navigation.map((item) => (
            <li key={item.id}>
              <a href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Button variant="secondary">
            Resume
          </Button>

          <button
            className={styles.menuButton}
            aria-label="Open navigation menu"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;