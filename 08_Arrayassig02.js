const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`**************** step 1: Total elements available or length *******************`);
let length = arrayNumbers.length;
console.log(`Total number of elements available are: ${length}`);

console.log(`**************** step 2: Log first and last element availble in arrayNumbers *******************`);
let firstElement = arrayNumbers[0];
console.log(`first element of arrayNumbers is :${firstElement}`);
let lastElement = arrayNumbers[length - 1];
console.log(`Last element of arrayNumbers is :${lastElement}`);

console.log(`**************** step 3: Log Third last element using length property *******************`);
let thirdLastElement = arrayNumbers[length - 3];
console.log(`Third last element of arrayNumbers is : ${thirdLastElement} `);

console.log(`**************** step 4: find all EVEN numbers and log on console *******************`)
let evenNum = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element % 2 == 0) {
        evenNum.push(element);
    }
}
console.log("Even numbers in arrayNumbers are :", evenNum);

console.log(`**************** step 5: find all ODD numbers and log on console *******************`)
let oddNum = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element % 2 !== 0) {
        oddNum.push(element);
    }
}
console.log("Even numbers in arrayNumbers are :", oddNum);

console.log(`**************** step 6: find all EVEN position element from arrayNumbers,sum it and log on console *******************`)
let evenPositionedNum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    //const element = arrayNumbers[index];
    if (index % 2 == 0) {
        evenPositionedNum = evenPositionedNum + arrayNumbers[index];
    }
}
console.log(" SUM of Even  position elements of arrayNumbers are :", evenPositionedNum);

console.log(`**************** step 7: find all ODD position element from arrayNumbers,sum it and log on console *******************`)
let oddPositionedNum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {

    if (index % 2 !== 0) {
        oddPositionedNum = oddPositionedNum + arrayNumbers[index];
    }
}
console.log(" SUM of odd  position elements of arrayNumbers are :", oddPositionedNum);

console.log(`**************** step 8:find the sum of all the elements in array *******************`)
let totalSum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    totalSum = totalSum + arrayNumbers[index];
}
console.log(" SUM of all the elements in arrayNumbers are :", totalSum);

console.log(`**************** step 9 :find the numbers which are multiple of 5 *******************`)
let mul = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element % 5 == 0) {
        mul.push(element)
    }
}
console.log(`Elements in arrayNumbers which are multiples of 5 are:${mul}`);

console.log(`**************** step 10 : Is the number 115 available in arrayNumber *******************`)
let is115available = arrayNumbers.includes(115);
console.log(`Is the number 115 available in arrayNumber: "${is115available}"`);

console.log(`**************** step 11: Is the number 23 available in arrayNumber *******************`)
let is23available = arrayNumbers.includes(23);
console.log(`Is the number 115 available in arrayNumber: "${is23available}"`);

console.log(`**************** step 12: insert numbers --> 55,66 before index 3 and log array on console *******************`)
arrayNumbers.splice(3, 0, 55, 66);
console.log("ArrayNumber after inserting 55,66 before index 3 is :", arrayNumbers);

console.log(`**************** step 13:Delet 3 elements starting from index 4 and log arrayNumbers on console *******************`)
arrayNumbers.splice(4, 3);
console.log("Array after deleting 3 elements from starting index 4:", arrayNumbers);




