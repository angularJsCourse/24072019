module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $scope.phone = new Mobile({})
    $scope.sortVar = 'color'
    $scope.rev = ' reverse '
    $scope.id = 0
    $scope.filterBy = ''
    $scope.filterVal = ''
    $scope.rev = 'reverse'

    $scope.devices = [
        new Mobile({ model: "IPhone X", color: "black", price: 3500 }),
        new Mobile({ model: "Xiaomi", color: "green", price: 1000 }),
        new Mobile({ model: "Samsung Galaxy 11+", color: "black", price: 5500 }),
        new Mobile({ model: "LG V60", color: "White", price: 7500 })
    ]
    $scope.removeItem = function (itemIndex) {

        if (confirm('remove phone?')) {
            $scope.devices.splice(itemIndex, 1);
            $rootScope.$broadcast("devicesNumber", $scope.devices.length)
            alert()
        }
    }

    $scope.addItem = function () {
        $scope.devices.push($scope.phone)
        $scope.phone = new Mobile({})

        $rootScope.$broadcast("devicesNumber", $scope.devices.length)
    }

    $scope.updateItem = function () {
        $scope.devices.splice($scope.id, 1, $scope.phone);
        $scope.phone = new Mobile({})
    }

    $scope.sortBy = function (sortParam) {
        $scope.sortVar = sortParam
        $scope.revers(sortParam)
    }

    $scope.searching = function () {
       if( $scope.sortVar == 'color')
            return { color : 'green' }
    }

    $scope.inputToFilter = function (val) {
        $scope.filterBy = val
        console.log(val)
        // if( $scope.sortVar == 'color')
        //      return { color : 'green' }
     }
 


    $scope.revers = function (sortParam) {
        console.log($scope.rev)
        if ($scope.rev == ''){
            $scope.rev = 'reverse'
        }
        else{
            $scope.rev = ''
            console.log($scope.rev)
        }
    }
}