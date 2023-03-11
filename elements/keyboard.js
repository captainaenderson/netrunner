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
}

export default Keys;