let tiles = [];
let size = 60;
function setup() {
  createCanvas(900, 600);
  background(0);
  colorMode(HSB, 360, 100, 100, 100);
  let hue = random(0, 360);
  let rows = width / size;
  let cols = height / size;

  for (var c = 0; c < cols; c++) {
    for (var r = 0; r < rows; r++) {
      let x = r * size;
      let y = c * size;

      fill(hue + (r * size) / 6, 100 - (r * size) / 6, 100 - (c * size) / 6);
      rect(x, y, size, size);
    }
  }
}
