const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Додати задачу
addBtn.addEventListener("click", addTask);

// Додати через Enter
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <div class="task-left">
      <input type="checkbox">
      <span>${text}</span>
    </div>
    <button class="delete-btn">✖</button>
  `;

  // Видалення
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  // Виконано
  li.querySelector("input").addEventListener("change", () => {
    li.classList.toggle("completed");
  });

  taskList.appendChild(li);
  input.value = "";
}