function setup() {
  createCanvas(400, 400, WEBGL);
  sphereX = 0;
  sphereY = 0;
  sphereZ = 0;
}

function draw() {
  background(131, 214, 206);
  //Enable orbiting with the mouse.
  orbitControl();
  // Rotate the coordinate system a little more each frame.
  translate(sphereX, sphereY, sphereZ);
  let angle = frameCount * 0.02;
  let ca = cos(angle);
  let sa = sin(angle);
  applyMatrix(ca, 0, sa, 0, 0, 1, 0, 0, -sa, 0, ca, 0, 0, 0, 0, 1);
  sphere(80);
}
function mouseDragged() {
  let dx = map(mouseX - pmouseX, 0, width, -1, 1);
  let dy = map(mouseY - pmouseY, 0, height, -1, 1);
  sphereX += dx * 0.1;
  sphereY += dy * 0.1;
}
