let employee = [{id:101,name:"Rahul",sal:45000},
{id:102,name:"Aditya",sal:55000},
{id:103,name:"Tejas",sal:65000}]


employee.forEach((emp)=>{
    console.log(emp)
})
employee.forEach((emp)=>{
    console.log(emp.id)
})
employee.forEach((emp)=>{
    console.log(emp.name)
})
employee.forEach((emp)=>{
    console.log(emp.sal)
})
employee.forEach(()=>{
    console.log("Good Morning")
})