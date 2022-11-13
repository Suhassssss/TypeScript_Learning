function gradeSys(){
console.log("----------- Grade Calculator ------------");
var mathMark = prompt('Marks in Maths...');
var physicsMark = prompt('Marks in Physics...');
var chemistryMark = prompt('Marks in Chemistry...');
let m1:number = +mathMark;
let m2:number = +physicsMark;
let m3:number = +chemistryMark;
let avg;
let sum:number = m1 + m2 + m3;
avg = (sum)/3;
function grade() {
    if (avg<70) {
        console.log("Maths: ",mathMark);
        console.log("Physics: ",physicsMark);
        console.log("Chemistry: ",chemistryMark);
        console.log(`Average: ${avg}  Grade: 'C' Grade`);
    }else if (avg>70 && avg<90) {
        console.log("Maths: ",mathMark);
        console.log("Physics: ",physicsMark);
        console.log("Chemistry: ",chemistryMark);
        console.log(`Average: ${avg}  Grade: 'B' Grade`);
    }else if (avg>90) {
        console.log("Maths: ",mathMark);
        console.log("Physics: ",physicsMark);
        console.log("Chemistry: ",chemistryMark);
        console.log(`Average: ${avg}  Grade: 'A' Grade`);
    }
}
grade();
}
gradeSys();
gradeSys();
gradeSys();
