const items = ["Candles", "Decorations", "Chocolate"];
const checklist = document.getElementById("checklist");
const btnAddItem = document.querySelector(".btn-add-item");
let btnDelItems;
// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.
function createItems() {
  return items
    .map((item, idx) => {
      return item
        ? ` <div class="checklist-item">
        <input type="checkbox" id="${item}" name="${item}" value="${item}" />
        <label for="${item}" class="strikethrough">${item}</label>
        <i class="fas fa-trash btn-delete-item" data-id="${idx}"></i>
        </div>
        `
        : undefined;
    })
    .join("");
}

function renderItems() {
  checklist.innerHTML = createItems();
  btnDelItems = document.querySelectorAll(".btn-delete-item");
  addDelHandlers();
}

renderItems();
// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

function addItem() {
  const newItem = document.querySelector(".form-new-item").value;
  //   console.log(btnAddItem, newItem);
  items.push(newItem);
  renderItems();
  //   console.log(items);
}
btnAddItem.addEventListener("click", addItem);

// console.log(items);
function deleteItem(id) {
  items[id] = undefined;
  renderItems();
}
function deleteItemHandler(e) {
  {
    e.preventDefault();

    const itemId = e.target.dataset.id;
    const parent = e.target.closest(".checklist-item");
    parent.remove();
    // console.log("To be removed:", items[itemId]);
    deleteItem(itemId);
    // console.log("Items: ", items);
  }
}

function addDelHandlers() {
  btnDelItems.forEach((item) =>
    item.addEventListener("click", deleteItemHandler)
  );
}
