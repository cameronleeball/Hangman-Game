

//array of lebowski themed names

// general vars

var nCharName = ["the dude", "walter", "donnie",  "brant", "bunny", "maude"];
var hCharName = ["quintana", "jackie treehorn", "jeffery lebowski", "karl hungus", "knox harrington"];
var curName;
var curLetters;
var difficulty;
var userGuess = "";
var score;
var run;

function help() {
	alert("Guess the letters to fill in the blanks. After x number of wrong choices, you loose.");
}

function setup() {
	userGuess = "";
	score = {
		misses:0, /* updates for */
		remGuess:6, /* head, torso, l arm, r arm, l leg, r leg */
		remLet: curName.length, /* curName.length */
		sucGuess:0, 
		sucWords:0
	};
	document.getElementById("userGuess").innerHTML = userGuess;
	document.getElementById("misses").innerHTML = score.misses;
	document.getElementById("remLet").innerHTML = score.remLet;
	document.getElementById("remGuess").innerHTML = score.remGuess;
	document.getElementById("sucGuess").innerHTML = score.sucGuess;
	return;
}

// scoreboard obj

function play() {

}

function normal() {
	curName = nCharName[Math.floor(Math.random() * nCharName.length)];
	curLetters = curName.split("");
	setup();
	console.log(curLetters);
	console.log(score);
	blanks = [];
	for (var i = 0; i < curLetters.length; i++) {
		blanks.push(" _ ");
	}
	console.log(blanks);
	document.getElementById("letterbox").innerHTML = blanks;
	document.onkeyup = function(event) {
		userGuess = event.key;
		console.log(userGuess);
		console.log(score.misses);
		curLetters.forEach(function(curLetter, i) { 
			if (curLetter == userGuess)
				blanks[i] = userGuess; 
			document.getElementById("letterbox").innerHTML = blanks;});

		if ((curLetters.includes(userGuess)) === false) {
			score.misses = (score.misses + 1);
			score.remGuess = (score.remGuess - 1);
			document.getElementById("remGuess").innerHTML = score.remGuess;
			document.getElementById("misses").innerHTML = score.misses;
			console.log(score.misses);
		}

		else if ((curLetters.includes(userGuess)) === true) { 
			score.remLet = (score.remLet - 1);
			score.sucGuess = (score.sucGuess + 1);
			document.getElementById("remLet").innerHTML = score.remLet;
			document.getElementById("sucGuess").innerHTML = score.sucGuess;
		}

		document.getElementById("userGuess").innerHTML = userGuess;	
		if (score.remGuess <= 0) { 
			alert("OVER THE LINE! Mark it Zero... next frame.");

		}
	}
	
}


	// while (remGuess >=0) {
	// 	return true;
	// 	if (false) {
	// 		break;
	// 	}
	// }




// function hard() {
// 	curName = hCharName[Math.floor(Math.random() * hCharName.length)];
// 	curLetters = curName.split("");
// 	// console.log(curLetters);
// 	blanks = [];
// 	for (var i = 0; i < curLetters.length; i++) {
// 		blanks.push("_ ");
// 	}
// 	console.log("blanks");
// }

// function main(){
// 	normal();
// }

