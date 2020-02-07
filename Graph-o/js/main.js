
var main = function() {
  var scale = globals.scale;

    scaleChart();

  var grid = new Grid(globals.grid, scale);
  //var plotts = new Plotter(globals.plotts[0]);
  var axis = new Axis(globals.canvas);
  var options = new Options();
  var steps = 1;
  var plotbtn = $("#Graficar1");


  function resz(){
    //grid = new Grid(globals.grid, scale);
    //plotts = new Plotter(globals.plotts[0]);
    //axis = new Axis(globals.canvas);
    scaleChart();
    resizePanel();
    grid.isActive(options.gridIsChecked());
    axis.drawPlane();
  };



  function getFormula(){
    var text = $('#formula1').val();
    //console.log(text); //debug text
    return text;
  };



  grid.drawGrid();
  axis.drawPlane();

  $('document').resize(resz);

  options.gridOpt.click(function(){grid.isActive(options.gridIsChecked())});
  //$(window).resize(resz);
  $(window).bind('resize',resz);
  //plotbtn.click(function(){var formula = getFormula();plotts.plot(formula);});
}

function scaleChart(){
  globals.plotts=$('.plotter');
  var h = window.innerHeight-40;
  var w = window.innerWidth-40;
  globals.canvas.width=w;
  globals.canvas.height=h;
  globals.grid.width=w;
  globals.grid.height=h;
  globals.plotts.attr('width',w);
  globals.plotts.attr('height',h);
};
