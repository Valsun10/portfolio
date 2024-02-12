import styles from "./ProjectsPage.module.css";
import { projects } from "../../utils";
import ProjectItem from "./ProjectItem";

const ProjectsPage = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h1>Projects</h1>
      <div className={styles.projects_container}>
        <ProjectItem
          title={projects[0].title}
          description={projects[0].description}
          frameworks={projects[0].frameworks}
          img={projects[0].img}
          source={projects[0].source}
        />
        <ProjectItem
          title={projects[1].title}
          description={projects[1].description}
          frameworks={projects[1].frameworks}
          img={projects[1].img}
          source={projects[1].source}
        />
        <ProjectItem
          title={projects[2].title}
          description={projects[2].description}
          frameworks={projects[2].frameworks}
          img={projects[2].img}
          source={projects[2].source}
        />
      </div>
    </section>
  );
};

export default ProjectsPage;
