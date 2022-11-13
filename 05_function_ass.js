function gradeSys() {
    console.log("----------- Grade Calculator ------------");
    var mathMark = prompt('Marks in Maths...');
    var physicsMark = prompt('Marks in Physics...');
    var chemistryMark = prompt('Marks in Chemistry...');
    var m1 = +mathMark;
    var m2 = +physicsMark;
    var m3 = +chemistryMark;
    var avg;
    var sum = m1 + m2 + m3;
    avg = (sum) / 3;
    function grade() {
        if (avg < 70) {
            console.log("Maths: ", mathMark);
            console.log("Physics: ", physicsMark);
            console.log("Chemistry: ", chemistryMark);
            console.log("Average: ".concat(avg, "  Grade: 'C' Grade"));
        }
        else if (avg > 70 && avg < 90) {
            console.log("Maths: ", mathMark);
            console.log("Physics: ", physicsMark);
            console.log("Chemistry: ", chemistryMark);
            console.log("Average: ".concat(avg, "  Grade: 'B' Grade"));
        }
        else if (avg > 90) {
            console.log("Maths: ", mathMark);
            console.log("Physics: ", physicsMark);
            console.log("Chemistry: ", chemistryMark);
            console.log("Average: ".concat(avg, "  Grade: 'A' Grade"));
        }
    }
    grade();
}
gradeSys();
gradeSys();
gradeSys();
