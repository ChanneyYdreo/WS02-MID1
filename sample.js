var letters = "Asta's Friends";

var splited = letters.split(" ");
var newL = "";
splited.map(async l => {
  newL = "<span>" + l + "</span>";
  console.log(newL);
});
console.log(newL);
