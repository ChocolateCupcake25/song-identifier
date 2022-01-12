song_1 = '';
song_2 = '';

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

scorerightWrist = 0;
songrightWrist = '';

scoreleftWrist = 0;
songleftWrist = '';

function preload() {
    song_1=loadSound('harry_potter.mp3');
    song_2=loadSound('peter_pan.mp3');
}
function setup() {
    canvas=createCanvas(500, 450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 500, 485);

    fill('#FF0000');
    stroke('#FF0000');

    songleftWrist=song_1.isPlaying();
    if(scoreleftWrist > 0.2){
         circle(leftWristX,leftWristY,20);
         song_2.stop();
         document.getElementById("song_name").innerHTML='Song name = harry potter';
    }
    if(songleftWrist=song_1.stop() ){
        document.getElementById('note').innerHTML= 'harry_potter will be played when left wrist is shown';
    }
}
function modelLoaded() {
    console.log('PoseNet Is Initialized !');
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log('leftWristX:' + leftWristX + 'leftWristY:' + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log('rightWristX:' + rightWristX + 'rightWristY:' + rightWristY);

        scoreleftWrist= results[0].pose.keypoints[9].score;
        scorerightWrist= results[0].pose.keypoints[10].score;
        console.log('scoreleftWrist:' + scoreleftWrist + 'scorerightWrist:' + scorerightWrist);

    }
}