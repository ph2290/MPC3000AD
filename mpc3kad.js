console.log("Script loaded"); // Check if the script runs

$(document).ready(function() {
    console.log("Document is ready"); // Check if the DOM is fully loaded

    // Your existing code
});

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

$("td div").on("mousedown touchstart", function (e) {
  e.stopPropagation();
  e.preventDefault();
  var i = parseInt($(this).parent().text()) - 1;
  var audioElements = $("audio");

  if (i >= 0 && i < audioElements.length) {
    var audio = audioElements.eq(i).get(0);
    audio.currentTime = 0;
    audio.play();
    $(this).css("background", "transparent");
  }
});

$("td div").on("mouseup touchend", function () {
  $(this).css("background", "transparent");
});

$("input").each(function (index, element) {
  $(this).on("change", function (e) {
    var target = e.currentTarget;
    var file = target.files[0];
    
    if (file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("audio").eq(index).attr("src", e.target.result);
        $("td div").eq(index).css("background", "transparent");
      };
      reader.readAsDataURL(file);
    }
  });
});
