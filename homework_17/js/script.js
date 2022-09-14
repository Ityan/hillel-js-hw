"use strict";

const REMOVE_BTN_STYLE = "delete-btn";
const ERR_MSG_STYLE = "err-msg";
const ERR_ID = "error";

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

function displayEmptyFieldErr(previousNode) {
  const spanNode = document.createElement("span");
  spanNode.classList.add(ERR_MSG_STYLE);
  spanNode.innerHTML = "Input is empty";
  spanNode.setAttribute("id", ERR_ID);
  previousNode.parentNode.insertBefore(spanNode, previousNode.nextSibling);
}

form.onsubmit = (event) => {
  event.preventDefault();

  if (isEmptyField(title)) {
    displayEmptyFieldErr(title);
  } else {
    addListItem(listNode, title.value);
  }

  title.value = "";
};

title.oninput = () => {
  const errNode = document.getElementById(ERR_ID);

  if (errNode) {
    form.removeChild(errNode);
  }
};