function Note (){
  this.text;
}
Note.prototype.createNote = function (note_text) {
  this.text = note_text;
};

Note.prototype.viewNote = function () {
  return this.text;
}
