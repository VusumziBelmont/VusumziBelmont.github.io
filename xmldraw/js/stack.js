
function stack(){
  var vars = new setVars();

  setCanvas(vars);

  var can = new CanvasHead(vars);

  window.addEventListener("resize", function(){resizeCanvas(vars);main(vars, can)});

  main(vars, can);
};
