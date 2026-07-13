import Container from "../../common/Container/Container";
import Button from "../../ui/Button/Button";
import styles from "./Hero.module.css";

const technologies = [
  "React",
  "Python",
  "Django",
  "PostgreSQL",
  "AWS",
];

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <span className={styles.badge}>
              👋 Welcome to my portfolio
            </span>

            <h1 className={styles.title}>
              Building Modern
              <span className={styles.highlight}>
                {" "}
                Web Experiences
              </span>
            </h1>

            <h2 className={styles.subtitle}>
              Python Full Stack Developer • Cloud Learner
            </h2>

            <p className={styles.description}>
              I'm Yash, an MCA student passionate about building
              scalable web applications using React, Django and
              PostgreSQL while continuously improving my skills in
              AWS Cloud Engineering and Data Structures &
              Algorithms.
            </p>

            <div className={styles.buttonGroup}>
              <Button>View Projects</Button>

              <Button variant="secondary">
                Download Resume
              </Button>
            </div>

            <div className={styles.techStack}>
              {technologies.map((tech) => (
                <span key={tech} className={styles.techChip}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.profileCard}>
              <div className={styles.avatar}>
                Your Photo
              </div>

              <h3>Yash</h3>

              <p>MCA Student</p>

              <div className={styles.status}>
                <span className={styles.dot}></span>

                Open to Opportunities
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;