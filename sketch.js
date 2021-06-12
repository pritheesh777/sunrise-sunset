const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var time
function preload() {
    backgroundImg=loadImage("sunset10.png")
    getBackgroundImg()

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
background(backgroundImg)

    Engine.update(engine);
    fill("black")

    // write code to display time in correct format here
textSize(20)
if(time>=12){
    console.log(time)
    text("time",time%12+"am",200,200)
}else{
    console.log(time)
    text("time",time%12"pm",200,200)
}
}

async function getBackgroundImg(){

    // write code to fetch time from API
var response=await fetch("http://worldtimeapi.org/api/timezone/America/new_york")
    //change the data in JSON format
var responsejson=await response.json()
    // write code slice the datetime
var datetime=responsejson.datetime
time=datetime.slice(11,13)
console.log(time)
console.log (datetime)

    // add conditions to change the background images from sunrise to sunset
if (time>04&&time<=06){
    bg="sunrise1.png"
}else if (time>=06&&time<=08){
   bg="sunrise2.png"
}else if(time>=23&&time<=00){
    bg="sunset10.png"
}else if(time>=00&&time<=03){
    bg="sunset11.png"
}else{
    bg="sunset12.png"
}
    //load the image in backgroundImg variable here
backgroundImg=loadImage(bg)
}
