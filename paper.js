class paper{
    constructor(){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.paper = Bodies.circle(100,600,20,options);
        World.add(world,this.paper);
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.paper.position.x,this.paper.position.y,20)
    }
}