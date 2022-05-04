// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     string += "*";
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);



let n = 5; 
let string = "";

for(let i = 0; i < n; i++) { 
  for(let j = 0; j < n; j++) { 
    string += "*";
  }
  string += "\n";
}
console.log(string);






let b = 8;
let str = "";
for (let i = 0; i < b; i++) {
    for (let j = 0; j < b; j++) {
        str =str + "*";
    }
  str = str + "\n"
}
console.log(str)