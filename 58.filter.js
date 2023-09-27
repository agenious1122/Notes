"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 11];
let newarr = arr.map((elem, i, refarr) => {
    // console.log(elem,i);
    return (elem);
});
// console.log(newarr);
console.log(Math.max(newarr.length));
