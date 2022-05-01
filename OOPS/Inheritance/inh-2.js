class emp{
    constructor(){
        console.log("This is Based class");
    }
}
class empNane extends emp{
    constructor(){
        super();
        console.log("This is derived class");
    }
}


let getEmp = new empNane()