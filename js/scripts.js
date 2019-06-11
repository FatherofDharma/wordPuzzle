$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    var total = ($("input:text[name=thisStuff]").val()).toLowerCase();
    var vowel = ["a","e","i","o","u"];
    total = total.split("");
    //These loops will change our vowels to "-"
    for (var n = 0; n < vowel.length; n++) {
      for (var i = 0; i < total.length; i++) {
        if (total[i] === vowel[n]) {
          total[i] = "-";
        }
      }
    }
    //This loop will take our new array and concatenate it into a string.
    var output = "";
    for (var i = 0; i < total.length; i++) {
      output = output + total[i];
    }
    console.log(output);
    $("p").text(output);
    $("input:text[name=thisStuff]").val("");
  });
});


/* for (var i = 0; i < total.length; i++) {
if (total[i] === "a") {
total[i] = "-";
} else if (total[i] === "e") {
total[i] = "-";
} else if (total[i] === "i") {
total[i] = "-";
}	else if (total[i] === "o") {
total[i] = "-";
} else if (total[i] === "u") {
total[i] = "-";
}
}; */
