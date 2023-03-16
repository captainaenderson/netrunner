let string =
  // `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.BEST developer websites that provide web designers and developers with a simple way to preview and download a variety of free code & scripts.`;
  `import Netrunner from '../elements/netrunner.js';
  import Codesnippets from '../elements/codesnippets.js';
  
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  \n
  // Initial position Netrunner
  \n
  let netrunnerX = 0;
  let frames = 0;
  \n
  // Create a Netrunner for the game
  const netrunner = new Netrunner(75, 370, ctx);
  \n
  
  // Create an array for the Code Snippets
  \n
  const codesnippets = [];
  \n
  
  // Clear canvas
  
  function updateCanvas() {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     netrunner.draw();
     console.log('update canvas');
  }
  
  
  // Move the Netrunner
  
     document.addEventListener('keydown', (event) => {
      // updateCanvas();
        switch (event.code) {
           case 'ArrowRight':
              netrunner.moveRight();
              console.log('move right');
              netrunnerX += 10; // update the netrunnerX variable
              
              break;
           case 'ArrowLeft':
              netrunner.moveLeft();
              netrunnerX -= 10; // update the netrunnerX variable
             
              console.log('move left');
              break;
        }
        console.log('netrunnerX:', netrunnerX);
     });
  
  
  // Start the Game
  
  window.onload = () => {
     document.getElementById('start-button').onclick = () => {
        play();
        
     };
  };
  
  // The Game Function
  
  function play() {
      const interval = setInterval(function () {
  
          updateCanvas();
       
          // Creating codesnippets and moving them
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
              const randomX = Math.floor(Math.random() * (canvas.width - randomWidth));
       
              // create a new codesnippet:
              const codesnippet = new Codesnippets(randomX, ctx);
       
              // push the codesnippets to the codesnippet array:
              codesnippets.push(codesnippet);
            }
  
      }, 1000 / 60)     
  
     
  }
  
  \n`
let str = string.split('');
let el = document.getElementById('code-text');

let counter = 0;

function animate() {
  counter++;
  if(counter % 1500 === 0) {
    el.innerText = '';
  }
   str.length > 0 ? (el.innerHTML += str.shift()) : (str = string.split(''));
   setTimeout(animate, 20);
}

animate(); // Call the function to start the animation loop



