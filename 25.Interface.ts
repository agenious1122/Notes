//used to define the datatype of keys of objects
interface objectType
{   firstName:string
    lastName:string
    age:number
    email:string
    student:boolean
    func:()=>void
}
let obj:objectType = {
    firstName:"Adnan",
    lastName:"Khalil",
    age: 40,
    email:"ageenious@gmail.com",
    student:true,
    func:()=>{console.log("hello")}
}
let obj1:objectType =
{
    firstName:"Zeeshan",
    lastName:"Ghani",
    age: 35,
    email:"zeeshanghani@gmail.com",
    student:false,
    func:()=>{console.log("hello")}
}
console.log(obj);
console.log(obj1);

