// business logic
var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function firstVowel(letter) {
for (var v = 0; v < vowels.length; v = v + 1){
  if (letter === vowels[v]) return true;
  }
  return false;
};
function pigLatin(userInput) {
  var userArray = userInput.split('');
// Almost works, maybe put in new function?
  for (var i = 0; i < userArray.length; i + 1){
    if (firstVowel(userArray[i]) ===true) {
      if (i > 0 && userArray[i] === "u" && userArray[i - 1] === "q") {
        return userArray.slice(i + 1) + userArray.slice(0, i + 1) + "ay";
      } else {
        return userArray.slice(i) + userArray.slice(0, i) + "ay";
      }
      // End of what should move
    } else if (vowels.includes(userInput) || userInput.length > 2){
      userInput = userInput + "way";
    } else if (vowels.includes(userInput)) {
      userInput = userInput + "ay";
    }else {
      return false;
    }// for(var i = 0; i < userArray.lenth; i++ ){

  };
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
    result = result.join("")
    $("#result").text(result);

    $("#result").show();

  });
});
