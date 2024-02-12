import styles from "./ProjectsPage.module.css";
import projectImg from "../../assets/projects/project.png";
import digibook from "../../assets/projects/digibook.png";
import gpt from "../../assets/projects/gpt.png";
import automania from "../../assets/projects/automania.png";

const ProjectsPage = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h1>Projects</h1>
      <div className={styles.projects_container}>
        <div className={styles.project_item}>
          <img src={digibook} alt="project image" />
          <h1>Project A</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere at
            culpa totam laboriosam modi, consequatur sunt sequi molestias vel
            provident officia architecto illo, omnis optio voluptate asperiores
            mollitia alias debitis!
          </p>
          <div className={styles.project_item_technique}>
            <span>React</span>
            <span>Redux Toolkit</span>
            <span>CSS</span>
          </div>
          <div className={styles.project_item_links}>
            <a href="#">Demo</a>
            <a href="#">Source</a>
          </div>
        </div>
        <div className={styles.project_item}>
          <img src={gpt} alt="project image" />
          <h1>Project A</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere at
            culpa totam laboriosam modi, consequatur sunt sequi molestias vel
            provident officia architecto illo, omnis optio voluptate asperiores
            mollitia alias debitis!
          </p>
          <div className={styles.project_item_technique}>
            <span>React</span>
            <span>Redux Toolkit</span>
            <span>CSS</span>
          </div>
          <div className={styles.project_item_links}>
            <a href="#">Demo</a>
            <a href="#">Source</a>
          </div>
        </div>
        <div className={styles.project_item}>
          <img src={automania} alt="project image" />
          <h1>Project A</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere at
            culpa totam laboriosam modi, consequatur sunt sequi molestias vel
            provident officia architecto illo, omnis optio voluptate asperiores
            mollitia alias debitis!
          </p>
          <div className={styles.project_item_technique}>
            <span>React</span>
            <span>Redux Toolkit</span>
            <span>CSS</span>
          </div>
          <div className={styles.project_item_links}>
            <a href="#">Demo</a>
            <a href="#">Source</a>
          </div>
        </div>
        <div className={styles.project_item}>
          <img src={projectImg} alt="project image" />
          <h1>Project A</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere at
            culpa totam laboriosam modi, consequatur sunt sequi molestias vel
            provident officia architecto illo, omnis optio voluptate asperiores
            mollitia alias debitis!
          </p>
          <div className={styles.project_item_technique}>
            <span>React</span>
            <span>Redux Toolkit</span>
            <span>CSS</span>
          </div>
          <div className={styles.project_item_links}>
            <a href="#">Demo</a>
            <a href="#">Source</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
