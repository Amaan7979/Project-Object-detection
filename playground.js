status1="";
objects=[];
function setup() {
    canvas=createCanvas(500,500);
    canvas.center();
    objectDetector=ml5.objectDetector('COCOSSD',modelLoaded);
    document.getElementById("status").innerHTML="status : detecting objects";
}
function preload(){
    img=loadImage("playground.jpg");
}
function draw(){
    image(img,0,0,500,500);
    if(status1!= ""){
       for (let index = 0; index < objects.length; index++) {
        fill("red");
        stroke("red");
        percent=floor(objects[index].confidence*100)
        noFill();
        text(objects[index].label+" "+ percent +"%",objects[index].x,objects[index].y);
        rect(objects[index].x,objects[index].y,objects[index].width,objects[index].height);
        document.getElementById("status").innerHTML="status : objects detected ";
    } 
}

}
function modelLoaded(){
status1=true;
console.log("Model is loaded");
objectDetector.detect(img,got_results);
}
function got_results(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    objects=results;
}
}
function go_back(){
    window.location="index.html";
}