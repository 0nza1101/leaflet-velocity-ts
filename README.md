# leaflet-velocity-ts [![NPM version][npm-image]][npm-url]

This is a typescript updated version of [leaflet-velocity](https://github.com/danwild/leaflet-velocity)

### Compared to the other version :
* This version is compatible with the latest version of leaflet.
* This version adds a better particles management when zooming and moving the map which gives better performance on mobile devices.
* This version does not need leaflet-velocity.css to be included.

## Example use:
```javascript
var velocityLayer = L.velocityLayer({
	displayValues: true,
	displayOptions: {
		showCardinal: true,
		velocityType: 'Global Wind',
		position: 'bottomleft', // 'topleft' | 'topright' | 'bottomleft' | 'bottomright'
		emptyString: 'No velocity data', // no data at cursor
    	directionString: "Direction", // direction label prefix
    	speedString: "Speed", // speed label prefix
		speedUnit: 'm/s' // 'kt' | 'k/h' | 'mph' | 'm/s'
		// Could be any combination of 'bearing' (angle toward which the flow goes) or 'meteo' (angle from which the flow comes) and 'CW' (angle value increases clock-wise) or 'CCW' (angle value increases counter clock-wise)
		angleConvention: 'bearingCW',
	},
	data: data, // see demo/*.json, or wind-js-server for example data service

	// OPTIONAL
	particleAge: 64,
    particleMultiplier: 0.0033,
    particleLineWidth: 1,
    frameRate: 15,
    minVelocity: 0,
    maxVelocity: 10,
    velocityScale: 0.005,
	opacity: 0.97,
    colorScale: [], // define your own array of hex/rgb colors
    onAdd: () => console.log('onAdd'),
    onRemove: () => console.log('onRemove'),
	// optional pane to add the layer, will be created if doesn't exist
	// leaflet v1+ only (falls back to overlayPane for < v1)
	paneName: "overlayPane",
});

velocityLayer.addTo(mymap);
```
## License
MIT License (MIT)


[npm-image]: https://badge.fury.io/js/leaflet-velocity-ts.svg
[npm-url]: https://www.npmjs.com/package/leaflet-velocity-ts
