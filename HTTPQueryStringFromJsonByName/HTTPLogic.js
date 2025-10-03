import * as http from 'http';
import StuList from './studentList.json' assert {type:'json'};


const server = http.createServer((req , res)=>{

    console.log("server1 - userAgent:" , req.headers['user-agent']);
    console.log("#############################\n");
    
    
    let [path , queryStr] = req.url.split('?');

    switch (path) {
    case "/":
        res.end("this is reponse body")
        break;
    case "/Studentlist":
        res.end(JSON.stringify(StuList));
        break;
    case "/who":
        res.end("am server 1 ")
        break;
    case "/url":
        console.log("path: " , queryStr);
        console.log(getName(queryStr));
        res.end(`your data is sent to server`);
        break;
}
});

server.listen(8000 , ()=>{console.log("request arrived")});

//this func takes querystring and returns value
function getName(str){
    //assume the query was : para=mhmd/
    str = str.split("=")[1].replaceAll("%20" , " ");
    let arrayOfStudent = str.split("&");
   
    let result =[];
    for(let x=0 ;x<arrayOfStudent.length; x++){
        result[x] = StuList.find(student => student.StuName == arrayOfStudent[x]);
    }
    
    return result;

    


}