let goToMovie= (success,failure)=>{
    let rs = 200;
    if (rs>300) {
        success("Go to Movie")
    } else {
        failure("go to pg")
    }
};
// goToMovie(1,2)
goToMovie((youcan)=>{
    console.log(youcan)
},(youcanot)=>{
    console.log(youcanot)
})