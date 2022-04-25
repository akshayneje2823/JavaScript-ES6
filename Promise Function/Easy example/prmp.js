let complete = true;
let prom = new Promise((resolve,reject) => {
        if (complete) {
            resolve("done")
        } else {
            reject("Error")
        }
});
console.log(prom)