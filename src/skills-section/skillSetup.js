import skillCard from "./skillCard";
import jsIcon from "./icon-assets/javascript.svg";
import cssIcon from "./icon-assets/css.svg";
import djangoIcon from "./icon-assets/django.svg";
import htmlIcon from "./icon-assets/HTML5.svg";
import javaIcon from "./icon-assets/java.svg";
import nodejsIcon from "./icon-assets/node-js.svg";
import pythonIcon from "./icon-assets/python.svg";
import reactIcon from "./icon-assets/reactjs.svg";
import typescriptIcon from "./icon-assets/typescript.svg";
import vueIcon from "./icon-assets/vue-9.svg";
import webpackIcon from "./icon-assets/webpack.svg";

export default function setupSkills() {
  // ** Skill cards
  // src alt label

  const javascript = skillCard.cardFactory(
    jsIcon,
    "javascript logo",
    "Javascript"
  ).card;
  const reactjs = skillCard.cardFactory(
    reactIcon,
    "reactjs logo",
    "React"
  ).card;
  const html = skillCard.cardFactory(htmlIcon, "HTML5 logo", "HTML").card;
  const css = skillCard.cardFactory(cssIcon, "CSS3 logo", "CSS").card;
  const webpack = skillCard.cardFactory(
    webpackIcon,
    "webpack logo",
    "Webpack"
  ).card;
  const nodejs = skillCard.cardFactory(
    nodejsIcon,
    "NodeJS logo",
    "NodeJS"
  ).card;
  const typescript = skillCard.cardFactory(
    typescriptIcon,
    "typescript logo",
    "Typescript"
  ).card;
  const python = skillCard.cardFactory(
    pythonIcon,
    "python logo",
    "Python"
  ).card;
  const django = skillCard.cardFactory(
    djangoIcon,
    "django logo",
    "Django"
  ).card;
  const java = skillCard.cardFactory(javaIcon, "java logo", "Java").card;
  const vue = skillCard.cardFactory(vueIcon, "VueJS logo", "Vue").card;

  const java2 = skillCard.cardFactory(javaIcon, "java logo", "Java").card;

  // ** categories of confidence
  const confident = document.getElementById("confident");
  confident.append(javascript, reactjs, html, css, webpack);

  const familiar = document.getElementById("familiar");
  familiar.append(nodejs, typescript, python, django, java);

  const future = document.getElementById("future");
  future.append(vue, java2);
}
