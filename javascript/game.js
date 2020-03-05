// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");

    // variables
    random = Math.floor(Math.random() * 100 + 19);
    console.log(random);
    $(".winningNumber").text("Winning Number: " + random);

    let userTotal = 0;
    let wins = 0;
    let losses = 0;
    $(".wins").text("Wins: " + wins);
    $(".loss").text("Losses: " + losses);

    // generates a random number for each crystal
    let crystalValues = {};
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
        $(".userTotal").text("Your total score: " + userTotal);
    });

    // resets the game
    function reset() {
        random = Math.floor(Math.random() * 102 + 19);
        console.log(random);
        $(".winningNumber").text(`Winning Number: ${random}`);
        crystalValues[1] = Math.floor(Math.random() * 12 + 1);
        crystalValues[2] = Math.floor(Math.random() * 12 + 1);
        crystalValues[3] = Math.floor(Math.random() * 12 + 1);
        crystalValues[4] = Math.floor(Math.random() * 12 + 1);
        userTotal = 0;
        $(".userTotal").text("Your total score: " + userTotal);
    }
    // winner alert function
    function winner() {
        alert("You Won!!");
        wins++;
        $(".wins").text("Wins: " + wins);
        $(".wins").css("color", "yellowgreen");
        reset();
    }
    // loser function
    function loser() {
        alert("You Lose!!");
        losses++;
        $(".loss").text("Losses: " + losses);
        $(".loss ").css("color", "red");
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
