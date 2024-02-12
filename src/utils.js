import htmlImg from "./assets/skills/html.png";
import cssImg from "./assets/skills/css.png";
import reactImg from "./assets/skills/react.png";
import figmaImg from "./assets/skills/figma.png";
import jsImg from "./assets/skills/javascript.png";
import postmanImg from "./assets/skills/postman.png";
import githubImg from "./assets/skills/github.png";
import reduxImg from "./assets/skills/redux.png";
import reactTablesImg from "./assets/skills/reacttable.png";
import vscImg from "./assets/skills/visual-studio.png";
import bootstrapImg from "./assets/skills/bootstrap.png";
import gpt from "./assets/projects/gpt.png";
import automania from "./assets/projects/automania.png";
import digibook from "./assets/projects/digibook.png";

const skills = [
  {
    title: "HTML",
    img: htmlImg,
  },
  {
    title: "CSS",
    img: cssImg,
  },
  {
    title: "JavaScript",
    img: jsImg,
  },
  {
    title: "Figma",
    img: figmaImg,
  },
  {
    title: "Postman",
    img: postmanImg,
  },
  {
    title: "GitHub",
    img: githubImg,
  },
  {
    title: "React",
    img: reactImg,
  },
  {
    title: "Redux Toolkit",
    img: reduxImg,
  },
  {
    title: "React Tables",
    img: reactTablesImg,
  },
  {
    title: "Bootstrap",
    img: bootstrapImg,
  },
  {
    title: "Visual Studio Code",
    img: vscImg,
  },
];

export const projects = [
  {
    title: "Digi Book",
    img: digibook,
    description:
      "Book library where you can create a book for your list or delete it from server. You can also search and view book details!",
    frameworks: ["React", "Redux Toolkit", "CSS"],
    source: "https://github.com/Valsun10/DigiBooks",
  },
  {
    title: "GPT-3",
    img: gpt,
    description:
      "Responsive design created to practise my css skills. No functionality but pretty cool design! Design is not created by me!",
    frameworks: ["React", "React Components", "CSS"],
    source: "https://github.com/Valsun10/gpt",
  },
  {
    title: "Automania",
    img: automania,
    description:
      "Cars library, where you can create a car to sell, edit your car or delete the car from server. You can see all the cars, but only the ones you made can be edited or deleted!",
    frameworks: ["React", "Context", "CSS"],
    source: "https://github.com/Valsun10/automania",
  },
];

export default skills;
