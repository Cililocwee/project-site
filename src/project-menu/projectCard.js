const projectCard = (function (id, description, live, repo) {
  function cardFactory(id, description, live, repo) {
    const card = document.createElement("div");
    card.id = id;
    card.classList.add("project");

    const descriptionLayer = document.createElement("div");
    descriptionLayer.innerText = description;
    descriptionLayer.classList.add("description");

    const links = document.createElement("div");
    links.classList.add("linkbuttons");

    const liveDiv = document.createElement("div");
    const liveLink = document.createElement("a");
    liveDiv.append(liveLink);
    liveLink.innerText = "Live";
    liveLink.href = live;

    const repoDiv = document.createElement("div");
    const repoLink = document.createElement("a");
    repoDiv.append(repoLink);
    repoLink.innerText = "Repo";
    repoLink.href = repo;

    links.append(liveDiv, repoDiv);
    descriptionLayer.append(links);
    card.append(descriptionLayer);
    return { card };
  }

  return { cardFactory };
})();

export default projectCard;
