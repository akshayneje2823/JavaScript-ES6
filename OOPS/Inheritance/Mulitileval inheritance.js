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
class getEmployee extends empNane{

}

let getEmp = new getEmployee()