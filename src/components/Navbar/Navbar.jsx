import styles from "./Navbar.module.css";
import hambMenu from "../../assets/nav/menuIcon.png";
import closeHambMenu from "../../assets/nav/closeIcon.png";
import { useState } from "react";
import logo from "../../assets/nav/gladiator.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      <div
        className={
          menu
            ? `${styles.nav_links} ${styles.active} ${styles.scale_up_center}`
            : styles.nav_links
        }
      >
        <a href="#about">About</a>
        <a href="#skills">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className={styles.navbar_mobile}>
        <img
          onClick={() => setMenu((state) => !state)}
          src={menu ? closeHambMenu : hambMenu}
          alt="menu"
        />
      </div>
    </nav>
  );
};

export default Navbar;
