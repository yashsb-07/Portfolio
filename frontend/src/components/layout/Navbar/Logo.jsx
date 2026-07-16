import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Logo = () => {
  return (
    <NavLink to="/" className={styles.logo}>
      Yash<span>.</span>
    </NavLink>
  );
};

export default Logo;