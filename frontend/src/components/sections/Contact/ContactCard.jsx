import {
  LuArrowUpRight,
} from "react-icons/lu";

import styles from "./Contact.module.css";

const ContactCard = ({
  label,
  value,
  href,
  icon: Icon,
  external,
}) => {
  return (
    <a
      href={href}
      className={styles.contactCard}
      target={
        external
          ? "_blank"
          : undefined
      }
      rel={
        external
          ? "noopener noreferrer"
          : undefined
      }
      aria-label={
        external
          ? `${label}: ${value} — opens in a new tab`
          : `${label}: ${value}`
      }
    >
      <div
        className={styles.cardIcon}
        aria-hidden="true"
      >
        <Icon />
      </div>

      <div className={styles.cardContent}>
        <span className={styles.cardLabel}>
          {label}
        </span>

        <span className={styles.cardValue}>
          {value}
        </span>
      </div>

      <LuArrowUpRight
        className={styles.cardArrow}
        aria-hidden="true"
      />
    </a>
  );
};

export default ContactCard;