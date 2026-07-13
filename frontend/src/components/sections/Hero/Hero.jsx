import Container from "../../common/Container/Container";
import Button from "../../ui/Button/Button";
import heroData from "../../../data/hero";
import styles from "./Hero.module.css";

const Hero = () => {
  const {
    badge,
    title,
    subtitle,
    description,
    profile,
    technologies,
    cta,
  } = heroData;

  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <span className={styles.badge}>
              {badge}
            </span>

            <h1 className={styles.title}>
              {title.first}

              <span className={styles.highlight}>
                {" "}
                {title.highlight}
              </span>
            </h1>

            <h2 className={styles.subtitle}>
              {subtitle}
            </h2>

            <p className={styles.description}>
              {description}
            </p>

            <div className={styles.buttonGroup}>
              <Button>
                {cta.primary.text}
              </Button>

              <Button variant="secondary">
                {cta.secondary.text}
              </Button>
            </div>

            <div className={styles.techStack}>
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className={styles.techChip}
                >
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

              <h3>{profile.name}</h3>

              <p>{profile.role}</p>

              <div className={styles.status}>
                <span className={styles.dot}></span>

                {profile.status}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;