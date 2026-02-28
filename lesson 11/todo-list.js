const todoList = [
  {
    name: "Make Dinner",
    dueDate: "2026-12-22",
  },
  { name: "Make Dinner", dueDate: "2026-02-22" },
];

renderTodoList();

function renderTodoList() {
  let todoListHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    " class="bg-red-600 border-2 border-red-600 px-6 py-1 text-white cursor-pointer">Delete</button>
    `;
    todoListHtml += html;
  }

  document.querySelector("#display-todo").innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector("#input-box");
  const name = inputElement.value;

  const dateInputElement = document.querySelector("#dueDate-input");

  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate,
  });

  inputElement.value = "";

  renderTodoList();
}
