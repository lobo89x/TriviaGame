//global variables
var correct = 0;
var wrong = 0;
var answerarray = [];

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
        var hero = $("<button>");
        questionBlock.addClass("quiz");
        // var hero = array[i].HeroName;
        
        hero.text(array[i].HeroName);

        $("#quizblock").append(hero);
        
        
        // answerarray = array[i].possibleans;
        // for (var i = 0; i < answerarray.length; i++) {
        //     var answerblk = $("<button>");
        //     answerblk.addClass("btn")
        //     answerblk.html(answerarray[i]);
        //     console.log(answerblk);
        //     console.log(answerarray[i]);
        //     // $(".quiz").append(answerarray[i]);
        // }

        console.log("This is the superhero name "+hero)
        // questionBlock.addClass("");
        // $("#quizblock").append(questionBlock);

      }
}

$("#reset").hide();

quiz (questionarray);

