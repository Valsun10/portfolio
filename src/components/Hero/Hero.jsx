import styles from "./Hero.module.css";
import meImg from "../../assets/hero/me.jpg";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Hello, I'm Valentin</h2>
        <p className={styles.description}>
          24 years old, ambitious young man who wants to progress as a
          developer!
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:valentinvstefanov@gmail.com"
        >
          Contact Me
        </a>
      </div>
      <img className={styles.heroImg} src={meImg} alt="hero image of me" />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
