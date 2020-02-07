
function Plotter(can, color, form){

  var canvas;
  this.formula;
  this.color;

  this.setColor = function(color){
    this.color = color;
  };

  this.setCanvas = function(canv){
    canvas = new CanvasHead(canv);
  };

  this.setFormula = function(formula){
    this.formula = formula;
  };

  this.getFormula = function(){
    return this.formula;
  };

  this.setCanvas(can);
  this.setColor(color);
  this.setFormula(form);
  var draw = function(){};
  function anim(){
    draw();
    window.requestAnimationFrame(anim);
  };


  function funct(formula, x,t){
   return eval(formula)*(-1);
  };

  this.plott = function(){
    var x = 0;
    var formula = this.formula;

    console.log("starting plotter...");

    canvas.clearCanvas();
    canvas.strokeWeight(3);
    canvas.fill(this.color);
    canvas.stroke(this.color);

    draw = function(){

      if (globals.debug) {
        console.log("drawing " + formula + " on: " + x);
      }
      canvas.point(canvas.centerW+(x*globals.scale),canvas.centerH+funct(formula, x)*globals.scale);
      canvas.point(canvas.centerW-(x*globals.scale),canvas.centerH+funct(formula, -x)*globals.scale);
      x+=globals.presition;
    };

    anim();
  };
};
