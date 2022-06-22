export type SpeedUnit = 'kt' | 'k/h' | 'mph' | 'm/s';
export type Position = 'topleft' | 'topright' | 'bottomleft' | 'bottomright';

export interface VelocityOptions {
    displayValues: boolean,
    displayOptions: {
        speedUnit: SpeedUnit;
        position: Position;
        showCardinal: boolean;
        angleConvention: string;
        velocityType: string;
        emptyString: string;
        directionString: string;
        speedString: string;
    },
    data: any; // see demo/*.json, or wind-js-server for example data service
    // OPTIONAL
    particleAge: number;
    particleMultiplier: number;
    particleLineWidth: number;
    frameRate: number;
    minVelocity: number;
    maxVelocity: number;
    velocityScale: number;
    colorScale: string[];
    opacity: number;
    onAdd: Function;
    onRemove: Function;
}

export function velocityLayer(options: VelocityOptions): L.Layer;