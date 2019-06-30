const canvasWidth = document.getElementById("drawingCanvas").offsetWidth;
const canvasHeight = document.getElementById("drawingCanvas").offsetHeight;

function setup() {
    var myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("drawingCanvas");

    $.getJSON('./processing/data/bear.ndjson', function(data) {
        console.log("success");
        gotBear(data);
    });

}

function gotBear(resData) {
    var data = jQuery.parseJSON(JSON.stringify(resData));
    console.log(data)
}