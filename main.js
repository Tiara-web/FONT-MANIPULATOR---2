function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(600, 200);

    video = createCapture(VIDEO);
    video.size(450, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    background("#a3b7d9");
}
function modelLoaded() {
    console.log('PoseNet is initialized');
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}
