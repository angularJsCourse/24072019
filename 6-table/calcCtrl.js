module.controller("calcCtrl", CalcCtrl)


function CalcCtrl($scope, $rootScope) {

    $rootScope.name = 0

    $scope.$watch('name', function (newName, old) {
        $rootScope.name = newName
        if ($rootScope.name == "neria")
            alert("your namew!!")
    })

}