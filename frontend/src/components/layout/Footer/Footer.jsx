import {
  LuArrowUp,
  LuMail,
} from "react-icons/lu";

import contactData from "../../../data/contactData";

import FooterNavigation from "./FooterNavigation";
import FooterSocials from "./FooterSocials";

import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear =
    new Date().getFullYear();

  const emailLink =
    contactData.links.find(
      (link) => link.id === "email"
    );

  const handleBackToTop = () => {
    const homeSection =
      document.getElementById("home");

    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    window.history.replaceState(
      null,
      "",
      "#home"
    );
  };

  return (
    <footer className={styles.footer}>
      <div
        className={styles.backgroundGlow}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <div className={styles.footerMain}>
          <div className={styles.brandSection}>
            <a
              href="#home"
              className={styles.brand}
              onClick={(event) => {
                event.preventDefault();
                handleBackToTop();
              }}
              aria-label="Go back to home"
            >
              Yash
              <span>.</span>
            </a>

            <p className={styles.tagline}>
              Building thoughtful digital
              experiences while continuously
              learning, exploring, and growing
              as a developer.
            </p>

            {emailLink && (
              <a
                href={emailLink.href}
                className={styles.emailLink}
              >
                <LuMail
                  aria-hidden="true"
                />

                <span>
                  {emailLink.value}
                </span>
              </a>
            )}
          </div>

          <div className={styles.footerColumns}>
            <FooterNavigation />

            <FooterSocials />
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Yash. All rights
            reserved.
          </p>

          <p className={styles.builtWith}>
            Designed & built with care.
          </p>

          <button
            type="button"
            className={styles.backToTop}
            onClick={handleBackToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>

            <LuArrowUp
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;