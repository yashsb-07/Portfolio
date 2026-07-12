import styles from "./Section.module.css";

const Section = ({ children, id }) => {
  return (
    <section id={id} className={styles.section}>
      {children}
    </section>
  );
};

export default Section;