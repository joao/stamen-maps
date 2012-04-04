var map;

var stamenTiles = 'js/stamenTiles.json';

window.onload = function() {
    var mm = com.modestmaps;
    wax.tilejson(stamenTiles,
        function(tj) {
        map = new com.modestmaps.Map('map',
            new wax.mm.connector(tj), null, [
                new easey.DragHandler(),
                new easey.TouchHandler(),
                new easey.DoubleClickHandler(),
                new easey.MouseWheelHandler()
            ]);
		//wax.mm.zoomer(map, tj).appendTo('controls');
        map.setCenterZoom(new com.modestmaps.Location(25, -85), 4);
    });

    /*$('button').click(function(b) {
        eval($('pre', this.parentNode).text());
    });*/
};
