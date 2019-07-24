app.controller("sumCtrl", SumCtrl)

// DI dependency injection - IOC
function SumCtrl($scope, $rootScope, valueService) {

    $scope.value = valueService

    $scope.isPos = function () {
       return valueService['a'] + valueService['b'] > 0
    }


}
