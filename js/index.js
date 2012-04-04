var map = null;

window.onload = function() {
   watercolor();
   /*var layer = new MM.StamenTileLayer("watercolor");
	map = new MM.Map("map", layer, null, [
		  new easey.DragHandler(),
          new easey.TouchHandler(),
          new easey.DoubleClickHandler(),
          new easey.MouseWheelHandler()
	]);
	map.setCenterZoom(new MM.Location(37.7, -122.4), 12);
	*/
};

function toner() {
    var layer = new MM.StamenTileLayer("toner");
	var loc = map.getCenter();
	var zoomLevel = map.getZoom();
	map = new MM.Map("map", layer, null, [
		  new easey.DragHandler(),
          new easey.TouchHandler(),
          new easey.DoubleClickHandler(),
          new easey.MouseWheelHandler()
	]);
	map.setCenterZoom(new MM.Location(loc.lat, loc.lon), zoomLevel);
};

function terrain() {
    var layer = new MM.StamenTileLayer("terrain");
	var loc = map.getCenter().toFixed(2);
	var zoomLevel = map.getZoom().toFixed(2);
	map = new MM.Map("map", layer, null, [
		  new easey.DragHandler(),
          new easey.TouchHandler(),
          new easey.DoubleClickHandler(),
          new easey.MouseWheelHandler()
	]);
	map.setCenterZoom(new MM.Location(loc.lat, loc.lon), zoomLevel);
};

function watercolor() {
    var layer = new MM.StamenTileLayer("watercolor");
	var loc;
	var zoomLevel;
	if (map == null) {
		loc = {'lat': '37.7', 'lon': '-85' };
		zoomLevel = 4;
	} else {
		loc = map.getCenter();
		zoomLevel = map.getZoom();
	}
	map = new MM.Map("map", layer, null, [
		  new easey.DragHandler(),
          new easey.TouchHandler(),
          new easey.DoubleClickHandler(),
          new easey.MouseWheelHandler()
	]);
	map.setCenterZoom(new MM.Location(loc.lat, loc.lon), zoomLevel);
};