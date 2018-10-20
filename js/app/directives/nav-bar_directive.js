function navBarDirective() {
    return {
        restrict: 'E',
        templateUrl: 'js/app/views/nav-bar.html',
        controller: 'navBarController',
        controllerAs: 'navBarCtrl'
    }
}

mainApp.directive('navBar', navBarDirective);