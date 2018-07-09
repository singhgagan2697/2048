function Tile(grid) {

  var value;
  var xPos;
  var yPos;
  var area = 90;

  this.value = (random() <= 0.9 ? 2 : 4);

  let index = Math.floor(Math.random() * grid.length);
  let position = grid[index];
  grid.splice(index, 1);

  this.xPos = (position[0] * 100) + (100-area)/2;
  this.yPos = (position[1] * 100) + (100-area)/2;


  this.show = function(){
    fill('#C9B39F');
    noStroke();
    rect(this.xPos, this.yPos, area, area, 5);
    fill(255);
    textSize(40);
    textAlign(CENTER);
    text(this.value, this.xPos + 45, this.yPos + 55);
  }

}
