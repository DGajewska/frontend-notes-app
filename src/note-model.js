(function(exports){
  var noteCounter = 0

  function Note(text){
    this.text = text;
    this.id = noteCounter;
    noteCounter++;
  }

  Note.prototype.viewNote = function () {
    return this.text;
  };

  Note.prototype.viewId = function () {
    return this.id;
  };

  exports.Note = Note;
})(this);
