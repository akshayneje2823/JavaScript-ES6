var person = {
    name : "Akshay",
    hello : function(thing){
        console.log(this.name + " Says Hello, "+ thing )
    }
}

var anotherObject = {
    name:"Sagar"
};

// Similar to call method the only differnce is as 
// an second argument we are apssing an array

person.hello.apply(anotherObject,"Good Evening")