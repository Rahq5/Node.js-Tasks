function double (num){
    return num*2;
}

function greet (name){
    return "hello mr: " + name;
}

const method1 = function (num) {
    return num*2;
}

const method2 = m => m*2020;

function added (){
    let sum = 0;
    for(let i = 0 ; i < arguments.length ; i++){
        sum += arguments[i];
    }
    console.log(sum);
}

// added(1,2,3,54,6,8,"hello",(5,4,32,2,2,3,4,5,6,67));

// console.log(method1(4)); // 8

// console.log(method2(2)); // 4040


function print(x){
    console.log(x);
}


