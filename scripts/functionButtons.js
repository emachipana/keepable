
function addIconNote(className,src,alt) {
  const iconImg = new Image(34, 34);
  iconImg.src = src;
  iconImg.alt= alt;
  iconImg.classList.add(className);

  return iconImg
};

function addPaletteIcon(note, groupNotes) {
  const paletteIcon = addIconNote("palette-icon", "images/paleta.png", "palette-con")
  const notePalette = document.createElement("ul");
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
  // setup
    notePalette.classList.add("note-palette");

    paletteIcon.addEventListener("click", (event) => {
      notePalette.classList.toggle("show-palette");
      event.target.classList.toggle("palette-selected");
  })

  notePalette.addEventListener("click", (event) => {
      const color = `${event.target.getAttribute("data-color")}`;
      note.color = color;
      localStorage.setItem("notes", JSON.stringify(groupNotes));
      renderNotes(groupNotes);
  })
  

return [paletteIcon, notePalette]

}

function addTrashIconIndex(note, trashNotes, groupNotes) {
  const trashIcon = addIconNote("note-icon-filter","images/trash.png","trash-icon");

  trashIcon.addEventListener("click", () => {
    const index = groupNotes.indexOf(note);
    trashNotes.push(groupNotes[index]);
    groupNotes.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(groupNotes));
    localStorage.setItem("trash", JSON.stringify(trashNotes));
    renderNotes(groupNotes);
})
  return trashIcon
}


function addRecoverIcon() {
  
}

function addTrashIcon() {
  
}


