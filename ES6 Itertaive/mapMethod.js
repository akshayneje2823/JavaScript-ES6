let employee = [{id:101,name:"Rahul",sal:45000},
{id:102,name:"Aditya",sal:55000},
{id:103,name:"Tejas",sal:65000}]

employee.map((emp)=>{
    console.log(emp.sal)
})
employee.map((emp)=>{
    console.log(emp)
})
employee.map(()=>{
    console.log(100)
})