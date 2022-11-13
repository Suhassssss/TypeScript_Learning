var weekDays;
(function (weekDays) {
    weekDays[weekDays["Sunday"] = 0] = "Sunday";
    weekDays[weekDays["Monday"] = 1] = "Monday";
    weekDays[weekDays["Tuesday"] = 2] = "Tuesday";
    weekDays[weekDays["Wedness"] = 3] = "Wedness";
    weekDays[weekDays["Thursday"] = 4] = "Thursday";
    weekDays[weekDays["Friday"] = 5] = "Friday";
    weekDays[weekDays["Saturday"] = 6] = "Saturday";
})(weekDays || (weekDays = {}));
console.log("Example of Week Days");
console.log(weekDays);
console.log(weekDays.Monday);
console.log(weekDays[1]);
console.log(weekDays.Thursday);
console.log(weekDays[4]);
console.log("Example of Fruits");
var fruits;
(function (fruits) {
    fruits[fruits["Mango"] = 0] = "Mango";
    fruits[fruits["Apple"] = 1] = "Apple";
    fruits[fruits["Banana"] = 2] = "Banana";
    fruits[fruits["Grapes"] = 3] = "Grapes";
})(fruits || (fruits = {}));
console.log(fruits);
console.log(fruits.Mango);
console.log(fruits[0]);
console.log(fruits.Apple);
console.log(fruits[1]);
