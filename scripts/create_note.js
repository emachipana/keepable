function createNote(note) {

    // Create elements
    const divNote = document.createElement("div");;
    const noteContent = document.createElement("div");
    const noteTitle = document.createElement("h2");
    const noteText = document.createElement("p");
    const noteIcons = document.createElement("div");
    const notePalette = document.createElement("ul");
    const paletteIcon = addIconNote("palette-icon","images/paleta.png","palette-icon");
    const trashIcon = addIconNote("note-icon-filter","images/trash.png","trash-icon");
    notePalette.innerHTML = 
    `<li data-color="#FFFFFF" class="FFFFFF"></li>
    <li data-color="#F28B82" class="F28B82"></li>
    <li data-color="#FBBC04" class="FBBC04"></li>
    <li data-color="#FFF475" class="FFF475"></li>
    <li data-color="#CCFF90" class="CCFF90"></li>
    <li data-color="#A7FFEB" class="A7FFEB"></li>
    <li data-color="#CBF0F8" class="CBF0F8"></li>
    <li data-color="#AECBFA" class="AECBFA"></li>
    <li data-color="#D7AEFB" class="D7AEFB"></li>
    <li data-color="#FDCFE8" class="FDCFE8"></li>`;

    // Setup elements
    notePalette.classList.add("note-palette");
    noteIcons.classList.add("note-icons");
    noteText.classList.add("note-text");
    noteText.textContent = note.content;
    noteTitle.classList.add("note-title");
    noteTitle.textContent = note.title;
    noteContent.classList.add("note-content");
    divNote.classList.add("note");
    divNote.style.backgroundColor = note.color;

    // Build template
    noteIcons.append(paletteIcon, trashIcon);
    noteContent.append(noteTitle, noteText);
    divNote.append(noteContent,noteIcons,notePalette);
    
  
    // Event listeners
    paletteIcon.addEventListener("click", (event) => {
        notePalette.classList.toggle("show-palette");
        event.target.classList.toggle("palette-selected");
    })

    notePalette.addEventListener("click", (event) => {
        const color = `${event.target.getAttribute("data-color")}`;
        note.color = color;
        localStorage.setItem("notes", JSON.stringify(notes));
        renderNotes(notes);
    })
    
    return divNote
};

function renderNotes(notes) {
    const containerNotes= document.querySelector(".js-container-notes");
    containerNotes.innerHTML = "";
    notes.forEach( note => {
        const noteElement = createNote(note);
        containerNotes.append(noteElement);
    });
};

renderNotes(notes);
