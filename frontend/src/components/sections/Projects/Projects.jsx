import ProjectsHeader from "./ProjectsHeader";
import ProjectsGrid from "./ProjectsGrid";

import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section
      id="projects"
      className={styles.projects}
    >
      <div
        className={styles.backgroundGlow}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <ProjectsHeader />

        <ProjectsGrid />
      </div>
    </section>
  );
};

export default Projects;