import Netrunner from '../elements/netrunner.js';
import Codesnippets from '../elements/codesnippets.js';
import Virus from '../elements/virus.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Initial position Netrunner

let netrunnerX = 0;

// Initial frames
let frames = 0;

// Initial score value

let score = 0;

// Initialize the variable to store the keydown event listener

let keydownEventListener = null;

let framesVirus = 0;

// Create a Netrunner for the game
const netrunner = new Netrunner(75, 470, ctx, 0);

// Create an array for the Code Snippets

const codesnippets = [];

// Create an array for the virus

const viruses = [];

// Clear canvas

function updateCanvas() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   netrunner.draw();
   console.log('update canvas');
}

// -------------------------- Move the Netrunner ------------------------------ //

document.addEventListener('keydown', (event) => {
   // updateCanvas();
   switch (event.code) {
      case 'ArrowRight':
         netrunner.moveRight();
         console.log('move right');
         netrunnerX += 10; // update the netrunnerX variable
         updateCanvas();

         break;
      case 'ArrowLeft':
         netrunner.moveLeft();
         netrunnerX -= 10; // update the netrunnerX variable
         updateCanvas();
         console.log('move left');
         break;
   }
   console.log('netrunnerX:', netrunnerX);
   document.addEventListener('keydown', keydownEventListener);
});

// -------------------------- Start the Game ------------------------------ //

window.onload = () => {
   document.getElementById('start-button').onclick = () => {
      play();
   };
};

// -------------------------- The Game Function  ------------------------------ //

function play() {
   const interval = setInterval(function () {
      updateCanvas();

      // ---------------------- Creating codesnippets and moving them ----------------------- //

      codesnippets.forEach((codesnippet) => {
         codesnippet.draw();
         codesnippet.moveDown();
      });

      // increasing the frames
      frames++;

      // generating a codesnippet every 100 frames:
      if (frames % 100 === 0) {
         // generate a random width for the obstacle:
         const randomWidth = Math.floor(Math.random() * 200) + 50;

         // generate a random x position for the obstacle:
         const randomX = Math.floor(
            Math.random() * (canvas.width - randomWidth)
         );

         // create a new codesnippet:
         const codesnippet = new Codesnippets(randomX, ctx);

         // push the codesnippets to the codesnippet array:
         codesnippets.push(codesnippet);
      }

      // ---------------------- Creating viruses and moving them ----------------------- //

      viruses.forEach((virus) => {
         virus.draw();
         virus.moveDown();
      });

      // increasing the frames
      framesVirus++;

      // generating a codesnippet every 150 frames:
      if (framesVirus % 150 === 0) {
         // generate a random width for the obstacle:
         const randomWidth = Math.floor(Math.random() * 200) + 50;

         // generate a random x position for the obstacle:
         const randomX = Math.floor(
            Math.random() * (canvas.width - randomWidth)
         );

         // create a new codesnippet:
         const virus = new Virus(randomX, ctx);

         // push the codesnippets to the codesnippet array:
         viruses.push(virus);
      }

      // ---------------------- Gaining Code Points ----------------------- //

      codesnippets.forEach((codesnippet) => {
         if (
            netrunner.x < codesnippet.x + codesnippet.width &&
            netrunner.x + netrunner.width > codesnippet.x &&
            netrunner.y < codesnippet.y + codesnippet.height &&
            netrunner.y + netrunner.height > codesnippet.y
         ) {
            if (!codesnippet.isTouched) {
               // check if the codesnippet has not been touched before
               console.log('collision detected!');
               netrunner.gainsLife();
               codesnippet.isTouched = true; // mark the codesnippet as touched
               score++;
            }
         }
      });

      // ---------------------- Losing Code Points ----------------------- //

      viruses.forEach((virus) => {
         if (
            netrunner.x < virus.x + virus.width &&
            netrunner.x + netrunner.width > virus.x &&
            netrunner.y < virus.y + virus.height &&
            netrunner.y + netrunner.height > virus.y
         ) {
            if (!virus.isTouched) {
               // check if the codesnippet has not been touched before
               console.log('collision detected!');
               netrunner.loseLife();
               virus.isTouched = true; // mark the codesnippet as touched
               score--;
            }
         }
      });

      // Display the score in the canvas
      ctx.fillStyle = 'white';
      ctx.font = '16px Arial';
      ctx.fillText(`Code loading.. `, 10, 20);

      // Draw blocks to visualize the score
      const blockWidth = 20;
      const blockHeight = 10;
      
      for (let i = 0; i < score; i++) {
         const x = 10 + i * (blockWidth + 5); // calculate the x position of the block
         const y = 30; // set the y position of the block
         ctx.fillStyle = '#48ff00';
         ctx.fillRect(x, y, blockWidth, blockHeight); // draw the block
      }

      // ---------------------- Losing Condition ----------------------- //

      if (netrunner.life < 0) {
         clearInterval(interval);
         ctx.fillStyle = 'rgb(30, 30, 30)';
         ctx.fillRect(0, 0, canvas.width, canvas.height);
         ctx.font = '20px "Press Start 2P"';
         ctx.fillStyle = 'white';
         ctx.fillText('Game Over', 80, 250);
         ctx.font = '30px Arial';
          // Remove the keydown event listener
   document.removeEventListener('keydown', keydownEventListener);
      }
      

      // ---------------------- Winning Condition ----------------------- //
      if (netrunner.life > 8) {
         clearInterval(interval);
         ctx.fillStyle = 'rgb(30, 30, 30)';
         ctx.fillRect(0, 0, canvas.width, canvas.height);
         ctx.font = '20px "Press Start 2P"';
         ctx.fillStyle = 'white';
         ctx.fillText('You Won', 80, 250);
         ctx.font = '30px Arial';
          // Remove the keydown event listener
   document.removeEventListener('keydown', keydownEventListener);
      }

      // ---------------------- Remove code and virus when they go off the grid ----------------------- //
   }, 1000 / 60);
}
