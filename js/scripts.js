//-----Business Logic------//

var numSearch = [];

function searchNum(numberIn) {
for (var i=1; i <= numberIn; i++) {
  if( i % 15 === 0 ) {
    numSearch.push("ping-pong");
    //console.log(numSearch);
  } else if ( i % 5 === 0) {
      numSearch.push("pong");
  } else if (i % 3 === 0) {
      numSearch.push("ping");
  } else {
     numSearch.push(i);
  }
};
};



//--------User Int Logic------------//
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var formInput = parseInt($("input#input").val());
    var numOutput = searchNum(formInput);

    numSearch.forEach(function(output) {
      $("#answer").append('<li>' + output + '</li>');
    })
  });
});
