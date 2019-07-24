
app.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $scope.age = ''
    $scope.name = ''
    $scope.email = ''
    $scope.getClass = function () {
        if (parseInt($scope.age) < 18) {
            return 'notAdult'
        }
        if ($scope.name == '' && $scope.email == '' && $scope.age == '')
            return 'r'
        if ($scope.name != '' || $scope.email != '' || $scope.age != '')
            return 'o'

        return 'ok'

    }
}



