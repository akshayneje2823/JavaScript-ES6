class detail{
    constructor(){
        console.log("This Is Constructor Method")
    }
    proto(){
        console.log("This Prototype Method")
    }
}
var getDetails = new detail()
getDetails.proto()