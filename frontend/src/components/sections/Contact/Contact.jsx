import ContactContent from "./ContactContent";
import ContactLinks from "./ContactLinks";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className={styles.contact}
    >
      <div
        className={styles.backgroundGlow}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <div className={styles.contactPanel}>
          <ContactContent />

          <ContactLinks />
        </div>
      </div>
    </section>
  );
};

export default Contact;