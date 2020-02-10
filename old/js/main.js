$(document).on('ajaxStart', function() {
    $('.lights-out').removeClass('hidden');
});
$(document).on('ajaxComplete', function() {
    $('.lights-out').addClass('hidden');
});

$(document).ready(function(){
    document.onmousemove = function(e) {
        var event = e || window.event;
        window.mouseX = event.clientX;
        window.mouseY = event.clientY;
    }
});