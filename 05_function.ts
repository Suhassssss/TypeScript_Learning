function doubleMe(x:number); //declaration
function doubleMe(x:string); //function declaration
function doubleMe(arr:string[]);
function doubleMe(x:any){ //function implementation
    // checking input para as number or not
    if (x && typeof x === "number") {
        console.log(x*2);
        
    }else if (x && typeof x === "string") {// checking input para as string or not
        console.log(x + " "+ x);
        
    }else if (Array.isArray(x)) {
        return x.map(name => console.log(name + " " + name
        ));
    }

}
doubleMe(2);
doubleMe("John");
doubleMe(["CodeMind","Technology"]);

var product = function(...nums) {
    var result = 1;
    for (let i = 0; i < nums.length; i++) {
       console.log(nums[i]);
       result*=nums[i]; 
    }
    return result;
}
console.log(product(2,3,4,5));

var hello = (name:string):string=>{
    return "Hello" + name;
};
console.log(hello(" Angular Batch 4"));
var multiply = (num1:number, num2:number):number=>{
    return num1*num2;
}
console.log(multiply(2,7));
