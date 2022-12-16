import projectCard from "./projectCard";

export default function setupProjects() {
  // *** Project Cards
  // id desc live repo
  const projectA = projectCard.cardFactory(
    "projecta",
    `Uses the Openweather API to display releveant weather data based on location.`,
    "https://cililocwee.github.io/weather-app/",
    "https://github.com/Cililocwee/weather-app/"
  ).card;

  const projectB = projectCard.cardFactory(
    "projectb",
    `Stores todo lists locally. Each note can be assigned a different urgency.`,
    "https://cililocwee.github.io/to-do-app/",
    "https://github.com/Cililocwee/to-do-app/"
  ).card;

  const projectC = projectCard.cardFactory(
    "projectc",
    `A sign-up page for a fictional sect of knights. Uses client-side validation to dynamically format user information.`,
    "https://cililocwee.github.io/sign-up-form/",
    "https://github.com/Cililocwee/sign-up-form/"
  ).card;

  const projectAlpha = projectCard.cardFactory(
    "projectalpha",
    `A simple one-page CV generator with editable fields. Made with React.`,
    "https://cililocwee.github.io/cv-generator/",
    "https://github.com/Cililocwee/cv-generator/"
  ).card;

  const projectBeta = projectCard.cardFactory(
    "projectbeta",
    `A memory game made using React. Don't click the same picture twice!`,
    "https://cililocwee.github.io/memory-game/",
    "https://github.com/Cililocwee/memory-game/"
  ).card;

  const projectGamma = projectCard.cardFactory(
    "projectgamma",
    `A storefront using React with Router. Has persistent cart across pages using React's Context API.`,
    "https://cililocwee.github.io/store-front/",
    "https://github.com/Cililocwee/store-front/"
  ).card;

  // ** Project list
  const projectlist = document.getElementById("projectlist");

  projectlist.append(
    projectAlpha,
    projectBeta,
    projectA,
    projectB,
    projectC,
    projectGamma
  );
}
