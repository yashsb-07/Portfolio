import { motion } from "framer-motion";

import navigation from "../../../data/navigation";

import styles from "./Navbar.module.css";

const NavigationLinks = ({
  activeSection,
  onNavigate,
  mobile = false,
}) => {
  return (
    <>
      {navigation.map((item) => (
        <li
          key={item.id}
          className={styles.navItem}
        >
          <a
            href={item.href}
            onClick={(event) =>
              onNavigate(event, item.id)
            }
            className={
              activeSection === item.id
                ? styles.activeLink
                : ""
            }
          >
            {!mobile &&
              activeSection === item.id && (
                <motion.span
                  layoutId="active-nav-pill"
                  className={
                    styles.activePill
                  }
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 35,
                  }}
                />
              )}

            <span
              className={
                styles.linkLabel
              }
            >
              {item.label}
            </span>
          </a>
        </li>
      ))}
    </>
  );
};

export default NavigationLinks;