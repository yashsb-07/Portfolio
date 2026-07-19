import ContactContent from "./ContactContent";
import ContactLinks from "./ContactLinks";

import { MotionFade } from "../../ui/Motion";

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

      <div
        className={styles.backgroundGlowSecondary}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <MotionFade
          direction="up"
          distance={40}
          duration={0.7}
          className={styles.panelMotionWrapper}
        >
          <div className={styles.contactPanel}>
            <div
              className={styles.panelGlow}
              aria-hidden="true"
            />

            <div
              className={styles.panelAccent}
              aria-hidden="true"
            />

            <MotionFade
              direction="up"
              distance={30}
              delay={0.1}
              duration={0.65}
              className={styles.contentMotionWrapper}
            >
              <ContactContent />
            </MotionFade>

            <ContactLinks />
          </div>
        </MotionFade>
      </div>
    </section>
  );
};

export default Contact;