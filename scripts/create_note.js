function createNote(note, groupNotes, trashNotes = trashGroupNotes) {

    // Create elements
    const divNote = document.createElement("div");;
    const noteContent = document.createElement("div");
    const noteTitle = document.createElement("h2");
    const noteText = document.createElement("p");
    const noteIcons = document.createElement("div");
    const paletteIcon = addPaletteIcon(note, groupNotes);
    const trashIcon = addTrashIconIndex(note, trashNotes, groupNotes);
    
    // Setup elements
    noteIcons.classList.add("note-icons");
    noteText.classList.add("note-text");
    noteText.textContent = note.content;
    noteTitle.classList.add("note-title");
    noteTitle.textContent = note.title;
    noteContent.classList.add("note-content");
    divNote.classList.add("note");
    divNote.style.backgroundColor = note.color;

    // Build template
    noteIcons.append(paletteIcon[0], trashIcon);
    noteContent.append(noteTitle, noteText);
    divNote.append(noteContent,noteIcons,paletteIcon[1]);

    return divNote
};

function renderNotes(notes) {
    const containerNotes= document.querySelector(".js-container-notes");
    containerNotes.innerHTML = "";
    if (notes.length < 1) {
        const textEmpty = document.createElement("h1");
        textEmpty.textContent = "No notes to keep!";
        textEmpty.classList.add("text-empty");
        containerNotes.append(textEmpty);
    }else {
        notes.forEach( note => {
            const noteElement = createNote(note, notes);
            containerNotes.prepend(noteElement);
        });
    }
};
