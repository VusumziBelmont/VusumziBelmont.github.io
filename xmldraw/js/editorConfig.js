

var editor = ace.edit("editor");
editor.setTheme("ace/theme/chrome");
editor.getSession().setMode("ace/mode/xml");
editor.resize();
editor.$blockScrolling = Infinity;
document.getElementById('editor').style.fontSize='15px';

editor.setValue("<ellipse\n\tx=\"200\"\n\ty=\"200\"\n\twidth=\"200\"\n\theight=\"200\"\n\tbackground-color=\"#34aafe\"/>");

$('#undo').on('click',function(e) {
  var unm = editor.getSession().getUndoManager();
  unm.undo();
});

$('#redo').on('click',function(e) {
  var unm = editor.getSession().getUndoManager();
  unm.redo();
});
