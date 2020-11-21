(function () {
  var sections = [
    {
      id: 1,
      title: "ToDo",
      description: "Tickets which need to be done",
      tasks: [
        {
          id: 1,
          title: "Footer component",
        },
        {
          id: 2,
          title: "Notification module",
        },
        {
          id: 3,
          title: "Salesforce",
        },
      ],
    },
    {
      id: 2,
      title: "Development",
      description: "Tickets which are being worked on",
      tasks: [
        {
          id: 1,
          title: "Header module",
        },
        {
          id: 2,
          title: "Custom High-charts",
        },
      ],
    },
  ];

  const boardContent = document.querySelector("#board-content");

  sections.forEach((elm) => {
    const newBoard = document.createElement("div");
    newBoard.classList.add("board");

    const newBoardHeader = document.createElement("div");
    newBoardHeader.classList.add("board-header");

    const newBoardHeaderTitle = document.createElement("div");
    newBoardHeaderTitle.classList.add("board-title");
    newBoardHeaderTitle.innerText = elm.title;

    const newBoardHeaderButton = document.createElement("button");
    newBoardHeaderButton.innerText = "Add New";

    newBoardHeader.appendChild(newBoardHeaderTitle);
    newBoardHeader.appendChild(newBoardHeaderButton);

    const newBoardContent = document.createElement("div");
    newBoardContent.classList.add("board-tasks");

    elm.tasks.forEach((value) => {
      const newTask = document.createElement("div");
      newTask.classList.add("task");

      const taskTitle = document.createElement("div");
      taskTitle.classList.add("task-title");
      taskTitle.innerText = value.title;

      const taskButton = document.createElement("button");
      taskButton.innerText = "X";

      newTask.appendChild(taskTitle);
      newTask.appendChild(taskButton);
      newBoardContent.appendChild(newTask);
    });

    newBoard.appendChild(newBoardHeader);
    newBoard.appendChild(newBoardContent);

    boardContent.appendChild(newBoard);
  });

  window.sections = sections;
})();
