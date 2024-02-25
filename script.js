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
})