import styles from "./Footer.module.css";
import email from "../../assets/contact/emailIcon.png";
import linkedin from "../../assets/contact/linkedinIcon.png";
import github from "../../assets/contact/githubIcon.png";

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footer_left}>
        <h1>Contact</h1>
        <h3>Feel free to reach out!</h3>
      </div>
      <div className={styles.footer_right}>
        <div>
          <img src={email} alt="email" />
          <p>valentinvstefanov@gmail.com</p>
        </div>
        <div>
          <img src={linkedin} alt="linkedin" />
          <p>linkedin.com/Valentin Stefanov</p>
        </div>
        <div>
          <img src={github} alt="github" />
          <p>github.com/Valsun10</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
