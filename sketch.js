var tiles = [];
var posAvailable = [];

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      posAvailable.push([i,j]);
    }
  }
  for(let i = 0; i < 3; i++) {
    var t = new Tile(this.posAvailable);
    tiles.push(t);
  }
}

function draw() {
  background('#BF9C7D');
  if(posAvailable.length == 0) {
    posAvailable = [];
    tiles = [];
    for(let i = 0; i < 4; i++) {
      for(let j = 0; j < 4; j++) {
        posAvailable.push([i,j]);
      }
    }
    for(let i = 0; i < 3; i++) {
      var t = new Tile(this.posAvailable);
      tiles.push(t);
    }
  }

  for(var t = 0; t < tiles.length; t++) {
    tiles[t].show();
  }
  
  for(var g = 0; g < posAvailable.length; g++) {
    fill('#C9B39F');
    let xPos = (posAvailable[g][0] * 100) + 5;
    let yPos = (posAvailable[g][1] * 100) + 5;
    noStroke();
    rect(xPos, yPos, 90, 90, 5);
  }

}

  function keyPressed() {
    if(keyCode === RIGHT_ARROW) {
      for(var i = 3; i >=0; i--) {
        for(var t = 0; t < tiles.length; t++) {
          if(tiles[t].position[0] == i) {
            tiles[t].moveRight(tiles, posAvailable);
          }
        }
      }
      var t = new Tile(this.posAvailable);
      tiles.push(t);
    }
    if(keyCode === LEFT_ARROW) {
      for(var i = 0; i <=3 ; i++) {
        for(var t = 0; t < tiles.length; t++) {
          if(tiles[t].position[0] == i) {
            tiles[t].moveLeft(tiles, posAvailable);
          }
        }
      }
      var t = new Tile(this.posAvailable);
      tiles.push(t);
    }
    if(keyCode === UP_ARROW) {
      for(var i = 0; i <= 3; i++) {
        for(var t = 0; t < tiles.length; t++) {
          if(tiles[t].position[1] == i) {
            tiles[t].moveUp(tiles, posAvailable);
          }
        }
      }
      var t = new Tile(this.posAvailable);
      tiles.push(t);
    }
    if(keyCode === DOWN_ARROW) {
      for(var i = 3; i >=0; i--) {
        for(var t = 0; t < tiles.length; t++) {
          if(tiles[t].position[1] == i) {
            tiles[t].moveDown(tiles, posAvailable);
          }
        }
      }
      var t = new Tile(this.posAvailable);
      tiles.push(t);
    }
  }
