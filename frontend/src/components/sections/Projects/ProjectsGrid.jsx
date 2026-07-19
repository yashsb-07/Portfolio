import projectsData from "../../../data/projectsData";

import ProjectCard from "./ProjectCard";

import styles from "./Projects.module.css";

const ProjectsGrid = () => {
  return (
    <div className={styles.projectsGrid}>
      {projectsData.projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          category={project.category}
          description={project.description}
          technologies={
            project.technologies
          }
          featured={project.featured}
          status={project.status}
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;