(function(exports){
  function SingleNoteView(note){
    this.noteText = note.text;
  }

  SingleNoteView.prototype.createHTMLString = function () {
    return "<div>" + this.noteText + "</div>"
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
