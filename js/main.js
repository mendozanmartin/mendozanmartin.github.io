const canvasWidth = document.getElementById("drawingCanvas").clientWidth;
const canvasHeight = document.getElementById("drawingCanvas").clientHeight;

function setup() {
    var myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("drawingCanvas");
}
function mousePressed() {
    console.log(mouseX);
}