var noteList;

noteList = new NoteList();
test("noteList is initialised with empty notes array",
      anticipate.isEmptyArray(noteList.notes));

noteList = new NoteList();
noteList.addNote("Hello");
test("Note text to be included in NoteList",
      anticipate.toBeTheSame(noteList.notes[0].text, "Hello"));
