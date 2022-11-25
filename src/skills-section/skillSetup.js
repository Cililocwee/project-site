import skillCard from "./skillCard";

export default function setupSkills() {
  // ** Skill cards
  // src alt label

  const javascript = skillCard.cardFactory(
    "/src/skills-section/assets/javascript.svg",
    "javascript logo",
    "Javascript"
  );
  const reactjs = skillCard.cardFactory(
    "/src/skills-section/assets/reactjs.svg",
    "reactjs logo",
    "React"
  );
  const html = skillCard.cardFactory(
    "/src/skills-section/assets/HTML5.svg",
    "HTML5 logo",
    "HTML"
  );
  const css = skillCard.cardFactory(
    "/src/skills-section/assets/css.svg",
    "CSS3 logo",
    "CSS"
  );
  const webpack = skillCard.cardFactory(
    "/src/skills-section/assets/webpack.svg",
    "webpack logo",
    "Webpack"
  );
  const nodejs = skillCard.cardFactory(
    "/src/skills-section/assets/node-js.svg",
    "NodeJS logo",
    "NodeJS"
  );
  const typescript = skillCard.cardFactory(
    "/src/skills-section/assets/typescript.svg",
    "typescript logo",
    "Typescript"
  );
  const python = skillCard.cardFactory(
    "/src/skills-section/assets/python.svg",
    "python logo",
    "Python"
  );
  const django = skillCard.cardFactory(
    "/src/skills-section/assets/django.svg",
    "django logo",
    "Django"
  );
  const java = skillCard.cardFactory(
    "/src/skills-section/assets/java.svg",
    "java logo",
    "Java"
  );
  const vue = skillCard.cardFactory(
    "/src/skills-section/assets/vue-9.svg",
    "VueJS logo",
    "Vue"
  );

  //   // houses all the categories
  //   const skillsDiv = document.getElementById("skills");

  // ** categories of confidence
  const confident = document.getElementById("confident");
  confident.append(
    javascript.card,
    reactjs.card,
    html.card,
    css.card,
    webpack.card
  );

  const familiar = document.getElementById("familiar");
  familiar.append(
    nodejs.card,
    typescript.card,
    python.card,
    django.card,
    java.card
  );

  const future = document.getElementById("future");
  future.append(java.card, vue.card);
}
