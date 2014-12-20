define(function() {

	var width,
		height,
		treasureCoords = {};

	var mapData = [];

	readMap();

	function readMap() {
		width = mapJSON.x;
		height = mapJSON.y;

		treasureCoords.x = mapJSON.treasureCoords.x;
		treasureCoords.y = mapJSON.treasureCoords.y;

		var mapText = mapJSON.mapText;
		var offset = 0;

        for (var y = 0; y < height; y++) {
			mapData[y] = [];
        	if (y > 0) {
        		offset = y * width;
        	}
        	for (var x = 0; x < width; x++) {
        		var currentChar = mapText[x + offset];
        		mapData[y][x] = currentChar;
			};
		};
	}

	return {
		mapData: mapData,
		width: width,
		height: height,
		treasureCoords: treasureCoords
	};
});
