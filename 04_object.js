var emp = {
    name: "Suhas",
    score: 150
};
for (var e in emp) {
    console.log("".concat(e, ": ").concat(emp[e]));
}
var courses = ["Angular", "React", ".Net"];
courses.push("Java");
courses.push(4);
// for(var i = 0; i<courses.length; i++){
//     console.log(courses[i]);
// }
// var x = courses[0];
// var y = courses[1];
var a = courses[0], b = courses[1], c = courses[2];
console.log(a);
console.log(b);
console.log(c);
var std = {
    firstName: "Jack",
    lastName: "Sparrow"
};
var userFirstname = std.firstName, userLastName = std.lastName;
console.log(userFirstname);
console.log(userLastName);
var arr = [20, 30, 12, 100, 20];
arr.splice(2, 3, 88, 99);
console.log(arr);
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 10));
function display(id, name, role) {
    console.log("Id: ", id);
    console.log("Name: ", name);
    if (role != undefined) {
        console.log("Role: ", role);
    }
}
display(1, "Suhas", "Admin");
display(1, "Suhas");
