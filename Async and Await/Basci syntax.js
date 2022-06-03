async function myDispaly(){
    let myPromise = await new Promise(function(reslolve,rejcet){
        reslolve("I love you!!")
    })
}

console.log(myDispaly())