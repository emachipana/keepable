const palette = document.querySelector(".note-palette");
const paletteIcon = document.querySelector(".palette-icon");
const cardNote = document.querySelector(".note");

paletteIcon.addEventListener("click", (event) => {
    palette.classList.toggle("show-palette");
    event.target.classList.toggle("palette-selected");
})

palette.addEventListener("click", (event) => {
    const color = `${event.target.getAttribute("data-color")}`;
    cardNote.style.backgroundColor = color;
})
