const fruits = ["Banana","Orange","Apple","Mango"];

const keys = fruits.keys();
// console.log(keys);

let text = "";
 for(let x of keys){
     text += x;
     console.log(text);
     console.log(x);
 }