export type SpeedUnit = 'kt' | 'km'

export interface VelocityOptions {
    displayValues: boolean,
    displayOptions: {
        showCardinal: boolean, // display cardinal direction alongside degrees
        velocityType: string, // label prefix
        directionString: string // "Direction", // direction label prefix
        speedString: string // "Speed", // speed label prefix
        position: string,
        emptyString: string,
        angleConvention: string,
        displayPosition: string,
        displayEmptyString: string,
        speedUnit: SpeedUnit
    },
    data: any,           // see demo/*.json, or wind-js-server for example data service

    // OPTIONAL
    minVelocity: number,       // used to align color scale
    maxVelocity: number,      // used to align color scale
    velocityScale: number, // modifier for particle animations, arbitrarily defaults to 0.005
    colorScale: string[],       // define your own array of hex/rgb colors
    onAdd: Function,          // callback function
    onRemove: Function,       // callback function
}

export function velocityLayer(options: VelocityOptions): L.Layer;