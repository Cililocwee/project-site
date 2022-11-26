import skillCard from "./skillCard";

export default function setupSkills() {
  // ** Skill cards
  // src alt label

  const javascript = skillCard.cardFactory(
    "/dist/icon-assets/javascript.svg",
    "javascript logo",
    "Javascript"
  ).card;
  const reactjs = skillCard.cardFactory(
    "/dist/icon-assets/reactjs.svg",
    "reactjs logo",
    "React"
  ).card;
  const html = skillCard.cardFactory(
    "/dist/icon-assets/HTML5.svg",
    "HTML5 logo",
    "HTML"
  ).card;
  const css = skillCard.cardFactory(
    "/dist/icon-assets/css.svg",
    "CSS3 logo",
    "CSS"
  ).card;
  const webpack = skillCard.cardFactory(
    "/dist/icon-assets/webpack.svg",
    "webpack logo",
    "Webpack"
  ).card;
  const nodejs = skillCard.cardFactory(
    "/dist/icon-assets/node-js.svg",
    "NodeJS logo",
    "NodeJS"
  ).card;
  const typescript = skillCard.cardFactory(
    "/dist/icon-assets/typescript.svg",
    "typescript logo",
    "Typescript"
  ).card;
  const python = skillCard.cardFactory(
    "/dist/icon-assets/python.svg",
    "python logo",
    "Python"
  ).card;
  const django = skillCard.cardFactory(
    "/dist/icon-assets/django.svg",
    "django logo",
    "Django"
  ).card;
  const java = skillCard.cardFactory(
    "/dist/icon-assets/java.svg",
    "java logo",
    "Java"
  ).card;
  const vue = skillCard.cardFactory(
    "/dist/icon-assets/vue-9.svg",
    "VueJS logo",
    "Vue"
  ).card;

  const java2 = skillCard.cardFactory(
    "/dist/icon-assets/java.svg",
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
