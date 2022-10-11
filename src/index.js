import css from "./style.css"

const dropdownheaders = document.querySelectorAll('.dropdownheader');

for (let i = 0; i < dropdownheaders.length; i++) {
  dropdownheaders[i].addEventListener('click', () =>{
    dropdownheaders[i].nextElementSibling.classList.toggle('hidden');
  })
}




const aboutcut = document.querySelector(".aboutcut");
aboutcut.addEventListener('click', () =>{
    document.getElementById("about").scrollIntoView();
})

const skillscut = document.querySelector(".skillscut");
skillscut.addEventListener('click', () =>{
    document.getElementById("skills").scrollIntoView();
})

const projectscut = document.querySelector(".projectscut");
projectscut.addEventListener('click', () =>{
    document.getElementById("projects").scrollIntoView();
})

const contactcut = document.querySelector(".contactcut");
contactcut.addEventListener('click', () =>{
    document.getElementById("contact").scrollIntoView();
})

const returntotop = document.querySelector(".returntotop");
returntotop.addEventListener('click', () =>{
    document.getElementById("introduction").scrollIntoView();
})
