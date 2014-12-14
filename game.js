(function() {

	var playerStartCoords = { x:5, y:5 };

	var playerCoords = playerStartCoords;


	var playerChar = "<span style='color:rgb(245,241,222)'>@</span>";
	var wildernessChar = ".";

	var mapWidth = 60;
	var mapHeight = 30;

	var world = document.getElementById("world");

	function drawMap() {
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
				else if (y === playerCoords.y && x === playerCoords.x) {
					map = map + playerChar;
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

	//alert("hehe");

	world.addEventListener("keypress", function(e) {
		//alert("world");
	});

	document.addEventListener("keydown", function(e) {

		e.preventDefault();
		//alert("document");
		if (e.keyCode === 37) {
			playerCoords.x -= 1; 
		}
		else if(e.keyCode === 38) {
			playerCoords.y -= 1;
		}
		else if(e.keyCode === 39) {
			playerCoords.x += 1;
		}
		else if(e.keyCode === 40) {
			playerCoords.y += 1;
		}
		drawMap();
	});

	drawMap();
}());