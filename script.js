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

item1.classList.add("hide-element");
document.getElementById("item1-round").classList.add("make-invisible");
document.getElementById("item1-info").classList.add("make-invisible");
document.getElementById("item1-answer").classList.add("make-invisible");
document.getElementById("item1-next-button").classList.add("make-invisible");
document.getElementById("item1-next-round").classList.add("make-invisible");

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

let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let player3 = document.getElementById("player3");
let player4 = document.getElementById("player4");

player1.classList.add("hide-element");
player2.classList.add("hide-element");
player3.classList.add("hide-element");
player4.classList.add("hide-element");

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
                    })

                })
            })
        })
    })
});

document.getElementById("rules-next-button").addEventListener("click", () => {
    roundCount++;
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
                        if (numberOfPlayers == 1) {
                            document.getElementById("player1-input").classList.remove("hide-element");
                            document.getElementById("player1-lock").classList.remove("hide-element");
                            document.getElementById("player1-input").classList.add("animate__animated", "animate__slideInUp");
                            document.getElementById("player1-lock").classList.add("animate__animated", "animate__slideInUp");    
                        } else if (numberOfPlayers == 2) {
                            document.getElementById("player1-input").classList.remove("hide-element");
                            document.getElementById("player1-lock").classList.remove("hide-element");
                            document.getElementById("player1-input").classList.add("animate__animated", "animate__slideInUp");
                            document.getElementById("player1-lock").classList.add("animate__animated", "animate__slideInUp");
                            document.getElementById("player2-input").classList.remove("hide-element");
                            document.getElementById("player2-lock").classList.remove("hide-element");
                            document.getElementById("player2-input").classList.add("make-invisible");
                            document.getElementById("player2-lock").classList.add("make-invisible");
                        } else if (numberOfPlayers == 3) {
                            document.getElementById("player1-input").classList.remove("hide-element");
                            document.getElementById("player1-lock").classList.remove("hide-element");
                            document.getElementById("player1-input").classList.add("animate__animated", "animate__slideInUp");
                            document.getElementById("player1-lock").classList.add("animate__animated", "animate__slideInUp");
                            document.getElementById("player2-input").classList.remove("hide-element");
                            document.getElementById("player2-lock").classList.remove("hide-element");
                            document.getElementById("player2-input").classList.add("make-invisible");
                            document.getElementById("player2-lock").classList.add("make-invisible");
                            document.getElementById("player3-input").classList.remove("hide-element");
                            document.getElementById("player3-lock").classList.remove("hide-element");
                            document.getElementById("player3-input").classList.add("make-invisible");
                            document.getElementById("player3-lock").classList.add("make-invisible");
                        } else if (numberOfPlayers == 4) {
                            document.getElementById("player1-input").classList.remove("hide-element");
                            document.getElementById("player1-lock").classList.remove("hide-element");
                            document.getElementById("player1-input").classList.add("animate__animated", "animate__slideInUp");
                            document.getElementById("player1-lock").classList.add("animate__animated", "animate__slideInUp");
                            document.getElementById("player2-input").classList.remove("hide-element");
                            document.getElementById("player2-lock").classList.remove("hide-element");
                            document.getElementById("player2-input").classList.add("make-invisible");
                            document.getElementById("player2-lock").classList.add("make-invisible");
                            document.getElementById("player3-input").classList.remove("hide-element");
                            document.getElementById("player3-lock").classList.remove("hide-element");
                            document.getElementById("player3-input").classList.add("make-invisible");
                            document.getElementById("player3-lock").classList.add("make-invisible");
                            document.getElementById("player4-input").classList.remove("hide-element");
                            document.getElementById("player4-lock").classList.remove("hide-element");
                            document.getElementById("player4-input").classList.add("make-invisible");
                            document.getElementById("player4-lock").classList.add("make-invisible");
                        }
                    })

                })

            })
        })

    })
});

let answers = [8.25, 18, 2, 29, 485.14, 884, 14.24, 20000000, 240000000, 867600, 8223, 2];
let lockInCounter = 0;

let player1LockButton = document.getElementById("player1-lock");
let player1GuessLock = document.getElementById("player1-lockedin");
let player1Proximity = [];
let player1Wins = 0;

player1LockButton.addEventListener("click", () => {

    let player1Guess = document.getElementById("player1-input").value;
    let player1GuessProximity = answers[roundCount-1] - player1Guess;

    document.getElementById("player1-input").classList.add("hide-element");
    document.getElementById("player1-lock").classList.add("hide-element");
    player1GuessLock.innerHTML = player1Guess;
    lockInCounter++;

    if (player1GuessProximity < 0) {
        player1Proximity.push(999999999);
    } else {
        player1Proximity.push(player1GuessProximity);
    };
    
    if (lockInCounter == numberOfPlayers[0]) {
        document.getElementById("item1-next-button").classList.remove("make-invisible");
        document.getElementById("item1-next-button").classList.add("animate__animated", "animate__slideInUp");
    } else {
        document.getElementById("player2-input").classList.remove("make-invisible");
        document.getElementById("player2-lock").classList.remove("make-invisible");
        document.getElementById("player2-input").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("player2-lock").classList.add("animate__animated", "animate__slideInUp");
    }
});

let player2LockButton = document.getElementById("player2-lock");
let player2GuessLock = document.getElementById("player2-lockedin");
let player2Proximity = [];
let player2Wins = 0;

player2LockButton.addEventListener("click", () => {

    let player2Guess = document.getElementById("player2-input").value;
    let player2GuessProximity = answers[roundCount-1] - player2Guess;

    document.getElementById("player2-input").classList.add("hide-element");
    document.getElementById("player2-lock").classList.add("hide-element");
    player2GuessLock.innerHTML = player2Guess;
    lockInCounter++;

    if (player2GuessProximity < 0) {
        player2Proximity.push(999999999);
    } else {
        player2Proximity.push(player2GuessProximity);
    };
    
    if (lockInCounter == numberOfPlayers[0]) {
        document.getElementById("item1-next-button").classList.remove("make-invisible");
        document.getElementById("item1-next-button").classList.add("animate__animated", "animate__slideInUp");
    } else if (numberOfPlayers[0] == 2) {
        // if there are 2 players but player2 starts first, un-hide player1
        document.getElementById("player1-input").classList.remove("make-invisible");
        document.getElementById("player1-lock").classList.remove("make-invisible");
        document.getElementById("player1-input").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("player1-lock").classList.add("animate__animated", "animate__slideInUp");
    } else {
        document.getElementById("player3-input").classList.remove("make-invisible");
        document.getElementById("player3-lock").classList.remove("make-invisible");
        document.getElementById("player3-input").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("player3-lock").classList.add("animate__animated", "animate__slideInUp");
    }
});

let player3LockButton = document.getElementById("player3-lock");
let player3GuessLock = document.getElementById("player3-lockedin");
let player3Proximity = [];
let player3Wins = 0;

player3LockButton.addEventListener("click", () => {

    let player3Guess = document.getElementById("player3-input").value;
    let player3GuessProximity = answers[roundCount-1] - player3Guess;

    document.getElementById("player3-input").classList.add("hide-element");
    document.getElementById("player3-lock").classList.add("hide-element");
    player3GuessLock.innerHTML = player3Guess;
    lockInCounter++;

    if (player3GuessProximity < 0) {
        player3Proximity.push(999999999);
    } else {
        player3Proximity.push(player3GuessProximity);
    };
    
    if (lockInCounter == numberOfPlayers[0]) {
        document.getElementById("item1-next-button").classList.remove("make-invisible");
        document.getElementById("item1-next-button").classList.add("animate__animated", "animate__slideInUp");
    } else if (numberOfPlayers[0] == 3) {
        // if there are 3 players and player3 starts first, un-hide player1
        document.getElementById("player1-input").classList.remove("make-invisible");
        document.getElementById("player1-lock").classList.remove("make-invisible");
        document.getElementById("player1-input").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("player1-lock").classList.add("animate__animated", "animate__slideInUp");
    } else {
        document.getElementById("player4-input").classList.remove("make-invisible");
        document.getElementById("player4-lock").classList.remove("make-invisible");
        document.getElementById("player4-input").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("player4-lock").classList.add("animate__animated", "animate__slideInUp");

    }
});

let player4LockButton = document.getElementById("player4-lock");
let player4GuessLock = document.getElementById("player4-lockedin");
let player4Proximity = [];
let player4Wins = 0;

player4LockButton.addEventListener("click", () => {

    let player4Guess = document.getElementById("player4-input").value;
    let player4GuessProximity = answers[roundCount-1] - player4Guess;

    document.getElementById("player4-input").classList.add("hide-element");
    document.getElementById("player4-lock").classList.add("hide-element");
    player4GuessLock.innerHTML = player4Guess;
    lockInCounter++;

    if (player4GuessProximity < 0) {
        player4Proximity.push(999999999);
    } else {
        player4Proximity.push(player4GuessProximity);
    };
    
    if (lockInCounter == numberOfPlayers[0]) {
        document.getElementById("item1-next-button").classList.remove("make-invisible");
        document.getElementById("item1-next-button").classList.add("animate__animated", "animate__slideInUp");
    } else {
        document.getElementById("player1-input").classList.remove("make-invisible");
        document.getElementById("player1-lock").classList.remove("make-invisible");
        document.getElementById("player1-input").classList.add("animate__animated", "animate__slideInUp");
        document.getElementById("player1-lock").classList.add("animate__animated", "animate__slideInUp");
    }
});

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

                // player1 check guess
                if (player1GuessLock.innerHTML > answers[0]) {
                    player1GuessLock.classList.add("overage-guess");
                } else if (player1GuessLock.innerHTML == answers[0]) {
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

                // player2 check guess
                if (player2GuessLock.innerHTML > answers[0]) {
                    player2GuessLock.classList.add("overage-guess");
                } else if (player2GuessLock.innerHTML == answers[0]) {
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

                // player3 check guess
                if (player3GuessLock.innerHTML > answers[0]) {
                    player3GuessLock.classList.add("overage-guess");
                } else if (player3GuessLock.innerHTML == answers[0]) {
                    player3Wins++;
                    player3GuessLock.classList.add("winning-guess");
                } else if (numberOfPlayers[0] == 3 && player3Proximity[0] < player1Proximity[0] && player3Proximity[0] < player2Proximity[0]) {
                    player3Wins++;
                    player3GuessLock.classList.add("winning-guess");
                } else if (numberOfPlayers[0] == 4 && player3Proximity[0] < player1Proximity[0] && player3Proximity[0] < player3Proximity[0] && player3Proximity[0] < player4Proximity[0]) {
                    player3Wins++;
                    player3GuessLock.classList.add("winning-guess");
                } else {
                    player3GuessLock.classList.add("losing-guess");
                };

                // player4 check guess
                if (player4GuessLock.innerHTML > answers[0]) {
                    player4GuessLock.classList.add("overage-guess");
                } else if (player4GuessLock.innerHTML == answers[0]) {
                    player4Wins++;
                    player4GuessLock.classList.add("winning-guess");
                } else if (numberOfPlayers[0] == 4 && player4Proximity[0] < player1Proximity[0] && player4Proximity[0] < player2Proximity[0] && player4Proximity[0] < player3Proximity[0]) {
                    player4Wins++;
                    player4GuessLock.classList.add("winning-guess");
                } else {
                    player4GuessLock.classList.add("losing-guess");
                };
                
            })

        })
    });