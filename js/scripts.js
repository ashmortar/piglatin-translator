//back end logic
var pigLatin = function(string) {
  if (string.match(/[^a-z]/i)) {
    return false;
  } else if (string.charAt(0).match(/[a, e, i, o, u]/i)) {
      string = string + "way";
      return string;
  } else if (string.charAt(0).match(/[^a, e, i, o, u]/i)) {
    var stringAdd = string + string.charAt(0) + "ay";
    var pigString = stringAdd.slice(1, stringAdd.length);
    return pigString;
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
