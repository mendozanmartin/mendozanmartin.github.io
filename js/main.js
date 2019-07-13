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
    // drawSomething();
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
    var yPos = [canvasHeight / 2, canvasHeight / 3, canvasHeight / 4, canvasHeight / 5 + canvasHeight / 2];
    var xPos = [canvasWidth / 4, canvasWidth / 2 + canvasWidth / 3, canvasWidth / 3, canvasHeight / 5 + canvasWidth / 3];
    var drawings = [bearDrawing[272], bearDrawing[167], bearDrawing[346], bearDrawing[277]];
    var j = 0;
    drawings.forEach(element => {
        for (let path of element) {
            noFill();
            stroke(255);
            strokeWeight(3);
            beginShape()
            for (let i = 0; i < path[0].length; i++) {
                let x = (path[0][i] * scale) + xPos[j]
                let y = (path[1][i] * scale) + yPos[j]
                vertex(x, y);
            }
            endShape();
        }
        j++;
    })

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
        case "bluetootharduino":
            window.location.href = './projects/arduinovacuum'
            break;
        case "refugeevrexperience":
            window.location.href = './projects/refugeevrexperience'
    }
}

function externalLink(website) {
    switch (website) {
        case "linkedIn":
            window.open(
                'https://www.linkedin.com/in/neil-martin-mendoza/',
                '_blank' // <- This is what makes it open in a new window.
            );
            break;
        case "github":
            window.open(
                'https://github.com/mendozanmartin',
                '_blank'
            );
            break;
        case "email":
            window.open(
                'mailto:mendozan@mcmaster.ca',
                '_blank'
            );
            break;
        case "vimeo":
            window.open(
                'https://vimeo.com/user100529261',
                '_blank'
            );
    }
}

$(document).ready(function () {
    $("#aboutLink, #learnMore, .aboutLink").click(function () {
        $('html, body').animate({
            scrollTop: $("#aboutPage").offset().top - navbarHeight
        }, 1750);

    });

    $("#portfolioLink, .portfolioLink").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolioPage").offset().top - navbarHeight
        }, 1750);
    });

    $("#resumeLink, .resumeLink").click(function () {
        window.open(
            './Resume.pdf',
            '_blank' // <- This is what makes it open in a new window.
        );
    });

});



