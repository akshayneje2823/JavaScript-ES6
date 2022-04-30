class detail{
    constructor(name,age,native){
        this.name=name
        this.age=age
        this.native=native
    }
    proto(){
        console.log(`I am from ${this.native} and mr name is ${this.name} i am ${this.age} years old`)
    }
    static StaticMethod(){
        console.log("object")
    }
}
var getDetails = new detail("Akshay",22,"Mahrashtra")
getDetails.proto()
// getDetails.StaticMethod()    ==> it throws an error
detail.StaticMethod()