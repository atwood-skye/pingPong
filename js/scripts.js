//----------Business Logic---------//

//else if((input%5)===0)
//else if((input%15)===0)


//userInput = 0
//console.log(userInput)
var userInput = function pp(input) {
  for (i=1; i <= input; i++) {
    if( i % 15 === 0 ) {
      document.write("ping-pong");
      //console.log(userInput);
    } else {
      if( i % 5 === 0) {
        document.write("pong");
      } else {
        if(i % 3 === 0) {
          document.write("ping");
        } else {
          document.write(i);
        }
      };
    };
  };
};

//--------User Int Logic------------//
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#input").val();
    var pp =$pp(userInput);
  });
});
