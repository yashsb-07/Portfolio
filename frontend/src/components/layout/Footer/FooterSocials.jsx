import {
  LuArrowUpRight,
} from "react-icons/lu";

import contactData from "../../../data/contactData";

import styles from "./Footer.module.css";

const FooterSocials = () => {
  const socialLinks =
    contactData.links.filter(
      (link) =>
        link.id === "linkedin" ||
        link.id === "github"
    );

  return (
    <div className={styles.socialSection}>
      <h3 className={styles.columnTitle}>
        Connect
      </h3>

      <div className={styles.socialLinks}>
        {socialLinks.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={`${link.label} — opens in a new tab`}
            >
              <span
                className={styles.socialIcon}
                aria-hidden="true"
              >
                <Icon />
              </span>

              <span>
                {link.label}
              </span>

              <LuArrowUpRight
                className={
                  styles.socialArrow
                }
                aria-hidden="true"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FooterSocials;