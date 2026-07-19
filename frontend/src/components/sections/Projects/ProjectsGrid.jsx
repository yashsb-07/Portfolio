import projectsData from "../../../data/projectsData";

import ProjectCard from "./ProjectCard";

import { MotionFade } from "../../ui/Motion";

import styles from "./Projects.module.css";

const ProjectsGrid = () => {
  return (
    <div className={styles.projectsGrid}>
      {projectsData.projects.map(
        (project, index) => (
          <MotionFade
            key={project.id}
            direction="up"
            distance={35}
            delay={index * 0.08}
            duration={0.6}
            className={`${styles.projectMotionWrapper} ${
              project.flagship
                ? styles.flagshipMotionWrapper
                : ""
            }`}
          >
            <ProjectCard
              icon={project.icon}
              title={project.title}
              category={project.category}
              description={project.description}
              technologies={
                project.technologies
              }
              featured={project.featured}
              flagship={project.flagship}
              status={project.status}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          </MotionFade>
        )
      )}
    </div>
  );
};

export default ProjectsGrid;