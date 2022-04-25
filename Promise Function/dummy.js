let employees = [{ id: 1, name: "Gearalt", email: "geddowis0@cnet.com", gender: "Male" },
{ id: 2, name: "Brittany", email: "bremnant1@rambler.ru", gender: "Female" },
{ id: 3, name: "Buddie", email: "bmarfe2@desdev.cn", gender: "Male" }];

let createEmployee = (emp) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag = true;
            employees.push(emp)
            flag ? resolve("done") : reject("Error")
        },3000)
    });
 };
let getEmployee = () => {
    setTimeout(() => {
        let row = "";
        employees.forEach((employee) => {
            row = row + `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.salary}</td>
                           </tr>`
        });
        document.getElementById("namo").innerHTML = row
    }, 1000);
 };
createEmployee({id:4,name:"Akshay",email:"akshay@22gmail.com",gender:"male"}).then((msg)=>{
    getEmployee();
    console.log(msg)
}).catch((err)=>{
    console.error(err)
})