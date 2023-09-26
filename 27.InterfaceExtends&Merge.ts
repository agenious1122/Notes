 interface person
 {
    Name: string,
    age:number,
 }
 interface person1 extends person
 {
    email:string
 }
 

let person:person = 
{
    Name:"Adnan",
    age:40
}
let person1:person1 = 
{
    Name:"Adnan",
    age:40,
    email:"ghani@gmail.com"
}

// let employee:employee = 
// {
//     Name:"ghani",
//     age:30,
//     email:"ghani@gmail.com"
// }