var tiles = [];
var grid = [];

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      grid.push([i,j]);
    }
  }
  for(let i = 0; i < 3; i++) {
    tiles.push(new Tile(this.grid));
  }
}

function draw() {
  background('#BF9C7D');
  for(var t = 0; t < tiles.length; t++) {
    tiles[t].show();
  }
  for(var g = 0; g < grid.length; g++) {
    fill('#C9B39F');
    let xPos = (grid[g][0] * 100) + 5;
    let yPos = (grid[g][1] * 100) + 5;
    noStroke();
    rect(xPos, yPos, 90, 90, 5);
  }
}
