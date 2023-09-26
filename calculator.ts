var prompt = require('prompt-sync')();
var number1:number =parseInt( prompt('Enter First Number '));
var number2:number = parseInt(prompt('Enter Second Number '));
var Operator:string = prompt ('Choose an operator from list?( +, -, *, /, Power, sqrt) ');
if (Operator=="+") 
    {console.log(number1,"+",number2,"=",number1+number2);}
else if  (Operator=="-") 
    {console.log(number1-number2);}
else if (Operator=="*") 
    {console.log(number1*number2);}
else if (Operator=="/") 
    {console.log(number1/number2);}
else{console.log("enter valid operator");
}
export {};