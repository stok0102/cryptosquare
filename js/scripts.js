//Business Logic
var csquare = function(text) {
  text = text.toLowerCase().replace(/[^a-z]/g, '');
  var colSize = Math.ceil(Math.sqrt(text.length));
  var createArray = function(rows) {
    var arr = [];

    for (var i=0;i<rows;i++) {
       arr[i] = [];
    }

    return arr;
  };
  var cryptosquare = createArray(colSize);
  var counter = 0;
  for (var rowIndex = 0; rowIndex < colSize; rowIndex++) {
    for (var colIndex = 0; colIndex < colSize; colIndex++) {
      cryptosquare[rowIndex].push(text[counter]);
      counter++;
    }
  }
  var encryptedString = "";
  for (var colIndex = 0; colIndex < colSize; colIndex++) {
    for (var rowIndex = 0; rowIndex < colSize; rowIndex++) {
      if (cryptosquare[rowIndex][colIndex]) {
        encryptedString += cryptosquare[rowIndex][colIndex];
      }
    }
  }
  var outputString = "";
  console.log(cryptosquare);
  for (var index = 0 ; index < encryptedString.length ; index++) {
    outputString += encryptedString[index];
    if ((index+1)%5 === 0) outputString += " ";
  }
  return outputString;
}
//User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputText = $("#input").val();
    var result = csquare(inputText);
    $("#result").text(result);
  });
});
