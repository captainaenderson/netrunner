class Keys {
    constructor(x, y, ctx){
        this.height = 50;
        this.width = 50;
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.color = "white";
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveRight() {
        if (this.x + this.width < this.ctx.canvas.width) {
            this.x += 10;
            console.log("test")
        }
    }

    moveLeft(){
        if (this.x > 0) {
            this.x -= 10;
        }
    
    }
}

export default Keys;