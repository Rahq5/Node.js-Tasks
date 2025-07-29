/**
 * types of equals in javascript 
 * 
 *  - you have simple "==" and this compares only values 
 * - you have "===" and this compares values and types
 */


// console.log(5=="5"); //this will come as true  cuz js converts string 5 into int then compares it
// console.log(5==="5"); // this will come as false cuz values are match but types are diffrent 
// console.log("5"==="5"); // and here it will come as true cuz both value and type are match 
// console.log("xyz" > "abcdefghi");

function car (fname , id , year){

    this.fname= fname ;
    this.id = id ;
    this.year = year;

    this.greet=function(){
        return "hello mr:" + this.fname; //didn't add this.
    }

    function specialgreet(){
        return "this is a special greet for" + this.fname;
    }

}

let truck = {
    fname: "john",
    id: 123,
    year: 2020,
    greet: function(){
        return "hello mr:" + this.fname;
        }
}

let person1 = new car("rawi" , 123 , 2005);


truck.fname="hello";
console.log(truck["fname"]);



