function createNote(note, groupNotes, type, trashNotes) {

    // Create elements
    const divNote = document.createElement("div");;
    const noteContent = document.createElement("div");
    const noteTitle = document.createElement("h2");
    const noteText = document.createElement("p");
    const noteIcons = document.createElement("div");
    let paletteIcon = null;
    let trashIcon = null;
    if (type == "notes") {
        paletteIcon = addPaletteIcon(note, groupNotes, trashNotes);
        trashIcon = addTrashIconIndex(note, trashNotes, groupNotes);
        noteIcons.append(paletteIcon[0], trashIcon);
        divNote.append(noteContent,noteIcons,paletteIcon[1]);
    } else if (type == "trash") {
        recoverIcon = addRecoverIcon(note,groupNotes,trashNotes);
        trashIcon = addTrashIcon(note,groupNotes,trashNotes);
        noteIcons.append(recoverIcon, trashIcon);
        divNote.append(noteContent,noteIcons);
    }
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
    
    noteContent.append(noteTitle, noteText);

    return divNote
};

function renderNotes(notes, type, trashNotes) {
    const containerNotes= document.querySelector(".js-container-notes");
    containerNotes.innerHTML = "";
    if (notes.length < 1) {
        const textEmpty = document.createElement("h1");
        textEmpty.textContent = "No notes to keep!";
        textEmpty.classList.add("text-empty");
        containerNotes.append(textEmpty);
    }else {
        notes.forEach( note => {
            const noteElement = createNote(note,notes, type, trashNotes);
            containerNotes.prepend(noteElement);
        });
    }
};
