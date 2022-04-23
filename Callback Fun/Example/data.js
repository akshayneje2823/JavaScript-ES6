let employee = [{ id: 101, name: "Rahul Gandhi", salary: 20000 },
{ id: 102, name: "Sonia Gandhi", salary: 22000 }];

let createEmployee = (obj) => {
    setTimeout(() => {
        employee.push(obj)
    }, 3000)
    console.log("Create")
};
let getEmployee = () => {
    let rows = ""
    setTimeout(() => {
        employee.forEach(() => {
            rows += `<tr>
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.salary}</td>
    </tr>`
        })
        document.getElementById("hero").innerHTML = rows
    }, 1000)

    console.log("Get")
};
let output = createEmployee({ id: 103, name: "Priyanka Gandhi", salary: 30000 },);
getEmployee();

















