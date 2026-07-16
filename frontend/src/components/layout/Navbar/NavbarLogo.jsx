import styles from "./Navbar.module.css";

const NavbarLogo = () => {
  return (
    <a
      href="#home"
      className={styles.logo}
      aria-label="Go to Home section"
    >
      Yash
    </a>
  );
};

export default NavbarLogo;