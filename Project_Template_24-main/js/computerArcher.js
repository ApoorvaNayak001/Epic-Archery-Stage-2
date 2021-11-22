class ComputerArcher {
    constructor(x, y, width, height) {
      const options = {
        isStatic: true
      };
  
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("./assets/computerArcher.png");
  
      World.add(world, this.body);
  
      Matter.Body.setAngle(this.body, PI / 2);
    }
  

    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      if (keyIsDown(UP_ARROW) && computerArcher.body.angle < 1.77) {
        angle = 0.1;
        Matter.Body.setAngle(this.body, angle);
    }else{
        angle = -0.1;
        Matter.Body.setAngle(this.body, angle);
    }
  
    if (keyIsDown(DOWN_ARROW) && computerArcher.body.angle > 1.47) {
        angle = -0.1;
        Matter.Body.setAngle(this.body, angle);
    }else{
        angle = 0.1;
        Matter.Body.setAngle(this.body, angle);
    }

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
 