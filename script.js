roundCount = 0;
let startScreen = document.getElementById("start-inner-container");
let playerScreen = document.getElementById("player-inner-container");
let namesScreen = document.getElementById("names-inner-container");
let rulesScreen = document.getElementById("rules-inner-container");

playerScreen.classList.add("hide-element");
namesScreen.classList.add("hide-element");

document.getElementById("names-title").classList.add("make-invisible");
document.getElementById("names-next-button").classList.add("make-invisible");
document.getElementById("player1-input").classList.add("hide-element");
document.getElementById("player1-lock").classList.add("hide-element");
document.getElementById("player2-input").classList.add("hide-element");
document.getElementById("player2-lock").classList.add("hide-element");
document.getElementById("player3-input").classList.add("hide-element");
document.getElementById("player3-lock").classList.add("hide-element");
document.getElementById("player4-input").classList.add("hide-element");
document.getElementById("player4-lock").classList.add("hide-element");

document.getElementById("player2-name-input").classList.add("make-invisible");
document.getElementById("player2-name-lock").classList.add("make-invisible");
document.getElementById("player3-name-input").classList.add("make-invisible");
document.getElementById("player3-name-lock").classList.add("make-invisible");
document.getElementById("player4-name-input").classList.add("make-invisible");
document.getElementById("player4-name-lock").classList.add("make-invisible");

rulesScreen.classList.add("hide-element");

document.getElementById("rules-title").classList.add("make-invisible");
document.getElementById("rules-info").classList.add("make-invisible");
document.getElementById("rules-next-button").classList.add("make-invisible");


let item1 = document.getElementById("item1-inner-container");
let item2 = document.getElementById("item2-inner-container");
let item3 = document.getElementById("item3-inner-container");
let item4 = document.getElementById("item4-inner-container");
let item5 = document.getElementById("item5-inner-container");
let item6 = document.getElementById("item6-inner-container");
let item7 = document.getElementById("item7-inner-container");
let item8 = document.getElementById("item8-inner-container");
let item9 = document.getElementById("item9-inner-container");
let item10 = document.getElementById("item10-inner-container");
let item11 = document.getElementById("item11-inner-container");
let item12 = document.getElementById("item12-inner-container");
let item13 = document.getElementById("item13-inner-container");
let item14 = document.getElementById("item14-inner-container");
let item15 = document.getElementById("item15-inner-container");


item1.classList.add("hide-element");
document.getElementById("item1-round").classList.add("make-invisible");
document.getElementById("item1-info").classList.add("make-invisible");
document.getElementById("item1-answer").classList.add("make-invisible");
document.getElementById("item1-next-button").classList.add("make-invisible");

document.getElementById("item1-next-round").classList.add("make-invisible");
document.getElementById("item2-next-round").classList.add("make-invisible");
document.getElementById("item3-next-round").classList.add("make-invisible");
document.getElementById("item4-next-round").classList.add("make-invisible");
document.getElementById("item5-next-round").classList.add("make-invisible");
document.getElementById("item6-next-round").classList.add("make-invisible");
document.getElementById("item7-next-round").classList.add("make-invisible");
document.getElementById("item8-next-round").classList.add("make-invisible");
document.getElementById("item9-next-round").classList.add("make-invisible");
document.getElementById("item10-next-round").classList.add("make-invisible");
document.getElementById("item11-next-round").classList.add("make-invisible");
document.getElementById("item12-next-round").classList.add("make-invisible");
document.getElementById("item13-next-round").classList.add("make-invisible");
document.getElementById("item14-next-round").classList.add("make-invisible");
document.getElementById("item15-next-round").classList.add("make-invisible");


item2.classList.add("hide-element");
item3.classList.add("hide-element");
item4.classList.add("hide-element");
item5.classList.add("hide-element");
item6.classList.add("hide-element");
item7.classList.add("hide-element");
item8.classList.add("hide-element");
item9.classList.add("hide-element");
item10.classList.add("hide-element");
item11.classList.add("hide-element");
item12.classList.add("hide-element");
item13.classList.add("hide-element");
item14.classList.add("hide-element");
item15.classList.add("hide-element");


let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let player3 = document.getElementById("player3");
let player4 = document.getElementById("player4");

player1.classList.add("hide-element");
player2.classList.add("hide-element");
player3.classList.add("hide-element");
player4.classList.add("hide-element");

function showWins() {
    document.getElementById("player1-wins").innerHTML = player1Wins;
    document.getElementById("player1-wins").classList.remove("hide-element");
    document.getElementById("player1-wins").classList.add("animate__animated", "animate__fadeInUp");

    document.getElementById("player2-wins").innerHTML = player2Wins;
    document.getElementById("player2-wins").classList.remove("hide-element");
    document.getElementById("player2-wins").classList.add("animate__animated", "animate__fadeInUp");

    document.getElementById("player3-wins").innerHTML = player3Wins;
    document.getElementById("player3-wins").classList.remove("hide-element");
    document.getElementById("player3-wins").classList.add("animate__animated", "animate__fadeInUp");

    document.getElementById("player4-wins").innerHTML = player4Wins;
    document.getElementById("player4-wins").classList.remove("hide-element");
    document.getElementById("player4-wins").classList.add("animate__animated", "animate__fadeInUp");    
};

function hideWins() {
    document.getElementById("player1-wins").classList.add("hide-element");
    document.getElementById("player1-wins").classList.remove("animate__animated", "animate__fadeInUp");

    document.getElementById("player2-wins").classList.add("hide-element");
    document.getElementById("player2-wins").classList.remove("animate__animated", "animate__fadeInUp");

    document.getElementById("player3-wins").classList.add("hide-element");
    document.getElementById("player3-wins").classList.add("animate__animated", "animate__fadeInUp");

    document.getElementById("player4-wins").classList.add("hide-element");
    document.getElementById("player4-wins").classList.add("animate__animated", "animate__fadeInUp");    
};


document.getElementById("start-title").addEventListener("click", () => {
    document.getElementById("start-title").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("start-title").addEventListener("animationend", () => {
        startScreen.classList.add("animate__animated", "animate__fadeOut");
        startScreen.addEventListener("animationend", () => {
            startScreen.classList.add("hide-element");
            document.getElementById("player-title").classList.add("make-invisible");
            document.getElementById("player-next-button").classList.add("make-invisible");
            playerScreen.classList.remove("hide-element");
            playerScreen.classList.add("animate__animated", "animate__fadeIn");
            playerScreen.addEventListener("animationend", () => {
                document.getElementById("player-title").classList.remove("make-invisible");
                document.getElementById("player-title").classList.add("animate__animated", "animate__fadeInDown");
                document.getElementById("player-next-button").classList.remove("make-invisible");
                document.getElementById("player-next-button").classList.add("animate__animated", "animate__fadeInUp");
            });
        });
    } );
});

numberOfPlayers = [];

document.getElementById("player-next-button").addEventListener("click", () => {
    let playerCount = parseInt(document.getElementById("player-numbers").value);
    numberOfPlayers.push(playerCount);

    if (!(numberOfPlayers >= 1 || numberOfPlayers <= 4)) {
        alert("Please choose between 1 and 4 players");
        numberOfPlayers.pop(playerCount);
        return;
    }

    document.getElementById("player-next-button").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("player-next-button").addEventListener("animationend", () => {
        playerScreen.classList.add("animate__animated", "animate__zoomOut", "animate__slower");
        playerScreen.addEventListener("animationend", () => {
            playerScreen.classList.add("hide-element");
            namesScreen.classList.add("animate__animated", "animate__fadeIn")
            namesScreen.classList.remove("hide-element");
            namesScreen.addEventListener("animationend", () => {
                document.getElementById("names-title").classList.add("animate__animated", "animate__fadeInDownBig");
                document.getElementById("names-title").classList.remove("make-invisible");
                document.getElementById("names-title").addEventListener("animationend", () => {
                    if (numberOfPlayers == 1) {
                        player1.classList.remove("hide-element");
                        player1.classList.add("animate__animated", "animate__fadeInUp");
                    } else if (numberOfPlayers == 2) {
                        player1.classList.remove("hide-element");
                        player1.classList.add("animate__animated", "animate__fadeInUp");
                        player2.classList.remove("hide-element");
                        player2.classList.add("animate__animated", "animate__fadeInUp");
                    } else if (numberOfPlayers == 3) {
                        player1.classList.remove("hide-element");
                        player1.classList.add("animate__animated", "animate__fadeInUp");
                        player2.classList.remove("hide-element");
                        player2.classList.add("animate__animated", "animate__fadeInUp");
                        player3.classList.remove("hide-element");
                        player3.classList.add("animate__animated", "animate__fadeInUp");
                    } else if (numberOfPlayers == 4) {
                        player1.classList.remove("hide-element");
                        player1.classList.add("animate__animated", "animate__fadeInUp");
                        player2.classList.remove("hide-element");
                        player2.classList.add("animate__animated", "animate__fadeInUp");
                        player3.classList.remove("hide-element");
                        player3.classList.add("animate__animated", "animate__fadeInUp");
                        player4.classList.remove("hide-element");
                        player4.classList.add("animate__animated", "animate__fadeInUp");
                    }
                });
            });
        });
    });
});

document.getElementById("player1-name-lock").addEventListener("click", () => {
    let playerOneName = document.getElementById("player1-name-input").value;
    document.getElementById("player1-name").innerHTML = playerOneName;
    document.getElementById("player1-name-input").classList.add("hide-element");
    document.getElementById("player1-name-lock").classList.add("hide-element");

    if (numberOfPlayers == 1) {
        document.getElementById("names-next-button").classList.remove("make-invisible");
        document.getElementById("names-next-button").classList.add("animate__animated", "animate__fadeInUp");
    } else {
        document.getElementById("player2-name-input").classList.remove("make-invisible");
        document.getElementById("player2-name-lock").classList.remove("make-invisible");
    }
});

document.getElementById("player2-name-lock").addEventListener("click", () => {
    let playerTwoName = document.getElementById("player2-name-input").value;
    document.getElementById("player2-name").innerHTML = playerTwoName;
    document.getElementById("player2-name-input").classList.add("hide-element");
    document.getElementById("player2-name-lock").classList.add("hide-element");

    if (numberOfPlayers == 2) {
        document.getElementById("names-next-button").classList.remove("make-invisible");
        document.getElementById("names-next-button").classList.add("animate__animated", "animate__fadeInUp");
    } else {
        document.getElementById("player3-name-input").classList.remove("make-invisible");
        document.getElementById("player3-name-lock").classList.remove("make-invisible");
    }
});

document.getElementById("player3-name-lock").addEventListener("click", () => {
    let playerThreeName = document.getElementById("player3-name-input").value;
    document.getElementById("player3-name").innerHTML = playerThreeName;
    document.getElementById("player3-name-input").classList.add("hide-element");
    document.getElementById("player3-name-lock").classList.add("hide-element");

    if (numberOfPlayers == 3) {
        document.getElementById("names-next-button").classList.remove("make-invisible");
        document.getElementById("names-next-button").classList.add("animate__animated", "animate__fadeInUp");
    } else {
        document.getElementById("player4-name-input").classList.remove("make-invisible");
        document.getElementById("player4-name-lock").classList.remove("make-invisible");
    }
});

document.getElementById("player4-name-lock").addEventListener("click", () => {
    let playerFourName = document.getElementById("player4-name-input").value;
    document.getElementById("player4-name").innerHTML = playerFourName;
    document.getElementById("player4-name-input").classList.add("hide-element");
    document.getElementById("player4-name-lock").classList.add("hide-element");

    if (numberOfPlayers == 4) {
        document.getElementById("names-next-button").classList.remove("make-invisible");
        document.getElementById("names-next-button").classList.add("animate__animated", "animate__fadeInUp");
    };
});

document.getElementById("names-next-button").addEventListener("click", () => {
    document.getElementById("names-next-button").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("names-next-button").addEventListener("animationend", () => {
        namesScreen.classList.add("animate__zoomOut");
        namesScreen.addEventListener("animationend", () => {
            namesScreen.classList.add("hide-element");
            rulesScreen.classList.remove("hide-element");
            rulesScreen.classList.add("animate__animated", "animate__zoomIn");
            rulesScreen.addEventListener("animationend", () => {
                document.getElementById("rules-title").classList.remove("make-invisible");
                document.getElementById("rules-title").classList.add("animate__animated", "animate__fadeInDown");
                document.getElementById("rules-title").addEventListener("animationend", () => {
                    document.getElementById("rules-info").classList.remove("make-invisible");
                    document.getElementById("rules-info").classList.add("animate__animated", "animate__fadeInDown");
                    document.getElementById("rules-info").addEventListener("animationend", () => {
                        document.getElementById("rules-next-button").classList.remove("make-invisible");
                        document.getElementById("rules-next-button").classList.add("animate__animated", "animate__fadeInUp");
                        clearPlayerAnimations();
                    })

                })
            })
        })
    })
});

document.getElementById("rules-next-button").addEventListener("click", () => {
    roundCount++;
    hideNextButton();
    document.getElementById("rules-next-button").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("rules-next-button").addEventListener("animationend", () => {
        rulesScreen.classList.add("animate__zoomOut");
        rulesScreen.addEventListener("animationend", () => {
            rulesScreen.classList.add("hide-element");
            item1.classList.remove("hide-element");
            item1.classList.add("animate__animated", "animate__zoomIn", "animate__slower");
            item1.addEventListener("animationend", () => {
                document.getElementById("item1-round").classList.remove("make-invisible");
                document.getElementById("item1-round").classList.add("animate__animated", "animate__slideInLeft");
                document.getElementById("item1-round").addEventListener("animationend", () => {
                    document.getElementById("item1-info").classList.remove("make-invisible");
                    document.getElementById("item1-info").classList.add("animate__animated", "animate__fadeInUp", "animate__slower");
                    document.getElementById("item1-info").addEventListener("animationend", () => {
                        playerStart();
                    })

                })

            })
        })

    })
});

// hide next button function
function hideNextButton() {
    if (roundCount == 1) {
        document.getElementById("item1-next-button").classList.add("make-invisible");    
    } else if (roundCount == 2) {
        document.getElementById("item2-next-button").classList.add("make-invisible");    
    } else if (roundCount == 3) {
        document.getElementById("item3-next-button").classList.add("make-invisible");    
    } else if (roundCount == 4) {
        document.getElementById("item4-next-button").classList.add("make-invisible");
    } else if (roundCount == 5) {
        document.getElementById("item5-next-button").classList.add("make-invisible");
    } else if (roundCount == 6) {
        document.getElementById("item6-next-button").classList.add("make-invisible");
    } else if (roundCount == 7) {
        document.getElementById("item7-next-button").classList.add("make-invisible");
    } else if (roundCount == 8) {
        document.getElementById("item8-next-button").classList.add("make-invisible");
    } else if (roundCount == 9) {
        document.getElementById("item9-next-button").classList.add("make-invisible");
    } else if (roundCount == 10) {
        document.getElementById("item10-next-button").classList.add("make-invisible");
    } else if (roundCount == 11) {
        document.getElementById("item11-next-button").classList.add("make-invisible");
    } else if (roundCount == 12) {
        document.getElementById("item12-next-button").classList.add("make-invisible");
    } else if (roundCount == 13) {
        document.getElementById("item13-next-button").classList.add("make-invisible");
    } else if (roundCount == 14) {
        document.getElementById("item14-next-button").classList.add("make-invisible");
    } else if (roundCount == 15) {
        document.getElementById("item15-next-button").classList.add("make-invisible");
    };
};

// show next button function
function showNextButton() {

    document.getElementById("player1-input").classList.add("hide-element");
    document.getElementById("player1-lock").classList.add("hide-element");
    document.getElementById("player2-input").classList.add("hide-element");
    document.getElementById("player2-lock").classList.add("hide-element");
    document.getElementById("player3-input").classList.add("hide-element");
    document.getElementById("player3-lock").classList.add("hide-element");
    document.getElementById("player4-input").classList.add("hide-element");
    document.getElementById("player4-lock").classList.add("hide-element");

    if (roundCount == 1) {
        document.getElementById("item1-next-button").classList.remove("make-invisible");
        document.getElementById("item1-next-button").classList.add("animate__animated", "animate__slideInUp");    
    } else if (roundCount == 2) {
        document.getElementById("item2-next-button").classList.remove("make-invisible");
        document.getElementById("item2-next-button").classList.add("animate__animated", "animate__slideInUp");    
    } else if (roundCount == 3) {
        document.getElementById("item3-next-button").classList.remove("make-invisible");
        document.getElementById("item3-next-button").classList.add("animate__animated", "animate__slideInUp");    
    } else if (roundCount == 4) {
        document.getElementById("item4-next-button").classList.remove("make-invisible");
        document.getElementById("item4-next-button").classList.add("animate__animated", "animate__slideInUp");    
    } else if (roundCount == 5) {
        document.getElementById("item5-next-button").classList.remove("make-invisible");
        document.getElementById("item5-next-button").classList.add("animate__animated", "animate__slideInUp");    
    } else if (roundCount == 6) {
        document.getElementById("item6-next-button").classList.remove("make-invisible");
        document.getElementById("item6-next-button").classList.add("animate__animated", "animate__slideInUp");           
    } else if (roundCount == 7) {
        document.getElementById("item7-next-button").classList.remove("make-invisible");
        document.getElementById("item7-next-button").classList.add("animate__animated", "animate__slideInUp");    
    } else if (roundCount == 8) {
        document.getElementById("item8-next-button").classList.remove("make-invisible");
        document.getElementById("item8-next-button").classList.add("animate__animated", "animate__slideInUp");    
    } else if (roundCount == 9) {
        document.getElementById("item9-next-button").classList.remove("make-invisible");
        document.getElementById("item9-next-button").classList.add("animate__animated", "animate__slideInUp");    
    } else if (roundCount == 10) {
        document.getElementById("item10-next-button").classList.remove("make-invisible");
        document.getElementById("item10-next-button").classList.add("animate__animated", "animate__slideInUp");    
    } else if (roundCount == 11) {
        document.getElementById("item11-next-button").classList.remove("make-invisible");
        document.getElementById("item11-next-button").classList.add("animate__animated", "animate__slideInUp");    
    } else if (roundCount == 12) {
        document.getElementById("item12-next-button").classList.remove("make-invisible");
        document.getElementById("item12-next-button").classList.add("animate__animated", "animate__slideInUp");
    } else if (roundCount == 13) {
        document.getElementById("item13-next-button").classList.remove("make-invisible");
        document.getElementById("item13-next-button").classList.add("animate__animated", "animate__slideInUp");
    } else if (roundCount == 14) {
        document.getElementById("item14-next-button").classList.remove("make-invisible");
        document.getElementById("item14-next-button").classList.add("animate__animated", "animate__slideInUp");
    } else if (roundCount == 15) {
        document.getElementById("item15-next-button").classList.remove("make-invisible");
        document.getElementById("item15-next-button").classList.add("animate__animate", "animate__slideInUp");
    };
};

let answers = [8.25, 18, 2, 29, 485.14, 884, 14.24, 20000000, 240000000, 867600, 8223, 2, 8, 6, 23];
let lockInCounter = 0;

let player1LockButton = document.getElementById("player1-lock");
let player1GuessLock = document.getElementById("player1-lockedin");
let player1Proximity = [];
let player1Wins = 0;

player1LockButton.addEventListener("click", () => {

    let player1Guess = document.getElementById("player1-input").value;
    let player1GuessProximity = answers[roundCount-1] - player1Guess;

    lockInCounter++;

    document.getElementById("player1-input").classList.add("hide-element");
    document.getElementById("player1-lock").classList.add("hide-element");
    player1GuessLock.classList.remove("hide-element");
    player1GuessLock.classList.add("locked-in");
    player1GuessLock.innerHTML = player1Guess;

    if (player1GuessProximity < 0) {
        player1Proximity.push(999999999);
    } else {
        player1Proximity.push(player1GuessProximity);
    };
    
    if (lockInCounter == numberOfPlayers[0]) {
        showNextButton();
        return;
    } else {
        document.getElementById("player2-input").classList.remove("hide-element");
        document.getElementById("player2-lock").classList.remove("hide-element");
    }
});

let player2LockButton = document.getElementById("player2-lock");
let player2GuessLock = document.getElementById("player2-lockedin");
let player2Proximity = [];
let player2Wins = 0;

player2LockButton.addEventListener("click", () => {

    let player2Guess = document.getElementById("player2-input").value;
    let player2GuessProximity = answers[roundCount-1] - player2Guess;

    lockInCounter++;

    document.getElementById("player2-input").classList.add("hide-element");
    document.getElementById("player2-lock").classList.add("hide-element");
    player2GuessLock.classList.remove("hide-element");
    player2GuessLock.classList.add("locked-in");
    player2GuessLock.innerHTML = player2Guess;

    if (player2GuessProximity < 0) {
        player2Proximity.push(999999999);
    } else {
        player2Proximity.push(player2GuessProximity);
    };
    
    if (lockInCounter == numberOfPlayers[0]) {
        showNextButton();
    } else if (numberOfPlayers[0] == 2) {
        // if there are 2 players but player2 starts first, un-hide player1
        document.getElementById("player1-input").classList.remove("hide-element");
        document.getElementById("player1-lock").classList.remove("hide-element");
    } else {
        document.getElementById("player3-input").classList.remove("hide-element");
        document.getElementById("player3-lock").classList.remove("hide-element");
    }
});

let player3LockButton = document.getElementById("player3-lock");
let player3GuessLock = document.getElementById("player3-lockedin");
let player3Proximity = [];
let player3Wins = 0;

player3LockButton.addEventListener("click", () => {

    let player3Guess = document.getElementById("player3-input").value;
    let player3GuessProximity = answers[roundCount-1] - player3Guess;

    lockInCounter++;

    document.getElementById("player3-input").classList.add("hide-element");
    document.getElementById("player3-lock").classList.add("hide-element");
    player3GuessLock.classList.remove("hide-element");
    player3GuessLock.classList.add("locked-in");
    player3GuessLock.innerHTML = player3Guess;

    if (player3GuessProximity < 0) {
        player3Proximity.push(999999999);
    } else {
        player3Proximity.push(player3GuessProximity);
    };
    
    if (lockInCounter == numberOfPlayers[0]) {
        showNextButton();
    } else if (numberOfPlayers[0] == 3) {
        // if there are 3 players and player3 starts first, un-hide player1
        document.getElementById("player1-input").classList.remove("hide-element");
        document.getElementById("player1-lock").classList.remove("hide-element");
    } else {
        document.getElementById("player4-input").classList.remove("hide-element");
        document.getElementById("player4-lock").classList.remove("hide-element");
    }
});

let player4LockButton = document.getElementById("player4-lock");
let player4GuessLock = document.getElementById("player4-lockedin");
let player4Proximity = [];
let player4Wins = 0;

player4LockButton.addEventListener("click", () => {

    let player4Guess = document.getElementById("player4-input").value;
    let player4GuessProximity = answers[roundCount-1] - player4Guess;

    lockInCounter++;

    document.getElementById("player4-input").classList.add("hide-element");
    document.getElementById("player4-lock").classList.add("hide-element");
    player4GuessLock.classList.remove("hide-element");
    player4GuessLock.classList.add("locked-in");
    player4GuessLock.innerHTML = player4Guess;

    if (player4GuessProximity < 0) {
        player4Proximity.push(999999999);
    } else {
        player4Proximity.push(player4GuessProximity);
    };
    
    if (lockInCounter == numberOfPlayers[0]) {
        showNextButton();
    } else {
        document.getElementById("player1-input").classList.remove("hide-element");
        document.getElementById("player1-lock").classList.remove("hide-element");
    }
});

// check guesses function
function checkGuesses() {
    let x = (roundCount - 1);

    player1GuessLock.classList.remove("locked-in");
    player2GuessLock.classList.remove("locked-in");
    player3GuessLock.classList.remove("locked-in");
    player4GuessLock.classList.remove("locked-in");

    if (player1GuessLock.innerHTML > answers[x]) {
        player1GuessLock.classList.add("overage-guess");
    } else if (player1GuessLock.innerHTML == answers[x]) {
        player1Wins++;
        player1GuessLock.classList.add("winning-guess");
    } else if (numberOfPlayers[0] == 2 && player1Proximity[0] < player2Proximity[0]) {
        player1Wins++;
        player1GuessLock.classList.add("winning-guess");
    } else if (numberOfPlayers[0] == 3 && player1Proximity[0] < player2Proximity[0] && player1Proximity[0] < player3Proximity[0]) {
        player1Wins++;
        player1GuessLock.classList.add("winning-guess");
    } else if (numberOfPlayers[0] == 4 && player1Proximity[0] < player2Proximity[0] && player1Proximity[0] < player3Proximity[0] && player1Proximity[0] < player4Proximity[0]) {
        player1Wins++;
        player1GuessLock.classList.add("winning-guess");
    } else {
        player1GuessLock.classList.add("losing-guess");
    };

    if (player2GuessLock.innerHTML > answers[x]) {
        player2GuessLock.classList.add("overage-guess");
    } else if (player2GuessLock.innerHTML == answers[x]) {
        player2Wins++;
        player2GuessLock.classList.add("winning-guess");
    } else if (numberOfPlayers[0] == 2 && player2Proximity[0] < player1Proximity[0]) {
        player2Wins++;
        player2GuessLock.classList.add("winning-guess");
    } else if (numberOfPlayers[0] == 3 && player2Proximity[0] < player1Proximity[0] && player2Proximity[0] < player3Proximity[0]) {
        player2Wins++;
        player2GuessLock.classList.add("winning-guess");
    } else if (numberOfPlayers[0] == 4 && player2Proximity[0] < player1Proximity[0] && player2Proximity[0] < player3Proximity[0] && player2Proximity[0] < player4Proximity[0]) {
        player2Wins++;
        player2GuessLock.classList.add("winning-guess");
    } else {
        player2GuessLock.classList.add("losing-guess");
    };

    if (player3GuessLock.innerHTML > answers[x]) {
        player3GuessLock.classList.add("overage-guess");
    } else if (player3GuessLock.innerHTML == answers[x]) {
        player3Wins++;
        player3GuessLock.classList.add("winning-guess");
    } else if (numberOfPlayers[0] == 3 && player3Proximity[0] < player1Proximity[0] && player3Proximity[0] < player2Proximity[0]) {
        player3Wins++;
        player3GuessLock.classList.add("winning-guess");
    } else if (numberOfPlayers[0] == 4 && player3Proximity[0] < player1Proximity[0] && player3Proximity[0] < player2Proximity[0] && player3Proximity[0] < player4Proximity[0]) {
        player3Wins++;
        player3GuessLock.classList.add("winning-guess");
    } else {
        player3GuessLock.classList.add("losing-guess");
    };

    if (player4GuessLock.innerHTML > answers[x]) {
        player4GuessLock.classList.add("overage-guess");
    } else if (player4GuessLock.innerHTML == answers[x]) {
        player4Wins++;
        player4GuessLock.classList.add("winning-guess");
    } else if (numberOfPlayers[0] == 4 && player4Proximity[0] < player1Proximity[0] && player4Proximity[0] < player2Proximity[0] && player4Proximity[0] < player3Proximity[0]) {
        player4Wins++;
        player4GuessLock.classList.add("winning-guess");
    } else {
        player4GuessLock.classList.add("losing-guess");
    };
}


// show answer for item1 transition
document.getElementById("item1-next-button").addEventListener("click", () => {
    document.getElementById("item1-next-button").classList.remove("animate__animated", "animate__slideInUp", "animate__slower");
    document.getElementById("item1-next-button").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item1-next-button").addEventListener("animationend", () => {
        document.getElementById("item1-next-button").classList.add("make-invisible");
        document.getElementById("item1-info").classList.remove("animate__animated", "animate__fadeInUp", "animate__slower");
        document.getElementById("item1-info").classList.add("hide-element");
        document.getElementById("item1-answer").classList.remove("make-invisible");
        document.getElementById("item1-answer").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("item1-answer").addEventListener("animationend", () => {
            document.getElementById("item1-next-round").classList.remove("make-invisible");
            document.getElementById("item1-next-round").classList.add("animate__animated", "animate__slideInUp");

            checkGuesses();
            showWins();
        })

    })
});

// which player starts first in which round
function playerStart() {
    let array2 = [2, 1];
    let array3 = [3, 1, 2];
    let array4 = [4, 1, 2, 3];


    if (numberOfPlayers[0] == 1 && (!(lockInCounter == numberOfPlayers[0]))) {
        document.getElementById("player1-input").classList.remove("hide-element");
        document.getElementById("player1-lock").classList.remove("hide-element");
    };

    if (numberOfPlayers[0] == 2 && (!(lockInCounter == numberOfPlayers[0]))) {
        if (array2[roundCount % numberOfPlayers[0]] == 1) {
            document.getElementById("player1-input").classList.remove("hide-element");
            document.getElementById("player1-lock").classList.remove("hide-element");
            document.getElementById("player2-input").classList.add("hide-element");
            document.getElementById("player2-lock").classList.add("hide-element");
        } else if (array2[roundCount % numberOfPlayers[0]] == 2) {
            document.getElementById("player1-input").classList.add("hide-element");
            document.getElementById("player1-lock").classList.add("hide-element");
            document.getElementById("player2-input").classList.remove("hide-element");
            document.getElementById("player2-lock").classList.remove("hide-element");
        };
    };

    if (numberOfPlayers[0] == 3 && (!(lockInCounter == numberOfPlayers[0]))) {
        if (array3[roundCount % numberOfPlayers[0]] == 1) {
            document.getElementById("player1-input").classList.remove("hide-element");
            document.getElementById("player1-lock").classList.remove("hide-element");
            document.getElementById("player2-input").classList.add("hide-element");
            document.getElementById("player2-lock").classList.add("hide-element");
            document.getElementById("player3-input").classList.add("hide-element");
            document.getElementById("player3-lock").classList.add("hide-element");
        } else if (array3[roundCount % numberOfPlayers[0]] == 2) {
            document.getElementById("player1-input").classList.add("hide-element");
            document.getElementById("player1-lock").classList.add("hide-element");
            document.getElementById("player2-input").classList.remove("hide-element");
            document.getElementById("player2-lock").classList.remove("hide-element");
            document.getElementById("player3-input").classList.add("hide-element");
            document.getElementById("player3-lock").classList.add("hide-element");
        } else if (array3[roundCount % numberOfPlayers[0]] == 3) {
            document.getElementById("player1-input").classList.add("hide-element");
            document.getElementById("player1-lock").classList.add("hide-element");
            document.getElementById("player2-input").classList.add("hide-element");
            document.getElementById("player2-lock").classList.add("hide-element");
            document.getElementById("player3-input").classList.remove("hide-element");
            document.getElementById("player3-lock").classList.remove("hide-element");
        };
    };

    if (numberOfPlayers[0] == 4 && (!(lockInCounter == numberOfPlayers[0]))) {
        if (array4[roundCount % numberOfPlayers[0]] == 1) {
            document.getElementById("player1-input").classList.remove("hide-element");
            document.getElementById("player1-lock").classList.remove("hide-element");
            document.getElementById("player2-input").classList.add("hide-element");
            document.getElementById("player2-lock").classList.add("hide-element");
            document.getElementById("player3-input").classList.add("hide-element");
            document.getElementById("player3-lock").classList.add("hide-element");
            document.getElementById("player4-input").classList.add("hide-element");
            document.getElementById("player4-lock").classList.add("hide-element");
        } else if (array4[roundCount % numberOfPlayers[0]] == 2) {
            document.getElementById("player1-input").classList.add("hide-element");
            document.getElementById("player1-lock").classList.add("hide-element");
            document.getElementById("player2-input").classList.remove("hide-element");
            document.getElementById("player2-lock").classList.remove("hide-element");
            document.getElementById("player3-input").classList.add("hide-element");
            document.getElementById("player3-lock").classList.add("hide-element");
            document.getElementById("player4-input").classList.add("hide-element");
            document.getElementById("player4-lock").classList.add("hide-element");
        } else if (array4[roundCount % numberOfPlayers[0]] == 3) {
            document.getElementById("player1-input").classList.add("hide-element");
            document.getElementById("player1-lock").classList.add("hide-element");
            document.getElementById("player2-input").classList.add("hide-element");
            document.getElementById("player2-lock").classList.add("hide-element");
            document.getElementById("player3-input").classList.remove("hide-element");
            document.getElementById("player3-lock").classList.remove("hide-element");
            document.getElementById("player4-input").classList.add("hide-element");
            document.getElementById("player4-lock").classList.add("hide-element");
        } else if (array4[roundCount % numberOfPlayers[0]] == 4) {
            document.getElementById("player1-input").classList.add("hide-element");
            document.getElementById("player1-lock").classList.add("hide-element");
            document.getElementById("player2-input").classList.add("hide-element");
            document.getElementById("player2-lock").classList.add("hide-element");
            document.getElementById("player3-input").classList.add("hide-element");
            document.getElementById("player3-lock").classList.add("hide-element");
            document.getElementById("player4-input").classList.remove("hide-element");
            document.getElementById("player4-lock").classList.remove("hide-element");
        };
    };
};

// clear player animations
function clearPlayerAnimations() {
    document.getElementById("player1").classList.remove("animate__animated", "animate__fadeInUp");
    document.getElementById("player2").classList.remove("animate__animated", "animate__fadeInUp");
    document.getElementById("player3").classList.remove("animate__animated", "animate__fadeInUp");
    document.getElementById("player4").classList.remove("animate__animated", "animate__fadeInUp");
}

// clear player inputs function
function clearInputs() {
    document.getElementById("player1-input").value = null;
    document.getElementById("player2-input").value = null;
    document.getElementById("player3-input").value = null;
    document.getElementById("player4-input").value = null;
};

// clear lockedin classes
function clearLockedIn() {
    document.getElementById("player1-lockedin").classList.remove("winning-guess", "overage-guess", "losing-guess");
    document.getElementById("player2-lockedin").classList.remove("winning-guess", "overage-guess", "losing-guess");
    document.getElementById("player3-lockedin").classList.remove("winning-guess", "overage-guess", "losing-guess");
    document.getElementById("player4-lockedin").classList.remove("winning-guess", "overage-guess", "losing-guess");
};

// hide lockedin
function hideLockedIn() {
    document.getElementById("player1-lockedin").classList.add("hide-element");
    document.getElementById("player2-lockedin").classList.add("hide-element");
    document.getElementById("player3-lockedin").classList.add("hide-element");
    document.getElementById("player4-lockedin").classList.add("hide-element");
};

// transition to round 2
document.getElementById("item1-next-round").addEventListener("click", () => {
    roundCount++;
    hideNextButton();
    hideWins();
    lockInCounter = 0;
    player1Proximity.length = 0;
    player2Proximity.length = 0;
    player3Proximity.length = 0;
    player4Proximity.length = 0;
    
    document.getElementById("item1-next-round").classList.remove("animate__animated", "animate__slideInUp");
    item1.classList.remove("animate__animated", "animate__zoomIn", "animate__slower");

    document.getElementById("item2-round").classList.add("make-invisible");
    document.getElementById("item2-info").classList.add("make-invisible");
    document.getElementById("item2-answer").classList.add("make-invisible");


    document.getElementById("player1-input").classList.remove("animate__animated", "animate__slideInUp");
    document.getElementById("player1-lock").classList.remove("animate__animated", "animate__slideInUp");
    document.getElementById("player2-input").classList.remove("animate__animated", "animate__slideInUp");
    document.getElementById("player2-lock").classList.remove("animate__animated", "animate__slideInUp");

    hideLockedIn();

    document.getElementById("item1-next-round").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item1-next-round").addEventListener("animationend", () => {
        item1.classList.add("hide-element");
        item2.classList.remove("hide-element");
        playerStart();
        clearInputs();
        clearLockedIn();
        item2.classList.add("animate__animated", "animate__zoomIn", "animate__slower");
        item2.addEventListener("animationend", () => {
            document.getElementById("item2-round").classList.remove("make-invisible");
            document.getElementById("item2-round").classList.add("animate__animated", "animate__slideInLeft");
            document.getElementById("item2-round").addEventListener("animationend", () => {
                document.getElementById("item2-info").classList.remove("make-invisible");
                document.getElementById("item2-info").classList.add("animate__animated", "animate__fadeInUp", "animate__slower");
            });        
        });
    });
});

// show answer for item2 transition
document.getElementById("item2-next-button").addEventListener("click", () => {
    document.getElementById("item2-next-button").classList.remove("animate__animated", "animate__slideInUp", "animate__slower");
    document.getElementById("item2-next-button").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item2-next-button").addEventListener("animationend", () => {
        document.getElementById("item2-next-button").classList.add("make-invisible");
        document.getElementById("item2-info").classList.remove("animate__animated", "animate__fadeInUp", "animate__slower");
        document.getElementById("item2-info").classList.add("hide-element");
        document.getElementById("item2-answer").classList.remove("make-invisible");
        document.getElementById("item2-answer").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("item2-answer").addEventListener("animationend", () => {
            document.getElementById("item2-next-round").classList.remove("make-invisible");
            document.getElementById("item2-next-round").classList.add("animate__animated", "animate__slideInUp");

            checkGuesses();
            showWins();
        })

    });
});

// transition to round 3
document.getElementById("item2-next-round").addEventListener("click", () => {
    roundCount++;
    hideNextButton();
    hideWins();
    lockInCounter = 0;
    player1Proximity.length = 0;
    player2Proximity.length = 0;
    player3Proximity.length = 0;
    player4Proximity.length = 0;
    
    document.getElementById("item2-next-round").classList.remove("animate__animated", "animate__slideInUp");
    item2.classList.remove("animate__animated", "animate__zoomIn", "animate__slower");

    document.getElementById("item3-round").classList.add("make-invisible");
    document.getElementById("item3-info").classList.add("make-invisible");
    document.getElementById("item3-answer").classList.add("make-invisible");

    hideLockedIn();

    document.getElementById("item2-next-round").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item2-next-round").addEventListener("animationend", () => {
        item2.classList.add("hide-element");
        item3.classList.remove("hide-element");
        playerStart();
        clearInputs();
        clearLockedIn();
        item3.classList.add("animate__animated", "animate__zoomIn", "animate__slower");
        item3.addEventListener("animationend", () => {
            document.getElementById("item3-round").classList.remove("make-invisible");
            document.getElementById("item3-round").classList.add("animate__animated", "animate__slideInLeft");
            document.getElementById("item3-round").addEventListener("animationend", () => {
                document.getElementById("item3-info").classList.remove("make-invisible");
                document.getElementById("item3-info").classList.add("animate__animated", "animate__fadeInUp", "animate__slower");
            });        
        });
    });
});

// show answer for item3 and transition to next round button
document.getElementById("item3-next-button").addEventListener("click", () => {
    document.getElementById("item3-next-button").classList.remove("animate__animated", "animate__slideInUp", "animate__slower");
    document.getElementById("item3-next-button").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item3-next-button").addEventListener("animationend", () => {
        document.getElementById("item3-next-button").classList.add("make-invisible");
        document.getElementById("item3-info").classList.remove("animate__animated", "animate__fadeInUp", "animate__slower");
        document.getElementById("item3-info").classList.add("hide-element");
        document.getElementById("item3-answer").classList.remove("make-invisible");
        document.getElementById("item3-answer").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("item3-answer").addEventListener("animationend", () => {
            document.getElementById("item3-next-round").classList.remove("make-invisible");
            document.getElementById("item3-next-round").classList.add("animate__animated", "animate__slideInUp");

            checkGuesses();
            showWins();
        })

    });
});

// transition to round 4
document.getElementById("item3-next-round").addEventListener("click", () => {
    roundCount++;
    hideNextButton();
    hideWins()
    lockInCounter = 0;
    player1Proximity.length = 0;
    player2Proximity.length = 0;
    player3Proximity.length = 0;
    player4Proximity.length = 0;
    
    document.getElementById("item3-next-round").classList.remove("animate__animated", "animate__slideInUp");
    item3.classList.remove("animate__animated", "animate__zoomIn", "animate__slower");

    document.getElementById("item4-round").classList.add("make-invisible");
    document.getElementById("item4-info").classList.add("make-invisible");
    document.getElementById("item4-answer").classList.add("make-invisible");

    hideLockedIn();

    document.getElementById("item3-next-round").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item3-next-round").addEventListener("animationend", () => {
        item3.classList.add("hide-element");
        item4.classList.remove("hide-element");
        playerStart();
        clearInputs();
        clearLockedIn();
        item4.classList.add("animate__animated", "animate__zoomIn", "animate__slower");
        item4.addEventListener("animationend", () => {
            document.getElementById("item4-round").classList.remove("make-invisible");
            document.getElementById("item4-round").classList.add("animate__animated", "animate__slideInLeft");
            document.getElementById("item4-round").addEventListener("animationend", () => {
                document.getElementById("item4-info").classList.remove("make-invisible");
                document.getElementById("item4-info").classList.add("animate__animated", "animate__fadeInUp", "animate__slower");
            });        
        });
    });
});

// show answer for item4 and transition to next round button
document.getElementById("item4-next-button").addEventListener("click", () => {
    document.getElementById("item4-next-button").classList.remove("animate__animated", "animate__slideInUp", "animate__slower");
    document.getElementById("item4-next-button").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item4-next-button").addEventListener("animationend", () => {
        document.getElementById("item4-next-button").classList.add("make-invisible");
        document.getElementById("item4-info").classList.remove("animate__animated", "animate__fadeInUp", "animate__slower");
        document.getElementById("item4-info").classList.add("hide-element");
        document.getElementById("item4-answer").classList.remove("make-invisible");
        document.getElementById("item4-answer").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("item4-answer").addEventListener("animationend", () => {
            document.getElementById("item4-next-round").classList.remove("make-invisible");
            document.getElementById("item4-next-round").classList.add("animate__animated", "animate__slideInUp");

            checkGuesses();
            showWins();
        })

    });
});

// transition to round 5
document.getElementById("item4-next-round").addEventListener("click", () => {
    roundCount++;
    hideNextButton();
    hideWins();
    lockInCounter = 0;
    player1Proximity.length = 0;
    player2Proximity.length = 0;
    player3Proximity.length = 0;
    player4Proximity.length = 0;
    
    document.getElementById("item4-next-round").classList.remove("animate__animated", "animate__slideInUp");
    item4.classList.remove("animate__animated", "animate__zoomIn", "animate__slower");

    document.getElementById("item5-round").classList.add("make-invisible");
    document.getElementById("item5-info").classList.add("make-invisible");
    document.getElementById("item5-answer").classList.add("make-invisible");

    hideLockedIn();

    document.getElementById("item4-next-round").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item4-next-round").addEventListener("animationend", () => {
        item4.classList.add("hide-element");
        item5.classList.remove("hide-element");
        playerStart();
        clearInputs();
        clearLockedIn();
        item5.classList.add("animate__animated", "animate__zoomIn", "animate__slower");
        item5.addEventListener("animationend", () => {
            document.getElementById("item5-round").classList.remove("make-invisible");
            document.getElementById("item5-round").classList.add("animate__animated", "animate__slideInLeft");
            document.getElementById("item5-round").addEventListener("animationend", () => {
                document.getElementById("item5-info").classList.remove("make-invisible");
                document.getElementById("item5-info").classList.add("animate__animated", "animate__fadeInUp", "animate__slower");
            });        
        });
    });
});


// show answer for item5 and transition to next round button
document.getElementById("item5-next-button").addEventListener("click", () => {
    document.getElementById("item5-next-button").classList.remove("animate__animated", "animate__slideInUp", "animate__slower");
    document.getElementById("item5-next-button").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item5-next-button").addEventListener("animationend", () => {
        document.getElementById("item5-next-button").classList.add("make-invisible");
        document.getElementById("item5-info").classList.remove("animate__animated", "animate__fadeInUp", "animate__slower");
        document.getElementById("item5-info").classList.add("hide-element");
        document.getElementById("item5-answer").classList.remove("make-invisible");
        document.getElementById("item5-answer").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("item5-answer").addEventListener("animationend", () => {
            document.getElementById("item5-next-round").classList.remove("make-invisible");
            document.getElementById("item5-next-round").classList.add("animate__animated", "animate__slideInUp");

            checkGuesses();
            showWins();
        })

    });
});

// transition to round 6
document.getElementById("item5-next-round").addEventListener("click", () => {
    roundCount++;
    hideNextButton();
    hideWins();
    lockInCounter = 0;
    player1Proximity.length = 0;
    player2Proximity.length = 0;
    player3Proximity.length = 0;
    player4Proximity.length = 0;
    
    document.getElementById("item5-next-round").classList.remove("animate__animated", "animate__slideInUp");
    item5.classList.remove("animate__animated", "animate__zoomIn", "animate__slower");

    document.getElementById("item6-round").classList.add("make-invisible");
    document.getElementById("item6-info").classList.add("make-invisible");
    document.getElementById("item6-answer").classList.add("make-invisible");

    hideLockedIn();

    document.getElementById("item5-next-round").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item5-next-round").addEventListener("animationend", () => {
        item5.classList.add("hide-element");
        item6.classList.remove("hide-element");
        playerStart();
        clearInputs();
        clearLockedIn();
        item6.classList.add("animate__animated", "animate__zoomIn", "animate__slower");
        item6.addEventListener("animationend", () => {
            document.getElementById("item6-round").classList.remove("make-invisible");
            document.getElementById("item6-round").classList.add("animate__animated", "animate__slideInLeft");
            document.getElementById("item6-round").addEventListener("animationend", () => {
                document.getElementById("item6-info").classList.remove("make-invisible");
                document.getElementById("item6-info").classList.add("animate__animated", "animate__fadeInUp", "animate__slower");
            });        
        });
    });
});

// show answer for item6 and transition to next round button
document.getElementById("item6-next-button").addEventListener("click", () => {
    document.getElementById("item6-next-button").classList.remove("animate__animated", "animate__slideInUp", "animate__slower");
    document.getElementById("item6-next-button").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item6-next-button").addEventListener("animationend", () => {
        document.getElementById("item6-img").src="./CAC-PIR/cac-pir-messi7.jpg";
        document.getElementById("item6-next-button").classList.add("make-invisible");
        document.getElementById("item6-info").classList.remove("animate__animated", "animate__fadeInUp", "animate__slower");
        document.getElementById("item6-info").classList.add("hide-element");
        document.getElementById("item6-answer").classList.remove("make-invisible");
        document.getElementById("item6-answer").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("item6-answer").addEventListener("animationend", () => {
            document.getElementById("item6-next-round").classList.remove("make-invisible");
            document.getElementById("item6-next-round").classList.add("animate__animated", "animate__slideInUp");

            checkGuesses();
            showWins();
        })

    });
});

// transition to round 7
document.getElementById("item6-next-round").addEventListener("click", () => {
    roundCount++;
    hideNextButton();
    hideWins();
    lockInCounter = 0;
    player1Proximity.length = 0;
    player2Proximity.length = 0;
    player3Proximity.length = 0;
    player4Proximity.length = 0;
    
    document.getElementById("item6-next-round").classList.remove("animate__animated", "animate__slideInUp");
    item6.classList.remove("animate__animated", "animate__zoomIn", "animate__slower");

    document.getElementById("item7-round").classList.add("make-invisible");
    document.getElementById("item7-info").classList.add("make-invisible");
    document.getElementById("item7-answer").classList.add("make-invisible");

    hideLockedIn();

    document.getElementById("item6-next-round").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item6-next-round").addEventListener("animationend", () => {
        item6.classList.add("hide-element");
        item7.classList.remove("hide-element");
        playerStart();
        clearInputs();
        clearLockedIn();
        item7.classList.add("animate__animated", "animate__zoomIn", "animate__slower");
        item7.addEventListener("animationend", () => {
            document.getElementById("item7-round").classList.remove("make-invisible");
            document.getElementById("item7-round").classList.add("animate__animated", "animate__slideInLeft");
            document.getElementById("item7-round").addEventListener("animationend", () => {
                document.getElementById("item7-info").classList.remove("make-invisible");
                document.getElementById("item7-info").classList.add("animate__animated", "animate__fadeInUp", "animate__slower");
            });        
        });
    });
});

// show answer for item7 and transition to next round button
document.getElementById("item7-next-button").addEventListener("click", () => {
    document.getElementById("item7-next-button").classList.remove("animate__animated", "animate__slideInUp", "animate__slower");
    document.getElementById("item7-next-button").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item7-next-button").addEventListener("animationend", () => {
        document.getElementById("item7-next-button").classList.add("make-invisible");
        document.getElementById("item7-info").classList.remove("animate__animated", "animate__fadeInUp", "animate__slower");
        document.getElementById("item7-info").classList.add("hide-element");
        document.getElementById("item7-answer").classList.remove("make-invisible");
        document.getElementById("item7-answer").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("item7-answer").addEventListener("animationend", () => {
            document.getElementById("item7-next-round").classList.remove("make-invisible");
            document.getElementById("item7-next-round").classList.add("animate__animated", "animate__slideInUp");

            checkGuesses();
            showWins();
        })

    });
});

// transition to round 8
document.getElementById("item7-next-round").addEventListener("click", () => {
    roundCount++;
    hideNextButton();
    hideWins();
    lockInCounter = 0;
    player1Proximity.length = 0;
    player2Proximity.length = 0;
    player3Proximity.length = 0;
    player4Proximity.length = 0;
    
    document.getElementById("item7-next-round").classList.remove("animate__animated", "animate__slideInUp");
    item7.classList.remove("animate__animated", "animate__zoomIn", "animate__slower");

    document.getElementById("item8-round").classList.add("make-invisible");
    document.getElementById("item8-info").classList.add("make-invisible");
    document.getElementById("item8-answer").classList.add("make-invisible");

    hideLockedIn();

    document.getElementById("item7-next-round").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item7-next-round").addEventListener("animationend", () => {
        item7.classList.add("hide-element");
        item8.classList.remove("hide-element");
        playerStart();
        clearInputs();
        clearLockedIn();
        item8.classList.add("animate__animated", "animate__zoomIn", "animate__slower");
        item8.addEventListener("animationend", () => {
            document.getElementById("item8-round").classList.remove("make-invisible");
            document.getElementById("item8-round").classList.add("animate__animated", "animate__slideInLeft");
            document.getElementById("item8-round").addEventListener("animationend", () => {
                document.getElementById("item8-info").classList.remove("make-invisible");
                document.getElementById("item8-info").classList.add("animate__animated", "animate__fadeInUp", "animate__slower");
            });        
        });
    });
});

// show answer for item8 and transition to next round button
document.getElementById("item8-next-button").addEventListener("click", () => {
    document.getElementById("item8-next-button").classList.remove("animate__animated", "animate__slideInUp", "animate__slower");
    document.getElementById("item8-next-button").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item8-next-button").addEventListener("animationend", () => {
        document.getElementById("item8-next-button").classList.add("make-invisible");
        document.getElementById("item8-info").classList.remove("animate__animated", "animate__fadeInUp", "animate__slower");
        document.getElementById("item8-info").classList.add("hide-element");
        document.getElementById("item8-answer").classList.remove("make-invisible");
        document.getElementById("item8-answer").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("item8-answer").addEventListener("animationend", () => {
            document.getElementById("item8-next-round").classList.remove("make-invisible");
            document.getElementById("item8-next-round").classList.add("animate__animated", "animate__slideInUp");

            checkGuesses();
            showWins();
        })

    });
});

// transition to round 9
document.getElementById("item8-next-round").addEventListener("click", () => {
    roundCount++;
    hideNextButton();
    hideWins();
    lockInCounter = 0;
    player1Proximity.length = 0;
    player2Proximity.length = 0;
    player3Proximity.length = 0;
    player4Proximity.length = 0;
    
    document.getElementById("item8-next-round").classList.remove("animate__animated", "animate__slideInUp");
    item8.classList.remove("animate__animated", "animate__zoomIn", "animate__slower");

    document.getElementById("item9-round").classList.add("make-invisible");
    document.getElementById("item9-info").classList.add("make-invisible");
    document.getElementById("item9-answer").classList.add("make-invisible");

    hideLockedIn();

    document.getElementById("item8-next-round").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item8-next-round").addEventListener("animationend", () => {
        item8.classList.add("hide-element");
        item9.classList.remove("hide-element");
        playerStart();
        clearInputs();
        clearLockedIn();
        item9.classList.add("animate__animated", "animate__zoomIn", "animate__slower");
        item9.addEventListener("animationend", () => {
            document.getElementById("item9-round").classList.remove("make-invisible");
            document.getElementById("item9-round").classList.add("animate__animated", "animate__slideInLeft");
            document.getElementById("item9-round").addEventListener("animationend", () => {
                document.getElementById("item9-info").classList.remove("make-invisible");
                document.getElementById("item9-info").classList.add("animate__animated", "animate__fadeInUp", "animate__slower");
            });        
        });
    });
});

// show answer for item9 and transition to next round button
document.getElementById("item9-next-button").addEventListener("click", () => {
    document.getElementById("item9-next-button").classList.remove("animate__animated", "animate__slideInUp", "animate__slower");
    document.getElementById("item9-next-button").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item9-next-button").addEventListener("animationend", () => {
        document.getElementById("item9-img").src="./CAC-PIR/cac-pir-neymar2.jpg";
        document.getElementById("item9-next-button").classList.add("make-invisible");
        document.getElementById("item9-info").classList.remove("animate__animated", "animate__fadeInUp", "animate__slower");
        document.getElementById("item9-info").classList.add("hide-element");
        document.getElementById("item9-answer").classList.remove("make-invisible");
        document.getElementById("item9-answer").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("item9-answer").addEventListener("animationend", () => {
            document.getElementById("item9-next-round").classList.remove("make-invisible");
            document.getElementById("item9-next-round").classList.add("animate__animated", "animate__slideInUp");

            checkGuesses();
            showWins();
        })

    });
});

// transition to round 10
document.getElementById("item9-next-round").addEventListener("click", () => {
    roundCount++;
    hideNextButton();
    hideWins();
    lockInCounter = 0;
    player1Proximity.length = 0;
    player2Proximity.length = 0;
    player3Proximity.length = 0;
    player4Proximity.length = 0;
    
    document.getElementById("item9-next-round").classList.remove("animate__animated", "animate__slideInUp");
    item9.classList.remove("animate__animated", "animate__zoomIn", "animate__slower");

    document.getElementById("item10-round").classList.add("make-invisible");
    document.getElementById("item10-info").classList.add("make-invisible");
    document.getElementById("item10-answer").classList.add("make-invisible");

    hideLockedIn();

    document.getElementById("item9-next-round").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item9-next-round").addEventListener("animationend", () => {
        item9.classList.add("hide-element");
        item10.classList.remove("hide-element");
        playerStart();
        clearInputs();
        clearLockedIn();
        item10.classList.add("animate__animated", "animate__zoomIn", "animate__slower");
        item10.addEventListener("animationend", () => {
            document.getElementById("item10-round").classList.remove("make-invisible");
            document.getElementById("item10-round").classList.add("animate__animated", "animate__slideInLeft");
            document.getElementById("item10-round").addEventListener("animationend", () => {
                document.getElementById("item10-info").classList.remove("make-invisible");
                document.getElementById("item10-info").classList.add("animate__animated", "animate__fadeInUp", "animate__slower");
            });        
        });
    });
});

// show answer for item10 and transition to next round button
document.getElementById("item10-next-button").addEventListener("click", () => {
    document.getElementById("item10-next-button").classList.remove("animate__animated", "animate__slideInUp", "animate__slower");
    document.getElementById("item10-next-button").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item10-next-button").addEventListener("animationend", () => {
        document.getElementById("item10-next-button").classList.add("make-invisible");
        document.getElementById("item10-info").classList.remove("animate__animated", "animate__fadeInUp", "animate__slower");
        document.getElementById("item10-info").classList.add("hide-element");
        document.getElementById("item10-answer").classList.remove("make-invisible");
        document.getElementById("item10-answer").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("item10-answer").addEventListener("animationend", () => {
            document.getElementById("item10-next-round").classList.remove("make-invisible");
            document.getElementById("item10-next-round").classList.add("animate__animated", "animate__slideInUp");

            checkGuesses();
            showWins();
        })

    });
});

// transition to round 11
document.getElementById("item10-next-round").addEventListener("click", () => {
    roundCount++;
    hideNextButton();
    hideWins();
    lockInCounter = 0;
    player1Proximity.length = 0;
    player2Proximity.length = 0;
    player3Proximity.length = 0;
    player4Proximity.length = 0;
    
    document.getElementById("item10-next-round").classList.remove("animate__animated", "animate__slideInUp");
    item10.classList.remove("animate__animated", "animate__zoomIn", "animate__slower");

    document.getElementById("item11-round").classList.add("make-invisible");
    document.getElementById("item11-info").classList.add("make-invisible");
    document.getElementById("item11-answer").classList.add("make-invisible");

    hideLockedIn();

    document.getElementById("item10-next-round").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item10-next-round").addEventListener("animationend", () => {
        item10.classList.add("hide-element");
        item11.classList.remove("hide-element");
        playerStart();
        clearInputs();
        clearLockedIn();
        item11.classList.add("animate__animated", "animate__zoomIn", "animate__slower");
        item11.addEventListener("animationend", () => {
            document.getElementById("item11-round").classList.remove("make-invisible");
            document.getElementById("item11-round").classList.add("animate__animated", "animate__slideInLeft");
            document.getElementById("item11-round").addEventListener("animationend", () => {
                document.getElementById("item11-info").classList.remove("make-invisible");
                document.getElementById("item11-info").classList.add("animate__animated", "animate__fadeInUp", "animate__slower");
            });        
        });
    });
});

// show answer for item11 and transition to next round button
document.getElementById("item11-next-button").addEventListener("click", () => {
    document.getElementById("item11-next-button").classList.remove("animate__animated", "animate__slideInUp", "animate__slower");
    document.getElementById("item11-next-button").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item11-next-button").addEventListener("animationend", () => {
        document.getElementById("item11-next-button").classList.add("make-invisible");
        document.getElementById("item11-info").classList.remove("animate__animated", "animate__fadeInUp", "animate__slower");
        document.getElementById("item11-info").classList.add("hide-element");
        document.getElementById("item11-answer").classList.remove("make-invisible");
        document.getElementById("item11-answer").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("item11-answer").addEventListener("animationend", () => {
            document.getElementById("item11-next-round").classList.remove("make-invisible");
            document.getElementById("item11-next-round").classList.add("animate__animated", "animate__slideInUp");

            checkGuesses();
            showWins();
        })

    });
});

// transition to round 12
document.getElementById("item11-next-round").addEventListener("click", () => {
    roundCount++;
    hideNextButton();
    hideWins();
    lockInCounter = 0;
    player1Proximity.length = 0;
    player2Proximity.length = 0;
    player3Proximity.length = 0;
    player4Proximity.length = 0;
    
    document.getElementById("item11-next-round").classList.remove("animate__animated", "animate__slideInUp");
    item11.classList.remove("animate__animated", "animate__zoomIn", "animate__slower");

    document.getElementById("item12-round").classList.add("make-invisible");
    document.getElementById("item12-info").classList.add("make-invisible");
    document.getElementById("item12-answer").classList.add("make-invisible");

    hideLockedIn();

    document.getElementById("item11-next-round").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item11-next-round").addEventListener("animationend", () => {
        item11.classList.add("hide-element");
        item12.classList.remove("hide-element");
        playerStart();
        clearInputs();
        clearLockedIn();
        item12.classList.add("animate__animated", "animate__zoomIn", "animate__slower");
        item12.addEventListener("animationend", () => {
            document.getElementById("item12-round").classList.remove("make-invisible");
            document.getElementById("item12-round").classList.add("animate__animated", "animate__slideInLeft");
            document.getElementById("item12-round").addEventListener("animationend", () => {
                document.getElementById("item12-info").classList.remove("make-invisible");
                document.getElementById("item12-info").classList.add("animate__animated", "animate__fadeInUp", "animate__slower");
            });        
        });
    });
});

// show answer for item12 and transition to next round button
document.getElementById("item12-next-button").addEventListener("click", () => {
    document.getElementById("item12-next-button").classList.remove("animate__animated", "animate__slideInUp", "animate__slower");
    document.getElementById("item12-next-button").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item12-next-button").addEventListener("animationend", () => {
        document.getElementById("item12-next-button").classList.add("make-invisible");
        document.getElementById("item12-info").classList.remove("animate__animated", "animate__fadeInUp", "animate__slower");
        document.getElementById("item12-info").classList.add("hide-element");
        document.getElementById("item12-answer").classList.remove("make-invisible");
        document.getElementById("item12-answer").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("item12-answer").addEventListener("animationend", () => {
            document.getElementById("item12-next-round").classList.remove("make-invisible");
            document.getElementById("item12-next-round").classList.add("animate__animated", "animate__slideInUp");

            checkGuesses();
            showWins();
        })

    });
});

// transition to round 13
document.getElementById("item12-next-round").addEventListener("click", () => {
    roundCount++;
    hideNextButton();
    hideWins();
    lockInCounter = 0;
    player1Proximity.length = 0;
    player2Proximity.length = 0;
    player3Proximity.length = 0;
    player4Proximity.length = 0;
    
    document.getElementById("item12-next-round").classList.remove("animate__animated", "animate__slideInUp");
    item12.classList.remove("animate__animated", "animate__zoomIn", "animate__slower");

    document.getElementById("item13-round").classList.add("make-invisible");
    document.getElementById("item13-info").classList.add("make-invisible");
    document.getElementById("item13-answer").classList.add("make-invisible");

    hideLockedIn();

    document.getElementById("item12-next-round").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item12-next-round").addEventListener("animationend", () => {
        item12.classList.add("hide-element");
        item13.classList.remove("hide-element");
        playerStart();
        clearInputs();
        clearLockedIn();
        item13.classList.add("animate__animated", "animate__zoomIn", "animate__slower");
        item13.addEventListener("animationend", () => {
            document.getElementById("item13-round").classList.remove("make-invisible");
            document.getElementById("item13-round").classList.add("animate__animated", "animate__slideInLeft");
            document.getElementById("item13-round").addEventListener("animationend", () => {
                document.getElementById("item13-info").classList.remove("make-invisible");
                document.getElementById("item13-info").classList.add("animate__animated", "animate__fadeInUp", "animate__slower");
            });        
        });
    });
});

// show answer for item13 and transition to next round button
document.getElementById("item13-next-button").addEventListener("click", () => {
    document.getElementById("item13-next-button").classList.remove("animate__animated", "animate__slideInUp", "animate__slower");
    document.getElementById("item13-next-button").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item13-next-button").addEventListener("animationend", () => {
        document.getElementById("item13-next-button").classList.add("make-invisible");
        document.getElementById("item13-info").classList.remove("animate__animated", "animate__fadeInUp", "animate__slower");
        document.getElementById("item13-info").classList.add("hide-element");
        document.getElementById("item13-answer").classList.remove("make-invisible");
        document.getElementById("item13-answer").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("item13-answer").addEventListener("animationend", () => {
            document.getElementById("item13-next-round").classList.remove("make-invisible");
            document.getElementById("item13-next-round").classList.add("animate__animated", "animate__slideInUp");

            checkGuesses();
            showWins();
        })

    });
});

// transition to round 14
document.getElementById("item13-next-round").addEventListener("click", () => {
    roundCount++;
    hideNextButton();
    hideWins();
    lockInCounter = 0;
    player1Proximity.length = 0;
    player2Proximity.length = 0;
    player3Proximity.length = 0;
    player4Proximity.length = 0;
    
    document.getElementById("item13-next-round").classList.remove("animate__animated", "animate__slideInUp");
    item13.classList.remove("animate__animated", "animate__zoomIn", "animate__slower");

    document.getElementById("item14-round").classList.add("make-invisible");
    document.getElementById("item14-info").classList.add("make-invisible");
    document.getElementById("item14-answer").classList.add("make-invisible");

    hideLockedIn();

    document.getElementById("item13-next-round").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item13-next-round").addEventListener("animationend", () => {
        item13.classList.add("hide-element");
        item14.classList.remove("hide-element");
        playerStart();
        clearInputs();
        clearLockedIn();
        item14.classList.add("animate__animated", "animate__zoomIn", "animate__slower");
        item14.addEventListener("animationend", () => {
            document.getElementById("item14-round").classList.remove("make-invisible");
            document.getElementById("item14-round").classList.add("animate__animated", "animate__slideInLeft");
            document.getElementById("item14-round").addEventListener("animationend", () => {
                document.getElementById("item14-info").classList.remove("make-invisible");
                document.getElementById("item14-info").classList.add("animate__animated", "animate__fadeInUp", "animate__slower");
            });        
        });
    });
});

// show answer for item14 and transition to next round button
document.getElementById("item14-next-button").addEventListener("click", () => {
    document.getElementById("item14-next-button").classList.remove("animate__animated", "animate__slideInUp", "animate__slower");
    document.getElementById("item14-next-button").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item14-next-button").addEventListener("animationend", () => {
        document.getElementById("item14-next-button").classList.add("make-invisible");
        document.getElementById("item14-info").classList.remove("animate__animated", "animate__fadeInUp", "animate__slower");
        document.getElementById("item14-info").classList.add("hide-element");
        document.getElementById("item14-answer").classList.remove("make-invisible");
        document.getElementById("item14-answer").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("item14-answer").addEventListener("animationend", () => {
            document.getElementById("item14-next-round").classList.remove("make-invisible");
            document.getElementById("item14-next-round").classList.add("animate__animated", "animate__slideInUp");

            checkGuesses();
            showWins();
        })

    });
});

// transition to round 15
document.getElementById("item14-next-round").addEventListener("click", () => {
    roundCount++;
    hideNextButton();
    hideWins();
    lockInCounter = 0;
    player1Proximity.length = 0;
    player2Proximity.length = 0;
    player3Proximity.length = 0;
    player4Proximity.length = 0;
    
    document.getElementById("item14-next-round").classList.remove("animate__animated", "animate__slideInUp");
    item14.classList.remove("animate__animated", "animate__zoomIn", "animate__slower");

    document.getElementById("item15-round").classList.add("make-invisible");
    document.getElementById("item15-info").classList.add("make-invisible");
    document.getElementById("item15-answer").classList.add("make-invisible");

    hideLockedIn();

    document.getElementById("item14-next-round").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item14-next-round").addEventListener("animationend", () => {
        item14.classList.add("hide-element");
        item15.classList.remove("hide-element");
        playerStart();
        clearInputs();
        clearLockedIn();
        item15.classList.add("animate__animated", "animate__zoomIn", "animate__slower");
        item15.addEventListener("animationend", () => {
            document.getElementById("item15-round").classList.remove("make-invisible");
            document.getElementById("item15-round").classList.add("animate__animated", "animate__slideInLeft");
            document.getElementById("item15-round").addEventListener("animationend", () => {
                document.getElementById("item15-info").classList.remove("make-invisible");
                document.getElementById("item15-info").classList.add("animate__animated", "animate__fadeInUp", "animate__slower");
            });        
        });
    });
});

// show answer for item15 and transition to next round button
document.getElementById("item15-next-button").addEventListener("click", () => {
    document.getElementById("item15-next-button").classList.remove("animate__animated", "animate__slideInUp", "animate__slower");
    document.getElementById("item15-next-button").classList.add("animate__animated", "animate__zoomOut");
    document.getElementById("item15-next-button").addEventListener("animationend", () => {
        document.getElementById("item15-next-button").classList.add("make-invisible");
        document.getElementById("item15-info").classList.remove("animate__animated", "animate__fadeInUp", "animate__slower");
        document.getElementById("item15-info").classList.add("hide-element");
        document.getElementById("item15-answer").classList.remove("make-invisible");
        document.getElementById("item15-answer").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("item15-answer").addEventListener("animationend", () => {
            document.getElementById("item15-next-round").classList.remove("make-invisible");
            document.getElementById("item15-next-round").classList.add("animate__animated", "animate__slideInUp");

            checkGuesses();
            showWins();
        })

    });
});
