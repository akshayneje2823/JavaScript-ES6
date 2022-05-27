function prom(ans) {
    return new Promise(function (reslove, reject) {
        console.log("Fetching data, Please wait...")

//  Why setTimeot => it will take to fecth data 

        setTimeout(() => {
            if (ans) {
                reslove("msg Is resolved...Congrats")
            } else {
                reject("msg did not reach...!")
            }
        }, 3000)
    })
}

//  Function 1

let onfullfillment = (result) => {
    console.log(result)
}

//  Function 2
let onRejection = (error) => {
    console.log(error)
}

// calling function

prom(true).then(onfullfillment).catch(onRejection);