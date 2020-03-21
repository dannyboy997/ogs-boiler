
import { WorldObject } from 'ogs-gameengine'

export class MyBoxWorldObjectWall extends WorldObject {
    constructor(){
        super();

        this.positionX = 0;
        this.positionY = 0;
        this.positionZ = 0;

        this.rotationX = 0;
        this.rotationY = 0;
        this.rotationZ = 0;
    }

    public update(): void {
        
        super.update();
    }
}