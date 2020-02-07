
function main(vars, can){

  var getXML = function(){
    var val = "<draws>"+editor.getValue()+"</draws>";
    can.clearCanvas();
    return val;
  };



  var parseDraw = function(){

    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(getXML(), "text/xml");
    var nodes = xmlDoc.getElementsByTagName('draws')[0].childNodes;
    var commands = "";

    for (var i = 0; i < nodes.length; i++ ) {

      if(nodes[i].nodeName != "#text"){
        commands += constructCode(
          nodes[i].getAttribute('background-color'),
          nodes[i].nodeName,
          nodes[i].getAttribute('x'),
          nodes[i].getAttribute('y'),
          nodes[i].getAttribute('width'),
          nodes[i].getAttribute('height')
        );
      }
    }
    eval(commands);
  };

  var constructCode= function(color, name, posX, posY, width, height){
    var code = "";
    if(color.charAt(0)!='#'){
      code = "can.fill("+color+");\n";
    }else {
      code = "can.fill(\""+color+"\");\n";
    }
    code += "can."+name+"("+posX+","+posY+","+width+","+height+");";
    return code;
  };

var down = function(){
  //download("code.xml",editor.getValue());
  //downloadCanvas(vars.canvas,"code.png");
  downloadZip(editor.getValue(),vars.canvas);
};

var addRect = function() {
    console.log("holi");
    var code = editor.getValue()+"\n<rect\n\tx=\"100\"\n\ty=\"130\"\n\twidth=\"200\"\n\theight=\"130\"\n\tbackground-color=\"#009688\"/>";
    editor.setValue(code);
    console.log("holi");
}

  var rn =   document.getElementsByName('run')[0];
  rn.addEventListener('click', parseDraw);

  var run= document.getElementsByName('down')[0];
  run.addEventListener('click', down);

  window.addEventListener("resize", parseDraw);

}
