// business logic
var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function pigLatin(userInput) {
  var userArray = userInput.split('');
  if (vowels.includes(userInput)) {
    userInput = userInput + "ay";
  }else {
  return false;
  }// for(var i = 0; i < userArray.lenth; i++ ){
  // }
  return userInput;
};
// function someFunction(userInput){
console.log("Hi");
//
//
//
//   return something;
// }

//user interface logic
$(document).ready(function() {
  $("form#user").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#sentence").val();
    var result = pigLatin(userInput);
    $("#result").text(result);

    $("#result").show();

  });
});
