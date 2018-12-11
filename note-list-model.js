function NoteList () {
  this.notes = [];
}

NoteList.prototype.addNote = function (string) {
  var note = new Note();
  note.text = string;
  this.notes.push(note);
};

NoteList.prototype.allNotes = function () {
  return this.notes;
};
