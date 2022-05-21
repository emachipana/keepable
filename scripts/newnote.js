const form = document.querySelector(".js-form")
form.addEventListener("submit",(event) => {
  event.preventDefault();
  const dataNote = {
    title: event.target.textTitle.value,
    content: event.target.textArea.value,
    color: event.target.colorText.value
    }

    notes.push(dataNote);
    localStorage.setItem("notes", JSON.stringify(notes));
    event.target.style.backgroundColor = "#FFFFFF";
    event.target.colorText.value = "#FFFFFF";
    renderNotes(notes);
}) 
