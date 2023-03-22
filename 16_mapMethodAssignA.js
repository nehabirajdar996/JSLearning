const arrayNumbers =[20,11,40,25,23,11,9,31,60,2,19];
console.log(`**************** step 1: *************** `);
const arrayAdd = arrayNumbers.map(element => {
   return  element+10;
})
console.log(`After Adding 10 into each element of array is : [${arrayAdd}]`);

console.log(`**************** step 2: ******************`);
const squareofarray = arrayNumbers.map(element =>{
    return element*element;
})
console.log(`After making square of each array element is :[${squareofarray}]`);

console.log(`**************** step 3: ******************`);
const arrayIndex = arrayNumbers.map((element,index) => {
    return element+index;
})
console.log(`After adding index value with its element: [${arrayIndex}]`);