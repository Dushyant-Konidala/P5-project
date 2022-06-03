function preload(){

}
function setup(){
canvas=createCanvas(600,600);
canvas.center();
camera=createCapture(VIDEO);
camera.hide();


}
function draw(){
image(camera,125,130,200,200);
fill(255,0,0);
circle(50,50,60);
circle(400,400,60);
circle(400,50,60);
circle(50,400,60);
fill(0,255,0);
rect(75,390,300,20);
rect(390,75,20,300);
rect(40,75,20,300);
rect(75,40,300,20);
}
