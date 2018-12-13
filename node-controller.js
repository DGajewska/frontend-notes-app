// document.addEventListener("DOMContentLoaded", changeGreeting(new_greeting) {
//     document.getElementById('app').innerText = new_greeting;
//   });
var noteList = new NoteList();

(function(exports){
  function Controller(noteList){
    this.noteList = noteList;
    this.noteList.addNote("Hello World");
    }

  console.log(this.noteList);
  notesToDisplay = new NoteListView(this.noteList);
  console.log(notesToDisplay);
  document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('app').innerText = notesToDisplay.createHTMLString();;
  });

  exports.Controller = Controller;
})(this);
