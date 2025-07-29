console.log("\n\n\n hello user \nThis is your simple calc done by JavaScript \n \n");
consle.log("please enter your first number: ");

// here a variable should take the input from user 
let num1 ;

console.log("\n Second number: ");

// here a variable should take the input from user
let num2;

console.log("you have several operations to do\n enter the symbol of the operation needed to perform:");
console.log("1. + for addition");
console.log("2. - for subtraction");
console.log("3. * for multiplication");
console.log("4. / for division");

var result ;
switch (key) {
    case "+":
        result = num1+num2;
        break;

    case"-":
        result = num1-num2;
        break;
    
    case"*":
        result = num1*num2;
        break;
    
    case"/":
        result = num1/num2;
        break;
        // needed verfying for number not divided on zero !!

    default:
        break;
}
