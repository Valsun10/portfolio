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
              <h1>HTML, CSS, JavaScript</h1>
              <p>
                Two years of experience with HTML, CSS, JavaScript. I started
                from learning about semantic html elements, then I started
                styling them using css. i have practiced css frameworks like
                SASS and LESS! I made a full one HTML, CSS and vanilla JS course
                at Swift Academy!
              </p>
            </div>
          </div>
          <div className={styles.about_right_item}>
            <img src={cursorImg} alt="asd" />
            <div className={styles.item_content}>
              <h1>React</h1>
              <p>
                Last year I completed a React course at SoftUni and started
                developing web applications with the aim of continuing my
                development as a developer. I have been practicing the React
                library for the past 7 months. All projects uploaded below on
                the site are made with React.
              </p>
            </div>
          </div>
          <div className={styles.about_right_item}>
            <img src={cursorImg} alt="asd" />
            <div className={styles.item_content}>
              <h1>TypeScript</h1>
              <p>
                My next goal is to start learning TypeScript. To be
                continued.....!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
