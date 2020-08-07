let todos = [
  {
    completed: false,
    description: "Take Jim to the hair salon",
  },
  {
    completed: true,
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

function renderTodoApp() {
  let app = document.querySelector("#app");
  let h1 = document.createElement("h1");
  let unorderedList = document.createElement("ul");

  // your code here

  h1.innerText = "Todo List";

  app.appendChild(h1);
  h1.appendChild(unorderedList);
  // and maybe some here
  for (i = 0; i < todos.length; i++) {
    let itemDescription = todos[i].description;
    let itemCompleted = todos[i].completed ? "checked" : "";
    let markUp = `
        <li><input type="checkbox" ${itemCompleted}/>${itemDescription}
        </li>
        `;
    unorderedList.innerHTML += markUp;
  }
}
renderTodoApp();
