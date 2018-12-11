// var note = new Note();
//
// console.log("Note text matches text attribute")
// note.createNote("this is my note");
// console.log(anticipate.toBeTheSame("this is my note", note.text));

console.log("Note to be included in NoteList")
var noteList = new NoteList();
noteList.addNote("Hello");
console.log(anticipate.toBeTheSame(noteList.notes[0].text, "Hello"));
