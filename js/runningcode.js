let string =
   ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.BEST developer websites that provide web designers and developers with a simple way to preview and download a variety of free code & scripts.';
let str = string.split('');
let el = document.getElementById('code-text');

function animate() {
   str.length > 0 ? (el.innerHTML += str.shift()) : (str = string.split(''));
   setTimeout(animate, 20);
}

animate(); // Call the function to start the animation loop



