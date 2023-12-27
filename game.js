// document.addEventListener("click", function () {
//   alert("WELCOME SIR !");
// });
userClickedPattern = [];
gamePattern = [];
var bottomColours = ["red", "blue", "yellow", "green"];
var gameStarted = false;
var level = 0;
$("document").keydown(function () {
  if (!gameStarted) {
    nextSequence();
    gameStarted = true;
  }
});
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = bottomColours[randomNumber];
  gamePattern.push(randomChosenColour);
  var selectedButton = $("#" + randomChosenColour);
  selectedButton.animate({ opacity: 0.5 }, "linear", function () {
    $(this).animate({ opacity: 1 }, 1000);
  });
  playSound(randomChosenColour);
}

$("#level-title").click(function () {
  nextSequence();
});
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("Success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
      userClickedPattern = [];
    }
  } else {
    console.log("Wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}
$(".red, .yellow, .blue, .green").on("click", function () {
  var userChosenColour = $(this).attr("id");
  var indexOfLastAnswer = userClickedPattern.length - 1;
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(indexOfLastAnswer);
});
function animatePress(curentColour) {
  $("#" + curentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + curentColour).removeClass("pressed");
  }, 100);
}
function startOver() {
  level = 0;
  gamePattern = [];
  gameStarted = false;
}

nextSequence();
