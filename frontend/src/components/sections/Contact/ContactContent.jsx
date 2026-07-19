import {
  LuArrowRight,
} from "react-icons/lu";

import contactData from "../../../data/contactData";

import styles from "./Contact.module.css";

const ContactContent = () => {
  const {
    eyebrow,
    title,
    description,
    availability,
    primaryAction,
  } = contactData;

  const PrimaryIcon =
    primaryAction.icon;

  return (
    <div className={styles.contactContent}>
      <span className={styles.eyebrow}>
        {eyebrow}
      </span>

      <h2 className={styles.heading}>
        {title}
      </h2>

      <p className={styles.description}>
        {description}
      </p>

      {availability.available && (
        <div
          className={styles.availability}
          role="status"
        >
          <span
            className={
              styles.availabilityIndicator
            }
            aria-hidden="true"
          >
            <span
              className={
                styles.availabilityDot
              }
            />
          </span>

          <span>
            {availability.label}
          </span>
        </div>
      )}

      <a
        href={primaryAction.href}
        className={styles.primaryAction}
      >
        <span
          className={styles.actionGlow}
          aria-hidden="true"
        />

        <PrimaryIcon
          className={styles.actionIcon}
          aria-hidden="true"
        />

        <span>
          {primaryAction.label}
        </span>

        <LuArrowRight
          className={styles.actionArrow}
          aria-hidden="true"
        />
      </a>
    </div>
  );
};

export default ContactContent;