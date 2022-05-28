function sum(...args){
    let sum = 0;
    for(let arg of args){
        sum += arg;
    }
    return sum
}

let x = sum(2,3,4,5,6,2,3,4);
console.log(x)