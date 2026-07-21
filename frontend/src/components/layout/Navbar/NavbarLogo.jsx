import styles from "./Navbar.module.css";

const NavbarLogo = () => {
  return (
    <a
      href="#home"
      className={styles.logoWrapper}
      aria-label="Go to Home"
    >
      <div className={styles.logoBadge}>
        Y
      </div>

      <h1 className={styles.logo}>
        <span className={styles.logoBracket}>
          {"<"}
        </span>

        <span className={styles.logoName}>
          Yash.dev
        </span>

        <span className={styles.logoBracket}>
          {" />"}
        </span>
      </h1>
    </a>
  );
};

export default NavbarLogo;