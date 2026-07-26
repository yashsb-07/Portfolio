import aboutData from "../../../data/aboutData";

import styles from "./About.module.css";

const AboutImage = () => {
  const {
    profile,
    technologies,
  } = aboutData;

  return (
    <div className={styles.profileCard}>
      <div className={styles.profileVisual}>
        <div
          className={styles.profileGlow}
          aria-hidden="true"
        />

        <div className={styles.profileImage}>
          <span>Your Photo</span>
        </div>
      </div>

      <div className={styles.profileContent}>
        <h3>{profile.name}</h3>

        <p>{profile.role}</p>

        <div className={styles.availabilityBadge}>
          <span
            className={styles.statusDot}
            aria-hidden="true"
          />

          <span>
            {profile.availability}
          </span>
        </div>
      </div>

      <div
        className={styles.techStack}
        aria-label="Primary technologies"
      >
        {technologies.map((tech) => {
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