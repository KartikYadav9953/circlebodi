class gr {
 
    constructor(x, y) {
     var op = {
    isStatic : true

     }


     this.body = Bodies.rectangle(x, y, 800, 20, op);

World.add(world, this.body);


    }


display() {

    
    push();
    rectMode(CENTER)
      fill("red");
      
      rect(this.body.position.x , this.body.position.y , 800, 20)
      pop();


}




}