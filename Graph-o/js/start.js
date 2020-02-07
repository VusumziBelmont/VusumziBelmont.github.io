console.log("start");

var globals;
globals = new Globals();

$('document').ready(function (){
   globals.initGlobals();
   globals.update();
  //console.log(vars);
  main();
});
