import css from "./style.css";
import projectMenu from "./project-section/projectCarousel";
import setupProjects from "./project-section/projectSetup";
import setupSkills from "./skills-section/skillSetup";

const dropdownheaders = document.querySelectorAll(".dropdownheader");

for (let i = 0; i < dropdownheaders.length; i++) {
  dropdownheaders[i].addEventListener("click", () => {
    dropdownheaders[i].nextElementSibling.classList.toggle("hidden");
  });
}

const aboutcut = document.querySelector(".aboutcut");
aboutcut.addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

const skillscut = document.querySelector(".skillscut");
skillscut.addEventListener("click", () => {
  document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
});

const projectscut = document.querySelector(".projectscut");
projectscut.addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

const contactcut = document.querySelector(".contactcut");
contactcut.addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

const returntotop = document.querySelector(".returntotop");
returntotop.addEventListener("click", () => {
  document
    .getElementById("introduction")
    .scrollIntoView({ behavior: "smooth" });
});

const intro = document.querySelector(".content");
intro.appendChild(projectMenu.container);

// ** Sets up the skills section
setupSkills();

// ** Sets up the project section
setupProjects();
