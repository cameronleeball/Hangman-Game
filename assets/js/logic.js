

//array of lebowski themed names

// general vars

var nCharName = ["the dude", "walter", "donnie",  "brant", "bunny", "maude"];
var hCharName = ["quintana", "jackie treehorn", "jeffery lebowski", "karl hungus", "knox harrington"];
var curName;
var curLetters;
var userGuess = "";
var score = {
	misses: 0, /* updates for */
	remGuess: 6, /* head, torso, l arm, r arm, l leg, r leg */
	remLet: 0, /* curName.length */
	sucGuess: 0, 
	sucWords: 0
};
var prevLets = [];
var run;
var dif = [];

function updateScore() {
	document.getElementById("userGuess").innerHTML = userGuess;
	document.getElementById("misses").innerHTML = score.misses;
	document.getElementById("remLet").innerHTML = score.remLet;
	document.getElementById("remGuess").innerHTML = score.remGuess;
	document.getElementById("sucGuess").innerHTML = score.sucGuess;
	document.getElementById("sucWords").innerHTML = score.sucWords;
	document.getElementById("prevLets").innterHTML = prevLets;
}

function help() {
	alert("Guess the letters to fill in the blanks. After x number of wrong choices, you loose.");
}

function reset() {
	userGuess = "";
	score.misses= 0; /* updates for */
	score.remGuess = 6; /* head, torso, l arm, r arm, l leg, r leg */
	score.remLet= 0; /* curName.length */
	score.sucGuess = 0; 
	prevLets = [];
	updateScore();
}


function winCond() {
	if (score.remGuess <= 0) { 
		updateScore();
		alert("OVER THE LINE! Mark it Zero... next frame.");
	}
	else if ((score.remGuess >= 0) && (score.remLet == 0)) {
		updateScore();
		alert("Far Out");
		score.sucWords++;
		reset();
	}
}

function setup() {
	userGuess = "";
	updateScore();
}

function guessTrue() {
	score.remLet--;
	score.sucGuess++;
	updateScore();
}

function guessFalse() {
	score.misses++;
	score.remGuess--;
	updateScore();
}

function setDifN() {
	dif = nCharName;
	return dif;
}

function setDifH() {
	dif = hCharName;
	return dif;
	$("#startBtn").attr()
}

function setLevel() {
	curName = dif[Math.floor(Math.random() * dif.length)];
	curLetters = curName.split("");
	score.remLet = curName.length;
	setup();
	console.log(curLetters);
	console.log(score);
	blanks = [];
	for (var i = 0; i < curLetters.length; i++) {
		blanks.push(" _ ");
	}
	console.log(blanks);
	document.getElementById("letterbox").innerHTML = blanks;
}

function playLevel() {
	document.onkeyup = function(event) {
		userGuess = event.key;
		console.log(userGuess);
		console.log(score);
		curLetters.forEach(function(curLetter, i) { 
			if (curLetter == userGuess)
				blanks[i] = userGuess; 
			document.getElementById("letterbox").innerHTML = blanks;});

		if ((curLetters.includes(userGuess)) === false) {
			guessFalse();
		}

		else if ((curLetters.includes(userGuess)) === true) { 
			guessTrue();
		}
		document.getElementById("userGuess").innerHTML = userGuess;	
		winCond();
	}
}

function play() {
	if (dif == 'undefined') {
		alert("Please select a difficulty!");
		
	}
	else {
		setLevel();
		playLevel();
	}
}


