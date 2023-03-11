class Text {
  constructor(font, fontSize, animation) {
     this.font = font;
     this.fontSize = fontSize;
     this.color = 'white';
     this.text = '';
     this.padding = 10;
     this.animation = animation;
  }

  draw() {
    this.animation.innerText = this.text;
    /*console.log(this.animation.style.width)
     this.ctx.font = this.font;
     this.ctx.fillStyle = this.color;
     this.ctx.fillText(this.text, 30, this.fontSize, 10);*/
  }

  animate() {

     // Calculate the number of columns and rows based on the animation.style size and font size
     const cols = 50;
     //Math.floor(this.animation.style.width - this.fontSize);
     const rows = 20;
     //Math.floor(this.animation.style.height - this.fontSize);

     // Initialize the buffer as a 2D array with blank spaces
     const buffer = [];
     for (let y = 0; y < rows; y++) {
        buffer[y] = [];
        for (let x = 0; x < cols; x++) {
           buffer[y][x] = ' ';
        }
     }

     // Define the render function that updates the buffer with random characters and draws it to the animation.style
     const render = () => {
      this.text = '';
        // Update the buffer with random characters
        // this.ctx.clearRect(0, 0, this.animation.style.width, this.animation.style.height);
        for (let y = 0; y < rows; y++) {
           for (let x = 0; x < cols; x++) {
              // Randomly choose a character to add to the buffer
              if (Math.random() < 0.5) {
                 // Choose a random character code between 33 and 126 and convert it to a string
                 buffer[y][x] = String.fromCharCode(Math.floor(Math.random() * 94) + 33);
              }
           }
        }


        // Draw the buffer to the animation.style
        for (let y = 0; y < rows; y++) {
           // Join the characters in each row of the buffer into a string
           const line = buffer[y].join('');
           // Draw the string at the appropriate position on the animation.style
           this.text += line;
          // this.ctx.fillText(line, 10, (y + 1) * this.fontSize + 5, this.animation.style.width - 20);
        }
     };

     // Call the render function repeatedly at a fixed interval to create an animation effect
     setInterval(render, 500);
  }
}


