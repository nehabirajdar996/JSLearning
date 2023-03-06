const arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
var length=arraySeasonalFruits.length;
console.log(` 1. first element of array: "${arraySeasonalFruits.shift()}"`);
console.log(`    Last element of array:  "${arraySeasonalFruits.slice(length-2)}"`);

arraySeasonalFruits.unshift("Papaya");
console.log(' 2. Array after Added "Papaya" element before the element "Banana":',arraySeasonalFruits);

arraySeasonalFruits.splice(3,1);
console.log(' 3. Array after removing "Mango element form it:',arraySeasonalFruits);

arraySeasonalFruits.push("Pineapple");
console.log(' 4. Array after inserting "Pineapple" element at last position:',arraySeasonalFruits);

arraySeasonalFruits.splice(3,0,"Dragon Fruit");
console.log(' 5. Array after inserting "Dragon Fruit" before "Water Melon":',arraySeasonalFruits);

arraySeasonalFruits.splice(1,1,"Kiwi");
console.log(' 6. Array after replacing "Orange" with "Kiwi:"',arraySeasonalFruits);

const sliceArray=arraySeasonalFruits.slice(1,4)
console.log(' 7. Array after slicing elements starting  from index 1 to 4:',sliceArray);

console.log(' 8. Last three element of array:',arraySeasonalFruits.slice(length-2));

