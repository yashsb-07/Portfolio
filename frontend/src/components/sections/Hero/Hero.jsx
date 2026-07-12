import Container from "../../common/Container/Container";
import Button from "../../ui/Button/Button";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <div className={styles.left}>
            <p className={styles.greeting}>Hello, I'm</p>

            <h1 className={styles.name}>Yash</h1>

            <h2 className={styles.role}>
              Python Full Stack Developer
            </h2>

            <p className={styles.description}>
              MCA student passionate about building modern web
              applications using React, Django, PostgreSQL and
              continuously expanding my skills in AWS Cloud
              Engineering and Data Structures.
            </p>

            <div className={styles.actions}>
              <Button>View Projects</Button>

              <Button variant="secondary">
                Download Resume
              </Button>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.imagePlaceholder}>
              Your Photo
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;