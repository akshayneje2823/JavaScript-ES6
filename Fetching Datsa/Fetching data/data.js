fetch("https://jsonplaceholder.typicode.com/posts")
.then(result=>{
    result.json().then(data =>{console.log(data)})
})



// .catch(error => {
//     console.log(error)
// })
