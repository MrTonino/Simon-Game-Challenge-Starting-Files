// document.addEventListener("click", function () {
//   alert("WELCOME SIR !");
// });
gamePattern = [];
var bottomColours = ["red", "blue", "yellow", "green"];
function nextSequence() {
  console.log("Next Sequence Called");
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = bottomColours[randomNumber];
  gamePattern.push(randomChosenColour);
  var selectedButton = $("#" + randomChosenColour);
  selectedButton.animate({ opacity: 0.5 }, "linear", function () {
    $(this).animate({ opacity: 1 }, 1000);
  });
  playSound(randomChosenColour);
  console.log(playSound(randomChosenColour));
}
function playSound(colour) {
  var audio = new Audio("sounds/" + colour + ".mp3");
  audio.play();
}
$("#level-title").click(function () {
  nextSequence();
});
nextSequence();
