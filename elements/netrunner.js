class Netrunner {
    constructor(x, y, ctx, life){
        this.height = 30;
        this.width = 18;
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.life = life;
        this.isTouched = false;
        this.img = new Image();
        this.img.onload = () => {
            this.draw();
        };
        this.img.src = "../src/img/cursor.gif";
    }

    draw(){
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    moveRight() {
        if (this.x + this.width < this.ctx.canvas.width) {
            this.x += 10;
            console.log("testright")
        }
    }

    moveLeft(){
        if (this.x > 0) {
            this.x -= 10;
        }
    
    }

    gainsLife(){
        this.life++
        console.log('Life gained, total lives:', this.life);
    }

    loseLife(){
        this.life--
        console.log('Life lost, total lives:', this.life)
    }
}

export default Netrunner;