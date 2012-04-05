var map;
var loc = {'lat': '37.7', 'lon': '-85' };
var zoomLevel = 4;
var gaia = {'lat': '41.1242488', 'lon': '-8.6070806'};
var sanfrancisco = {'lat': '37', 'lon': '-120'};
var goloc = gaia;

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

/* Pan and Zoom Map to a location */
function go() {
	easey.sequence(map, [{
	     location: new MM.Location(goloc.lat, goloc.lon), zoom: 5, time: 3000, ease: 'linear'
	   }, {
	     location: new MM.Location(goloc.lat, goloc.lon), zoom: 14, time: 12000, ease: 'linear'
	   }]);
};

