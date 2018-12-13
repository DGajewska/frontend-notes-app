
(function(exports){
  function Controller(noteList){
    this.noteList = noteList;
    this.noteList.addNote("Hello World")
    }

  Controller.prototype.getHTML = function () {
    document.addEventListener("DOMContentLoaded", function(){
      notesToDisplay = new NoteListView(noteList);
      document.getElementById('app').innerHTML = notesToDisplay.createHTMLString();
    });
  };

  exports.Controller = Controller;
})(this);

// var noteList = new NoteList();
// var controller = new Controller(noteList);
// controller.getHTML();
