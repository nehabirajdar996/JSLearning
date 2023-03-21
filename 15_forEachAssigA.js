const aarayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];

console.log(`****************** step 1:log array element and its index value **************`);
aarayNumbers.forEach((element,index) => console.log(`*Array Elements:${element}    *index value :${index}`));

console.log(`****************** step 2: find positive numbers from array **************`);
let positveNum = [];
aarayNumbers.forEach(element=> {
    if(element>=0){
        positveNum.push(element)
    }
});
console.log(`positive numbers from array are: [${positveNum}]`);

console.log(`****************** step 3: find Negative numbers from array **************`);
let negetiveNum = [];
aarayNumbers.forEach(element => {
    if(element<0)
    {
        negetiveNum.push(element);
    }
});
console.log(`Negative numbers from array are: [${negetiveNum}]`);

console.log(`****************** step 4: find EVEN numbers from array **************`);
let evenNum =[];
aarayNumbers.forEach(element => {
    if(element%2==0)
    {
        evenNum.push(element);
    }
});
console.log(`EVEN numbers from array are: [${evenNum}]`);

console.log(`****************** step 5: find sum of all elements from numbers from array **************`);
let sum=0;
aarayNumbers.forEach(element => {
    sum = sum + element;
});
console.log(`sum of all elements from array is: "${sum}"`);

console.log(`****************** step 6: log the only even indexed aaray value from array **************`);
let evenIndex = []
aarayNumbers.forEach((element,index) => {
    if(index%2==0)
    evenIndex.push(element)
});
console.log(`Even indexed array values are : "${evenIndex}"`);
