"use strict";

const STYLE = "album_title";
const albumsNode = document.getElementById('albums');

function addListItem(listNode, styleClass, title) {
  const itemNode = document.createElement('li');
  itemNode.innerHTML = title;
  itemNode.classList.add(styleClass);
  listNode.append(itemNode);
}

fetch("https://jsonplaceholder.typicode.com/albums")
  .then(response => response.json())
  .then(data => data.forEach(item => addListItem(albumsNode, STYLE, item.title)))
  .catch(err => console.error(err.message));
