function prom(a,b) {
    return new Promise(function (reslove, reject) {
        console.log("Fetching data, Please wait...")

// Taking a variable

var c = a%b
//  Why setTimeot => it will take to fecth data 

        setTimeout(() => {
            if (a,b) {
                reslove(`your answer is: ${c}`)
            } else {
                reject(`failed to calculate..`)
            }
        }, 3000)
    })
}


// calling function

prom(5,0).then( (result) => {
    console.log(result)
}).catch( (error) => {
    console.log(error)
});