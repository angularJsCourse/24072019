app.controller("aCtrl", ACtrl)

// DI dependency injection - IOC
function ACtrl($scope, globalConst, valueService, serviceService) {

    $scope.value = valueService
    $scope.fullA = serviceService.getAArray()
    $scope.fullAtri = function () {

        if (valueService['a']< 0)
            // fullA is error2
            $scope.fullA = globalConst['error1']
        else
            $scope.fullA = serviceService.getAArray()
    }

}
