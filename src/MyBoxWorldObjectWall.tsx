
import { Game, Level, WorldObject } from 'ogs-gameengine'

export class MyBoxWorldObjectWall extends WorldObject {
    
    public update(): void {
        this.rotationX += 0.01;
        this.rotationY += 0.01;
        this.rotationZ += 0.01;
        
        super.update();
    }
}