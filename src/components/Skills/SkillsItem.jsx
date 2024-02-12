import styles from "./Skills.module.css";

const SkillsItem = ({ img, title }) => {
  return (
    <div className={styles.skills_item}>
      <div className={styles.item_img}>
        <img src={img} alt="html img" />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default SkillsItem;
