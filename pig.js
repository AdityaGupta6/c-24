class Pig {
constructor(x,y){
    var options={
        restitution:0.3
    }

this.object=Bodies.rectangle(x,y,50,50,options);
World.add(world,this.object);
this.width=50;
this.height=50;

}
display(){
   var pos=this.object.position;
push ();
translate (pos.x,pos.y);
rotate(this.object.angle);
rectMode(CENTER);
fill ("red");
rect(0,0,this.width,this.height);
pop();
  




}





}











