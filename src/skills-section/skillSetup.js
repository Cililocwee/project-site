import skillCard from "./skillCard";

export default function setupSkills() {
  // ** Skill cards
  // src alt label

  const javascript = skillCard.cardFactory(
    "/src/skills-section/assets/javascript.svg",
    "javascript logo",
    "Javascript"
  ).card;
  const reactjs = skillCard.cardFactory(
    "/src/skills-section/assets/reactjs.svg",
    "reactjs logo",
    "React"
  ).card;
  const html = skillCard.cardFactory(
    "/src/skills-section/assets/HTML5.svg",
    "HTML5 logo",
    "HTML"
  ).card;
  const css = skillCard.cardFactory(
    "/src/skills-section/assets/css.svg",
    "CSS3 logo",
    "CSS"
  ).card;
  const webpack = skillCard.cardFactory(
    "/src/skills-section/assets/webpack.svg",
    "webpack logo",
    "Webpack"
  ).card;
  const nodejs = skillCard.cardFactory(
    "/src/skills-section/assets/node-js.svg",
    "NodeJS logo",
    "NodeJS"
  ).card;
  const typescript = skillCard.cardFactory(
    "/src/skills-section/assets/typescript.svg",
    "typescript logo",
    "Typescript"
  ).card;
  const python = skillCard.cardFactory(
    "/src/skills-section/assets/python.svg",
    "python logo",
    "Python"
  ).card;
  const django = skillCard.cardFactory(
    "/src/skills-section/assets/django.svg",
    "django logo",
    "Django"
  ).card;
  const java = skillCard.cardFactory(
    "/src/skills-section/assets/java.svg",
    "java logo",
    "Java"
  ).card;
  const vue = skillCard.cardFactory(
    "/src/skills-section/assets/vue-9.svg",
    "VueJS logo",
    "Vue"
  ).card;

  const java2 = skillCard.cardFactory(
    "/src/skills-section/assets/java.svg",
    "java logo",
    "Java"
  ).card;

  // ** categories of confidence
  const confident = document.getElementById("confident");
  confident.append(javascript, reactjs, html, css, webpack);

  const familiar = document.getElementById("familiar");
  familiar.append(nodejs, typescript, python, django, java);

  const future = document.getElementById("future");
  future.append(vue, java2);
}
