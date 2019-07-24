app.controller("bCtrl", BCtrl)

// DI dependency injection - IOC
function BCtrl($scope, globalConst, valueService, serviceService) {

    $scope.value = valueService
    $scope.fullB = serviceService.getBArray()
    $scope.fullAtri = function () {
        if (valueService['b'] < 0){
            $scope.fullB = globalConst['error2']
        }
        else
            $scope.fullB = serviceService.getBArray()
    }

}
