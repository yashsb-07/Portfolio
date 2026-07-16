import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineX } from "react-icons/hi";

import navigation from "../../../data/navigation";

import styles from "./Navbar.module.css";
import animationStyles from "./NavbarAnimations.module.css";
import useActiveSection from "../../../hooks/useActiveSection";

const MobileNavigation = ({
  isOpen,
  closeMenu,
}) => {

  const activeSection = useActiveSection(navigation);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={animationStyles.overlay}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className={animationStyles.drawer}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          >
            <button
              className={styles.closeButton}
              onClick={closeMenu}
              aria-label="Close navigation"
            >
              <HiOutlineX />
            </button>

            <ul className={styles.mobileLinks}>
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();

                      const section = document.getElementById(item.id);

                      if (section) {
                        section.scrollIntoView({
                          behavior: "smooth",
                        });
                      }

                      closeMenu();
                    }}
                    className={
                      activeSection === item.id
                        ? styles.activeLink
                        : ""
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation;