var Grid = function(can){
  this.canvas = new CanvasHead(can);
  this.scale = globals.scale;

  this.drawGrid = function(){
    this.canvas.resizeCanvas(window.innerWidth-40, window.innerHeight-40);
    this.canvas.fill("#999");
    this.canvas.stroke("#999");
    this.canvas.strokeWeight(0.2);

    //console.log("scale: "+this.scale);

    for(var i=0; i<((this.canvas.width/this.scale)/2); ++i){
      this.canvas.line(this.canvas.centerW+i*this.scale,0,this.canvas.centerW+i*this.scale,this.canvas.height);
      this.canvas.line(this.canvas.centerW-i*this.scale,0,this.canvas.centerW-i*this.scale,this.canvas.height);
    }
    for(var i=0; i<((this.canvas.height/this.scale)/2); i++){
      this.canvas.line(0,this.canvas.centerH+i*this.scale,this.canvas.width,this.canvas.centerH+i*this.scale);
      this.canvas.line(0,this.canvas.centerH-i*this.scale,this.canvas.width,this.canvas.centerH-i*this.scale);
    }
  }

  this.isActive = function(check){
    if(check===true){
      this.drawGrid();
    }else this.canvas.clearCanvas();
  };
}
