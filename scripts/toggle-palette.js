const palette = document.querySelector(".note-palette");
const paletteIcon = document.querySelector(".palette-icon");

paletteIcon.addEventListener("click", (event) => {
    palette.classList.toggle("show-palette");
    event.target.classList.toggle("palette-selected");
})
