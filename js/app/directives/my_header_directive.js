function headerDirective(){
    return {
        restrict: 'E',
        templateUrl: 'js/app/views/my-header.html'
    }
}

mainApp.directive('myHeader', headerDirective);