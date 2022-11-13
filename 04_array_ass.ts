const vaccine = ["J&J","Pfizer","Sputnik"];
console.log("-------- Original Array ----------");
console.log(vaccine);
vaccine.push("Covaxin");
console.log("Adding 'Covaxin' in Original Array");
console.log(vaccine);
console.log("------------ Traversing ------------");
for (let index = 0; index < vaccine.length; index++) {
    const element = vaccine[index];
    console.log(element);
}
var [vaccine1,vaccine2,vaccine3,vaccine4="CoviShield"] = vaccine;
console.log("------------ Destructuring ------------");
console.log("Vaccine 1: ",vaccine1);
console.log("Vaccine 2: ",vaccine2);
console.log("Vaccine 3: ",vaccine3);
console.log("Vaccine 4: ",vaccine4);

