import projectsData from "../../../data/projectsData";

import styles from "./Projects.module.css";

const ProjectsHeader = () => {
  const { header } = projectsData;

  return (
    <header className={styles.header}>
      <span className={styles.eyebrow}>
        {header.eyebrow}
      </span>

      <h2 className={styles.heading}>
        {header.title}
      </h2>

      <p className={styles.headerDescription}>
        {header.description}
      </p>
    </header>
  );
};

export default ProjectsHeader;