var note;

note = new Note("Hi there");
test("viewNote to return the text of the note",
    anticipate.toBeTheSame(note.viewNote(), "Hi there"));
