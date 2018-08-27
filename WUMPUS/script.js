// Generate random position for wumpus
var generatedWumpusXCoordinate = Math.floor(Math.random() * 5);
var generatedWumpusYCoordinate = Math.floor(Math.random() * 5);
console.log(generatedWumpusXCoordinate + " - " + generatedWumpusYCoordinate);
var wumpusCoordinate = [generatedWumpusXCoordinate, generatedWumpusYCoordinate];


// genrate random position for pit
var generatedPitXCoordinate = Math.floor(Math.random() * 5);
var generatedPitYCoordinate = Math.floor(Math.random() * 5);
console.log(generatedPitXCoordinate + " - " + generatedPitYCoordinate);
var pitCoordinate = [generatedPitXCoordinate, generatedPitYCoordinate];


// generate player at random position
var generatedPlayerXCoordinate = Math.floor(Math.random() * 5);
var generatedPlayerYCoordinate = Math.floor(Math.random() * 5);
console.log(generatedPlayerXCoordinate + " - " + generatedPlayerYCoordinate);
var playerCoordinate = [generatedPlayerXCoordinate, generatedPlayerYCoordinate];

// number of arrows
var playerArrows = 2;

var wumpusPosition = "a" + wumpusCoordinate[0] + wumpusCoordinate[1];
var pitPosition = "a" + pitCoordinate[0] + pitCoordinate[1];
var playerPosition = "a" + playerCoordinate[0] + playerCoordinate[1];

document.getElementById(playerPosition).classList.add("visitedGrid");

displayCurrentStatus();

document.getElementById("moveUpButton").onclick = function(){
	removeCurrentStatus();
	if(playerCoordinate[0] > 0)
		playerCoordinate[0] -= 1;
	displayCurrentStatus();
	checkGameStatus();
};
document.getElementById("moveLeftButton").onclick = function(){
	removeCurrentStatus();
	if(playerCoordinate[1] > 0)
		playerCoordinate[1] -= 1;
	displayCurrentStatus();
	checkGameStatus();
};
document.getElementById("moveRightButton").onclick = function(){
	removeCurrentStatus();
	if(playerCoordinate[1] < 4)
		playerCoordinate[1] += 1;
	displayCurrentStatus();
	checkGameStatus();
};
document.getElementById("moveDownButton").onclick = function(){
	removeCurrentStatus();
	if(playerCoordinate[0] < 4)
		playerCoordinate[0] += 1;
	displayCurrentStatus();
	checkGameStatus();
};

// remove the applied css class when the player moves to change color from red to tomato
function removeCurrentStatus(){
	var currentPlayerPosition  = "a" + playerCoordinate[0] + playerCoordinate[1];
	document.getElementById(currentPlayerPosition).classList.remove("currentGrid");
	document.getElementById(currentPlayerPosition).classList.add("visitedGrid");
}


// display number of arrows left, player position and status of wumpus and pit
function displayCurrentStatus(){
	document.getElementById("status").innerHTML = "You are at (" + playerCoordinate[0] + ", " + playerCoordinate[1] + ").";
	document.getElementById("status").innerHTML += "<br>playerArrows left: " + playerArrows + "";
	var dist = 0.0;
	xDist = Math.pow(playerCoordinate[0]-wumpusCoordinate[0], 2);
	yDist = Math.pow(playerCoordinate[1]-wumpusCoordinate[1], 2);
	dist = Math.sqrt(xDist + yDist);
	if(dist < 1.42){
		document.getElementById("status").innerHTML += "<br>Wumpus Nearby";
	}
	xDist = Math.pow(playerCoordinate[0]-pitCoordinate[0], 2);
	yDist = Math.pow(playerCoordinate[1]-pitCoordinate[1], 2);
	dist = Math.sqrt(xDist + yDist);
	if(dist < 1.42){
		document.getElementById("status").innerHTML += "<br>Breeze";
	}
	var currentPlayerPosition  = "a" + playerCoordinate[0] + playerCoordinate[1];
	document.getElementById(currentPlayerPosition).classList.add("currentGrid");
}

function checkGameStatus(){
	if(playerCoordinate[0] == wumpusCoordinate[0] && playerCoordinate[1] == wumpusCoordinate[1]){
		alert("Game Over");
		location.reload();
	}
	if(playerCoordinate[0] == pitCoordinate[0] && playerCoordinate[1] == pitCoordinate[1]){
		alert("Game Over");
		location.reload();
	}
}
document.getElementById("shootUpButton").onclick = function(){
	if(playerArrows > 0){
		if(playerCoordinate[0] - 1 == wumpusCoordinate[0] && playerCoordinate[1] == wumpusCoordinate[1]){
			alert("You won");
			location.reload();
		}
		else{
			document.getElementById("status").innerHTML += "<br>You missed";
			playerArrows--;
		}
	}
	else {
		document.getElementById("status").innerHTML += "<br>No playerArrows. Try finding arrow in the cave.";
	}
}
document.getElementById("shootLeftButton").onclick = function(){
	if(playerArrows > 0){
		if(playerCoordinate[0] == wumpusCoordinate[0] && playerCoordinate[1] - 1== wumpusCoordinate[1]){
			alert("You won");
			location.reload();
		}
		else{
			document.getElementById("status").innerHTML += "<br>You missed";
			playerArrows--;
		}
	}
	else {
		document.getElementById("status").innerHTML += "<br>No playerArrows. Try finding arrow in the cave.";
	}
}

document.getElementById("shootRightButton").onclick = function(){
	if(playerArrows > 0){
		if(playerCoordinate[0] == wumpusCoordinate[0] && playerCoordinate[1] + 1 == wumpusCoordinate[1]){
			alert("You won");
			location.reload();
		}
		else{
			document.getElementById("status").innerHTML += "<br>You missed";
			playerArrows--;
		}
	}
	else {
		document.getElementById("status").innerHTML += "<br>No playerArrows. Try finding arrow in the cave.";
	}
}
document.getElementById("shootDownButton").onclick = function(){
	if(playerArrows > 0){
		if(playerCoordinate[0] + 1 == wumpusCoordinate[0] && playerCoordinate[1] == wumpusCoordinate[1]){
			alert("You won");	
			location.reload();
		}
		else{
			document.getElementById("status").innerHTML += "<br>You missed";
			playerArrows--;
		}
	}
	else {
		document.getElementById("status").innerHTML += "<br>No playerArrows. Try finding arrow in the cave.";
	}
}