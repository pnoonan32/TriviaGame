var correct;
var incorrect;


$('#startMenuContent').hide();
$('#okayButton').hide();
$('.choices').hide();


// Button to show instructions
$('#startButton').on('click', function() {
    $('#startMenuContent').show();
    $('#startButton').hide();
    $('#okayButton').show();
});

// Button to start the actual game
$('#okayButton').on('click', function() {
    $('#okayButton').hide();
    $('#startMenuContent').hide();
    $('.choices').show();
    
});

// 30 second timer

// document.get   vs.  $()  // 
var timeLeft = 30;
var timer = document.getElementById('timer');
var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerId);
    timesUp();
  } else {
    timer.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}
function timesUp() {
       
}



