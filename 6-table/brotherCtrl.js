module.controller("brotherCtrl", BrotherCtrl)

//let value1 

// DI dependency injection - IOC
function BrotherCtrl($scope, $rootScope) {

    $scope.count = 4

    $rootScope.$on("devicesNumber" , function(event, data) {
        // 3 was reached
        // console.log(event)
        // console.log(data)
        $scope.count = data;

    })
}