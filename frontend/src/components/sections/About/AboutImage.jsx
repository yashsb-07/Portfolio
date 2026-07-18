import aboutData from "../../../data/aboutData";

import styles from "./About.module.css";

const AboutImage = () => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileVisual}>
        <div className={styles.profileGlow} />

        <div className={styles.profileImage}>
          <span>Your Photo</span>
        </div>
      </div>

      <div className={styles.profileContent}>
        <h3>Yash Bansode</h3>

        <p>Full Stack Developer</p>

        <div className={styles.availabilityBadge}>
          <span
            className={styles.statusDot}
            aria-hidden="true"
          />

          <span>Open to Opportunities</span>
        </div>
      </div>

      <div
        className={styles.techStack}
        aria-label="Primary technologies"
      >
        {aboutData.technologies.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              className={styles.techItem}
              key={tech.name}
            >
              <Icon aria-hidden="true" />

              <span>{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutImage;