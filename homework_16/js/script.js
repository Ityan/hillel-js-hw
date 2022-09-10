"use strict";

const ITEM_STYLE = "album-title";
const BTN_STYLE = "delete-btn";
const albumsNode = document.getElementById("albums");

albumsNode.addEventListener("click", (event) => {
  if (event.target.className === BTN_STYLE) {
    event.target.parentNode.remove();
  }
});

function addListItem(listNode, title) {
  const itemNode = document.createElement("li");
  itemNode.innerHTML = title;
  itemNode.classList.add(ITEM_STYLE);

  const btnNode = document.createElement("button");
  btnNode.classList.add(BTN_STYLE);
  btnNode.innerHTML = "X";
  itemNode.prepend(btnNode);

  listNode.append(itemNode);
}

fetch("https://jsonplaceholder.typicode.com/albums")
  .then(response => response.json())
  .then(data => data.forEach(item => addListItem(albumsNode, item.title)))
  .catch(err => console.error(err.message));
