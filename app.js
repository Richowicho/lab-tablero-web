const TAREAS = [
  { texto: "Clone the repository", hecha: true },
  { texto: "Create a branch", hecha: false },
  { texto: "Open a Pull Request", hecha: false },
];

function render() {
  const lista = document.querySelector("#lista");
  lista.innerHTML = "";
  TAREAS.forEach(function (t) {
    const li = document.createElement("li");
    li.className = t.hecha ? "tarea hecha" : "tarea";
    li.textContent = t.texto;
    lista.appendChild(li);
  });
}
function showEmptyState() {
  const notice = document.querySelector("#vacio");
  notice.hidden = TASKS.length > 0;
}

 function render() {
   // ... the body that already exists ...
  showEmptyState();
 }
render();
