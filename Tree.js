class Tree {
    constructor(x, y, width, height) {
      var options = {
        isStatic:true,
        friction:1.0,
        density:1.2
      }
      this.image=loadImage("tree.png");

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x=x;
      this.y=y;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(4);
      fill("grey");
      image(this.image,pos.x,pos.y, this.width, this.height);
      pop();
    }
  };