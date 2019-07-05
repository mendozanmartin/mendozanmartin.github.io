const canvasWidth = document.getElementById("drawingCanvas").offsetWidth;
const canvasHeight = document.getElementById("drawingCanvas").offsetHeight;
const canvasTop = document.getElementById("drawingCanvas").offsetTop;
const canvasLeft = document.getElementById("drawingCanvas").offsetLeft;
const navbarHeight = document.getElementById("navbar").offsetHeight;
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
    drawSomething();
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

function drawSomething() { //draw 5 animals to begin with
    for (var count = 0; count < 10; count++) {
        let randomNumber = parseInt((Math.random() * bearDrawing.length), 10);
        let drawing = bearDrawing[randomNumber];
        var j = 0;
        var yPos = parseInt((Math.random() * canvasHeight + canvasTop - canvasTop/2), 10);
        var xPos = parseInt((Math.random() * canvasHeight + canvasLeft - canvasLeft/2), 10);
        for (let path of drawing) {
            noFill();
            stroke(255);
            strokeWeight(3);
            beginShape()
            for (let i = 0; i < path[0].length; i++) {
                let x = (path[0][i] * scale) + xPos
                let y = (path[1][i] * scale) + yPos
                vertex(x, y);
            }
            endShape();
        }
        j++;
    }
}

function gotBear(randomNumber) {
    console.log(randomNumber)
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

    var randomNum = parseInt((Math.random() * bearDrawing.length), 10);
    gotBear(randomNum);
}

function nextPage(project) {
    console.log(project)
    switch (project) {
        case "promptu":
            window.location.href = './projects/promptu'
            break;
    }
}
$(document).ready(function () {
    $("#aboutLink").click(function () {
        $('html, body').animate({
            scrollTop: $("#aboutPage").offset().top - navbarHeight
        }, 2000);

    });
});

$(document).ready(function () {
    $("#portfolioLink").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolioPage").offset().top - navbarHeight
        }, 2000);
    });
});

