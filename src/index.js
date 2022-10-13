import css from "./style.css"
import githublogo from "./github.svg"
import linkedinlogo from "./linkedin.svg"
import background from "./background2.jpg"
import htmllogo from "./HTML5.svg"
import jslogo from "./javascript.svg"
import pythonlogo from "./python.svg"
import nodejs from "./node-js.svg"

const dropdownheaders = document.querySelectorAll('.dropdownheader');

for (let i = 0; i < dropdownheaders.length; i++) {
  dropdownheaders[i].addEventListener('click', () =>{
    dropdownheaders[i].nextElementSibling.classList.toggle('hidden');
  })
}


const aboutcut = document.querySelector(".aboutcut");
aboutcut.addEventListener('click', () =>{
    document.getElementById("about").scrollIntoView({ behavior: 'smooth'});
})

const skillscut = document.querySelector(".skillscut");
skillscut.addEventListener('click', () =>{
    document.getElementById("skills").scrollIntoView({ behavior: 'smooth'});
})

const projectscut = document.querySelector(".projectscut");
projectscut.addEventListener('click', () =>{
    document.getElementById("projects").scrollIntoView({ behavior: 'smooth'});
})

const contactcut = document.querySelector(".contactcut");
contactcut.addEventListener('click', () =>{
    document.getElementById("contact").scrollIntoView({ behavior: 'smooth'});
})

const returntotop = document.querySelector(".returntotop");
returntotop.addEventListener('click', () =>{
    document.getElementById("introduction").scrollIntoView({ behavior: 'smooth'});
})
