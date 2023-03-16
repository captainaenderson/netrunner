class Netrunner {
    constructor(x, y, ctx, life){
        this.height = 20;
        this.width = 20;
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.color = "white";
        this.life = life;
        this.isTouched = false;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
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