class Log{
constructor(x,y,height,angle){
var options={
    restitution:0.3,
    friction:1.0,
    density:1.0
}

this.object=Bodies.rectangle(x,y,20,height,options);
Matter .Body.setAngle(this.object,angle);
World.add(world,this.object)

this.width=20;
this.height=height;

}

display(){
 var pos=this.object.position;
push ()
translate (pos.x,pos.y);
rotate (this.object.angle);
rectMode(CENTER)
fill (255)
rect(0,0,this.width,this.height);
pop ();


}











}
















