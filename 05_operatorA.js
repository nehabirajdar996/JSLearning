console.log(`*************** step 1 *************`);
function squareOfWordLength(value) {
    var wordLength = value.length;
    console.log(`> Length of word "${value}" is: ${value.length}  `);
    var sqrOfWord=wordLength ** 2;
    return sqrOfWord;

    
}
result1=squareOfWordLength("JavaScript");
console.log(`The square of length is: ${result1}`);
result2=squareOfWordLength("Google Chrome");
console.log(`The square of length is: ${result2}`);
result3=squareOfWordLength("Developer Smart");
console.log(`The square of length is: ${result3}`);

console.log(`*************** step 2 *************`);
var givenString = "I am Angular Developer";
function string(){
    var strLen=givenString.length;
    var splitStr=givenString.split(" ");
    var dividStr=strLen/splitStr.length;
    console.log(`2.1  Length of string is: ${strLen}   String after division: ${dividStr}`);
    var totalWordStr=strLen*splitStr.length;
    console.log(`2.2  Multiplication of string length "${strLen}" and total words "${splitStr.length}" available in string is: ${totalWordStr}`);

}
string();














































































































































































































































































































































































































































































































































































