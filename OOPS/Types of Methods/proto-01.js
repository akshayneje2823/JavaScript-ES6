class detail{
    constructor(name,age,id){
        this.name = name;
        this.age = age;
        this.id = id
        console.log("This Is Constructor")
    }
    proto(){
        console.log(`Your name is ${this.name} and age is ${this.age} and my id is${this.id} `)
    }
}
var getDetails = new detail("Akshay",22,007)
getDetails.proto()
