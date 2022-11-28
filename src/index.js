import css from "./style.css";
import navbarCss from "./navBar.css";
import setupProjects from "./project-section/projectSetup";
import setupSkills from "./skills-section/skillSetup";

const dropdownheaders = document.querySelectorAll(".dropdownheader");

for (let i = 0; i < dropdownheaders.length; i++) {
  dropdownheaders[i].addEventListener("click", () => {
    dropdownheaders[i].nextElementSibling.classList.toggle("hidden");
  });
}

const introductioncut = document.getElementById("introbtn");
introductioncut.addEventListener("click", () => {
  document
    .getElementById("introduction")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});

const aboutcut = document.getElementById("aboutbtn");
aboutcut.addEventListener("click", () => {
  document
    .getElementById("about")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});

const skillscut = document.getElementById("skillsbtn");
skillscut.addEventListener("click", () => {
  document
    .getElementById("skills")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});

const projectscut = document.getElementById("projectsbtn");
projectscut.addEventListener("click", () => {
  document
    .getElementById("projects")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});

const contactcut = document.getElementById("contactbtn");
contactcut.addEventListener("click", () => {
  document
    .getElementById("contact")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});

// const returntotop = document.querySelector(".returntotop");
// returntotop.addEventListener("click", () => {
//   document
//     .getElementById("introduction")
//     .scrollIntoView({ behavior: "smooth", block: "center" });
// });

// ** Sets up the skills section
setupSkills();

// ** Sets up the project section
setupProjects();
