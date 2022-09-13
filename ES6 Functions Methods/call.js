// var person = {
//     name : "Akshay",
//     hello : function(thing){
//         console.log(this.name + " Hello "+ thing )
//     }
// }
// person.hello("Good Evening")




// Call Method
var person = {
    name : "Akshay",
    hello : function(thing){
        console.log(this.name + " Says Hello, "+ thing )
    }
}

var anotherObject = {
    name:"Sagar"
}

person.hello.call(anotherObject,"Good Evening");

// Call methos invokes a function and let us allows 
// to pass an arguments as one by one