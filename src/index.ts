import CanvasBound from "./canvasBound";
import MapBound from "./mapBound";
import Windy from "./windy";
import CanvasLayer from "./L.CanvasLayer";
import VelocityLayer from "./L.VelocityLayer";
import ControlVelocity from './L.Control.Velocity';

(<any>window).CanvasBound = CanvasBound;
(<any>window).MapBound = MapBound;
(<any>window).Windy = Windy;

declare var L: any;

L.CanvasLayer = (L.Layer ? L.Layer : L.Class).extend(new CanvasLayer());
L.canvasLayer = function () {
	return new L.CanvasLayer();
};

L.Control.Velocity = (L.Control).extend(new ControlVelocity);
L.control.velocity = function (options: any) {
	return new L.Control.Velocity(options);
};

L.VelocityLayer = (L.Layer ? L.Layer : L.Class).extend(new VelocityLayer());
L.velocityLayer = function (options: any) {
	return new L.VelocityLayer(options);
};
