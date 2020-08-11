let todos = [
  {
    completed: false,
    description: "Take Jim to the hair salon",
  },
  {
    completed: false,
    description: "Drop off wedding invitation at mailbox",
  },
  {
    completed: false,
    description: "Pick up the cake",
  },
  {
    completed: false,
    description: "Call the caterers",
  },
];

let app = document.querySelector("#app");
let h1 = document.createElement("h1");
let unorderedList = document.createElement("ul");
unorderedList.style.listStyleType = "none";

h1.innerText = "Todo List";

app.appendChild(h1);
h1.appendChild(unorderedList);

function renderTodoApp() {
  unorderedList.innerHTML = " ";
  for (index = 0; index < todos.length; index++) {
    let itemDescription = todos[index].description;
    let itemCompleted = todos[index].completed ? "checked" : "";
    let markUp = `
        <li><input type="checkbox" ${itemCompleted}/>${itemDescription}
        </li>
        `;
    unorderedList.innerHTML += markUp;
  }
}

let inputElement = document.querySelector("#btninput");
let buttonElement = document.querySelector("#btnsubmit");

function onButtonClick() {
  let toDoTask = { completed: false, description: inputElement.value };
  todos.push(toDoTask);
  renderTodoApp();
}

buttonElement.addEventListener("click", onButtonClick);

renderTodoApp();
