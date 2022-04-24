let employee = [{ id: 101, name: "Rahul Gandhi", salary: 20000 },
{ id: 102, name: "Sonia Gandhi", salary: 22000 }];

let createEmployee = (obj,getEmployee) => {
    setTimeout(() => {
        employee.push(obj);
        getEmployee();
    }, 3000)
    console.log("Creating Employee")
};
let getEmployee = () => {
    let rows = ""
    setTimeout(() => {
        employee.forEach((employee) => {
            rows += `<tr>
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.salary}</td>
    </tr>`
        })
        document.getElementById("hero").innerHTML = rows
    }, 1000)

    console.log("Getting Employee......")
};
let output = createEmployee({ id: 103, name: "Priyanka Gandhi", salary: 30000 },getEmployee);
getEmployee();

















