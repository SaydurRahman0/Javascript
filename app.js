const showTodo = document.querySelector("#showTodo");

let todoArray = [
  {
    getText: "Genimi AI",
    getDate: "10/10/2026",
  },
  {
    getText: "ChatGpt",
    getDate: "12/12/2026",
  },
];

renderTodoList();

function renderTodoList() {
  let displayHTMLText = "";
  for (let index = 0; index < todoArray.length; index++) {
    const todo = todoArray[index];
    const { getText, getDate } = todo;
    const html = `
    <p>${getText}</p>
    <p>${getDate}</p>
    <button class="bg-red-600 text-white" id="delete-button">Delete</button>
    `;
    displayHTMLText += html;
  }
  showTodo.innerHTML = displayHTMLText;

  document.querySelectorAll("#delete-button").forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => {
      todoArray.splice(index, 1);
      renderTodoList();
    });
  });
}

function submitHandler() {
  const inputElement = document.querySelector("#inputBox");
  const dueDate = document.querySelector("#dueDate");

  const getText = inputElement.value;
  const getDate = dueDate.value;

  inputElement.value = "";
  dueDate.value = "";

  todoArray.push({
    getText,
    getDate,
  });
  renderTodoList();
}
