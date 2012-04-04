

window.onload = function() {
    var layer = new MM.StamenTileLayer("toner");
	var map = new MM.Map("map", layer, null, [
		  new easey.DragHandler(),
          new easey.TouchHandler(),
          new easey.DoubleClickHandler(),
          new easey.MouseWheelHandler()
	]);
	map.setCenterZoom(new MM.Location(37.7, -122.4), 12);
};
