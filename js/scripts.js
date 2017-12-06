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
  if (string.match(/[^a-z, " "]/i)) {
    return false;
  };
  var array = string.split(" ");
  var arrayTwo = [];
  for (var j = 0; j < array.length; j +=1)  {
    for (var i = 0; i < array[j].length; i +=1) {
      if (array[j].charAt(0).match(/[a, e, i, o, u]/i)) {
          var pigString = array[j] + "way";
          arrayTwo.push(pigString)
          break;
      } else if ((array[j].charAt(i).match(/[u]/i)) && (array[j].charAt(i - 1).match(/[q]/i))){
          var a = array[j].slice(0, i + 1);
          var b = array[j].slice(i + 1, array[j].length);
          var pigString = b + a + "ay";
          arrayTwo.push(pigString);
          break;
      } else if ((array[j].charAt(0).match(/[^y]/i)) && (array[j].charAt(i).match(/[a, e, i, o, u, y]/i))){
          var a = array[j].slice(0, i);
          var b = array[j].slice(i, array[j].length);
          var pigString = b + a + "ay";
          arrayTwo.push(pigString);
          break;
      } else if ((array[j].charAt(0).match(/[y]/i)) && (array[j].charAt(i).match(/[a, e, i, o, u,]/i))) {
          var a = array[j].slice(0, i);
          var b = array[j].slice(i, array[j].length);
          var pigString = b + a + "ay";
          arrayTwo.push(pigString);
          break;
        }
        else {
          console.log("something is broken");
        }
      };
    var result = arrayTwo.join(" ");
  };
  return result;
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
