var resizePanel = function(){
  var sidePanne=$(".scrolable-pannel");

  var h = window.innerHeight;
    h=h-112;
    h=h-70;
    sidePanne.css("max-height",h);

  sidePanne.css("overflow-y", "auto");
}
