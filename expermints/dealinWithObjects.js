let person = {
	name : "rawi",
	age : 20,
	bloodtype: "B+",
	birth : "26/10/2005",
    
    university : { // nested object
        name : "UQU",
        location : "Makkah",
        speclize : "SWEngineer"
        },

    print_curseWord : function (){
        console.log("fuck you");
         },

    printInfo:function(){
        let info = this.name + " " + this.age + " " + this.birth 
        console.log(info);
    }
}

// console.log(person); // will print all stored data

// person.print_curseWord(); // calls in-object method

// console.log(person.name); //print specific attribute

// console.log(person.university.speclize);
// person.printInfo();

console.log(person["ag"]); // prints the last parameter on the right
