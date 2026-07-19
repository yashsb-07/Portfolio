import ProjectsHeader from "./ProjectsHeader";
import ProjectsGrid from "./ProjectsGrid";

import { MotionFade } from "../../ui/Motion";

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

      <div
        className={styles.backgroundGlowSecondary}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <MotionFade
          direction="up"
          distance={30}
          duration={0.7}
        >
          <ProjectsHeader />
        </MotionFade>

        <ProjectsGrid />
      </div>
    </section>
  );
};

export default Projects;