//var model = function(){

(function(){
app = angular.module('graphO', []);

app.controller('PlotterController',function(){
  this.counter = 0;
  this.graphs = functions;
});

app.controller('fucntionsController', function(){
  this.counter = 0;
  this.activeIsnt = 0;
  this.functions = functions;
  this.newInstance = function(){
    functions.add(new functInstance(this.counter++));
    globals.debugLog("instance added");
  };
  this.deleteInstance=function(index){
    functions.del(index);
  };
  this.setAsActive=function(index){
    this.activeIsnt=index;
  };
  this.newInstance();

});
})();

var functions = new Queue;

var functInstance = function(number){
  this.name="function "+ (number+1);
  this.id="funct"+number;
  this.formula="";
  this.W=window.innerWidth-40;
  this.H=window.innerHeight-40;
  this.index;
  this.color="";
  this.isConic;
  this.setColor=function(){
    this.color=globals.colors.cycle();
  };
  this.isActive = function(active,index){
    return (index==active);
  };
  this.plott = function(){
    var plotts = new Plotter(document.getElementById(this.id), this.color, this.formula);
    console.log(plotts);

    if(this.isConic){
      plotts.plottConic();
    }else{
      plotts.plott();
    }
  }
  this.setColor();
};
