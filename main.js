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
left_wrist_x=results[0].pose.leftWrist.x
right_wrist_x=results[0].pose.rightWrist.x
diference=floor(left_wrist_x-right_wrist_x)
}
}

function draw(){
    background("ligthgreen")
    document.getElementById("tamaño_cuadrado").innerHTML="el ancho y alto del cuadrado sera:"+diference
    fill("red")
    textSize(diference)
    text("que mira bobo que mira bobo anda anda pa ya bobo anda pa ya",50,400)
}