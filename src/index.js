import css from "./style.css"

const dropdownheaders = document.querySelectorAll('.dropdownheader');

for (let i = 0; i < dropdownheaders.length; i++) {
  dropdownheaders[i].addEventListener('click', () =>{
    dropdownheaders[i].nextElementSibling.classList.toggle('hidden');
  })
}




const aboutcut = document.querySelector(".aboutcut");
aboutcut.onclick = document.getElementById("about").scrollIntoView;

const returntotop = document.querySelector(".returntotop");
returntotop.addEventListener('click', () =>{
    document.getElementById("introduction").scrollIntoView();
})
