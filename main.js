nose_x=0;
nose_y=0;
left_wrist_x=0;
right_wrist_x=0;
difference=0;
function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,100);
    video=createCapture(VIDEO);
    video.size(550,500);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
console.log(results);
nose_x=results[0].pose.nose.x;
nose_y=results[0].pose.nose.y;
console.log("this is nose x " + nose_x + " this is nose y " + nose_y);
left_wrist_x=results[0].pose.leftWrist.x;
right_wrist_x=results[0].pose.rightWrist.y;
console.log("this is left wrist x " + left_wrist_x + " this is right wrist x " + right_wrist_x);
difference= floor(right_wrist_x - left_wrist_x);
console.log(difference);
    }

}

function draw(){
    background("grey");
    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
    stroke("black");
    strokeWeight(5);
    fill("red");
    square(nose_x,nose_y,difference);
}