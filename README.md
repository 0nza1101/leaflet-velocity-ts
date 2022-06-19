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
		velocityType: 'Global Wind',
		position: 'bottomleft',//REQUIRED !
		emptyString: 'No velocity data',//REQUIRED !
		angleConvention: 'bearingCW',//REQUIRED !
		displayPosition: 'bottomleft',
		displayEmptyString: 'No velocity data',
		speedUnit: 'm/s'
	},
	data: data,            // see demo/*.json, or wind-js-server for example data service

	// OPTIONAL
	/*minVelocity: 0,      // used to align color scale
	maxVelocity: 10,       // used to align color scale*/
	velocityScale: 0.005,  // modifier for particle animations, arbitrarily defaults to 0.005
	colorScale: []         // define your own array of hex/rgb colors
});

velocityLayer.addTo(mymap);
```
## License
MIT License (MIT)


[npm-image]: https://badge.fury.io/js/leaflet-velocity-ts.svg
[npm-url]: https://www.npmjs.com/package/leaflet-velocity-ts
