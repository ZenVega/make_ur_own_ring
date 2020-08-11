let canvas;
let circle=[];
let color1 = (0,0,0)
let color2 = (255,255,255)

function setup(){
  canvas = createCanvas(0.5 * windowHeight,0.5 * windowHeight);
  canvas.parent('logo');
  canvas.style.position = 'relative';
  canvas.style('z-index', '-1')
  frameRate(20);
  additionalShapes = [];
}    
 
function draw(){
  background(255,255,255);
  noStroke();
  fill(0);
  ellipse(width/2, height/2, width/60*39)
  fill(250);
  ellipse(width/2, height/2, width/60*27.5)
  noCursor();
    
  noStroke();
  fill(250,0,0);
  ellipse(mouseX, mouseY, 5);

  strokeWeight(1)
    fill(color1);
  additionalShapes.map(shape => {
    if(shape.case === 'ellipse'){
       ellipse(shape.x, shape.y, shape.size)
    } else if(shape.case === 'polygon'){
      beginShape(); 
      shape.points.map(point => {
        vertex(point.x, point.y);
      })
        endShape(CLOSE);
    }
  })
}

function mousePressed(){
  let hit = false;
  let distance = dist(width/2, height/2, mouseX, mouseY);
    if (distance < width/2 && distance > width/12){
      hit = true;
    }
  if(hit){
    let shape = floor(random(1,7));
    if(shape === 1 || shape ===2){
      additionalShapes.push({
        case: 'ellipse',
        x:mouseX,
        y: mouseY,
        size: random(width/20,width/5)
      })
    } else {
      let size = random(width/30,width/10);
      let polygon = [];
      let points = 1;
      let divisor = PI*2/360;
      for(let a = 0 ; a < 360 ; a += 360/shape) {
        let x = size * sin(a*divisor) + mouseX;
        let y = size * cos(a*divisor) + mouseY;

        polygon.push({x:x, y:y});
        points++;
      }
      additionalShapes.push({
        case: 'polygon',
        points: polygon
      })
    }
    }

  }  
