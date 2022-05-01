class father{
    constructor(){
        console.log("Properties of father");
    }
    face(){
        console.log("fathers face")
    }
}
class son extends father{
    face(){
        super.face()
        console.log("son face")
    }
}
class daughter extends son{

}

let getFamily = new daughter();
getFamily.face()