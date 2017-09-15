var sizeOfPad = 500;
var colour = "black" //Default colour of Pixel
var random = false;
var erase = false;
var recentSize = 16; // Used so addCells function knows previous size of grid.

$(document).ready(function() {

  addCells(recentSize) // Default grid of pixels.



  $("#resize").click(function(){
    $("#container").empty();
    var size = prompt("Please enter the new size"); //this will also empty the container.
    recentSize = size;
    addCells(size);
    random = false;
    erase = false;
    black = true;

  });

  $("#randomc").click(function(){
      random = true;
      erase = false;
  });

  $("#black").click(function(){
      random = false;
      erase = false;
      colour = "black";
  });

  $("#erase").click(function(){
      random = false;
      erase = true;
  });

});


function addCells(size) { // Add's the pixels to the grid.
  var pixelSize = sizeOfPad / size
  for(x = 0; x < size; x++) {
    for(y = 0; y < size; y++) {
      $("#container").append("<div id='pixel'> </div>")
    }
  }

  $("[id=pixel]").css({"height":pixelSize,"width":pixelSize});

  var mouseDown = false;
  $(document).mousedown(function(){ mouseDown = true; }).mouseup(function(){ mouseDown = false; });


  $("[id=pixel]").hover(function(){
    if(mouseDown == true) {
      if (random == true) { // if random colour is on then change pixel colour randomly.
        colour1 = Math.floor((Math.random() * 255));
        colour2 = Math.floor((Math.random() * 255));
        colour3 = Math.floor((Math.random() * 255));
        colour = "rgb(" + colour1 + ", " + colour2 + ", " + colour3 + ")"
      }

      if (erase == true) {
        colour = "white"
      }

      $(this).css("background-color",colour); // Changes background-color of pixel that is hovered on.
    }
  });
}
