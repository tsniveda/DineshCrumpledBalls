class Paper {
 
    constructor(x, y) {
     
      this.radius=30;

      this.body = Bodies.circle(x, y,this.radius);

      World.add(world, this.body);

      
    }
    display(){
      var pos =this.body.position;
      
      var angle =this.body.angle;
      push ();
  
      translate(pos.x,pos.y);
  
      rotate(angle);
  
      ellipseMode(RADIUS);
  
      fill('pink');
  
      ellipse(0,0,this.radius,this.radius);
  
      pop ();
      
    }

   
  };

 
  