const secondModule = angular.module("mysecondmodule", [])

secondModule.controller("HelloController", HelloCtrl);

function HelloCtrl() {
    this.message = "Hello I am hello controller in second module"
}


secondModule.controller("secondModuleCtrl", SecondModuleCtrl)

// DI dependency injection - IOC
function SecondModuleCtrl($scope, $rootScope) {

    $scope.txt = 'second module controller'
    $scope.secMod = function () {

    }
}



