import {
  LuArrowUpRight,
  LuGithub,
} from "react-icons/lu";

import styles from "./Projects.module.css";

const ProjectCard = ({
  title,
  category,
  description,
  technologies,
  featured,
  status,
  githubUrl,
  liveUrl,
}) => {
  return (
    <article
      className={`${styles.projectCard} ${
        featured ? styles.featuredCard : ""
      }`}
    >
      <div className={styles.cardHeader}>
        <div>
          <span className={styles.category}>
            {category}
          </span>

          <h3 className={styles.projectTitle}>
            {title}
          </h3>
        </div>

        <span className={styles.status}>
          {status}
        </span>
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
    </article>
  );
};

export default ProjectCard;