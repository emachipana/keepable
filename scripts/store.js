const initialNotes =[];
const trashNotes = [];

const notesFromStorage = JSON.parse(localStorage.getItem("notes"))
const notes = notesFromStorage || initialNotes;

