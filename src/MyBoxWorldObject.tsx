
import { WorldObject } from 'ogs-gameengine'

export class MyBoxWorldObject extends WorldObject {
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
        this.rotationX = 0.01;
        this.rotationY = 0.01;
        this.rotationZ = 0.01;

        super.update();
    }
}