define(function() {

	var self = this;

	var	playerStartCoords = { x:5, y:5 },
		playerCoords = playerStartCoords,
		playerChar = "<span style='color:rgb(245,241,222)'>@</span>";

	
	function moveLeft() {
		playerCoords.x -= 1;
	}

	function moveUp() {
		playerCoords.y -= 1;	
	}

	function moveRight() {
		playerCoords.x += 1;
	}

	function moveDown() {
		playerCoords.y += 1;
	}

	return {
		playerChar: playerChar,
		playerCoords: playerCoords,
		moveLeft: moveLeft,
		moveUp: moveUp,
		moveRight: moveRight,
		moveDown: moveDown
	};

});