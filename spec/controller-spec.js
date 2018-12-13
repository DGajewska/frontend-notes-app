var noteList;
var controller;

noteList = new NoteList();
controller = new Controller(noteList);

test("A new controller can be instantiated",
    anticipate.toBeTheSame(controller.noteList, noteList));
