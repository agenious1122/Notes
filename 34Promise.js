"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const timers_1 = require("timers");
let myPromise = new Promise((resolve, rejecte) => {
    console.log("promise pending wait plz");
    (0, timers_1.setTimeout)(() => {
        console.log("promise resolved");
        resolve("Adnan");
        console.log("promise rejected");
        rejecte(new Error("Data not fetched"));
    }, 5000);
});
myPromise
    .then((resolveResult) => { (console.log(resolveResult)); })
    .catch((error) => { console.log(error); });
