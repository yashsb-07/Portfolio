import contactData from "../../../data/contactData";

import ContactCard from "./ContactCard";

import styles from "./Contact.module.css";

const ContactLinks = () => {
  return (
    <div className={styles.contactLinks}>
      {contactData.links.map((link) => (
        <ContactCard
          key={link.id}
          label={link.label}
          value={link.value}
          href={link.href}
          icon={link.icon}
          external={link.external}
        />
      ))}
    </div>
  );
};

export default ContactLinks;