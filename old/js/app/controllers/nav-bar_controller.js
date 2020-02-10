function navBarController($scope, $interval) {
    
    $scope.$emit('controllerStarted');
    
    this.recursive = function(callbak, time){
        $interval(callbak, time);
    }
    this.navBar = $("#navBar");
    $scope.isFixed = false;
    this.scrollWatcher = function() {
        if($(window).scrollTop() >= $('#about-me').offset().top){
            $scope.isFixed = true;
        }else {
            $scope.isFixed = false;
        }
    }

    $scope.$evalAsync(function() { $scope.$emit('controllerFinished') });
}

mainApp.controller('navBarController', ['$scope', '$interval', navBarController]);