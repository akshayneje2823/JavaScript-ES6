let goToMovie= (success,failure)=>{
    let money = 200;
    if (money>300) {
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