import {
  LuMapPin,
  LuGraduationCap,
  LuCode,
} from "react-icons/lu";

import aboutData from "../../../data/aboutData";

import styles from "./About.module.css";

const AboutImage = () => {
  const {
    profile,
    technologies,
  } = aboutData;

  return (
    <article className={styles.profileCard}>
      <div
        className={styles.profileAccent}
        aria-hidden="true"
      />

      <div className={styles.profileVisual}>
        <div
          className={styles.profileGlow}
          aria-hidden="true"
        />

        <div
          className={styles.profileImage}
          aria-hidden="true"
        >
          <span className={styles.profileInitials}>
            YB
          </span>

          <span className={styles.profileCodeMark}>
            {"</>"}
          </span>
        </div>
      </div>

      <div className={styles.profileContent}>
        <span className={styles.profileEyebrow}>
          Developer Profile
        </span>

        <h3>{profile.name}</h3>

        <p className={styles.profileRole}>
          {profile.role}
        </p>

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

      <div className={styles.profileDivider} />

      <div className={styles.profileDetails}>
        <div className={styles.profileDetail}>
          <div
            className={styles.profileDetailIcon}
            aria-hidden="true"
          >
            <LuMapPin />
          </div>

          <div>
            <span className={styles.profileDetailLabel}>
              Location
            </span>

            <strong>
              {profile.location}
            </strong>
          </div>
        </div>

        <div className={styles.profileDetail}>
          <div
            className={styles.profileDetailIcon}
            aria-hidden="true"
          >
            <LuGraduationCap />
          </div>

          <div>
            <span className={styles.profileDetailLabel}>
              Education
            </span>

            <strong>
              {profile.education}
            </strong>
          </div>
        </div>
      </div>

      <div className={styles.profileFocus}>
        <div className={styles.profileFocusHeading}>
          <LuCode aria-hidden="true" />

          <span>Current Focus</span>
        </div>

        <div className={styles.profileFocusList}>
          {profile.focus.map((item) => (
            <span
              className={styles.profileFocusItem}
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.profileDivider} />

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
    </article>
  );
};

export default AboutImage;