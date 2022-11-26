import "./projectMenu.css";

const projectMenu = (function () {
  //carousel wrapper
  const container = document.createElement("div");
  container.classList.add("container");
  container.classList.add("project-carousel");
  // container.classList.add("hidden");

  const projectHeader = document.createElement("h1");
  projectHeader.innerText = "Projects";

  container.append(projectHeader);

  // active image div
  const mainImage = document.createElement("div");
  mainImage.classList.add("main-img");

  // default image on page render
  const defaultImage = document.createElement("img");
  defaultImage.src = "/src/project-section/assets/pokemongame.jpeg";
  defaultImage.id = "current";
  defaultImage.alt = "active project";

  // scroll buttons
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("slide-buttons");

  const leftBtn = document.createElement("button");
  leftBtn.innerHTML = "&lsaquo;";
  leftBtn.id = "left-button";

  const rightBtn = document.createElement("button");
  rightBtn.innerHTML = "&rsaquo;";
  rightBtn.id = "right-button";

  buttonContainer.append(leftBtn, rightBtn);

  // preview images
  const previews = document.createElement("div");
  previews.classList.add("sub-imgs");
  previews.id = "sub-imgs";

  const previewAlpha = document.createElement("img");
  previewAlpha.src = "/src/project-section/assets/pokemongame.jpeg";
  previewAlpha.classList.add("preview-image");

  const previewBeta = document.createElement("img");
  previewBeta.src = "/src/project-section/assets/weather.jpg";
  previewBeta.classList.add("preview-image");

  const previewGamma = document.createElement("img");
  previewGamma.src = "/src/project-section/assets/todo.jpeg";
  previewGamma.classList.add("preview-image");

  const previewDelta = document.createElement("img");
  previewDelta.src = "/src/project-section/assets/signup.jpg";
  previewDelta.classList.add("preview-image");

  const previewEpsilon = document.createElement("img");
  previewEpsilon.src = "/src/project-section/assets/resumesite.jpeg";
  previewEpsilon.classList.add("preview-image");

  previews.append(
    previewAlpha,
    previewBeta,
    previewGamma,
    previewDelta,
    previewEpsilon
  );

  // building display
  mainImage.append(defaultImage);
  container.append(mainImage, buttonContainer, previews);

  // previews
  const imgs = previews.childNodes;

  // set main image opacity
  imgs[0].setAttribute("style", "opacity:0.6");

  // select images
  previews.addEventListener("click", (event) => {
    console.log(event.target);
    changeImageTo(event.target);
  });

  function changeImageTo(image) {
    imgs.forEach((img) => img.setAttribute("style", "opacity:1"));

    if (image.tagName === "IMG") {
      document.querySelector("#current").src = image.src;

      // add fade in class
      document.querySelector("#current").classList.add("fade-in");

      // remove fade-in after 0.5 seconds
      setTimeout(() => {
        document.querySelector("#current").classList.remove("fade-in");
      }, 500);

      //change the current image opacity
      image.setAttribute("style", "opacity:0.6");
    }
  }

  // selections
  leftBtn.addEventListener("click", leftScroll);
  rightBtn.addEventListener("click", rightScroll);

  // left/right functionality
  function leftScroll() {
    for (let i = 0; i < imgs.length; i++) {
      if (imgs[i].src === document.querySelector("#current").src) {
        let currIndex = i - 1;
        if (currIndex < 0) {
          currIndex += imgs.length;
        }
        changeImageTo(imgs[currIndex]);
        break;
      }
    }
  }

  function rightScroll() {
    for (let i = 0; i < imgs.length; i++) {
      if (imgs[i].src === document.querySelector("#current").src) {
        let currIndex = i + 1;
        if (currIndex > imgs.length - 1) {
          currIndex -= imgs.length;
        }
        changeImageTo(imgs[currIndex]);
        break;
      }
    }
  }

  return { container };
})();

export default projectMenu;
