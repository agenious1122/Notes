import { rejects } from "assert";
import { log } from "console";
import { resolve } from "path";
import { setTimeout } from "timers";

let myPromise = new Promise((resolve,rejecte)=>
{console.log("promise pending wait plz")
    setTimeout(() =>{console.log("promise resolved");
    resolve("Adnan")
    console.log("promise rejected");
    rejecte(new Error("Data not fetched"))}, 5000);
})
myPromise
.then((resolveResult)=>{(console.log(resolveResult))})
.catch((error)=>{console.log(error)})












export{}