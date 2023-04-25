// it is spaecail syntax to work with promises in a more confortable way called async await

// Async 
async function myFunc(){
    return 1
}
myFunc().then(res => console.log(res))
.catch(err=> console.log(err))