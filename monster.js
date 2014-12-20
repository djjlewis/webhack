define(["map"], function(map) {

	var	startCoords = { x:20, y:10 },
		coords = {},
		character = "<span style='color:rgb(200,80,40)'>§</span>";

	coords.x = startCoords.x;
	coords.y = startCoords.y;

	function canMoveTo(x,y) {
		if (map.mapData[y][x] === "T") {
			return false;
		}
		else if (map.mapData[y][x] === "X") {
			return false;
		}
		else if (map.mapData[y][x] === "S") {
			return false;
		}
		return true;
	}
	
	function moveLeft() {
		if (coords.x - 1 >= 0 && canMoveTo(coords.x - 1, coords.y)) {
			coords.x -= 1;
		}
	}

	function moveUp() {
		if (coords.y - 1 >= 0 && canMoveTo(coords.x, coords.y -1)) {
			coords.y -= 1;	
		}
	}

	function moveRight() {
		if (coords.x + 1 < map.width && canMoveTo(coords.x + 1, coords.y)) {
			coords.x += 1;
		}
	}

	function moveDown() {
		if (coords.y + 1 < map.height && canMoveTo(coords.x, coords.y + 1)) {
			coords.y += 1;
		}
	}

	function moveRandom() {
		var direction = Math.floor((Math.random() * 4) + 1);
		switch (direction) {
			case 1: 
				moveLeft();
				break;
			case 2:
				moveUp();
				break;
			case 3:
				moveRight();
				break;
			case 4:
				moveDown();
				break;
		}
	}

	return {
		character: character,
		coords: coords,
		moveLeft: moveLeft,
		moveUp: moveUp,
		moveRight: moveRight,
		moveDown: moveDown,
		moveRandom: moveRandom
	};

});