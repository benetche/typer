
var text_typing = $(".typing-area");
text_typing.on("input", function(){

    var content = text_typing.val();
    var wordCounter = content.split(/\S+/).length -1;
    $("#number-words").text(wordCounter);
    $("#number-char").text(content.length);
    
})