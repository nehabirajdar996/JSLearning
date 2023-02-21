var givenString="   Hey you are doing good, keep it up   ";
function stringHandsOn() {
console.log("1. ","The given string is:",givenString);
var lengthOfStr=givenString.length;
console.log("2. ","Length of String is:",lengthOfStr);
var trimStr=givenString.trim();
console.log("3. ","String after removing extra spaces :",trimStr, "  ","lenght:",trimStr.length);
var totalExtraSpaCount=givenString.length - trimStr.length;
console.log("4. ","Total number of extra spaces count thai is removed after step 3 is:",totalExtraSpaCount);
var firstChar=trimStr.charAt();
var lastChar=trimStr.charAt((trimStr.length)-1);
console.log("5. "," i. first chara after trim:",firstChar,"  "," ii. last chara after trim:",lastChar);
var totalWord=trimStr.split(" ");
console.log(totalWord);
console.log("6.","Toatal words available in the string after step 3 is:",totalWord.length);
var indexOfgood=givenString.indexOf("good");
console.log('7. ',"The index of good is:",indexOfgood);
var substring=givenString.substring(22);// applied substring() on given string
var substringSlice=givenString.slice(22);//applied slice() on given string
console.log("8.","The subsrting of given string using substring(): " ,substring);
console.log("  ","The subsrting of given string using substring(): ",substringSlice);
var endsWith=trimStr.endsWith("up");
console.log("9. ","The string ends with word 'up' after step3 is:",endsWith);
var startsWith=trimStr.startsWith("Hey");
console.log("10.","The string ends with word 'up' after step3 is:",startsWith);




}
stringHandsOn();