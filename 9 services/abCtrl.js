app.controller("abCtrl", AbCtrl)



// DI dependency injection - IOC
function AbCtrl($scope, $rootScope, valueService) {
    //    $scope.age = ''
    $scope.value = valueService
    //$scope.a = valueService['a']
    //$scope.b = valueService['b']
    // $scope.check = function () {
    //     console.log($scope.b)
    //     console.log($scope.a)

    // }
    $scope.check = function () {
        console.log(valueService['prefColor'])
    

    }
    $scope.colors = function (colorStyle) {
        // console.log( colorStyle)
        if (colorStyle == 'gy')
            valueService['prefColor'] = 'gy'
        if (colorStyle == 'bb')
            valueService['prefColor'] = 'bb'

    }
}
