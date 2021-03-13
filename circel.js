class circel {

    constructor(x, y) {
       var options = {
           'restitution':0.2,
           'friction':1.0,
           'density':1.0,
          // 'isStatic': true
       }
     this.body = Bodies.circle(x, y, 80, options)
     //this.daimeter = d
   
     World.add(world, this.body);
   
    }
   
   display() {
   
       
       push();
       rectMode(CENTER)
         fill("blue");
         translate(this.body.position.x, this.body.position.y);
         rotate(this.body.angle);
         circle(this.body.position.x,this.body.position.y, 80);
         pop();
       }
   
   }
   
   