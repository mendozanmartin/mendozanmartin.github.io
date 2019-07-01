const canvasWidth = document.getElementById("drawingCanvas").offsetWidth;
const canvasHeight = document.getElementById("drawingCanvas").offsetHeight;
const scale = 0.3;
let strokeIndex = 0;
let index = 0;
let bear;
let prevx, prevy;
let isDrawing = false;
let xPos;
let yPos;


function setup() {
    var myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("drawingCanvas");
    myCanvas.mouseClicked(placeBear);
}

function draw() {
    if (bear) {
        let x = bear[strokeIndex][0][index] * scale + xPos - 30;
        let y = bear[strokeIndex][1][index] * scale + yPos - 30;
        stroke(255);
        strokeWeight(3);

        if (prevx !== undefined) {
            line(prevx, prevy, x, y);
        }

        index++;
        if (index >= bear[strokeIndex][0].length) {
            strokeIndex++;
            prevx = undefined;
            prevy = undefined;
            index = 0;
            if (strokeIndex === bear.length) { //error handling for when strokeIndex reaches end of stroke
                bear = undefined;
                strokeIndex = 0;
            }
        } else {
            prevx = x;
            prevy = y;
        }

    }
}


function gotBear(randomNumber) {
    bear = bearDrawing[randomNumber];
}
function placeBear() {
    xPos = mouseX;
    yPos = mouseY;
    bear = undefined;
    prevx = undefined;
    prevy = undefined;

    strokeIndex = 0;
    index = 0;
 
    var randomNum = parseInt((Math.random()* bearDrawing.length), 10);
    gotBear(randomNum);    
}

