var note;

note = new Note("Hi there");
test("viewId to return the id of the note",
    anticipate.toBeTheSame(note.viewId(), 0));

note = new Note("Hi there");
console.log(note.id);
otherNote = new Note("Hi");
console.log(otherNote.id);
test("viewId to return the id of the note",
    anticipate.toBeTheSame(otherNote.viewId(), 2));

note = new Note("Hi there");

test("viewNote to return the text of the note",
anticipate.toBeTheSame(note.viewNote(), "Hi there"));
