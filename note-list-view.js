function NoteListView (noteList) {
  this.notesToView = noteList;
}

NoteListView.prototype.createHTMLString = function () {
  if (this.notesToView.notes.length === 0){
    return "No notes contained in this list";
  } else {
    var htmlString = "<ul><li><div>"
    htmlString += this.notesToView.notes.join("</div></li><li><div>");
    htmlString += "</div></li></ul>"
    return htmlString;
  }
};
