async function fetchNotes() {
  const response = await fetch("/notes");
  const notes = await response.json();
  return notes;
}

async function editNote(note) {
  localStorage.setItem(
    "noteToEdit",
    JSON.stringify({
      id: note.id,
      name: note.name,
      note: note.note,
      color: note.color,
    })
  );
  window.location.href = "/note-edit.html";
}

function createNoteHTML(note) {
  return `
  <li class="card">
      <div class="card-body">
        <div class="card-header">
          <h3 class="card-title">${note.name}</h5>
          <button data-note-id="${note.id}" class="boton-editar">Editar</button>
        </div>
        <p class="card-text">Nota: ${note.note}</p>
        <p class="card-color">Color: <span class="color-span" style="background-color: ${note.color}"></span></p>
      </div>
  </li>
  `;
}

document.addEventListener("DOMContentLoaded", async () => {
  const notes = await fetchNotes();
  const notesNodo = document.getElementById("notes");
  notesNodo.innerHTML = notes.map((note) => createNoteHTML(note)).join("");
  notesNodo.addEventListener("click", (event) => {
    const clickedelement = event.target;
    if (event.target.classList.contains("boton-editar")) {
      const noteId = clickedelement.getAttribute("data-note-id");
      const note = notes.find((note) => note.id.toString() === noteId);
      editNote(note);
    }
  });
});
