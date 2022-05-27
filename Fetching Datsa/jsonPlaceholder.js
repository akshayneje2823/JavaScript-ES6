function prom(){
    return new Promise(function(reslove,reject){
        console.log("Fetching data Please wait...");
        setTimeout(()=>{
/* Here*/   fetch.get("https://jsonplaceholder.typicode.com/posts",function(data){
                console.log(data);
            }).fail(err =>{
                reject("Fail We did not get any Data")
            })
        },4000);
    });
};

prom().then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
});