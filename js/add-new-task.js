let newTaskTitle = "New Task";

function addNewTask(e) {
  const newTask = document.createElement("div");
  newTask.classList.add("task");

  const taskHeader = document.createElement("div");
  taskHeader.classList.add("task-title");
  taskHeader.innerText = newTaskTitle;

  const taskAction = document.createElement("button");
  taskAction.innerText = "X";

  newTask.appendChild(taskHeader);
  newTask.appendChild(taskAction);
}
