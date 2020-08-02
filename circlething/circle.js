
let yoff = 0.0;
let yoff2 = 0.0;

function setup() {
  createCanvas(320, 320);
}

function draw() {
  background(0);
  fill(255,255,255);
  translate(width / 2, height / 2);

  var radius = 130;
  let distance = dist(width/2, height/2, mouseX, mouseY);
  let offsetStrength = constrain(map(distance, width/2, 20, 22,1),1,25);
  let radius2 = constrain(radius - distance, 0, 100); 
  let alpha = constrain(map(distance, 120, 130, 255,0),0,255);
  console.log(radius2);

  beginShape();
  let xoff = 0;
  for (var a = 0; a < TWO_PI; a += 0.1) {
    let offset = map(noise(xoff + yoff/2), 0, 1, -offsetStrength, offsetStrength);
    let r = radius + offset;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    xoff += 0.1;
  }
  endShape(CLOSE);
  
 
  fill(0,0,0,alpha);
  noStroke();
  beginShape();
  for (var a = 0; a < TWO_PI; a += 0.1) {
    let offset = map(noise(xoff - yoff), 0, 1, -offsetStrength/2, offsetStrength/2);
    let r = radius2 + offset;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    xoff += 0.1;
  }
  endShape(CLOSE);
  yoff += 0.01;
}

// let circle=[];


// function setup(){
//   createCanvas(400,400);
//   frameRate(20);

// }    
// /* 
// let distance = dist(x, y, mouseX, mouseY);
// let actionRad = 20;
// let Xdist = constrain( Math.abs(x-mouseX), 0, actionRad );
// let Ydist = constrain( Math.abs(y-mouseY), 0, actionRad );

// if(distance < actionRad){
//   if(Xdist < actionRad && mouseX < x){
//     x+=actionRad - Xdist;
//   }
  
//   if(Xdist < actionRad && mouseX > x){
//     x-=actionRad - Xdist;
//   }
  
//   if(Ydist < actionRad && mouseY < y){
//     y+=actionRad - Ydist;
//   }
  
//   if(Ydist < actionRad && mouseY > y){
//     y-=actionRad - Ydist;
//   }
//   */    
 
 
//  function draw(){
//    background(0);
//    angleMode(DEGREES);
//    stroke(255);
//    strokeWeight(20)
//    noFill();
   
//    beginShape();
//      for(let a = 0 ; a < 360 ; a += 10) {
//        let x = 100 * sin(a) + 200;
//        let y = 100 * cos(a) + 200;
//        curveVertex(x,y);
//      circle.push({ x: x, y: y})
//      }
// /*     circle.map(point => {
//       curveVertex(point.x, point.y)
//     }) */
//   endShape(CLOSE);

//   function mouseDragged(){
    
//   }
// }
