import addTask from "../src/addTask.js";

let todos = [];

const add = document.getElementById("addTask");

add.addEventListener("click", addTask);

// window.addEventListener("load", () => {
// 	todos = JSON.parse(localStorage.getItem("todos")) || [];
// 	todos.forEach((todo) => {});
// });
