class Virus {
    constructor(y, ctx){
        this.height = 40;
        this.width = 40;
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.ctx = ctx;
        this.img = new Image();
        this.img.onload = () => {
            this.draw();
        };
        this.img.src = "../src/img/virus.gif";
    }

    draw(){
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    moveDown() {
        this.y += 5;
    }
}

export default Virus;