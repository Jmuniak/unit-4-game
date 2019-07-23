// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");

    // vars and constants
    random = Math.floor(Math.random() * 100 + 19);
    console.log(random);
    $(".winningNumber").text("Winning Number: " + random);

    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    $(".wins").text("Wins: " + wins);
    $(".loss").text("Losses: " + losses);

    // generates a random number for each crystal
    var crystalValues = {};
    crystalValues[1] = Math.floor(Math.random() * 12 + 1);
    crystalValues[2] = Math.floor(Math.random() * 12 + 1);
    crystalValues[3] = Math.floor(Math.random() * 12 + 1);
    crystalValues[4] = Math.floor(Math.random() * 12 + 1);
    console.log(crystalValues);

    // functions
    // click funtion
    $(".buttons div").on("click", function (event) {
        console.log(this);
        let _this = $(this);
        let indexValue = _this.attr("index-value");
        console.log(indexValue);
        getCrystalHandler(indexValue);
        $(".userTotal").text("Your total score is: " + userTotal);
    });
     // resets the game
     function reset() {
        random = Math.floor(Math.random() * 102 + 19);
        console.log(random);
        $(".winningNumber").text(random);
        crystalValues[1] = Math.floor(Math.random() * 12 + 1);
        crystalValues[2] = Math.floor(Math.random() * 12 + 1);
        crystalValues[3] = Math.floor(Math.random() * 12 + 1);
        crystalValues[4] = Math.floor(Math.random() * 12 + 1);
        userTotal = 0;
        $(".userTotal").text("Your total: " + userTotal);
    }
    // winner alert function
    function winner() {
        alert("You Won!!");
        wins++;
        $(".wins").text("Wins: " + wins);
        reset();
    }
    // loser function
    function loser() {
        alert("You Lose!!");
        losses++;
        $(".loss").text("Losses: " + losses);
        reset();
    }
    // getCrystalHandler adds the userTotal to whatever the value is of the crystalkey that was clicked and checks for a win/loss condition.
    function getCrystalHandler(crystalKey) {
        userTotal = userTotal + crystalValues[crystalKey];
        console.log("New userTotal " + userTotal);
        $(".userTotal").text(userTotal);

        if (userTotal === random) {
            winner()
        }

        else if (userTotal > random) {
            loser()
        }
    }

});
// $(".crystal1").on("click", getCrystalHandler(1));
// $(".crystal2").on("click", getCrystalHandler(2));
// $(".crystal3").on("click", getCrystalHandler(3));
// $(".crystal4").on("click", getCrystalHandler(4));