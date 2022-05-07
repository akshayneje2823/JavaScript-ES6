let add = (a,b) => {
    return a+b
}
let sub = (a,b) => {
    return a-b
}
let multi = (a,b) => {
    return a*b
}


let cal = (a,b) => {
    return multi(a,b)
}

let math = cal(10,20,multi)


console.log(math)