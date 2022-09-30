"use strict";

import addListItem from "./listNodeHelper";
import "../css/style.css";

const REMOVE_BTN_STYLE = "delete-btn";
const HIDDEN_STYLE = "hidden";

const errNode = document.getElementById("error");
const listNode = document.getElementById("list");
const form = document.forms.addItem;
const { title } = form.elements;

listNode.addEventListener("click", (event) => {
  if (event.target.classList.contains(REMOVE_BTN_STYLE)) {
    event.target.closest("li").remove();
  }
});

listNode.addEventListener("change", (event) => {
  if (event.target.classList.contains("check-btn")) {
    const li = event.target.closest("li");
    li.classList.toggle("text-done");
    li.classList.toggle("list-group-item-success");
    li.classList.toggle("list-group-item-primary");

    const [btn] = li.getElementsByClassName(REMOVE_BTN_STYLE);
    btn.disabled = !btn.disabled;
  }
});

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