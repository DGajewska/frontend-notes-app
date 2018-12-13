(function(exports){
  function NoteListView(noteList) {
    this.notesToView = noteList;
  }

  NoteListView.prototype.createHTMLString = function () {
    if (this.notesToView.notes.length === 0){
      return "No notes contained in this list";
    } else {
      htmlString = "<ul>"
      for(var i=0; i<this.notesToView.notes.length; i++){
        htmlString += "<li><div id=" + this.notesToView.notes[i].id + ">"
            + "<a href=#notes/" + this.notesToView.notes[i].id + ">"
            + this.notesToView.notes[i].text.slice(0, 20) + "</a></div></li>"
      }
      return htmlString + "</ul>";
    }
  };

  exports.NoteListView = NoteListView;
})(this);
