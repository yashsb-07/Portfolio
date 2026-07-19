import contactData from "../../../data/contactData";

import ContactCard from "./ContactCard";

import { MotionFade } from "../../ui/Motion";

import styles from "./Contact.module.css";

const ContactLinks = () => {
  return (
    <div className={styles.contactLinks}>
      {contactData.links.map(
        (link, index) => (
          <MotionFade
            key={link.id}
            direction="up"
            distance={25}
            delay={0.15 + index * 0.08}
            duration={0.55}
            className={
              styles.cardMotionWrapper
            }
          >
            <ContactCard
              label={link.label}
              value={link.value}
              href={link.href}
              icon={link.icon}
              external={link.external}
            />
          </MotionFade>
        )
      )}
    </div>
  );
};

export default ContactLinks;