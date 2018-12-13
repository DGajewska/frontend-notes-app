var noteList;
var noteListView;

noteList = new NoteList();
noteListView = new NoteListView(noteList);
test("NoteListView has noteList in it's array",
      anticipate.toBeTheSame(noteListView.notesToView, noteList))

noteList = new NoteList();
noteList.addNote("Hello World");
noteList.addNote("Goodbye World");
noteList.addNote("Just Kidding");
noteListView = new NoteListView(noteList);
test("NoteListView creates HTML string to view online",
  anticipate.toBeTheSame(noteListView.createHTMLString(),
  "<ul><li><div>Hello World</div></li><li><div>Goodbye World</div></li><li><div>Just Kidding</div></li></ul>"));

noteList = new NoteList();
noteListView = new NoteListView(noteList);
test("Handle a noteList with no notes",
  anticipate.toBeTheSame(noteListView.createHTMLString(),
  "No notes contained in this list"));


noteList = new NoteList();
noteList.addNote("Hello World");
noteListView = new NoteListView(noteList);
test("Handle a noteList with one note",
  anticipate.toBeTheSame(noteListView.createHTMLString(),
  "<ul><li><div>Hello World</div></li></ul>"));
