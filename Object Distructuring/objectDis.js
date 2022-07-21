// let user = {name:"Akshay Neje",age:22,salary:30000}

// let {name,age,salalry} = user
// console.log(name)

//  with alias name

let user1 = {
    name:"Akshay Neje",
    age:22,
    salary:30000
}

// let {name,age,salary} = user1
// console.log(name1)



//  With Function

function getUser(){
    return {
        name:"Akshay Neje",
        age:22,
        salary:30000
    }
}
let {name,age,salary} = getUser()
console.log(name)