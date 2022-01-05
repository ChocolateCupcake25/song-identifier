song_1='';
song_2='';
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
song_1=loadSound('harry_potter.mp3');
song_2=loadSound('peter_pan.mp3');
}
function setup(){
    canvas=createCanvas(500,485);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,500,485);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized !');
}
function gotPoses(results){
    if(results.length > 0){
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log('leftWristX' + leftWristX + '   '  + 'leftWristY' + leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log('rightWristX' + rightWristX + '   '  + 'rightWristY' + rightWristY);
    }
}