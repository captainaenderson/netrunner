import Keys from "../elements/keyboard.js"




const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Clear canvas

function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    netrunner.draw();
  }


// Create keys of the game
const netrunner = new Keys(75, 300, ctx)

// Initial position

let netrunnerX = 75;

// Move the Netrunner

function moveNetrunner() {
    document.addEventListener("keydown", (event) => {
      switch(event.code){
        case "ArrowRight":
          netrunner.moveRight();
          netrunnerX = netrunner.x; // update the netrunnerX variable
          break;
        case "ArrowLeft":
          netrunner.moveLeft();
          netrunnerX = netrunner.x; // update the netrunnerX variable
          break;
      }
    })
}



// Start the Game

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        play();
      
    }; 
}  


// The Game Function

function play(){
    updateCanvas();
    moveNetrunner();

    
}

// Clear 