import Keys from "../elements/keyboard.js"




const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");


// Create keys of the game
const keyboardKey = new Keys(75, 100, ctx)


// Start the Game

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        play();
      
    };
}  


// The Game Function

function play(){
    
    keyboardKey.draw();

    
}

