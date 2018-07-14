// Hide/Show
$('.grid').hide();


$('#start').on('click', gameStart);

// $('#start').on('click', function(){
//     $('.grid').show();
//     $('#start').hide();
// });

function gameStart() {
    $('.grid').show();
    $('#gameInstructions').hide();
    $('#start').hide();
    timer();
}



// Code for timer

var timesUp;
var timerRemaining = 30;
var timerHTML = $('#timer');

function timer() {
    timerRemaining = 30;
    timerHTML.text(`Time Remaining: ${timerRemaining}`);
    timesUp = setInterval(timeDecrease, 1000);
};

function timeDecrease() {
    timerRemaining = timerRemaining - 1;
    timerHTML.text(`Time Remaining: ${timerRemaining}`);
    if ( timerRemaining == 0 ) {
        clearInterval(timesUp);
    }
}

// console.log(timerRemaining)


function populate () {
    if(quiz.isEnded() ) {
        showScores();
    } 
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
            var choices = quiz.getQuestionIndex().choices;
            for (var i = 0; i < choices.length; i++) {
                var element = document.getElementById("choice" + i);
                element.innerHTML = choices[i];
                guess("btn" + i, choices[i]);
            }

            showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress () {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress")
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}



function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
        gameOverHtml += "<h2 id='score'> Final Report: " + Math.floor((quiz.score /14) * 100 ) + "% </h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};

var questions = [
    new Question("Which country is the World's largest shoe exporter?", ["Japan", "Denmark", "China", "Honduras"], "China"),
    new Question("Which country has the world\'s highest healthcare costs?", ["U.S", "Hong Kong", "Russia", "Chile"], "U.S"),
    new Question("Which of the following has the highest greenhouse impact?", ["Carbon", "Meat-waste", "Zinc", "Nitrogen"], "Meat-waste"),
    new Question("Which of the following countries is considered to be the 'Auction Capital' of the world?", ["Toronto, Canada", "Melbourne, Australia", "Barcelona, Spain", "Munich, Germany"], "Melbourne, Australia"),
    new Question("Which state is considered to be the 'Car Theft Capital' of the U.S?", ["Atlanta", "Arizona", "Chicago", "California"], "California"),
    new Question("The Economic Forum reported that ________ had 4.6 million graduates in science, technology, engineering and mathematics (STEM Majors). The U.S, with a quarter (25%) of ______'s Population, had about 1/8 of STEM graduates, or 575,000. Which of the following countries is this source referring to?", ["Germany", "China", "Japan", "Korea"], "China"),
    new Question("Who is the largest trading partner of the U.S?", ["Canada", "China", "El Salvador", "Nicaragua"], "China"),
    new Question("_______ is the poorest state in the U.S, it is poorer than Mississipi, 1/5 _______(People from this state) are poor,  It yields the 'highest homelessness' & the highest poverty rate in the U.S.", ["Florida", "Texas", "California", "Alabama"], "California"),
    new Question("Which country yields the world's most expensive housing market?", ["England", "Finland", "Switzerland", "Hong Kong"], "Hong Kong"),
    new Question("If 'CAT' = 'OCV', what is DOG?", ["FQI", "RAT", "WIL", "EYB"], "FQI"),
    new Question("Which of the following countires is the world's largest coffee producer?", ["Argentina", "Chile", "Brazil", "England"], "Brazil"),
    new Question("_____ is one the densest countries in the world. 93% of the population live in cities?", ["Japan", "India", "Turkey", "Taiwan"], "Japan"),
    new Question("Which country has the lowest literacy rate in the world?", ["Afghanistan", "Burkina Faso", "South Sudan", "Niger"], "South Sudan"),
    new Question("Which of the following is the most technologically advanced country in the world?", ["Israel", "United States", "Japan", "Germany"], "Japan")
];

var quiz = new Quiz (questions);

populate();
