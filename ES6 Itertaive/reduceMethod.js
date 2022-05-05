let employee = [{id:101,name:"Rahul",sal:45000},
{id:102,name:"Aditya",sal:55000},
{id:103,name:"Tejas",sal:65000}]


employee.reduce((emp)=>{
    console.log(emp)
})

employee.reduce(()=>{
    console.log("Reduce")
})