var phrase = $(".subtitle").text();
var numWords = phrase.split(" ").length;
var number = $("#number-words");

number.text(numWords)
console.log(number);