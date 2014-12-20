define(["player", "monster", "map"], function(player, monster, map) {
	
	var wildernessChar = ".";

	function draw() {
		var mapHtml = "";
		for (var y = 0; y < map.height; y++) {

			for (var x = 0; x < map.width; x++)
			{
				if (y === player.coords.y && x === player.coords.x) {
					mapHtml += player.character;
				}
				else if (y === map.treasureCoords.y && x === map.treasureCoords.x) {
					mapHtml += "€";
				}
				else if (y === monster.coords.y && x === monster.coords.x) {
					mapHtml += monster.character;
				}
				else {
					var mapChar = map.mapData[y][x];

					if (mapChar === "T") {
						mapHtml += "<span style='color:rgb(0,255,0);'>";
						mapHtml += mapChar;
						mapHtml += "</span>";
					}
					else if (mapChar === "S") {
						mapHtml += "<span style='color:rgb(0,0,255);'>";
						mapHtml += mapChar;
						mapHtml += "</span>";
					}
					else if (mapChar === "X") {
						mapHtml += "<span style='color:rgb(255,0,0);'>";
						mapHtml += mapChar;
						mapHtml += "</span>";
					}
					else
					{
						mapHtml += mapChar;
					}
				}				
			}			
			mapHtml += "\n";
		}
		world.innerHTML = mapHtml;
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
	  monster.moveRandom();
	  draw();

	  if(monster.coords.x === player.coords.x && monster.coords.y === player.coords.y )
	  {
	  	player.lives -= 1;
	  	alert("The monster ate you.");	
	  }

	};

	function start() {
		var fps = 10;
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