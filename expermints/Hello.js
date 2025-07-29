// let tools = ["pen"  , "start" , "bitch"];

// //console.log(tools);

// // 1- make a print method by ur self
// // 2- change a random element then print
// // 3- change a random element to another data type
// // 4- re-do number 3 but changing the identifier to let
// // 5- try adding an element to extra place --> arr.length == new element


// // //1
// // for(var x = 0 ; x < tools.length ; x++){
// //     console.log(tools[x]);
// // }
// // // result: successed

// // //2 
// // tools[3] = "hiii";
// // console.log(tools);
// // // result : successed


// //3 
// tools[0] = 44;
// console.log(tools);
// //result : [ 44, 'pencil', 'red', 'black', 'start', 'bitch' ] it added the element !!

// // 3.1 interacting with the int value just added
// tools[0] = tools[0] + 1 ;
// console.log(tools);
// // result : it incremented the number !!!!!!!
// // [ 45, 'pencil', 'red', 'black', 'start', 'bitch' ] 

// //3.2 interacting with other elements 
// tools[1] = tools[1]+5;
// console.log(tools);
// //result : it concatenated the string wow so fucking flixable !!!
// // [ 45, 'pencil5', 'red', 'black', 'start', 'bitch' ]

// //3.3 changing the identifier
// // code : just changed the identifier to let
// //reuslt: accepted !

// //3.4 changing the identifier again
// // code : changed the identifier to const
// // result : maybe there's something wrong this cant be happening 

// 3.4.1 changing with const with another way 
tools = ["pen" , "pencil" , "red" , "y" , "x" , "bitch"];
console.log(tools);
// result : failed successfully! 
// so a good idea about const that as claude.ai says 
// "const prevents RE-ASSIGNEMNT not modifications" 

// // 4 and 3 are done  , jumping to 5

//5
tools[tools.length] = "extra";
tools[tools.length] = "extra2";
console.log(tools);
//reuslt: succesed 
// so it's an array but acting like a arraylist wow!


/////////////////////////////////////////////////////////////////
//case 1
let colors = ["red" , "green" , "blue"];
console.log(colors);

colors.shift();
console.log(colors);

colors.unshift("hi",2,true,"somebitches");
console.log(colors);


