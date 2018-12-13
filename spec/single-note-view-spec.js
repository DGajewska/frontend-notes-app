var note;
var singleNoteView;

note = new Note("Hello");
singleNoteView = new SingleNoteView(note);
test("Single note view takes note and adds HTML tags",
    anticipate.toBeTheSame(singleNoteView.createHTMLString(),"<div>Hello</div>"))
