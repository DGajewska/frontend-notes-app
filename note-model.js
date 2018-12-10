describe("NotesApp", function() {
  var notesApp;

  beforeEach(function() {
    notesApp = new NotesApp();
  })

  it("should store a note", function() {
    notesApp.newPost("My favourite language is JavaScript")
    expect(notesApp.posts).toEqual(["My favourite language is JavaScript"]);
  })
})
