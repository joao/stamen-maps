var map;
var loc = {'lat': '37.7', 'lon': '-85' };
var zoomLevel = 4;

window.onload = function() {
   drawMap('watercolor');
};


/* Draw Map */
function drawMap(layer) {
	layer = new MM.StamenTileLayer(layer);
	map = new MM.Map("map", layer, null, [
		  new easey.DragHandler(),
          new easey.TouchHandler(),
          new easey.DoubleClickHandler(),
          new easey.MouseWheelHandler()
	]);
	map.setCenterZoom(new MM.Location(loc.lat, loc.lon), zoomLevel);
};

/* Swap Layer */
function swap(layer) {
	layer = new MM.StamenTileLayer(layer);
	map.setLayerAt(0, layer);
	
};


