//----------Business Logic---------//

//else if((input%5)===0)
//else if((input%15)===0)



for (i=1; i <=userInput; i++) {
  if( i % 15 === 0 ) {
    document.write("ping-pong");
    console.log(i)
  } else {
    if( i % 5 === 0) {
      document.write("pong");
    } else {
      if(i % 3 === 0) {
        document.write("ping");
      } else {
        document.write(i);
      }
    }
  };

};











//--------User Int Logic------------//
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#input").val();
  });
});
