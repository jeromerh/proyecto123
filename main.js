nose_X=0
nose_y=0

diference=0

right_wrist_x=0
left_wrist_x=0

function setup(){
video=createCapture(VIDEO)
video.size(550,500)
canvas=createCanvas(550,500)
canvas.position(550,150)
posenet=ml5.poseNet(video,modelLoad)
posenet.on("pose",gotPoses)
     
}

function modelLoad(){
 console.log("PoseNet inicializado")

}

function gotPoses(results){
if(results.length>0){
console.log(results)
}
}