app.service("serviceService", function (valueService) {

    this.getAArray = function () {
        let fullA = []
        for (i = 1; i <= valueService['a']; i++) {
            fullA.push(i)
        }
     //   valueService['aFull']=fullA
        console.log(fullA)
        return fullA
    }


    this.getBArray = function () {
        let fullB = []
        let i=valueService['b']
        console.log(i)
        for (; i > 0 ; i--) {
            alert()
            fullB.push(i)
        }
     //   valueService['aFull']=fullA
        return fullB
    }

})