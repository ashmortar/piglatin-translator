//back end logic
var pigLatin = function(string) {
  if (string.match(/[^a-z]/i)) {
    return false;
  } else if ((string.length ===1) && (string.match(/[a, e, i, o, u]/i))) {
    string = string + "ay";
    return string;
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
