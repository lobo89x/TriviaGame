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
        var real = array[i].correctans;
        console.log("This is the real name  "+real);
        // hero.text(array[i].HeroName);
        
        answerarray = array[i].possibleans;
        for (var i = 0; i < answerarray.length; i++) {
            var answers = $("<button>");
            answers.addClass("answerClass");
            answers.addClass("btn");
            answers.html(answerarray[i]);
            console.log("answers variable  "+answers);
            console.log("answer array  "+answerarray[i]);
            answers.attr("answer-val",answerarray[i]);
            $("#choices").append(answers);
            // $("#choices").html(answerarray[i]);
        }

        console.log("This is the superhero name "+hero)
        $("#hn").html("<h2>" + hero + "</h2>");
        



        //click function to select answer and outcomes
        $(".answerClass").on("click", function () {
            //grab value from user guess
            guess = parseInt($(this).attr("anser-val"));
            console.log("user guess's  "+guess);
            //correct guess or wrong guess outcomes
            if (guess === real) {
                stop();
                correct++;
                guess="";
                $("#quizblock").html("<p>Correct!</p>");
            } else {
                stop();
                wrong++;
                guess="";
                $("#quizblock").html("<p>Wrong! The correct answer is: " + real + "</p>");
            }
        })
        }
return $("#hn").html("<h2>" + hero + "</h2>");
      
};







quiz (questionarray);

