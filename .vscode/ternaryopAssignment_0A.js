console.log(`*********** step 1:"Find the greatest number amongst two number"********`);
function greaterNumber(num1,num2) {
    var result = num1>num2? num1: num2;
    console.log(`The greatest number amongst "${num1}" and "${num2}" is : ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`*********** step 2:"check the EVEN or ODD number"********`);
function isEvenOrOddNum(num) {
    var resEvenOdd = num % 2 == 0 ? true : false;
    return resEvenOdd;
}
var check = isEvenOrOddNum(29);
console.log(`Number "29" is EVEN : ${check}`);
var check = isEvenOrOddNum(44);
console.log(`Number "44" is EVEN : ${check}`);
var check = isEvenOrOddNum(0);
console.log(`Number "0" is EVEN : ${check}`);
var check = isEvenOrOddNum(101);
console.log(`Number "101" is EVEN : ${check}`);

console.log(`*********** step 3:"check Which WORD has EVEN or ODD Length"********`);
function wordLength(word) {
    var wordLen = word.length;
    var res = wordLen % 2 == 0 ? "EVEN" : "ODD";
    return res;
}
var check = wordLength("Javascript");
console.log(`Word Length of "Javascript" is : ${check}`);
var check = wordLength("developer");
console.log(`Word Length of "developer" is : ${check}`);
var check = wordLength("Google");
console.log(`Word Length of "Google" is : ${check}`);

