console.log("Array destructuring:");
console.log("-------------------------------------------------------------------------------");
let arr = ["adnan",40,"agenious@gmail.com"]
//in this array there are three keys Name, age and email.
//if we want to acces the first element of an array we find as.
console.log(arr[0]);
console.log("we destructure the array");
let [name1,age,email] = arr
console.log("Now if we want to get age from this array");
console.log("Age =",age);
console.log("-----------------------------------------------------------------");
//we also use destructuring method in objects

let obj = {
    firstName:"Adnan",
    lastName:"Khalil",
    age:40,
    hobbies:["study","Cricket"]
}
// in this object there are three keys. firstName, lastName and age
//if we want to console only age the syntax is as under
// let {hobbies} = obj
// console.log(hobbies);
console.log(obj.lastName);
//to get two keys at the same time concat command used
let {firstName,lastName,hobbies} = obj
console.log(firstName + lastName);





// let adnan={age:40,email:"agenious@gmail.com"}
// let mani={age:30,email:"mani@gmail.com"}
// let khota={age:50,email:"donkeyraja@gmail.com"}
//             // console.log(a);
// let employees = [adnan,mani,khota]
// console.log(employees[2].email);
// console.log();

         export{}  










