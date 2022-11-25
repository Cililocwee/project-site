const skillCard = (function () {
  function cardFactory(src, alt, label) {
    const card = document.createElement("div");
    card.classList.add("skillsdiv");

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.classList.add("skillslogo");

    const description = document.createElement("p");
    description.innerText = label;
    card.append(img, description);
    return { card };
  }

  return { cardFactory };
})();

export default skillCard;
