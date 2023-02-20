// function with no argument and no return value 
function showFullname() {
    console.log("My full name is: Neha koli");

}
showFullname();//fuction call or invoke

// function with argument and no return value
function showAge(age) {
    console.log("My age is:", age);

}
showAge(27);

// function with no argument and return value
function fullName() {
    var name = "Neha koli";
    return name;
}
var fName = fullName();
console.log(fName);

// // function with argument and return value
function sumOfNumbers(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    return sum;

}
var result = sumOfNumbers(10, 45, 79);
console.log("sum is:", result);
console.log("*********************************************************");

var num1 = 100;
var num2 = 200;

var str1 = "Sweety"; // Cutey
var str2 = "Cutey"; // Sweety

var name1 = "Akshay";
var name2 = "Sachin";

function swapVariables(value1, value2) {
    console.log("Before Swap: ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: ", value1, value2);
    return "Swapping variables successfully completed";
}
var swapResult = swapVariables(num1, num2); // Function call or Function invoke
console.log(swapResult);

var swapResult2 = swapVariables(str1, str2);
console.log(swapResult2);