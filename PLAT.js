class Plat{
    constructor(x,y,width,height){
        this.body = createSprite(x,y,width,height);
        this.width = width;
        this.height = height;
    }

    display(){
        drawSprites();
    }
}