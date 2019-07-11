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
    },
    {
        HeroName: "Storm",
        possibleans: ["Zinda Blake", "Natalie Gurdin", "Ororo Munroe", "Kendra Saunders"],
        correctans: "Ororo Munroe",
    },
    {
        HeroName: "Swam Thing",
        possibleans: ["Alex Olsen", "Alaex Williams", "Clark Knobbs", "Terry Crews"],
        correctans: "Alex Olsen",}
    // },
    // {
    //     HeroName: "Steel",
    //     possibleans: ["Tony Stark", "John Henry Irons", "Gilbertto Torres", "Fred Sanford"],
    //     correctans: "John Henry Irons",
    // },
    // {
    //     HeroName: "Elongated Man",
    //     possibleans: ["Peter Parker", "Karl Pierce", "Randolph William 'Ralph' Dibny", "Patrick O'Brian"],
    //     correctans: "Randolph William Dibny",
    // },
    // {
    //     HeroName: "Deadpool",
    //     possibleans: ["Wade Winston Wilson", "Slade Wilson", "Clark Kent", "Simon Belmont"],
    //     correctans: "Wade Winston Wilson",
    // },
    // {
    //     HeroName: "Superman",
    //     possibleans: ["Alexander Lee", "Idris Elba", "Clark Kent", "Hyung Yu"],
    //     correctans: "Clark Kent",
    // },
    // {
    //     HeroName: "Black Canary",
    //     possibleans: ["Dinah Drake", "Bruce Banner", "Clark Kent", "Simon Belmont"],
    //     correctans: "Dinah Drake",
    // },
    // {
    //     HeroName: "Wonder Man",
    //     possibleans: ["Dwayne McDuffie", "Bruce Banner", "Clark Kent", "Simon Williams"],
    //     correctans: "Simon Williams",
    // },
    // {
    //     HeroName: "Icon",
    //     possibleans: ["Peter Parker", "Arnus", "Clark Kent", "Simon Belmont"],
    //     correctans: "Arnus",
    // },
    // {
    //     HeroName: "Blue Marvel",
    //     possibleans: ["Peter Parker", "Bruce Banner", "Adam Bernard Brashear", "Simon Belmont"],
    //     correctans: "Adam Bernard Brashear",
    // },
    // {
    //     HeroName: "Rocket",
    //     possibleans: ["Raquel Ervin", "Terra Stevens", "Dinah Laurel Lance", "Sarah Lance"],
    //     correctans: "Raquel Ervin",
    // },
    // {
    //     HeroName: "Cyborg",
    //     possibleans: ["Peter Parker", "Bruce Banner", "Clark Kent", "Victor Stone"],
    //     correctans: "Victor Stone",
    // },
    // {
    //     HeroName: "Thing",
    //     possibleans: ["Peter Parker", "Bruce Banner", "Clark Kent", "Ben Grimm"],
    //     correctans: "Ben Grimm",
    // },
    // {
    //     HeroName: "Abe Sapien",
    //     possibleans: ["Peter Parker", "Abe Sapien", "Clark Kent", "Simon Belmont"],
    //     correctans: "Abe Sapien",
    // },
    // {
    //     HeroName: "Ferro Lad",
    //     possibleans: ["Peter Parker", "Bruce Banner", "Carl Lucas", "Andrew Nolan"],
    //     correctans: "Andrew Nolan",
    // },
    // {
    //     HeroName: "Arm-Fall-off-Boy",
    //     possibleans: ["Floyd Belkin", "Bruce Banner", "Clark Kent", "Simon Belmont"],
    //     correctans: "Floyd Belkin",
    // },
    // {
    //     HeroName: "Brother Voodoo",
    //     possibleans: ["Jericho Parker", "Jericho Alexander", "Jericho Wilson", "Jericho Drumm"],
    //     correctans: "Jericho Drumm",
    // },
    // {
    //     HeroName: "Spiderman",
    //     possibleans: ["Victor Cruz", "David Banner", "Connor Kent", "Miles Morales"],
    //     correctans: "Miles Morales",
    // }
];




function quiz (array) {
    for (var i = 0; i < array.length; i++) {
        var questionBlock = $("<div>");
        questionBlock.addClass("row");
        // var hero = $("<button>");
        questionBlock.addClass("quiz");
        var hero = array[i].HeroName;
        var real = array[i].correctans;
        // console.log("This is the real name  "+real);
        // hero.text(array[i].HeroName);
        
        answerarray = array[i].possibleans;
        for (var i = 0; i < answerarray.length; i++) {
            var answers = $("<button>");
            answers.addClass("answerClass");
            answers.addClass("btn");
            answers.html(answerarray[i]);
            // console.log("answers variable  "+answers);
            // console.log("answer array  "+answerarray[i]);
            answers.attr("answer-val",answerarray[i]);
            $("#choices").append(answers);
            // $("#choices").html(answerarray[i]);
        }

        // console.log("This is the superhero name "+hero)
        $("#hn").html("<h2>" + hero + "</h2>");
        

            //click function to select answer and outcomes
            $(".answerClass").on("click", function () {
                //grab value from user guess
                guess = $(this).attr("answer-val");
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
                $("#right").text(correct);
                $("#wrong").text(wrong);
            })



        }
// return $("#hn").html("<h2>" + hero + "</h2>");

      
};

$("#reset").hide();
$("#start").on("click", function () {
    $("#start").hide();
    quiz (questionarray);
});