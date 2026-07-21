import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineX } from "react-icons/hi";

import Button from "../../ui/Button/Button";

import useActiveSection from "../../../hooks/useActiveSection";
import navigation from "../../../data/navigation";

import NavigationLinks from "./NavigationLinks";

import styles from "./Navbar.module.css";
import animationStyles from "./NavbarAnimations.module.css";

const MobileNavigation = ({
  isOpen,
  closeMenu,
}) => {
  const activeSection =
    useActiveSection(navigation);

  const handleNavigation = (
    event,
    targetId
  ) => {
    event.preventDefault();

    const section =
      document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    closeMenu();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={animationStyles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />

          <motion.aside
            className={animationStyles.drawer}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          >
            <div className={styles.mobileHeader}>
              <div className={styles.mobileBrand}>
                <div className={styles.logoBadge}>
                  Y
                </div>

                <span className={styles.mobileBrandText}>
                  {"<Yash.dev />"}
                </span>
              </div>

              <button
                className={styles.closeButton}
                onClick={closeMenu}
                aria-label="Close navigation"
              >
                <HiOutlineX />
              </button>
            </div>

            <ul className={styles.mobileLinks}>
              <NavigationLinks
                mobile
                activeSection={activeSection}
                onNavigate={handleNavigation}
              />
            </ul>

            <div className={styles.mobileFooter}>
              <Button variant="navbar">
                <span>↓</span>

                <span>Resume</span>
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation;