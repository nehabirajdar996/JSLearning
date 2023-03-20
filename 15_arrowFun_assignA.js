console.log(`***************** step 1*****************`);
let greet = ()=>console.log(`"Good Morning, Today is Monday"`);
greet();

console.log(`***************** step 2*****************`);
let multiplication = (mul1,mul2,mul3=1)=>{
   const multi = mul1*mul2*mul3;
   console.log(` Multiplication of given numbers (${mul1}*${mul2}*${mul3}) is: "${multi}"`);
}
multiplication(5,5,2);
multiplication(10,4);

console.log(`***************** step 3*****************`);
let addition =(val1,val2,val3,val4,val5)=>{
    const sum = val1+val2+val3+val4+val5;
    return `Addition of (${val1}+${val2}+${val3}+${val4}+${val5}) is :"${sum}"`

}
var result =addition(100,100,200,349,756);
console.log(result);
var result = addition("I am"," learning"," ES6"," features"," in depth");
console.log(result);
