function setup() {
  dv = createImg ('http://i.imgur.com/zktRC5t.gif');
}

function draw() {
  dv.style("rotate", frameCount);
}
