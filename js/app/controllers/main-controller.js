function mainController($scope) {
    this.controllerCount = 3;
    var startTime = Date.now();

    // $scope.$on("controllerStarted", function(evnt, args){
    //     console.log('controller started');
        
    //     $scope.mainCtrl.controllerCount++;
    // });

    $scope.$on('controllerFinished', function(event, args){
        console.log("unfinished Controllers:: " + event.targetScope.mainCtrl.controllerCount);
        console.log(event);
        console.log(args);
        
        
        $scope.mainCtrl.controllerCount--;
        console.log("remaining controlers:: "+ $scope.mainCtrl.controllerCount);
        
        if($scope.mainCtrl.controllerCount === 0){
            $scope.$emit('loadingFinished');
        };
    });

    $scope.$on('loadingFinished',function(event, args){
        console.log('loading Finished in: '+ ((Date.now() - startTime)/1000).toFixed(4) + "ms");
    })
}

mainApp.controller('mainController',mainController);