import aboutData from "../../../data/aboutData";
import styles from "./About.module.css";

const AboutImage = () => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileImage}>
        <span>Your Photo</span>
      </div>

      <div className={styles.profileContent}>
        <h3>Yash Bansode</h3>

        <p>Full Stack Developer</p>

        <span className={styles.badge}>
          Open to Opportunities
        </span>
      </div>

      <div className={styles.techStack}>
        {aboutData.technologies.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              className={styles.techItem}
              key={tech.name}
            >
              <Icon />

              <span>{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutImage;