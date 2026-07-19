import navigation from "../../../data/navigation";

import styles from "./Footer.module.css";

const FooterNavigation = () => {
  const handleNavigation = (
    event,
    targetId,
    href
  ) => {
    event.preventDefault();

    const section =
      document.getElementById(targetId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(
      null,
      "",
      href
    );
  };

  return (
    <nav
      className={styles.footerNavigation}
      aria-label="Footer navigation"
    >
      <h3 className={styles.columnTitle}>
        Navigation
      </h3>

      <ul className={styles.navigationList}>
        {navigation.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              onClick={(event) =>
                handleNavigation(
                  event,
                  item.id,
                  item.href
                )
              }
            >
              <span
                className={
                  styles.navigationIndicator
                }
                aria-hidden="true"
              />

              <span>
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavigation;