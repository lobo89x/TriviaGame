//global variables
var correct = 0;
var wrong = 0;
var answerarray = [];
var guess = "";


var questionarray = [
    {
        HeroName: "Spiderman",
        possibleans: ["Peter Parker", "Bruce Banner", "Clark Kent", "Simon Belmont"],
        correctans: "Peter Parker",
    }
];

function quiz (array) {
    for (var i = 0; i < array.length; i++) {
        var questionBlock = $("<div>");
        questionBlock.addClass("row");
        // var hero = $("<button>");
        questionBlock.addClass("quiz");
        var hero = array[i].HeroName;
        // hero.text(array[i].HeroName);
        
        answerarray = array[i].possibleans;
        for (var i = 0; i < answerarray.length; i++) {
            var answers = $("<div>");
            answers.addClass("answerClass btn")
            answers.html(answerarray[i]);
            console.log("answers variable  "+answers);
            console.log("answer array  "+answerarray[i]);
            answers.attr("answer-val",answerarray[i]);
            $("#choices").append(answers);
            // $("#choices").html(answerarray[i]);
        }

        console.log("This is the superhero name "+hero)
        $("#hn").html("<h2>" + hero + "</h2>");
        



        // //click function to select answer and outcomes
        // $(".answerClass").on("click", function () {
        //     //grab array position from user guess
        //     guess = parseInt($(this).attr("data-guessvalue"));

        //     //correct guess or wrong guess outcomes
        //     if (guess === array[i].correctans) {
        //         stop();
        //         correct++;
        //         guess="";
        //         $("#quizblock").html("<p>Correct!</p>");
        //     } else {
        //         stop();
        //         wrong++;
        //         guess="";
        //         $("#quizblock").html("<p>Wrong! The correct answer is: " + array[i].correctans + "</p>");
        //     }
        // })
        }
return $("#hn").html("<h2>" + hero + "</h2>");
      
};







quiz (questionarray);

