function aboutMeDirective(){
    return {
        restrict: 'E',
        templateUrl: 'js/app/views/about-me.html',
        controller: 'AboutController',
        controllerAs: 'aboutCtrl'
    }
}

mainApp.directive('aboutMe', aboutMeDirective);