function add(a,b){
    return a+b
}

function cal(a,b, callback){

    return callback(a,b)
    
}

console.log(cal(7,8,add))




let fName = (a,b) =>{
    return a + " " + b
}
// console.log(name("akshay","neje"));

let fullName = (a,b,callback)=>{
    return callback(a,b)
}
console.log(fullName("Akshay","Neje",fName))