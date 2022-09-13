// let classRoom = {
//     name:"Rahul",
//     takeAttendence : function(greetings){
//         console.log(this.name + " hello ," + greetings)
//     }
// };

// let teacher = {
//     students : "Sagar"
// };


// classRoom.takeAttendence.bind(teacher,"Good Morning")



let parrot = {
    name: 'parrot'
}

let dog = {
    name: 'dog'
}

speak = function (sound) {
    console.log(this.name + " is " + sound)
}


// this keyword will be replaced with object that we have passend in as an arguments
// and returns new array

bark = speak.bind(dog,"Barking");
bark();

chirp = speak.bind(parrot,"Chirping");
chirp()