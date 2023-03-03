function factorialOfNum(num)
{
    let factorial = 1;
    for (let index =num; index >=1; index--)
    {
        if (num==undefined || num==null || isNaN(num))
        {
            break;
        } else if(typeof num=="number")
        {
           factorial = factorial * index;   // 5*4*3*2*1 
        }  
     }
    return factorial;
}
var result = factorialOfNum(5);
console.log(`fatorial of number '5' is: "${result}"`);
var result = factorialOfNum(3);
console.log(`fatorial of number '3' is: "${result}"`);
var result = factorialOfNum(null);
console.log(`"null" is invalid Data`);
var result = factorialOfNum(8);
console.log(`fatorial of number '8' is: "${result}"`);
var result = factorialOfNum(undefined);
console.log(`"undefined" is invalid Data`);
var result = factorialOfNum(9);
console.log(`fatorial of number '9' is: "${result}"`);
var result = factorialOfNum(0);
console.log(`fatorial of number '0' is: "${result}"`);
var result = factorialOfNum(NaN);
console.log(`"NaN" is invalid Data`);
// factorialOfNum(null);
// factorialOfNum(undefined);
// factorialOfNum(NaN);

