
//--------User Int Logic------------//
$(document).ready(function() {
  $("form").submit(function(event) {

    //----------Business Logic---------//
var userInput = $("input#input").val()
  for (var i=1; i <= userInput; i++) {
    if( i % 15 === 0 ) {
      $("#answer").append('<li>'+"ping-pong"+'</li>');
      console.log(userInput);
    } else {
      if( i % 5 === 0) {
        $("#answer").append('<li>'+"pong"+'</li>');
      } else {
        if(i % 3 === 0) {
        $("#answer").append('<li>'+"ping"+'</li>');
        } else {
          $("#answer").append('<li>'+i+'</li>');
        }
      };
    };
  };
  event.preventDefault();
});
});
