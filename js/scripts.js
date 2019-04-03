// business logic
var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var userInput = $("#sentence").val();

console.log(userInput);

console.log(sentence);
var pigLatin = function(sentence) {
  // userInput = userInput.slice("");
if (userInput != vowels) {
  // userInput = userInput.unshift();
  sentence = sentence + "ay";
}else {
  return false;
  }
};

// user interface logic
$(document).ready(function() {
  $("form#user").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var result = pigLatin(sentence);
    $("#result").text(result);

    $("#result").show();

  });
});
