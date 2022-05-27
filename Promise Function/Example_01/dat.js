let employees = [{ "id": 1, "name": "Gearalt", "email": "geddowis0@cnet.com", "gender": "Male" },
{ "id": 2, "name": "Brittany", "email": "bremnant1@rambler.ru", "gender": "Female" },
{ "id": 3, "name": "Buddie", "email": "bmarfe2@desdev.cn", "gender": "Male" }];

let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let number = true;
            employees.push(emp);
            number ? resolve("Created Successfully..!") : reject("something is Wrong...!")
        }, 3000) 
    });
};
// let getEmployee = () => {
//     setTimeout(() => {
//         let rows = "";
//         employees.forEach(employee => {
//             rows += `<tr>
//             <td>${employee.id}</td>
//             <td>${employee.name}</td>
//             <td>${employee.email}</td>
//             <td>${employee.gender}</td>
//         </tr>`
//         });
//         document.getElementById("namo").innerHTML = rows;
//     }, 1000); 
// createEmployee({ id: 3, name: "Robert", email: "robert@devda.com", gender: "male" })
// .then((msg) => {
//     getEmployee();
//     console.log(msg);
// }).catch((err)=>{
//     console.error(err)
// })