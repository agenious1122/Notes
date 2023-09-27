var prompt = require('prompt-sync')();
var number1:number =parseInt( prompt('Enter First Number '));
var Operator:string = prompt ('Choose an operator from list?( +, -, *, /, Power, sqrt) ');
var number2:number = parseInt(prompt('Enter Second Number '));
if (Operator=="+") 
    {console.log(number1,"+",number2,"=",number1+number2);}
else if  (Operator=="-") 
    {console.log(number1,"-",number2,"=",number1-number2);}
else if (Operator=="*") 
    {console.log(number1,"*",number2,"=",number1*number2);}
else if (Operator=="/") 
    {console.log(number1,"/",number2,"=",number1/number2);}
else if (Operator=="Power") 
    {console.log(Math.pow(number1,number2));}
else if (Operator=="sqrt") 
    {console.log(Math.sqrt(number2));}
    
else{console.log("enter valid operator");
}
export {};