let add = (a,b) => {                                                                            
    return a+b                                                                                            
};                                                                                                 
let multi = (a,b) => {                                                                            
    return a*b                                                                                     
};                                                                                                         
let calaculate = (a,b,add) => {            /*  ==>  This add Function is nothing but callback Functio
                                                   because while invoking function we are passing function as Arguments*/                                                               
    return add(a,b)                                                                                
};                                                                                                            
                                                                                                           
let output1 = calaculate(10,20,add)                                                                     
console.log(output1) 

let output2 = calaculate(10,20,multi)                                                                     
console.log(output2)                                                                                 