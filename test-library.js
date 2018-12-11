(function(exports){
  var anticipate = {
      includedIn: function(array, itemToLookFor){
        if(array.indexOf(itemToLookFor)<0){
          throw new Error(itemToLookFor + " is not within " + array);
        } else {
          return "Test passes";
        }
      },
      toBeTheSame: function(item1, item2) {
        if(item1 !== item2){
          throw new Error(item1 + " does not equal " + item2)
        } else {
          return "Test passes";
        }
      },
  };

  exports.anticipate = anticipate;
})(this);

// Not using yet
(function(exports){
  var test = {
     name: function(name, callback) {
      console.log(name);
      console(callback);
    }
  };
})

// function test(name, fn) {
//   console.log(name);
//   console.log(fn);
// }
//
// function anticipate(input){
//   this.output = input;
//   return this;
// }
