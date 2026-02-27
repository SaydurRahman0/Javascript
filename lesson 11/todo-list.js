const todoList = ["mina", "saied"];

renderTodoList();
function renderTodoList() {
  let todoListHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];

    const html = `<p>${todo}</p>`;
    todoListHtml += html;
  }

  const displayTodoList = document.querySelector(".display-todo");

  displayTodoList.innerHTML = todoList;
}

function addTodo() {
  const inputElement = document.querySelector(".input-box");
  const name = inputElement.value;
  //   const displayTxt = document.querySelector(".display-txt");

  todoList.push(name);

  inputElement.value = "";

  renderTodoList();
}
