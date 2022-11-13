var vaccine = ["J&J", "Pfizer", "Sputnik"];
console.log("-------- Original Array ----------");
console.log(vaccine);
vaccine.push("Covaxin");
console.log("Adding 'Covaxin' in Original Array");
console.log(vaccine);
console.log("------------ Traversing ------------");
for (var index = 0; index < vaccine.length; index++) {
    var element = vaccine[index];
    console.log(element);
}
var vaccine1 = vaccine[0], vaccine2 = vaccine[1], vaccine3 = vaccine[2], _a = vaccine[3], vaccine4 = _a === void 0 ? "CoviShield" : _a;
console.log("------------ Destructuring ------------");
console.log("Vaccine 1: ", vaccine1);
console.log("Vaccine 2: ", vaccine2);
console.log("Vaccine 3: ", vaccine3);
console.log("Vaccine 4: ", vaccine4);
