class Mango
{
    constructor(x,y,r)
       {
           var options={
           isStatic:true,
           restitution:0,
           friction:1,
           density:1.2
                    
        }
        this.x=x;
		this.y=y;
        this.r=r
        this.image = loadImage("mango.png")
              this.body=Bodies.circle(x,y,r,options);
              this.width=width;
              this.height=height;

              World.add(world,this.body);
       }
        display()
        {
            var stonepos = this.body.position
            push();
            translate(stonepos.x, stonepos.y);
            image(this.image,0,0, this.r, this.r);
            pop();
    
        }
}
