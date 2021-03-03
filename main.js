nose_x=0;
nose_y=0;
function preload(){
 
};
function setup(){
 canvas= createCanvas(250,250);
 canvas.center();
 video = createCapture(VIDEO);
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
   if(results.length > 0){
console.log(results);
nose_x=results[0].pose.nose.x;
nose_y=results[0].pose.nose.y;
console.log(nose_x,nose_y);
};
}; function draw(){
   image(video,0,0,250,250);
   fill(255, 0, 0);
   stroke(255, 0, 0);
   circle(100,100,20);
   };
