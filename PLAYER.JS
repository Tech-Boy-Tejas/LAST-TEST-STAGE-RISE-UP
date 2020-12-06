class Player{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,20,20);
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        //rotate()
        rectMode(CENTER);
        fill("black");
        rect(pos.x,pos.y,20,20);
        pop();
    }
};