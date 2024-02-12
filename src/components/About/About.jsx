import styles from "./About.module.css";
import aboutImg from "../../assets/hero/heroImg.png";
import cursorImg from "../../assets/about/cursorIcon.png";

const About = () => {
  return (
    <section className={styles.wrapper} id="about">
      <div className={styles.wrapper_content}>
        <div className={styles.about_left}>
          <h1 className={styles.about_title}>About</h1>
          <img src={aboutImg} alt="about picture" />
        </div>
        <div className={styles.about_right}>
          <div className={styles.about_right_item}>
            <img src={cursorImg} alt="asd" />
            <div className={styles.item_content}>
              <h1>Frontend Developer</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda eius debitis at eaque minus voluptatum ipsum et harum
                sit non?
              </p>
            </div>
          </div>
          <div className={styles.about_right_item}>
            <img src={cursorImg} alt="asd" />
            <div className={styles.item_content}>
              <h1>Frontend Developer</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda eius debitis at eaque minus voluptatum ipsum et harum
                sit non?
              </p>
            </div>
          </div>
          <div className={styles.about_right_item}>
            <img src={cursorImg} alt="asd" />
            <div className={styles.item_content}>
              <h1>Frontend Developer</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda eius debitis at eaque minus voluptatum ipsum et harum
                sit non?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
