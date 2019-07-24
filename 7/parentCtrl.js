
module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $scope.age = ''
    $scope.name = ''
    $scope.email = ''
    $scope.getClass = function () {
        if ($scope.name == '' && $scope.email == '' && $scope.age == '')
            return 'r'
        if ($scope.name != '' && $scope.email != '' && $scope.age != '') {
            if (parseInt($scope.age) < 18) {
                return 'notAdult'
            }
            return 'ok'
        }
        if ($scope.name != '' || $scope.email != '' || $scope.age != '') {
            return 'o'
        }



    }
}