const initialNotes = [];
const trashNotes = [];

const notesFromStorage = JSON.parse(localStorage.getItem("notes"))
const notes = notesFromStorage || initialNotes;

const trashFromStorage = JSON.parse(localStorage.getItem("trash"))
const trashGroupNotes = trashFromStorage || trashNotes;
