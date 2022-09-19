"use strict";

const REMOVE_BTN_STYLE = "delete-btn";
const HIDDEN_STYLE = "hidden";

const errNode = document.getElementById("error");
const listNode = document.getElementById("list");
const form = document.forms.addItem;
const { title } = form.elements;

listNode.addEventListener("click", (event) => {
  const isRemoveButton = event.target.classList.contains(REMOVE_BTN_STYLE);
  if (isRemoveButton) {
    event.target.closest("li").remove();
  }

  const isChecked = event.target.classList.contains("check-btn");
  if (isChecked) {
    const li = event.target.closest("li");
    li.classList.toggle("text-done");
    li.classList.toggle("list-group-item-success");
    li.classList.toggle("list-group-item-primary");

    const [btn] = li.getElementsByClassName(REMOVE_BTN_STYLE);
    btn.disabled = !btn.disabled;
  }
});

function addListItem(listNode, text) {
  const itemNode = document.createElement("li");
  itemNode.innerHTML = text;
  itemNode.className = "w-50 list-group-item list-group-item-primary";

  const btnNode = document.createElement("button");
  btnNode.className = "btn btn-danger float-right delete-btn";
  btnNode.innerHTML = "<i class='bi bi-trash'></i>";
  itemNode.append(btnNode);

  const checkNode = document.createElement("input");
  checkNode.type = "checkbox";
  checkNode.className = "mx-4 check-btn";
  itemNode.prepend(checkNode);

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