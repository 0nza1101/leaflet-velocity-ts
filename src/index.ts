import CanvasBound from "./canvasBound";
import MapBound from "./mapBound";
import Windy from "./windy";
import CanvasLayer from "./L.CanvasLayer";
import VelocityLayer from "./L.VelocityLayer";
import VelocityControl from './L.ControlVelocity';

(<any>window).CanvasBound = CanvasBound;
(<any>window).MapBound = MapBound;
(<any>window).Windy = Windy;

declare var L: any;

L.CanvasLayer = (L.Layer ? L.Layer : L.Class).extend(new CanvasLayer());
L.canvasLayer = function () {
	return new L.CanvasLayer();
};

L.ControlVelocity = (L.Control).extend(new VelocityControl());
L.controlVelocity = function() {
  return new L.ControlVelocity();
};

L.VelocityLayer = (L.Layer ? L.Layer : L.Class).extend(new VelocityLayer());
L.velocityLayer = function(options: any) {
	return new L.VelocityLayer(options);
};

console.log(L)
