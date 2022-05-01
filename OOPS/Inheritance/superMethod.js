class emp{
    constructor(name){
        console.log(`this is ${name}`);
    }
}
class empNane extends emp{
    constructor(name){
        super();
        console.log(`hello this is ${name}`)
    }
}

let getEmp = new empNane("Constructor")