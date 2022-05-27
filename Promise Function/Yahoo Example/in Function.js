function prom(ans) {
    return  new Promise(function (reslove, reject) {
        if (ans) {
            reslove("msg Is resolved...Congrats")
        } else {
            reject("msg did not reach...!")
        }
    })
}

//  Function 1

let onfullfillment = (result)=>{
    console.log(result)
}

//  Function 2
let onRejection = (error)=>{
    console.log(error)
}

// Calling function

prom(true).then(onfullfillment);
prom(true).catch(onRejection)