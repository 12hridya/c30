class Pig extends BaseClass {
  constructor(x, y){      //Visiblity
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity=255;     //the object is completely visible (255) when created
  }

  display(){
console.log(this.body.speed)
if (this.body.speed<3){
  super.display();
}
else {
  World.remove(world,this.body);
  push ()
  this.Visiblity=this.Visiblity-5;
tint(255,this.Visiblity);   //tint(initial visiblity,chnagedVisiblity)
image(this.image,this.body.position.x,this.body.position.y,50,50);    //image(nameOfTheImage,x,y,w,h)
pop ()
}

  }

};