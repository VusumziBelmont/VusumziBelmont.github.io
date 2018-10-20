function bannerController($scope) {
  $scope.$emit('controllerStarted');
  this.isActive = true;
  this.banner = $('.header');
  this.removeBanner = function(){
    var ripple = $('.ripple-wrapper');
    ripple.addClass('clicked-icon');
    var banner = this.banner;
    var header = $('.full-header');
    setTimeout(()=>ripple.removeClass('clicked-icon'),300);
    banner.addClass('disapear');
    setTimeout(()=>{header.addClass('roll-up-50')},300);
    var remove = new Promise(function(resolve, reject) {
      setTimeout(resolve, 600);
    });
    remove.then((finished) => {
      $('banner').remove();
    });
  }

  $scope.$evalAsync(function() { $scope.$emit('controllerFinished',['ajd','affgvd']) });
};

mainApp.controller('bannerController', bannerController);
