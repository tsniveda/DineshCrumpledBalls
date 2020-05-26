class Dustbin {


  constructor(x, y, height,angle) {
    
    var options = {
      isStatic:true
        
    }

    this.width = 20;
    this.height = height;

    this.body = Bodies.rectangle(x, y, this.width, height, options);
    World.add(world, this.body);

    Matter.Body.setAngle(this.body,angle);
  }

  
  display(){
    var pos =this.body.position;

    var angle =this.body.angle;

    push ();

    translate(pos.x,pos.y);

    rotate(angle);

    rectMode(CENTER);

    fill('white');

    rect(0,0, this.width, this.height);

    pop ();
    
  }




}
  
