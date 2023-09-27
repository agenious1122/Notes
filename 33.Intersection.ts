//intercestion is combination of types just like interfece
//in interface we merge interfaces by using extend
//in type we use intersection to merge two types

import { type } from "os"

type peronalDetail = {
    name?:string,
    age?:number,
}
type status ={
    obtainedNumbers?:number,
    active?:boolean,
}

let student1:peronalDetail&status={
    name : "Adnan",
    active:true
}