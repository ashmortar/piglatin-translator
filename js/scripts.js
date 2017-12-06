//back end logic
var pigLatin = function(string) {
  if (string.match(/[^a-z]/i)) {
    return false;
  } else {
    return true;
  };
};











//ui logic

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var string = $("input#string").val();
    var result = pigLatin(string);
    $(".output").text(result);
  });
});
