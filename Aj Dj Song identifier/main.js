song_1='';
song_2='';
function preload(){
song_1=loadSound('harry_potter.mp3');
song_2=loadSound('peter_pan.mp3');
}
function setup(){
    canvas=createCanvas(500,485);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,500,485);
}