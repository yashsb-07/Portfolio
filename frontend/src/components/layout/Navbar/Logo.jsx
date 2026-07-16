import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Logo = () => {
  return (
    <NavLink
      to="/"
      className={styles.logo}
      aria-label="Go to homepage"
    >
      Yash<span>.</span>
    </NavLink>
  );
};

export default Logo;