var person = {
    name : "Akshay",
    hello : function(thing){
        console.log(this.name + " Says Hello, "+ thing )
    }
}

var anotherObject = {
    name:"Sagar"
}

person.hello.apply(anotherObject,"Good Evening")