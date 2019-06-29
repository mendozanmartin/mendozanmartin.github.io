const canvasWidth = document.getElementById("drawingCanvas").offsetWidth;
const canvasHeight = document.getElementById("drawingCanvas").offsetHeight;

function setup() {
    var myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("drawingCanvas");
    myCanvas.mouseOver(drawAnimal);
}
function mousePressed() {
    console.log(mouseX);
}

function drawAnimal() {
    console.log(mouseX + " " + mouseY);
}