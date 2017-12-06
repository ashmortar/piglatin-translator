/*else if (string.charAt(0).match(/[a, e, i, o, u]/i)) {
   string = string + "way";
   return string;
} else if (string.charAt(0).match(/[^a, e, i, o, u]/i)) {
 var stringAdd = string + string.charAt(0) + "ay";
 var pigString = stringAdd.slice(1, stringAdd.length);
 return pigString;
};*/

//back end logic
var pigLatin = function(string) {
  if (string.match(/[^a-z]/i)) {
    return false;
  };

  for (var i = 0; i < string.length; i +=1) {
    if (string.charAt(0).match(/[a, e, i, o, u]/i)) {
        string = string + "way";
        return string;
    } else if ((string.charAt(i).match(/[u]/i)) && (string.charAt(i - 1).match(/[q]/i))){
      var a = string.slice(0, i + 1);
      var b = string.slice(i + 1, string.length);
      var pigString = b + a + "ay";
      return pigString;
    } else if (string.charAt(i).match(/[a, e, i, o, u]/i)) {
      var a = string.slice(0, i);
      var b = string.slice(i, string.length);
      var pigString = b + a + "ay";
      return pigString;
    }
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
