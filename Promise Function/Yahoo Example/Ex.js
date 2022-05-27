var ans = true;

var pro = new Promise (function(reslove,reject){
    if(ans){
        reslove("msg Is resolved..Congrats")
    }else{
        reject("msg did not reach...!")
    }
})
console.log(pro)











//  Step 1 create object new key word and use Promise KeyWord
var pro = new Promise()

// Step 2  Promise takes one fy=unction having two arguments

var pro = new Promise(function(reslove,reject){})