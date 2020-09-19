class Points{
    constructor(x, y, width, height) {
        var options = {
            isStatic = true
        }
    }

    Points = bodies.circle(200,100,20,ball_options)

  
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        pop();
      }
    
}