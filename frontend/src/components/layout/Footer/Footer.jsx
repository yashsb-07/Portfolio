import {
  LuArrowUp,
} from "react-icons/lu";

import contactData from "../../../data/contactData";

import { MotionFade } from "../../ui/Motion";

import FooterNavigation from "./FooterNavigation";
import FooterSocials from "./FooterSocials";

import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear =
    new Date().getFullYear();

  const contactLinks =
    contactData.links.filter(
      (link) =>
        link.id === "email" ||
        link.id === "phone"
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
    <footer
      id="footer"
      className={styles.footer}
    >
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
            distance={24}
            duration={0.6}
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
                  className={styles.brandText}
                >
                  Yash
                </span>

                <span
                  className={styles.brandDot}
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

              <div
                className={
                  styles.contactLinks
                }
              >
                {contactLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      className={
                        styles.contactLink
                      }
                    >
                      <span
                        className={
                          styles.contactIcon
                        }
                        aria-hidden="true"
                      >
                        <Icon />
                      </span>

                      <span
                        className={
                          styles.contactValue
                        }
                      >
                        {link.value}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </MotionFade>

          <div className={styles.footerColumns}>
            <MotionFade
              direction="up"
              distance={22}
              delay={0.1}
              duration={0.55}
              className={
                styles.columnMotionWrapper
              }
            >
              <FooterNavigation />
            </MotionFade>

            <MotionFade
              direction="up"
              distance={22}
              delay={0.16}
              duration={0.55}
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
          distance={18}
          delay={0.18}
          duration={0.5}
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