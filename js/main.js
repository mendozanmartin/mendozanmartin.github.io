const canvasWidth = document.getElementById("drawingCanvas").offsetWidth;
const canvasHeight = document.getElementById("drawingCanvas").offsetHeight;

function setup() {
    var myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("drawingCanvas");
    jQuery.getJSON("./processing/data/bat.ndjson", function(json) {
       console.log(json)
    });
}
function mousePressed() {
    console.log(mouseX);
}
function gotBear(drawing) {
    console.log(drawing);
}