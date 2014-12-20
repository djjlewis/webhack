define(["map"], function(map) {

	var	playerStartCoords = { x:5, y:5 },
		playerCoords = {},
		playerChar = "<span style='color:rgb(245,241,222)'>@</span>",
		lives = 3;

	playerCoords.x = playerStartCoords.x;
	playerCoords.y = playerStartCoords.y;

	function playerCanMoveTo(x,y) {
		if (map.mapData[y][x] === "T") {
			return false;
		}
		else if (map.mapData[y][x] === "X") {
			lives -= 1;
			if (lives < 0) {
				alert ("You lose!");
			}
			else {
				alert("You died by burning up in the lava. You only " + lives + " lives left!!");
			}
			playerCoords.x = 0;
			playerCoords.y = 0;
			return false;
		}
		else if (map.mapData[y][x] === "S") {
			lives -= 1;
			if (lives < 0) {
				alert ("You lose!");
			}
			else {
				alert("You died by drowing in the water. You only have " + lives + " lives left!!");
			}
			playerCoords.x = 0;
			playerCoords.y = 0;
			return false;
		}
		return true;
	}
	
	function moveLeft() {
		if (playerCoords.x - 1 >= 0 && playerCanMoveTo(playerCoords.x - 1, playerCoords.y)) {
			playerCoords.x -= 1;
		}
	}

	function moveUp() {
		if (playerCoords.y - 1 >= 0 && playerCanMoveTo(playerCoords.x, playerCoords.y -1)) {
			playerCoords.y -= 1;	
		}
	}

	function moveRight() {
		if (playerCoords.x + 1 < map.width && playerCanMoveTo(playerCoords.x + 1, playerCoords.y)) {
			playerCoords.x += 1;
		}
	}

	function moveDown() {
		if (playerCoords.y + 1 < map.height && playerCanMoveTo(playerCoords.x, playerCoords.y + 1)) {
			playerCoords.y += 1;
		}
	}

	return {
		character: playerChar,
		coords: playerCoords,
		moveLeft: moveLeft,
		moveUp: moveUp,
		moveRight: moveRight,
		moveDown: moveDown,
		lives: lives
	};

});