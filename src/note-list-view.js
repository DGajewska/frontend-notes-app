(function(exports){
  function NoteListView(noteList) {
    this.notesToView = noteList;
  }

  function getNotesArray(array) {
    var noteText = [];
    for(var i=0; i<array.notes.length; i++){
      noteText.push(array.notes[i].text.slice(0, 20));
    }
    return noteText;
  };

  NoteListView.prototype.createHTMLString = function () {
    if (this.notesToView.notes.length === 0){
      return "No notes contained in this list";
    } else {
      var notes = getNotesArray(this.notesToView);
      var htmlString = "<ul><li><div>"
      htmlString += notes.join("</div></li><li><div>")
      return htmlString + "</div></li></ul>";
    }
  };

  exports.NoteListView = NoteListView;
})(this);
