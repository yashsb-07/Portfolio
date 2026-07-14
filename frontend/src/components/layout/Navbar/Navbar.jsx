import { NavLink } from "react-router-dom";

import Container from "../../common/Container/Container";
import Button from "../../ui/Button/Button";

import navigation from "../../../data/navigation";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <NavLink to="/" className={styles.logo}>
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

          <Button>Resume</Button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;