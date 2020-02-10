mainApp.directive('banner', function(){
  return {
    restrict: 'E',
    templateUrl: 'js/app/views/banner.html',
    controller: bannerController,
    controllerAs: 'banCtrl'
  }
})
