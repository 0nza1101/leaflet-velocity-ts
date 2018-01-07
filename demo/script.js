
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

var velocity = L.velocityLayer({
	
	displayValues: true,
	displayOptions: {
		velocityType: 'Global Wind',
		position: 'bottomleft',
		emptyString: 'No velocity data',
		angleConvention: 'bearingCW',
		displayPosition: 'bottomleft',
		displayEmptyString: 'No velocity data',
		speedUnit: 'kt'
	},
	data: data,             // see demo/*.json, or wind-js-server for example data service
	
	// OPTIONAL
	/*minVelocity: 0,          // used to align color scale
	maxVelocity: 10,         // used to align color scale*/
	velocityScale: 0.005,    // modifier for particle animations, arbitrarily defaults to 0.005
	colorScale: []          // define your own array of hex/rgb colors
});

velocity.addTo(mymap);

/*setTimeout(function () {
	velocity.setData(data);
}, 2000);*/
