import projectCard from "./projectCard";

export default function setupProjects() {
  // *** Project Cards
  // id desc live repo
  const projectA = projectCard.cardFactory(
    "projecta",
    `Uses the Openweather API to display releveant weather data based on location.`,
    "https://cililocwee.github.io/weather-app/",
    "https://github.com/Cililocwee/weather-app/"
  );

  const projectB = projectCard.cardFactory(
    "projectb",
    `Stores todo lists locally. Each note can be assigned a different urgency.`,
    "https://cililocwee.github.io/to-do-app/",
    "https://github.com/Cililocwee/to-do-app/"
  );

  const projectC = projectCard.cardFactory(
    "projectc",
    `A sign-up page for a fictional sect of knights. Uses client-side validation to dynamically format user information.`,
    "https://cililocwee.github.io/sign-up-form/",
    "https://github.com/Cililocwee/sign-up-form/"
  );

  const projectAlpha = projectCard.cardFactory(
    "projectalpha",
    `A simple one-page CV generator with editable fields. Made with React.`,
    "https://cililocwee.github.io/cv-generator/",
    "https://github.com/Cililocwee/cv-generator/"
  );

  const projectBeta = projectCard.cardFactory(
    "projectbeta",
    `A memory game made using React. Don't click the same picture twice!`,
    "https://cililocwee.github.io/memory-game/",
    "https://github.com/Cililocwee/memory-game/"
  );

  // ** Project list
  const projectlist = document.getElementById("projectlist");

  projectlist.append(
    projectAlpha.card,
    projectBeta.card,
    projectA.card,
    projectB.card,
    projectC.card
  );
}
