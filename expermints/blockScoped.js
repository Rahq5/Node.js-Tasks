// this are all tests done , some of them are mixed but u already can figure them out
// also answer questions written in comments in this file

console.log(x); // undefined 
var x = 5 ;
console.log(x); // 5

function test(){
    if(true){
        var x = 5 ; // 
        let y = 7 ;
    }
    console.log(x +" "+ y); // output: 5 undefined
}
test();

let age  = 25 ;
    age  = 15 ; // removed redclartion because of an error appeard couldnt let me run
console.log(age); // output : 15  last assigned data "as i expected"

const PI = 3.14;
console.log(PI);

PI = 3.14159; // assumed that maybe js know what PI is and this is the correct decimal missing part
console.log(PI); // gave an error

PI = 1.2421; //changed it to another number 
console.log(PI); // gave an error too


const person = {name:"Alice" , age:30};
 person.age=31;
console.log(person);  // printed the new 31 !!

person = {name:"Alice" , age:25}; 
console.log(person);// didn't accept new assigning and gave an error !!

