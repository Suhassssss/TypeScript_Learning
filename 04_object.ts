var emp = {
    name: "Suhas",
    score: 150
}
for(var e in emp){
    console.log(`${e}: ${emp[e]}`);
}
var courses: any = ["Angular","React",".Net"];
courses.push("Java");
courses.push(4);
// for(var i = 0; i<courses.length; i++){
//     console.log(courses[i]);
// }
// var x = courses[0];
// var y = courses[1];
var[a,b,c]=courses;
console.log(a);
console.log(b);
console.log(c);
var std = {
    firstName: "Jack",
    lastName: "Sparrow"
}

var {firstName: userFirstname, lastName: userLastName} = std;

console.log(userFirstname);
console.log(userLastName);

var arr: number[] = [20,30,12,100,20]
arr.splice(2,3,88,99);
console.log(arr);

function add(num1: number, num2: number){
    return num1 + num2;
}
console.log(add(10,10));

function display(id: number, name: string, role?: string){
    console.log("Id: ",id);
    console.log("Name: ",name);
    if (role!= undefined) {
        console.log("Role: ",role);    
    }
    
    
}
display(1, "Suhas", "Admin");
display(1, "Suhas");