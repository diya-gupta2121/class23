class Box{
//properties
constructor(x,y,width,height){
    var options={
        restitution: 0.5
    }
    
    //actual body
  this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
     this.height=height;
  World.add(world,this.body);
}








//functions
//we need to draw it exactly where my physics body lies, so the position of my shape and body should match
display(){
  var pos=this.body.position;
 
  push();
  translate(pos.x,pos.y);
  rotate(this.body.angle);
  fill("pink")
  rectMode(CENTER);
  //shape
  rect(0,0,this.width,this.height);
  pop();
}



}