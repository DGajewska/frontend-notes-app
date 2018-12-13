
(function(exports){
  function Controller(noteList){
    this.noteList = noteList;
    this.noteList.addNote("Hello World")
    this.noteList.addNote("Hi")
    this.noteList.addNote("Cyber Dragon")
    }

  Controller.prototype.getHTML = function () {
    document.addEventListener("DOMContentLoaded", function(){
      notesToDisplay = new NoteListView(noteList);
      document.getElementById('app').innerHTML = notesToDisplay.createHTMLString();
      makeUrlChangeShowNoteForCurrentPage();
    });
  };

  function makeUrlChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
  };

  function getNoteFromUrl(location) {
    return location.hash.split("#notes/")[1];
  };

  function showNote(noteId) {
    note = controller.noteList.notes.filter(note => note.id == noteId);
    noteView = new SingleNoteView(note[0]);
    document.getElementById("app").innerHTML = noteView.createHTMLString();
  };

  exports.Controller = Controller;
})(this);

var noteList = new NoteList();
var controller = new Controller(noteList);
controller.getHTML();
