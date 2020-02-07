
function setVars(){
  this.view;
  this.body;
  this.head;
  this.hook;
  this.setVars = function(){
    this.view = document.getElementsByClassName('view')[0];
    this.body = document.body;
    this.head = document.head;
    this.hook = document.getElementById('main-script');
    //console.log(this.view.offsetWidth);
  };
  this.setVars();
  this.canvas = document.getElementById('myCanvas');
};

/*function loadScript(src, hook){
  var script = document.createElement('script');
  script.type  = "text/javascript";
  script.src = src;

  hook.parentElement.insertBefore(script, hook);
};*/

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function downloadCanvas(canvas, filename) {
    var element = document.createElement('a');
    element.href = canvas.toDataURL();
    //element.download = filename;
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function downloadZip(text,canvas){
  var zip = new JSZip();
  var img = new Image();
  img.src = canvas.toDataURL();

  zip.file("code.xml", "<?xml version='1.0' encoding='UTF-8'?>\n"+text);

  zip.file("code.png", img.src.substr(img.src.indexOf(',')+1), {base64: true});

  zip.generateAsync({type:"blob"}).then(function(content) {
      // see FileSaver.js
      saveAs(content, "code.zip");
});
}

var setCanvas = function(vars){
  var canvas = document.createElement('canvas');
  canvas.setAttribute('id', 'myCanvas');
  canvas.setAttribute('class', 'canvas');
  canvas.setAttribute('style', 'border:1px solid #d3d3d3;')

  vars.view.appendChild(canvas);

  vars.canvas = document.getElementById('myCanvas');

  resizeCanvas(vars);
  //loadScript('js/CanvasHead.js', vars.hook);
};

var resizeCanvas = function(vars){
  var view = vars.view;
  var canvas = vars.canvas
  var width = 400;
  var height = 400;

  vars.canvas.setAttribute('width', width);
  vars.canvas.setAttribute('height', height);
};
