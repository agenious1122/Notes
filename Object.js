"use strict";
//object is advance form of array. The operations that we can not perorm in array possible in objects.
let user = {
    firstName: "Adnan",
    lastName: "Khalil",
    age: 40,
    job: "Rescue1122",
    salary: () => 20000,
    // email:"agenious@gmail.com"
    office: {
        station: "11",
        adress: "GTS Chowk",
    }
};
//to print all keys of an object
console.log("No.1--------------------------------------");
console.log(user);
console.log("No.2--------------------------------------");
//to print a specific key of an object
console.log(user.age);
console.log("No.3-------------------------------------");
//to print a key of object in which a function defined
console.log(user.salary);
console.log("No.4-------------------------------------");
//to delete a specific key fron an object
delete user.salary;
console.log(user);
console.log("No.5-------------------------------------");
// to find a specific key in an object
console.log("age" in user);
console.log("No.6-------------------------------------");
//to insert a new key in an objest
user.email = "agenious@gmail.com",
    console.log(user);
console.log("-----------------------------------------");
//concat topic is pending for dicussion
//delete user.salary error to be clear.
