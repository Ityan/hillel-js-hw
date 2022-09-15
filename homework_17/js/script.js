"use strict";

const REMOVE_BTN_STYLE = "delete-btn";
const HIDDEN_STYLE = "hidden";

const errNode = document.getElementById("error");
const listNode = document.getElementById("list");
const form = document.forms.addItem;
const { title } = form.elements;

listNode.addEventListener("click", (event) => {
  if (event.target.className === REMOVE_BTN_STYLE) {
    event.target.parentNode.remove();
  }
});

function addListItem(listNode, text) {
  const itemNode = document.createElement("li");
  itemNode.innerHTML = text;

  const btnNode = document.createElement("button");
  btnNode.classList.add(REMOVE_BTN_STYLE);
  btnNode.innerHTML = "X";
  itemNode.prepend(btnNode);

  listNode.append(itemNode);
}

function isEmptyField(field) {
  return field.value.trim().length === 0;
}

form.onsubmit = (event) => {
  event.preventDefault();

  if (isEmptyField(title)) {
    errNode.classList.remove(HIDDEN_STYLE);
  } else {
    addListItem(listNode, title.value);
  }

  title.value = "";
};

title.oninput = () => {
  if (!errNode.classList.contains(HIDDEN_STYLE)) {
    errNode.classList.add(HIDDEN_STYLE);
  }
};