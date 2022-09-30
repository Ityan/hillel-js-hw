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

export default addListItem;