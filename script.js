const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") addTask();
});

function showEmoji(emoji, x, y) {
  const el = document.createElement("div");
  el.className = "emoji";
  el.textContent = emoji;

  el.style.left = x + "px";
  el.style.top = y + "px";

  document.body.appendChild(el);

  setTimeout(() => el.remove(), 1000);
}

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

  li.querySelector(".delete-btn").addEventListener("click", (e) => {
    const rect = e.target.getBoundingClientRect();
    showEmoji("😢", rect.left, rect.top);

    setTimeout(() => li.remove(), 200);
  });

  li.querySelector("input").addEventListener("change", (e) => {
    li.classList.toggle("completed");

    const rect = e.target.getBoundingClientRect();
    showEmoji("🎉", rect.left, rect.top);
  });

  taskList.appendChild(li);
  input.value = "";
}
