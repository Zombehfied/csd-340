/* Name: Lisa Raible
Date: October 31, 2026
Assignment: Module 11.2 - JavaScript - Part 3
*/

let tasks = [];

function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

tasks.push(task);

alert("Task added: " + task);

input.value = "";

displayTasks();
}

funtion deleteLastEnrty() {

  if (tasks.length === 0) {
    alert("There is no tasks to delete.");
    return;
  }

  let removedTask = tasks.pop();

  alert("Task deleted: " + removedTask);

  displayTasks();

}

function sortTasks() {

  tasks.sort((a, b) => a.localeCompare(b));

  alert("Your to-do list has been sorted.");

  displayTasks();
}

function displayTasks() {

  let taskList = document.getElementById("taskList");
  let emptyMessage = document.getElementById("emptyMessage");

  taskList.innerHTML = "";

  if (tasks.length === 0) {
    emptyMessage.style.display = "block";
  } else {
      emptyMessage.style.display = "none";
  }

  for (let i = 0; i < tasks.length; i++) {

    let listItem = document.createElement("li");

    listItem.textContent = tasks[i];

    taskList.appendChild(listItem);
  }
}
