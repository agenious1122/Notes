//Slice mthod is used to cut an array, means to get a specific part from whole array, slice command get two arguments start position and end position
let arr:string[] = ["0-Adnan", "1-Ghani", "2-Asif", "3-Shafi","4-Sabri"]
console.log("No.1----------print complete array-----------------------------------------");
console.log(arr);
console.log("No.2----------print start index from 2 and before 3 in array array----------");
let newArr:string[] = arr.slice(2,3)
console.log(newArr);
console.log("No.3----------print start index from 2 and before 5 in array array----------");
let newArr1:string[] = arr.slice(2,5)
console.log(newArr1);
console.log("No.4----------slice method doesnot change the original array---------------");
console.log(arr);
//splice method is used to add or remove array elements.splice method over write the original array.
console.log("No.5----------to replace the values of index 1 and 2-----------------------");
let arr2:string[] = ["0-Adnan", "1-Ghani", "2-Asif", "3-Shafi","4-Sabri"]
console.log(arr2.splice(1,2,"Zaheer","Sohail"));
console.log(arr2);
console.log("No.6----------if you want to get the replaced values-----------------------");
console.log(arr2.splice(1,2,"Zaheer","Sohail"));
console.log("No.6----------if you want to get only modified array-----------------------");
arr2.splice(1,2,"Zaheer","Sohail");
console.log(arr2);

export{}