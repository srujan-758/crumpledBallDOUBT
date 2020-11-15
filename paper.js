class Paper{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            'restitution':0.8,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image= loadImage("paper.png");
        this.width= width;
        this.height=height;
        World.add(world,this.body);
      
     
    }
    display (){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y); 
        rotate(angle);
        //rectMode(CENTER);
        //fill("blue");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }
}