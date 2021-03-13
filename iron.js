class iron {

    constructor(x, y, w, h) {
       var options = {
           'restitution':0.2,
           'friction':1.0,
           'density':1.0,
       }
     this.body = Bodies.rectangle(x, y, w, h, options)
     this.width = w 
     this.heigth = h
   
     World.add(world, this.body);
   
    }
   
   display() {
   
       var pos =this.body.position;
       //pos.x = mouseX 
       //pos.y = mouseY
       push();
       rectMode(CENTER)
         fill("black");
         translate( pos.x, pos.y);
         rotate(this.body.angle);
         rect(0, 0, this.width, this.heigth);
         pop();
       }
   
   }
   
   