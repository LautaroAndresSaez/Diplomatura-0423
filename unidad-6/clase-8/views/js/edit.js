document.addEventListener("DOMContentLoaded", () => {
  const noteToEdit = JSON.parse(localStorage.getItem("noteToEdit"));
  if (!noteToEdit) {
    alert("No hay una nota guardada para editar");
    window.location.href = "/index.html";
    return;
  }
  document.getElementById("editName").value = noteToEdit.name;
  document.getElementById("editNote").value = noteToEdit.note;
  document.getElementById("editColor").value = noteToEdit.color;
});

document.getElementById("editForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const noteToEdit = JSON.parse(localStorage.getItem("noteToEdit"));
  const name = document.getElementById("editName").value;
  const note = document.getElementById("editNote").value;
  const color = document.getElementById("editColor").value;
  const noteEdited = {
    name,
    note,
    color,
  };
  const response = await fetch(`/notes/${noteToEdit.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteEdited),
  });
  if (response.status !== 200) {
    alert("Ha ocurrido un error");
    return;
  }
  localStorage.removeItem("noteToEdit");
  window.location.href = "/index.html";
});
