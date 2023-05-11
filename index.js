if (sessionStorage.getItem('reloaded') != null) {
    let ran1 = Math.floor(Math.random() * 6) + 1;
if (ran1 == 1) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice1.png");
}
else if (ran1 == 2) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice2.png");
}
else if (ran1 == 3) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice3.png");
}
else if (ran1 == 4) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice4.png");
}
else if (ran1 == 5) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice5.png");
}
else if (ran1 == 6) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice6.png");
}


let ran2 = Math.floor(Math.random() * 6) + 1;
if (ran2 == 1) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice1.png");
}
else if (ran2 == 2) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice2.png");
}
else if (ran2 == 3) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice3.png");
}
else if (ran2 == 4) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice4.png");
}
else if (ran2 == 5) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice5.png");
}
else if (ran2 == 6) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice6.png");
}

if (ran1 > ran2) {
    document.querySelector("h1").innerHTML = "Player 1 won! 🚩";
}
else if (ran1 < ran2) {
    document.querySelector("h1").innerHTML = "Player 2 won! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "It's a draw! 🚩";
}

} 

sessionStorage.setItem('reloaded', 'yes');
