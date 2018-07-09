function Tile(posAvailable) {

  var value;
  var xPos;
  var yPos;
  var position;
  var area;
  this.area = 90;

  this.value = (random() <= 0.9 ? 2 : 4);

  let index = Math.floor(Math.random() * posAvailable.length);
  this.position = posAvailable[index];

  posAvailable.splice(index, 1);

  this.xPos = (this.position[0] * 100) + (100-this.area)/2;
  this.yPos = (this.position[1] * 100) + (100-this.area)/2;


  this.show = function(){
    fill('#C9B39F');
    noStroke();
    rect(this.xPos, this.yPos, this.area, this.area, 5);
    if(this.value > 4) {
      fill(255);
    }
    else {
      fill('#4B3B2D');
    }
    textSize(40);
    textAlign(CENTER);
    text(this.value, this.xPos + 45, this.yPos + 55);
  }

  this.moveRight = function(tiles, posAvailable) {
    while(this.position[0] < 3) {
      var posToFind = [this.position[0] + 1, this.position[1]];
      for(var t = 0; t < tiles.length; t++) {
        if(tiles[t].position[0] == posToFind[0] && tiles[t].position[1] == posToFind[1]) {
          if(tiles[t].value == this.value) {
            this.value *= 2;
            posAvailable.push(this.position);
            this.position = posToFind;
            this.xPos = (this.position[0] * 100) + (100-this.area)/2;
            this.yPos = (this.position[1] * 100) + (100-this.area)/2;
            tiles.splice(t, 1);
            return;
          }
          else {
            return;
          }
        }
      }
      var delIndex = -1;
      for(var i = 0; i < posAvailable.length; i++) {
        if(posAvailable[i][0] == posToFind[0] && posAvailable[i][1] == posToFind[1]) {
          delIndex = i;
          break;
        }
      }
      posAvailable.splice(delIndex, 1);

      posAvailable.push(this.position);
      this.position = posToFind;
      this.xPos = (this.position[0] * 100) + (100-this.area)/2;
      this.yPos = (this.position[1] * 100) + (100-this.area)/2;

    }
  }

  this.moveLeft = function(tiles, posAvailable) {
    while(this.position[0] > 0) {
      var posToFind = [this.position[0] - 1, this.position[1]];
      for(var t = 0; t < tiles.length; t++) {
        if(tiles[t].position[0] == posToFind[0] && tiles[t].position[1] == posToFind[1]) {
          if(tiles[t].value == this.value) {
            this.value *= 2;
            posAvailable.push(this.position);
            this.position = posToFind;
            this.xPos = (this.position[0] * 100) + (100-this.area)/2;
            this.yPos = (this.position[1] * 100) + (100-this.area)/2;
            tiles.splice(t, 1);
            return;
          }
          else {
            return;
          }
        }
      }
      var delIndex = -1;
      for(var i = 0; i < posAvailable.length; i++) {
        if(posAvailable[i][0] == posToFind[0] && posAvailable[i][1] == posToFind[1]) {
          delIndex = i;
          break;
        }
      }
      posAvailable.splice(delIndex, 1);

      posAvailable.push(this.position);
      this.position = posToFind;
      this.xPos = (this.position[0] * 100) + (100-this.area)/2;
      this.yPos = (this.position[1] * 100) + (100-this.area)/2;

    }
  }

  this.moveUp = function(tiles, posAvailable) {
    while(this.position[1] > 0) {
      var posToFind = [this.position[0], this.position[1] - 1];
      for(var t = 0; t < tiles.length; t++) {
        if(tiles[t].position[0] == posToFind[0] && tiles[t].position[1] == posToFind[1]) {
          if(tiles[t].value == this.value) {
            this.value *= 2;
            posAvailable.push(this.position);
            this.position = posToFind;
            this.xPos = (this.position[0] * 100) + (100-this.area)/2;
            this.yPos = (this.position[1] * 100) + (100-this.area)/2;
            tiles.splice(t, 1);
            return;
          }
          else {
            return;
          }
        }
      }
      var delIndex = -1;
      for(var i = 0; i < posAvailable.length; i++) {
        if(posAvailable[i][0] == posToFind[0] && posAvailable[i][1] == posToFind[1]) {
          delIndex = i;
          break;
        }
      }
      posAvailable.splice(delIndex, 1);

      posAvailable.push(this.position);
      this.position = posToFind;
      this.xPos = (this.position[0] * 100) + (100-this.area)/2;
      this.yPos = (this.position[1] * 100) + (100-this.area)/2;

    }
  }

  this.moveDown = function(tiles, posAvailable) {
    while(this.position[1] < 3) {
      var posToFind = [this.position[0], this.position[1] + 1];
      for(var t = 0; t < tiles.length; t++) {
        if(tiles[t].position[0] == posToFind[0] && tiles[t].position[1] == posToFind[1]) {
          if(tiles[t].value == this.value) {
            this.value *= 2;
            posAvailable.push(this.position);
            this.position = posToFind;
            this.xPos = (this.position[0] * 100) + (100-this.area)/2;
            this.yPos = (this.position[1] * 100) + (100-this.area)/2;
            tiles.splice(t, 1);
            return;
          }
          else {
            return;
          }
        }
      }
      var delIndex = -1;
      for(var i = 0; i < posAvailable.length; i++) {
        if(posAvailable[i][0] == posToFind[0] && posAvailable[i][1] == posToFind[1]) {
          delIndex = i;
          break;
        }
      }
      posAvailable.splice(delIndex, 1);

      posAvailable.push(this.position);
      this.position = posToFind;
      this.xPos = (this.position[0] * 100) + (100-this.area)/2;
      this.yPos = (this.position[1] * 100) + (100-this.area)/2;

    }
  }
}
