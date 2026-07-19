import {
  LuArrowUp,
  LuMail,
} from "react-icons/lu";

import contactData from "../../../data/contactData";

import { MotionFade } from "../../ui/Motion";

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

      <div
        className={
          styles.backgroundGlowSecondary
        }
        aria-hidden="true"
      />

      <div className={styles.container}>
        <div className={styles.footerMain}>
          <MotionFade
            direction="up"
            distance={30}
            duration={0.65}
            className={
              styles.brandMotionWrapper
            }
          >
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
                <span
                  className={
                    styles.brandText
                  }
                >
                  Yash
                </span>

                <span
                  className={
                    styles.brandDot
                  }
                  aria-hidden="true"
                >
                  .
                </span>
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
                  <span
                    className={
                      styles.emailIcon
                    }
                    aria-hidden="true"
                  >
                    <LuMail />
                  </span>

                  <span
                    className={
                      styles.emailValue
                    }
                  >
                    {emailLink.value}
                  </span>
                </a>
              )}
            </div>
          </MotionFade>

          <div className={styles.footerColumns}>
            <MotionFade
              direction="up"
              distance={25}
              delay={0.1}
              duration={0.6}
              className={
                styles.columnMotionWrapper
              }
            >
              <FooterNavigation />
            </MotionFade>

            <MotionFade
              direction="up"
              distance={25}
              delay={0.18}
              duration={0.6}
              className={
                styles.columnMotionWrapper
              }
            >
              <FooterSocials />
            </MotionFade>
          </div>
        </div>

        <MotionFade
          direction="up"
          distance={20}
          delay={0.2}
          duration={0.55}
        >
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

              <span
                className={
                  styles.backToTopIcon
                }
                aria-hidden="true"
              >
                <LuArrowUp />
              </span>
            </button>
          </div>
        </MotionFade>
      </div>
    </footer>
  );
};

export default Footer;