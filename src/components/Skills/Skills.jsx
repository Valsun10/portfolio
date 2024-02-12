import styles from "./Skills.module.css";
import skills from "../../utils";
import SkillsItem from "./SkillsItem";

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <h1>Skills</h1>
      <div className={styles.skills_container}>
        <SkillsItem title={skills[0].title} img={skills[0].img} />
        <SkillsItem title={skills[1].title} img={skills[1].img} />
        <SkillsItem title={skills[2].title} img={skills[2].img} />
        <SkillsItem title={skills[3].title} img={skills[3].img} />
        <SkillsItem title={skills[4].title} img={skills[4].img} />
        <SkillsItem title={skills[5].title} img={skills[5].img} />
        <SkillsItem title={skills[6].title} img={skills[6].img} />
        <SkillsItem title={skills[7].title} img={skills[7].img} />
        <SkillsItem title={skills[8].title} img={skills[8].img} />
        <SkillsItem title={skills[9].title} img={skills[9].img} />
        <SkillsItem title={skills[10].title} img={skills[10].img} />
      </div>
    </section>
  );
};

export default Skills;
