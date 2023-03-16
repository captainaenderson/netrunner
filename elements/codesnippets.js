class Codesnippets {
    constructor(y, ctx){
        this.height = 20;
        this.width = 40;
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.ctx = ctx;
        this.color = "yellow";
    }

    draw(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        
    }


    moveDown() {
        this.y += 1;
    }

    
}

export default Codesnippets;