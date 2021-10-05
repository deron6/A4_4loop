// let core01_XPos=100;
// let core01_speed=4;
// let core02_XPos=300;
// let core02_speed=2.5;
// let core03_XPos=300;
// let core03_speed=5;
// let core04_XPos=500
// let core05_XPos=400
// let angle=0

let T1L = {
  colorR: 255,
  colorG: 0,
  colorB: 0,
  x1: 100,
  y1: 100,
  x2: 300,
  y2: 100,
  x3: 200,
  y3: 200,
  angle: 0,
  speed: 4

}

let T1R= {
  colorR: 255,
  colorG: 255,
  colorB: 0,
  x1: 300,
  y1: 100,
  x2: 500,
  y2: 100,
  x3: 400,
  y3: 200,
  angle: 0,
  speed: 2.5
}

let T2L= {
  angle: 0,
  colorR: 255,
  colorG: 0,
  colorB: 0,
  x1: 300,
  y1: 100,
  x2: 500,
  y2: 100,
  x3: 400,
  y3: 200,
  speed: 5
}

// blue triangle
let T2R = {
  angle: 0,
  colorR: 0,
  colorG: 0,
  colorB: 255,
  x1: 300,
  y1: 500,
  x2: 500,
  y2: 500,
  x3: 400,
  y3: 300,
  speed: 1
}

let tcore01 = {
  colorR: 255,
  colorG: 0,
  colorB: 0,
  x1: 100,
  y1: 100,
  x2: 300,
  y2: 100,
  x3: 200,
  y3: 200,
  angle: 0,
  speed: 4
}

let tcore02 = {
  colorR: 245,
  colorG: 104,
  colorB: 54,
  x1: 100,
  y1: 150,
  x2: 350,
  y2: 100,
  x3: 200,
  y3: 200,
  angle:0,
  speed: 8
}

let rotateObjectsArray= [T1L,T1R,T2L,T2R,tcore01,tcore02]

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0)
  noFill()
  stroke(255)
  strokeWeight(1.5)
  angleMode(DEGREES)

  // //core01
  // fill('red')
  // if(core01_XPos>200 || core01_XPos<0) {core01_speed=core01_speed*-1;}
  // core01_XPos=core01_XPos + core01_speed
  // triangle(core01_XPos,100,core02_XPos, core01_XPos,200,200)
  // core01(JSO)
  // fill(T1L.colorR, T1L.colorG, T1L.colorB)
  // if(T1L.x1>200 || T1L.x1<0) {T1L.speed=T1L.speed*-1;}
  // T1L.x1=T1L.x1 + T1L.speed
  // triangle(T1L.x1,T1L.y1,T1L.x2, T1L.y2,T1L.x3,T1L.y3)

  // //core02
  // fill('yellow')
  // if(core02_XPos>400 || core02_XPos<0) {core02_speed=core02_speed*-1;}
  // core02_XPos=core02_XPos + core02_speed
  // triangle(core02_XPos,core01_XPos,500,core01_XPos,400,200)
  // core02(JSO)
  // fill(T1R.colorR,T1R.colorG,T1R.colorB)
  // if(T1R.x1>400 || T1R.x1<0) {T1R.speed=T1R.speed*-1;}
  // T1R.x1=T1R.x1 +T1R.speed
  // triangle(T1R.x1,T1R.y1,T1R.x2,T1R.y2,T1R.x3,T1R.y3)

  // //core03
  // fill('red')
  // if(core03_XPos>500 || core03_XPos<0) {core03_speed=core03_speed*-1;}
  // core03_XPos=core03_XPos + core03_speed + core02_speed
  // triangle(core03_XPos,500,core02_XPos,500,core02_XPos,400)
  // core03(JSO)
  //
  // fill(T2L.colorR,T2L.colorG,T2L.colorB)
  // if(T2L.x1>500 || T2L.x1<0) {T2L.speed=T2L.speed*-1;}
  // T2L.x1=T2L.x1 + T2L.speed +T1R.speed
  // triangle(T2L.x1,T2L.y1,T2L.x2,T2L.y2,T2L.x3,T2L.y3)

  // //core04
  // triangle(core03_XPos,core04_XPos,core04_XPos,core04_XPos,core03_XPos,core05_XPos)
  // //core04 (JSO)
  // fill(T2R.colorR,T2R.colorG,T2R.colorB)
  // fill('blue')
  // push()
  //
  // let positionRotationX = T2R.x3;
  // let positionRotationY = T2R.y3+125;
  //
  // translate(positionRotationX, positionRotationY)
  // // translate(0, 0)
  // rotate(-T2R.angle)
  // // triangle(T2R.x1,T2R.y1,T2R.x20,T2R.y2,T2R.x3,T2R.y3)
  // triangle(T2R.x1 - positionRotationX,T2R.y1 - positionRotationY,T2R.x2 - positionRotationX, T2R.y2  - positionRotationY,T2R.x3  - positionRotationX,T2R.y3 - positionRotationY)
  // pop()
  // T2R.angle++
  //
  // stroke(255)
  // strokeWeight(10)
  // point(T2R.x3, 425)







  // //core05
  // fill('purple')
  // push()
  // translate(200, 200)
  // rotate(angle)
  // triangle(200,200,200,core05_XPos,225,300)
  // triangle(400,200,core05_XPos,core05_XPos,375,300)
  // pop()
  // angle++;
  // //core06
  // push()
  // translate(0,0)
  // rotate(angle)
  // triangle(300,300,200,400,375,300)
  // pop()
  // angle++
  //
  // push()
  // translate(CENTER)
  // rotate(-angle)
  // triangle(400,200,400,400,225,300)
  // pop()
  // angle++
  //
  // push()
  // translate(200,200)
  // rotate(angle)
  // line(200,200,400,200)
  // pop()
  // angle++
  //
  // push()
  // translate(200,400)
  // rotate(angle)
  // line(200,400,400,400)
  // pop()
  // -angle++
  //
  // fill('white')
  // push()
  // translate(200,135)
  // rotate(angle)
  // triangle(core01_XPos,core01_XPos,300,core01_XPos,200,135)
  // triangle(core01_XPos,core01_XPos,200,200,200,135)
  // pop()
  // angle++
  // triangle(core02_XPos,100,500,100,core05_XPos,135)
  // triangle(core02_XPos,100,core05_XPos,200,core05_XPos,135)
  // triangle(core01_XPos,500,300,500,200,465)
  // triangle(core01_XPos,500,200,core05_XPos,200,465)
  // triangle(core02_XPos,core04_XPos,core04_XPos,core04_XPos,core05_XPos,465)
  // triangle(core02_XPos,500,core05_XPos,core05_XPos,core05_XPos,465)

  // for loop
  // rotateObjects(T2R);
  // rotateObjects(tcore01);
  // rotateObjects(tcore02);
  for (i = 0; i < rotateObjectsArray.length; i++) {
    rotateObjects(rotateObjectsArray[i]);
  }

}
//  increase speed with mouse clicks. put JSO speeds into an array.
// put that into a for loop
// let speedObjectsArray = [T1L.speed, T1R.speed]
let speedObjectsArray02 = [T1L, T1R, T2L,T2R, tcore01, tcore02]


function mouseClicked() {
  for (i=0; i < speedObjectsArray02.length; i++){
    speedObjectsArray02[i].speed = speedObjectsArray02[i].speed + 50;
    // speedObjectsArray[0] = speedObjectsArray[0] + 50;
    // T1L.speed = T1L.speed + 50;

    // console.log(speedObjectsArray);
    console.log(speedObjectsArray02);
  }
}

function rotateObjects(geometry) {

  strokeWeight(1);
  stroke(255);
  fill(geometry.colorR,geometry.colorG,geometry.colorB)
  // fill('blue')
  let positionRotationX = (geometry.x1 + geometry.x2 + geometry.x3)/3;
  let positionRotationY = (geometry.y1 + geometry.y2 + geometry.y3)/3;


  push()
  translate(positionRotationX, positionRotationY)
  // translate(0, 0)
  rotate(-geometry.angle)
  // triangle(T2R.x1,T2R.y1,T2R.x20,T2R.y2,T2R.x3,T2R.y3)
  triangle(geometry.x1 - positionRotationX,geometry.y1 - positionRotationY,geometry.x2 - positionRotationX, geometry.y2  - positionRotationY, geometry.x3  - positionRotationX, geometry.y3 - positionRotationY)
  pop()
  // geometry.angle++
  geometry.angle = geometry.angle + geometry.speed;

  stroke(255)
  strokeWeight(10)
  point(positionRotationX, positionRotationY)
}
