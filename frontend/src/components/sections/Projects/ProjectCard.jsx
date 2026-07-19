import {
  LuArrowUpRight,
  LuGithub,
  LuStar,
} from "react-icons/lu";

import styles from "./Projects.module.css";

const ProjectCard = ({
  icon: Icon,
  title,
  category,
  description,
  technologies,
  featured,
  flagship,
  status,
  githubUrl,
  liveUrl,
}) => {
  return (
    <article
      className={`${styles.projectCard} ${
        featured ? styles.featuredCard : ""
      } ${
        flagship ? styles.flagshipCard : ""
      }`}
    >
      <div
        className={styles.cardGlow}
        aria-hidden="true"
      />

      <div className={styles.projectVisual}>
        <div
          className={styles.visualPattern}
          aria-hidden="true"
        />

        <div
          className={styles.projectIcon}
          aria-hidden="true"
        >
          <Icon />
        </div>

        {flagship && (
          <div className={styles.featuredBadge}>
            <LuStar aria-hidden="true" />

            <span>Flagship Project</span>
          </div>
        )}

        {!flagship && featured && (
          <div className={styles.featuredBadge}>
            <LuStar aria-hidden="true" />

            <span>Featured</span>
          </div>
        )}

        <span className={styles.visualLabel}>
          {category}
        </span>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <div>
            <span className={styles.category}>
              {category}
            </span>

            <h3 className={styles.projectTitle}>
              {title}
            </h3>
          </div>

          <div className={styles.status}>
            <span
              className={styles.statusDot}
              aria-hidden="true"
            />

            <span>{status}</span>
          </div>
        </div>

        <p className={styles.description}>
          {description}
        </p>

        <ul
          className={styles.technologies}
          aria-label={`Technologies used in ${title}`}
        >
          {technologies.map((technology) => (
            <li key={technology}>
              {technology}
            </li>
          ))}
        </ul>

        {(githubUrl || liveUrl) && (
          <div className={styles.projectLinks}>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} source code on GitHub`}
              >
                <LuGithub aria-hidden="true" />

                <span>Source Code</span>
              </a>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${title}`}
              >
                <span>Live Demo</span>

                <LuArrowUpRight
                  aria-hidden="true"
                />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;