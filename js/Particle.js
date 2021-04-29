class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);

        if(pos.x > 0 && pos.x < 80){
            score = 100;
        }

        if(pos.x > 80 && pos.x < 160){
            score = 200;
        }

        if(pos.x > 160 && pos.x < 240){
            score = 300;
        }

        if(pos.x > 240 && pos.x < 320){
            score = 500;
        }

        if(pos.x > 320 && pos.x < 400){
            score = 700;
        }

        if(pos.x > 400 && pos.x < 480){
            score = 900;
        }

        if(pos.x > 480 && pos.x < 560){
            score = 50;
        }

        if(pos.x > 560 && pos.x < 640){
            score = 1000;
        }

        if(pos.x > 640 && pos.x < 720){
            score = 3000;
            console.log('You are the supreme winner ans you scored the highest points in this game in one go');
        }

        if(pos.x > 720 && pos.x < 8000){
            score = 10;
        }

        pop();
    }

};