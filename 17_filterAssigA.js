arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];

console.log(`*************** step 1:numbers which are greater than 5*************`);
const greater = arrayNumbers.filter( element =>{ 
    if(element>50)
    return  element;
})
console.log(`The numbers which are Greater than 50 are : "${greater}"`);

console.log(`*************** step 2:all even numbers from array*************`);
const evenNumber = arrayNumbers.filter(element=>{
    return element%2==0;
})
console.log(`The EVEN numbers from the arrayNumbers are : "${evenNumber}"`);

console.log(`*************** step 3:all odd numbers from array*************`);
const oddNumbers = arrayNumbers.filter(element=>{
    return element%2!==0;
})
console.log(`The ODD numbers from the arrayNumbers are : "${oddNumbers}"`);

console.log(`*************** step 4:numbers which are multiples of 5*************`);
const multipleOf5= arrayNumbers.filter(element =>{
    return element%5==0;
})
console.log(`The numbers which are Multiples of "5" from the arrayNumbers are : "${multipleOf5}"`);

console.log(`*************** step 5:numbers which are between 20 and 50*************`);
const bet = arrayNumbers.filter(element=>{
    return (element>20 && element<50);
})
console.log(`The numbers which are between "20" and "50" from the arrayNumbers are : "${bet}"`);