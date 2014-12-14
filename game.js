define(["player"], function(player) {
	
	var wildernessChar = ".";

	var mapWidth = 60;
	var mapHeight = 30;

	function draw() {
		var map = "";
		for (var y = 0; y < mapHeight; y++) {

			for (var x = 0; x< mapWidth; x++)
			{
				if (x> 5 && x < 10 && y > 10  && y < 20) {
					map += "<span style='color:rgb(0,255,0);'>";
					map = map + "T";
					map += "</span>";
				}
				else if (x> 15 && x < 20 && y >= 0  && y <= mapHeight) {
					map += "<span style='color:rgb(0,0,255);'>";
					map = map + "S";
					map += "</span>";
				}
				else if (x> 20 && x < 25 && y >= 20  && y <= 25) {
					map += "<span style='color:rgb(255,0,0);'>";
					map = map + "X";
					map += "</span>";
				}
				else if (y === player.playerCoords.y && x === player.playerCoords.x) {
					map = map + player.playerChar;
				}
				else
				{
					map = map + wildernessChar;
				}
			}			
			map += "\n";
		}
		world.innerHTML = map;
	}
	
	var world = document.getElementById("world");
	document.addEventListener("keydown", function(e) {
		e.preventDefault();
		if (e.keyCode === 37) {
			player.moveLeft(); 
		}
		else if(e.keyCode === 38) {
			player.moveUp();
		}
		else if(e.keyCode === 39) {
			player.moveRight();
		}
		else if(e.keyCode === 40) {
			player.moveDown();
		}
	});

	var gameLoop = function() {
	  //self.update();
	  draw();
	};

	function start() {
		var fps = 50;
		// Start the game loop
		var intervalId = setInterval(gameLoop, 1000 / fps);
	}

	function stop() {
		clearInterval(intervalId);
	}

	return {
		start: start
	};


});