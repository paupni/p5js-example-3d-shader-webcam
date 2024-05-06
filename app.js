// p5js example
 // this variable will hold our shader object
 let theShader;
 // this variable will hold our webcam video
 let cam;

 function preload(){
   // load the shader
   theShader = loadShader('assets/webcam.vert', 'assets/webcam.frag');
 }

 function setup() {
   // shaders require WEBGL mode to work
   createCanvas(innerWidth, innerHeight, WEBGL);
   noStroke();

   cam = createCapture(VIDEO);
   cam.size(innerWidth, innerHeight);

   cam.hide();
 }

 function draw() {
   // shader() sets the active shader with our shader
   shader(theShader);

   // passing cam as a texture
   theShader.setUniform('tex0', cam);

   // rect gives us some geometry on the screen
   rect(0,0,width,height);
 }

// example from https://github.com/prossel/WebGL-VideoRecorder
// function setup() {
//   createCanvas(400, 400, WEBGL);
// }

// function draw() {
//   background(220);
//   rotate(-frameCount * 0.01, createVector(1, 1, 0));
//   box(200);
// }