class Boat {

  constructor(x, y, width, height,boatPos) {
    var options = {
      restsitution :0.8,
      friction: 1.0 , 
      density : 1.0 
    };
    this.width = width;
    this.height = height;
    this.boatPosition = boatPos
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
this.image = loadImage ("assets/boat.png")
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("brown");
    imageMode(CENTER);
    image(this.image,0, 0, this.width, this.height);
    noTint ();
    pop();
  }
}
