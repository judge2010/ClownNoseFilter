nose_X=0;
nose_Y=0;
function preload(){
 clown_nose = loadImage("https://i.postimg.cc/G3SRqk5L/580b57fbd9996e24bc43bed5-png.png");
};
function setup(){
 canvas= createCanvas(350,350);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(350,350);
 video.hide();
 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
};


function save_photo(){
save("photo.png")
};
function modelLoaded(){
console.log("Model is loaded");
};
function gotPoses(results){
 if(results.length > 0)
{ console.log(results);
nose_X = results[0].pose.nose.x;
nose_Y = results[0].pose.nose.y; };
nose_X = nose_X - 20;
};


 function draw(){
   image(video,0,0,350,350);
   fill(255, 0, 0);
   stroke(255, 0, 0);
   image(clown_nose,nose_X,nose_Y,25,25)
   };
