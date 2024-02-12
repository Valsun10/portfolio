import styles from "./ProjectsPage.module.css";

const ProjectItem = ({ img, description, title, frameworks, source }) => {
  return (
    <div className={styles.project_item}>
      <div className={styles.project_title}>
        <img src={img} alt="project image" />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.project_item_technique}>
        <span>{frameworks[0]}</span>
        <span>{frameworks[1]}</span>
        <span>{frameworks[2]}</span>
      </div>
      <div className={styles.project_item_links}>
        <h3>Click here for source code:</h3>
        <a href={source} target="_blank">
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
