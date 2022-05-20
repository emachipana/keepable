const initialNotes = [];
const trashNotes = [];

// title: "Task 1",
// content: "500",
// color: "#FFFFFF"
// },

const noteFromStorage = JSON.parse(localStorage.getItem("notes"))
const notes = noteFromStorage || initialNotes

const trashFromStorage = JSON.parse(localStorage.getItem("trash"))
const trash = trashFromStorage || trashNotes


