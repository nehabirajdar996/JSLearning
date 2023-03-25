const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45]
console.log(`************ step 1: Reverse the given array ************ `);
console.log(`Reversed array : [${arrayRollNumbers.reverse()}]`);
console.log(`************ step 2: sort() method without using custom sort logic ) ************ `);
console.log(`Applied only "sort()" method without custom sort :[${arrayRollNumbers.sort()}]`);
console.log(`************ step 3: sort the array in ascending order,by using custom logic) ************ `)
const sortedArray = arrayRollNumbers.sort((a,b)=>{
     const result = a>b ? 1: -1;
     return result
})
console.log(`sorted array in ascending order,by using "custom logic" is : [${sortedArray}]`);

console.log(`************** step 4:find Greatest number from the array******************`);

console.log(`Greastet number from array is : "${arrayRollNumbers[arrayRollNumbers.length-1]}"`);

console.log(`************** step 5:find  Smallest  number from the array******************`);

console.log(`Smallest number from array is : "${arrayRollNumbers[0]}"`);

console.log(`************** step 6:Remove duplicates from the array******************`);
const nwearray = [... new Set(arrayRollNumbers)]
console.log(`After Removing duplicates from the array : "${nwearray}"`);
